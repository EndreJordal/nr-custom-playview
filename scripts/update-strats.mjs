// Regenerates strats.js from Wahapedia's official 11th edition data export
// (https://wahapedia.ru/wh40k11ed/the-rules/data-export/). strats.js mirrors
// Wahapedia exactly -- a detachment Wahapedia has no stratagems for simply
// isn't in the output.
//
// Usage: node scripts/update-strats.mjs [--from <dir with downloaded CSVs>]
//
// Writes strats.js only when its content changes, and then also bumps the
// service worker's CACHE_NAME so installed copies of the app pick it up.
// Prints a Markdown report (also used as the GitHub Actions job summary).

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const STRATS_PATH = path.join(ROOT, "strats.js");
const SW_PATH = path.join(ROOT, "sw.js");
const BASE_URL = "https://wahapedia.ru/wh40k11ed/";

// Wahapedia detachment name -> the name New Recruit exports for it. app.js
// looks detachments up by the New Recruit name, so these need translating.
const DETACHMENT_ALIASES = {
  "Ordo Xenos Alien Hunters": "Alien Hunters",
  "Ordo Hereticus Purgation Force": "Purgation Force",
  "Ordo Malleus Daemon Hunters": "Daemon Hunters",
};

// Sanity floors: if a download comes back as an error page or truncated
// file, fail loudly instead of committing a gutted strats.js.
const MIN_STRATAGEMS = 500;
const MIN_DETACHMENTS = 100;
const EXPECTED_CORE_COUNT = 10;

// Section labels are normally bold ("<b>WHEN:</b>", occasionally without the
// colon), but a few entries have them as plain uppercase text ("WHEN: ...").
const SECTION_RE =
  /<b>\s*(WHEN|TARGET|EFFECT|RESTRICTIONS?)\s*:?\s*<\/b>|\b(WHEN|TARGET|EFFECT|RESTRICTIONS?):/g;

async function loadCsv(name, fromDir) {
  let text;
  if (fromDir) {
    text = await readFile(path.join(fromDir, `${name}.csv`), "utf8");
  } else {
    const res = await fetch(`${BASE_URL}${name}.csv`, {
      headers: { "User-Agent": "nr-custom-playview strats updater (github.com/EndreJordal/nr-custom-playview)" },
    });
    if (!res.ok) throw new Error(`${name}.csv: HTTP ${res.status}`);
    text = await res.text();
  }
  return parsePipeCsv(text);
}

// Wahapedia's export is '|'-separated with a trailing '|' on every line, and
// free-text fields can contain raw newlines -- so rows can't be split on
// newlines. Instead split everything on '|' and regroup by the header's
// column count, stripping the line break that starts each new row.
function parsePipeCsv(text) {
  const cells = text.replace(/^﻿/, "").split("|");
  const firstBreak = cells.findIndex(c => /\r?\n/.test(c));
  if (firstBreak === -1) throw new Error("CSV has no header row");
  const header = cells.slice(0, firstBreak).map(h => h.trim());
  const rest = cells.slice(firstBreak);
  const rows = [];
  for (let i = 0; i + header.length <= rest.length; i += header.length) {
    const row = {};
    header.forEach((key, j) => {
      const raw = rest[i + j];
      row[key] = j === 0 ? raw.replace(/^\s+/, "") : raw;
    });
    rows.push(row);
  }
  return rows;
}

// Wahapedia HTML -> the tiny markup subset app.js's formatText() renders:
// **bold**, ^^italic^^, and literal <br>. Everything else is reduced to text.
function htmlToStratText(html, warnings, context) {
  let s = html
    .replace(/&nbsp;/g, " ")
    .replace(/<span class="kwb">(.*?)<\/span>/g, "<b>$1</b>")
    .replace(/<\/?(span|u|div)[^>]*>/g, "")
    .replace(/<\/?(ul|ol)>/g, "<br>")
    .replace(/<li>/g, "<br>• ")
    .replace(/<\/li>/g, "")
    .replace(/<b>\s*<\/b>/g, "")
    .replace(/<b>(.*?)<\/b>/g, "**$1**")
    .replace(/<i>(.*?)<\/i>/g, "^^$1^^")
    .replace(/\*\*\*\*/g, "");

  const leftover = s.replace(/<br>/g, "").match(/<[^>]+>/g);
  if (leftover) {
    warnings.push(`${context}: stripped unexpected markup ${[...new Set(leftover)].join(" ")}`);
    s = s.replace(/<(?!br>)[^>]+>/g, "");
  }

  return s
    .replace(/\s*(<br>\s*){3,}/g, "<br><br>")
    .replace(/^(\s*<br>)+|(<br>\s*)+$/g, "")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

// Splits a description into its WHEN / TARGET / EFFECT / RESTRICTIONS
// sections. Restrictions are folded onto the end of the effect, matching
// how the hand-written strats.js presented them.
function parseDescription(html, warnings, context) {
  const sections = {};
  const markers = [...html.matchAll(SECTION_RE)];
  markers.forEach((m, i) => {
    const label = m[1] || m[2];
    const key = label.startsWith("RESTRICTION") ? "RESTRICTIONS" : label;
    const end = i + 1 < markers.length ? markers[i + 1].index : html.length;
    sections[key] = htmlToStratText(html.slice(m.index + m[0].length, end), warnings, context);
  });

  if (!sections.WHEN || !sections.TARGET || !sections.EFFECT) {
    warnings.push(`${context}: missing WHEN/TARGET/EFFECT, whole text used as effect`);
    return { when: "", target: "", effect: htmlToStratText(html, warnings, context) };
  }

  let effect = sections.EFFECT;
  if (sections.RESTRICTIONS) effect += `<br><br>**Restrictions:** ${sections.RESTRICTIONS}`;
  return { when: sections.WHEN, target: sections.TARGET, effect };
}

function toEntry(strat, warnings, context) {
  const cp = strat.cp_cost.trim();
  if (!cp) warnings.push(`${context}: no CP cost listed`);
  return {
    name: strat.name.trim(),
    cp: cp ? `${cp} CP` : "",
    rules: parseDescription(strat.description, warnings, context),
  };
}

function renderStratsJs(database) {
  const body = Object.entries(database)
    .map(([detachment, strats]) => {
      const entries = strats
        .map(
          s => `    {
      name: ${JSON.stringify(s.name)},
      cp: ${JSON.stringify(s.cp)},
      rules: {
        when: ${JSON.stringify(s.rules.when)},
        target: ${JSON.stringify(s.rules.target)},
        effect: ${JSON.stringify(s.rules.effect)},
      },
    },`,
        )
        .join("\n");
      return `  ${JSON.stringify(detachment)}: [\n${entries}\n  ],`;
    })
    .join("\n");

  return `// GENERATED FILE -- do not edit by hand. Rebuilt from Wahapedia's data
// export by scripts/update-strats.mjs (runs daily via GitHub Actions).
//
// "Core Stratagems" isn't a real detachment -- every army has access to
// these regardless of faction or detachment choice. app.js's
// renderStratagemSection() renders it specially: always shown, always last,
// no DP/points on its face.
const STRATAGEM_DATABASE = {
${body}
};
`;
}

async function main() {
  const fromIdx = process.argv.indexOf("--from");
  const fromDir = fromIdx !== -1 ? process.argv[fromIdx + 1] : null;

  const [stratagems, detachments] = await Promise.all([
    loadCsv("Stratagems", fromDir),
    loadCsv("Detachments", fromDir),
  ]);
  const warnings = [];

  if (stratagems.length < MIN_STRATAGEMS || detachments.length < MIN_DETACHMENTS) {
    throw new Error(
      `Export looks incomplete (${stratagems.length} stratagems, ${detachments.length} detachments) -- not updating.`,
    );
  }

  // Boarding Actions is a separate game mode with its own detachments, some
  // of which reuse a matched-play detachment's name -- leave them out.
  const detachmentsById = new Map(
    detachments.filter(d => d.type.trim() !== "Boarding Actions").map(d => [d.id, d]),
  );

  const core = stratagems.filter(s => s.type.trim() === "Core Stratagem");
  if (core.length !== EXPECTED_CORE_COUNT) {
    warnings.push(`Expected ${EXPECTED_CORE_COUNT} core stratagems, found ${core.length}`);
  }
  if (core.length === 0) throw new Error("No core stratagems found -- not updating.");

  const byDetachment = new Map(); // NR name -> { id, strats: [] }
  for (const strat of stratagems) {
    const det = detachmentsById.get(strat.detachment_id);
    if (!det) continue;
    const name = DETACHMENT_ALIASES[det.name.trim()] || det.name.trim();
    if (!byDetachment.has(name)) byDetachment.set(name, { faction: det.faction_id, strats: [] });
    const group = byDetachment.get(name);
    group.strats.push(strat);
  }

  const database = {
    "Core Stratagems": core
      .sort((a, b) => a.id.localeCompare(b.id))
      .map(s => toEntry(s, warnings, `Core / ${s.name}`)),
  };
  [...byDetachment.entries()]
    .sort(([an, a], [bn, b]) => a.faction.localeCompare(b.faction) || an.localeCompare(bn))
    .forEach(([name, group]) => {
      database[name] = group.strats
        .sort((a, b) => a.id.localeCompare(b.id))
        .map(s => toEntry(s, warnings, `${name} / ${s.name}`));
    });

  const emptyDetachments = [...detachmentsById.values()]
    .map(d => DETACHMENT_ALIASES[d.name.trim()] || d.name.trim())
    .filter(name => !database[name]);

  // Compare against the current file to report what changed.
  let previous = {};
  let oldSource = "";
  try {
    // Normalize line endings so a CRLF checkout (Windows) isn't seen as a change.
    oldSource = (await readFile(STRATS_PATH, "utf8")).replace(/\r\n/g, "\n");
    previous = new Function(`${oldSource}; return STRATAGEM_DATABASE;`)();
  } catch {
    // No usable previous file -- everything counts as added.
  }
  const prevNames = Object.keys(previous);
  const nextNames = Object.keys(database);
  const added = nextNames.filter(n => !prevNames.includes(n));
  const removed = prevNames.filter(n => !nextNames.includes(n));
  const changed = nextNames.filter(
    n => prevNames.includes(n) && JSON.stringify(previous[n]) !== JSON.stringify(database[n]),
  );

  const newSource = renderStratsJs(database);
  const fileChanged = newSource !== oldSource;
  if (fileChanged) {
    await writeFile(STRATS_PATH, newSource);
    const sw = await readFile(SW_PATH, "utf8");
    await writeFile(
      SW_PATH,
      sw.replace(/nr-playview-v(\d+)/, (_, n) => `nr-playview-v${Number(n) + 1}`),
    );
  }

  const list = names => (names.length ? names.map(n => `- ${n}`).join("\n") : "- none");
  console.log(`## Stratagem update from Wahapedia

${fileChanged ? "strats.js **updated**." : "No changes."}

- ${nextNames.length - 1} detachments, ${Object.values(database).flat().length} stratagems (incl. ${database["Core Stratagems"].length} core)

### Detachments added
${list(added)}

### Detachments removed
${list(removed)}

### Detachments with changed stratagems
${list(changed)}

### Wahapedia detachments with no stratagems (not shown in the app)
${list(emptyDetachments)}

### Warnings
${list(warnings)}
`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
