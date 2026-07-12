const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const rosterContainer = document.getElementById("roster-container");

let currentlyOpenDrawer = null;
let currentlyActiveRow = null;

// Keyword name (uppercase) -> { name, desc, isCore }, rebuilt per roster load.
let activeKeywordDefs = {};
let openKeywordTooltip = null;
let openKeywordAnchor = null;

const CORE_WEAPON_KEYWORDS = [
  "ASSAULT",
  "HEAVY",
  "RAPID FIRE",
  "IGNORES COVER",
  "TWIN-LINKED",
  "PISTOL",
  "TORRENT",
  "LETHAL HITS",
  "SUSTAINED HITS",
  "DEVASTATING WOUNDS",
  "BLAST",
  "INDIRECT FIRE",
  "PRECISION",
  "ANTI",
  "MELTA",
  "HAZARDOUS",
  "EXTRA ATTACKS",
];

const CATEGORY_ORDER = [
  { key: "EPIC HERO", label: "EPIC HEROES" },
  { key: "CHARACTER", label: "CHARACTERS" },
  { key: "BATTLELINE", label: "BATTLELINE" },
  { key: "INFANTRY", label: "INFANTRY" },
  { key: "BEAST", label: "BEASTS" },
  { key: "SWARM", label: "SWARMS" },
  { key: "MOUNTED", label: "MOUNTED" },
  { key: "MONSTER", label: "MONSTERS" },
  { key: "VEHICLE", label: "VEHICLES" },
  { key: "DEDICATED TRANSPORT", label: "DEDICATED TRANSPORTS" },
];

// --- 0. PWA SERVICE WORKER ---
const isLocalDev = ["localhost", "127.0.0.1"].includes(location.hostname);
if ("serviceWorker" in navigator && !isLocalDev) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err => {
      console.error("Service worker registration failed:", err);
    });
  });

  // When a new service worker takes control (after an update), the assets
  // already in memory/DOM are still the old version -- reload once so the
  // user actually sees the update instead of needing a manual refresh.
  let swRefreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (swRefreshing) return;
    swRefreshing = true;
    window.location.reload();
  });
}

// --- 1. INITIALIZATION & CACHING ---
document.addEventListener("DOMContentLoaded", () => {
  const cachedData = localStorage.getItem("40k_roster_cache");
  if (!cachedData) return;

  try {
    const rawData = JSON.parse(cachedData);
    dropZone.style.display = "none";
    loadRoster(rawData);
  } catch (err) {
    console.error("Cached roster is corrupted, clearing it:", err);
    localStorage.removeItem("40k_roster_cache");
  }
});

function sanitizeHTML(str) {
  if (!str) return "";
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}

function formatText(str) {
  if (!str) return "";
  let safeStr = sanitizeHTML(str);
  safeStr = safeStr.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  safeStr = safeStr.replace(/\^\^(.*?)\^\^/g, "<em>$1</em>");
  // sanitizeHTML escapes the literal <br> markers we author in strats.js —
  // unescape just that one fixed, attribute-less tag, nothing else.
  safeStr = safeStr.replace(/&lt;br&gt;/g, "<br>");
  // Roster JSON rule/ability text (e.g. detachment rules) uses literal
  // newlines for line breaks rather than <br> markers.
  safeStr = safeStr.replace(/\n/g, "<br>");
  return safeStr;
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

// Maps a stratagem's timing window to a CSS theme class for its card accent color
function getStratTheme(whenText) {
  const txt = (whenText || "").trim().toLowerCase();
  if (txt.startsWith("your opponent")) return "strat-theme-opponent";
  if (txt.startsWith("your")) return "strat-theme-yours";
  return "strat-theme-neutral";
}

// --- 2. DRAG AND DROP HANDLING ---
dropZone.addEventListener("click", () => fileInput.click());
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});
dropZone.addEventListener("dragleave", () =>
  dropZone.classList.remove("dragover"),
);
dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener("change", e => {
  if (e.target.files.length) handleFile(e.target.files[0]);
});

function handleFile(file) {
  if (file.type !== "application/json" && !file.name.endsWith(".json")) {
    alert("Please upload a valid JSON file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const rawData = JSON.parse(e.target.result);
      localStorage.setItem("40k_roster_cache", JSON.stringify(rawData));
      dropZone.style.display = "none";
      loadRoster(rawData);
    } catch (err) {
      console.error("JSON Parsing Error:", err);
      alert("Failed to parse JSON. Is the file corrupted?");
    }
  };
  reader.readAsText(file);
}

function loadRoster(rawData) {
  const parsed = processArmyList(rawData);
  if (!parsed) {
    alert("This JSON file doesn't look like a valid army roster export.");
    localStorage.removeItem("40k_roster_cache");
    dropZone.style.display = "flex";
    return;
  }
  activeKeywordDefs = parsed.metadata.keywordDefs || {};
  renderDashboard(parsed.metadata, parsed.armyRoster);
}

// --- 3. DATA EXTRACTION ---
function processArmyList(data) {
  const forces = data?.roster?.forces;
  if (!forces || forces.length === 0) return null;

  const selections = forces[0].selections || [];

  const metadata = {
    listName: data.roster.name || "Unnamed Roster",
    factionName: forces[0].catalogueName || "Unknown Faction",
    totalPoints: 0,
    pointsLimit: null,
    detachments: [],
    forceDispositions: [],
    keywordDefs: {},
  };

  if (data.roster.costs) {
    const pts = data.roster.costs.find(c => c.name === "pts");
    if (pts) metadata.totalPoints = pts.value;
  }

  if (data.roster.costLimits) {
    const limit = data.roster.costLimits.find(c => c.name === "pts");
    if (limit) metadata.pointsLimit = limit.value;
  }

  const armyRoster = [];

  selections.forEach(selection => {
    // Dynamic Detachment Extractor: Captures Name and Inherent Points Costs
    if (selection.name === "Detachment" && selection.selections) {
      selection.selections.forEach(sub => {
        if (sub.group === "Detachment") {
          let detPts = 0;
          let detDP = 0;
          if (sub.costs) {
            const p = sub.costs.find(c => c.name === "pts");
            if (p) detPts = p.value;
            const dp = sub.costs.find(c => c.name === "Detachment Points");
            if (dp) detDP = dp.value;
          }
          const rules = (sub.rules || []).map(r => ({
            name: r.name,
            desc: r.description,
          }));
          metadata.detachments.push({
            name: sub.name,
            points: detPts,
            dp: detDP,
            rules,
          });
        }
      });
      return;
    }

    if (selection.name === "Force Disposition" && selection.selections) {
      selection.selections.forEach(sub => {
        if (sub.group === "Force Disposition")
          metadata.forceDispositions.push(sub.name);
      });
      return;
    }

    // Fallback pass if a top-level selection matches a detachment name directly
    if (
      typeof STRATAGEM_DATABASE !== "undefined" &&
      STRATAGEM_DATABASE[selection.name]
    ) {
      let detPts = 0;
      let detDP = 0;
      if (selection.costs) {
        const p = selection.costs.find(c => c.name === "pts");
        if (p) detPts = p.value;
        const dp = selection.costs.find(c => c.name === "Detachment Points");
        if (dp) detDP = dp.value;
      }
      if (!metadata.detachments.some(d => d.name === selection.name)) {
        const rules = (selection.rules || []).map(r => ({
          name: r.name,
          desc: r.description,
        }));
        metadata.detachments.push({
          name: selection.name,
          points: detPts,
          dp: detDP,
          rules,
        });
      }
    }

    const isConfig = selection.categories?.some(
      cat => cat.name === "Configuration",
    );
    if (isConfig || selection.type === "upgrade") return;

    const flatUnit = {
      name: selection.name || "Unknown Unit",
      points: 0,
      models: 0,
      // Most units have one statline. Some (e.g. a Leader model attached to
      // a squad, like Ravener Prime + Raveners) mix models with genuinely
      // different statlines under one selection — every distinct one found
      // gets its own entry here, keyed by its own profile name.
      statblocks: [],
      ranged: [],
      melee: [],
      abilities: [],
      enhancements: [],
      coreRules: [],
      factionRules: [],
      keywords: new Set(),
    };

    extractNodeData(selection, flatUnit, metadata.keywordDefs);
    flatUnit.keywords = Array.from(flatUnit.keywords);
    if (flatUnit.statblocks.length === 0) {
      flatUnit.statblocks.push({
        label: flatUnit.name,
        stats: { m: "--", t: "--", sv: "--", w: "--", ld: "--", oc: "--", insv: null },
      });
    }
    armyRoster.push(flatUnit);
  });

  return { metadata, armyRoster };
}

// Drops the running tally so two weapon entries can be compared by their
// actual profile fields alone, ignoring how many models have accumulated so far.
function stripCount({ count, ...rest }) {
  return rest;
}

function extractNodeData(node, unit, defs) {
  let nodePoints = 0;
  if (node.costs) {
    const pts = node.costs.find(c => c.name === "pts");
    if (pts) nodePoints = pts.value;
    unit.points += nodePoints;
  }
  // Enhancements are wargear upgrades filed under a group starting with
  // "Enhancements" (e.g. "Enhancements::Vanguard Onslaught Enhancements") —
  // their name/description arrives as a normal Abilities-typed profile, so
  // without this they'd get silently folded into the unit's ability list.
  const isEnhancement =
    typeof node.group === "string" && node.group.startsWith("Enhancements");
  if (node.type === "model") {
    unit.models += node.number || 1;
  }
  if (node.categories) {
    node.categories.forEach(cat => {
      if (cat.name !== "Configuration")
        unit.keywords.add(cat.name.toUpperCase());
    });
  }

  if (node.rules) {
    node.rules.forEach(rule => {
      const ruleName = rule.name.trim();
      const upperRule = ruleName.toUpperCase();
      const isWeaponRule = CORE_WEAPON_KEYWORDS.some(
        kw =>
          upperRule === kw ||
          upperRule.startsWith(kw + " ") ||
          upperRule.startsWith(kw + "-"),
      );

      // Register every rule's definition for keyword tooltips, keyed by its
      // own name (e.g. "Anti", "Synapse") -- weapon keyword badges resolve
      // compound text like "Anti-Monster 5+" back to this base name.
      if (rule.description && !defs[upperRule]) {
        defs[upperRule] = {
          name: ruleName,
          desc: rule.description,
          isCore: !!rule.page,
        };
      }

      if (!isWeaponRule) {
        if (rule.page) {
          if (!unit.coreRules.includes(ruleName)) unit.coreRules.push(ruleName);
        } else {
          if (!unit.factionRules.includes(ruleName))
            unit.factionRules.push(ruleName);
        }
      }
    });
  }

  if (node.profiles) {
    node.profiles.forEach(profile => {
      const type = profile.typeName ? profile.typeName.toLowerCase() : "";
      const chars = profile.characteristics || [];
      const getChar = name => {
        const c = chars.find(
          ch => ch.name.toLowerCase() === name.toLowerCase(),
        );
        return c && c.$text ? c.$text : "--";
      };
      // BattleScribe uses a bare "-" to mean "no keywords" - only strip that
      // placeholder, not hyphens that are part of real keywords like ANTI-INFANTRY.
      const getKeywords = () => {
        const raw = getChar("Keywords");
        return raw === "-" || raw === "--" ? "" : raw;
      };

      if (type === "unit") {
        const inv = getChar("InSv");
        const stats = {
          m: getChar("M"),
          t: getChar("T"),
          sv: getChar("Sv"),
          w: getChar("W"),
          ld: getChar("LD"),
          oc: getChar("OC"),
          insv: inv !== "--" && inv !== "-" ? inv : null,
        };
        // Some catalogues give a Leader a differently-named profile (e.g.
        // Tyranid Prime vs Tyranid Warrior) that's numerically identical to
        // the rest of the unit — only add a new row when the values differ.
        const statsKey = JSON.stringify(stats);
        const isDuplicate = unit.statblocks.some(
          sb => JSON.stringify(sb.stats) === statsKey,
        );
        if (!isDuplicate) {
          unit.statblocks.push({ label: profile.name || unit.name, stats });
        }
      } else if (type.includes("ranged weapon")) {
        // Like statblocks, the same weapon profile is often copied onto
        // every model-level node in a unit — merge duplicates into one
        // entry and sum how many models carry it (node.number here is the
        // count of whichever model/wargear node this profile is attached to).
        const weapon = {
          name: profile.name,
          range: getChar("Range"),
          a: getChar("A"),
          bs: getChar("BS"),
          s: getChar("S"),
          ap: getChar("AP"),
          d: getChar("D"),
          keywords: getKeywords(),
        };
        const weaponKey = JSON.stringify(weapon);
        const existing = unit.ranged.find(
          w => JSON.stringify(stripCount(w)) === weaponKey,
        );
        if (existing) {
          existing.count += node.number || 1;
        } else {
          unit.ranged.push({ ...weapon, count: node.number || 1 });
        }
      } else if (type.includes("melee weapon")) {
        const weapon = {
          name: profile.name,
          range: getChar("Range"),
          a: getChar("A"),
          ws: getChar("WS"),
          s: getChar("S"),
          ap: getChar("AP"),
          d: getChar("D"),
          keywords: getKeywords(),
        };
        const weaponKey = JSON.stringify(weapon);
        const existing = unit.melee.find(
          w => JSON.stringify(stripCount(w)) === weaponKey,
        );
        if (existing) {
          existing.count += node.number || 1;
        } else {
          unit.melee.push({ ...weapon, count: node.number || 1 });
        }
      } else if (type === "abilities") {
        if (isEnhancement) {
          if (!unit.enhancements.some(e => e.name === profile.name)) {
            unit.enhancements.push({
              name: profile.name,
              desc: getChar("Description"),
              cost: nodePoints,
            });
          }
        } else if (!unit.abilities.some(a => a.name === profile.name)) {
          unit.abilities.push({
            name: profile.name,
            desc: getChar("Description"),
          });
        }
      }
    });
  }

  if (node.selections) {
    node.selections.forEach(childNode =>
      extractNodeData(childNode, unit, defs),
    );
  }
}

// --- 4. UI DRAW ENGINE ---
function renderDashboard(metadata, armyRoster) {
  rosterContainer.innerHTML = "";
  rosterContainer.appendChild(buildHeader(metadata));
  renderUnitSections(armyRoster);
  renderStratagemSection(metadata);
}

// Shows "used / limit" when New Recruit reports a points limit for the
// battle size, otherwise just the used total.
function formatPointsLabel(metadata) {
  const used = metadata.totalPoints.toString();
  return metadata.pointsLimit ? `${used} / ${metadata.pointsLimit}` : used;
}

function buildHeader(metadata) {
  const headerWrapper = el("div", "roster-header");
  const leftMetaBlock = el("div", "roster-header__meta");
  const overBudget =
    metadata.pointsLimit && metadata.totalPoints > metadata.pointsLimit;
  const pointsClass = overBudget ? "roster-header__points--over" : "";

  const renderMeta = collapsed => {
    if (collapsed) {
      leftMetaBlock.innerHTML = `
        <div class="roster-header__collapsed-row">
          <span class="roster-header__name roster-header__name--collapsed">${sanitizeHTML(metadata.listName)}</span>
          <span class="roster-header__points roster-header__points--collapsed ${pointsClass}">${sanitizeHTML(formatPointsLabel(metadata))} pts</span>
          <span class="roster-header__faction roster-header__faction--collapsed">${sanitizeHTML(metadata.factionName)}</span>
        </div>
      `;
    } else {
      const detachmentChips = metadata.detachments.length
        ? metadata.detachments
            .map(d => {
              const meta = [];
              if (d.dp > 0) meta.push(`${sanitizeHTML(d.dp.toString())} DP`);
              if (d.points > 0) meta.push(`${sanitizeHTML(d.points.toString())} pts`);
              const metaHTML = meta.length
                ? ` <span class="chip__meta">${meta.join(" &middot; ")}</span>`
                : "";
              return `<span class="chip">${sanitizeHTML(d.name)}${metaHTML}</span>`;
            })
            .join("")
        : `<span class="chip chip--muted">None selected</span>`;

      const dispositionChips = metadata.forceDispositions.length
        ? metadata.forceDispositions
            .map(
              d => `<span class="chip chip--accent">${sanitizeHTML(d)}</span>`,
            )
            .join("")
        : `<span class="chip chip--muted">None</span>`;

      leftMetaBlock.innerHTML = `
        <span class="roster-header__name">${sanitizeHTML(metadata.listName)}</span>
        <div class="roster-header__meta-row">
          <span class="roster-header__points ${pointsClass}">${sanitizeHTML(formatPointsLabel(metadata))} pts</span>
          <span class="roster-header__faction">${sanitizeHTML(metadata.factionName)}</span>
        </div>
        <div class="roster-header__tag-group">
          <span class="roster-header__tag-label">Detachments</span>
          <div class="chip-row">${detachmentChips}</div>
        </div>
        <div class="roster-header__tag-group">
          <span class="roster-header__tag-label">Disposition</span>
          <div class="chip-row">${dispositionChips}</div>
        </div>
      `;
    }
  };

  renderMeta(false);

  const uploadBtn = el(
    "button",
    "roster-header__upload-btn",
    "Upload Different Roster",
  );
  uploadBtn.id = "clear-roster-btn";
  uploadBtn.type = "button";
  uploadBtn.addEventListener("click", e => {
    e.stopPropagation();
    localStorage.removeItem("40k_roster_cache");
    location.reload();
  });

  const actions = el("div", "roster-header__actions");
  actions.appendChild(uploadBtn);
  actions.appendChild(el("span", "roster-header__chevron"));

  headerWrapper.appendChild(leftMetaBlock);
  headerWrapper.appendChild(actions);

  let collapsed = false;
  headerWrapper.addEventListener("click", () => {
    collapsed = !collapsed;
    headerWrapper.classList.toggle("roster-header--collapsed", collapsed);
    renderMeta(collapsed);
  });

  return headerWrapper;
}

function renderUnitSections(armyRoster) {
  const groupedBuckets = {};
  CATEGORY_ORDER.forEach(c => (groupedBuckets[c.key] = []));
  const uncategorizedBucket = [];

  armyRoster.forEach(unit => {
    const matchedCategory = CATEGORY_ORDER.find(c =>
      unit.keywords.includes(c.key),
    );
    (matchedCategory
      ? groupedBuckets[matchedCategory.key]
      : uncategorizedBucket
    ).push(unit);
  });

  CATEGORY_ORDER.forEach(catDef => {
    const bucketUnits = groupedBuckets[catDef.key];
    if (bucketUnits.length === 0) return;
    rosterContainer.appendChild(el("div", "category-header", catDef.label));
    bucketUnits.forEach(unit =>
      rosterContainer.appendChild(buildUnitRow(unit)),
    );
  });

  if (uncategorizedBucket.length > 0) {
    rosterContainer.appendChild(
      el(
        "div",
        "category-header category-header--uncategorized",
        "UNCATEGORIZED UNITS",
      ),
    );
    uncategorizedBucket.forEach(unit =>
      rosterContainer.appendChild(buildUnitRow(unit)),
    );
  }
}

function buildUnitRow(unit) {
  const row = el("div", "unit-row");
  row.tabIndex = 0;
  row.setAttribute("role", "button");

  const warlordBadge = unit.keywords.includes("WARLORD")
    ? `<span class="unit-row__warlord-badge">★ Warlord</span>`
    : "";

  row.innerHTML = `
    <div class="unit-row__title">
      <span class="unit-row__name">${sanitizeHTML(unit.name)}</span>
      <span class="unit-row__count">x${sanitizeHTML(unit.models.toString())}</span>
      <span class="unit-row__points">${sanitizeHTML(unit.points.toString())} pts</span>
      ${warlordBadge}
    </div>
    <div class="unit-row__stats">
      ${buildStatBoxes(unit.statblocks[0].stats)}
    </div>
  `;

  const toggle = () => {
    if (currentlyActiveRow === row) {
      closeActiveDrawer();
      return;
    }
    closeActiveDrawer();
    currentlyActiveRow = row;
    row.classList.add("unit-row--open");
    renderInlineTray(row, unit);
  };

  row.addEventListener("click", toggle);
  row.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  return row;
}

function buildStatBoxes(stats, sizeClass = "") {
  const hasInv = !!stats.insv;
  return `
    ${buildStatBox("M", stats.m, false, sizeClass)}
    ${buildStatBox("T", stats.t, false, sizeClass)}
    ${buildStatBox("SV", stats.sv, false, sizeClass)}
    ${buildStatBox("INV", hasInv ? stats.insv : "-", hasInv, sizeClass)}
    ${buildStatBox("W", stats.w, false, sizeClass)}
    ${buildStatBox("LD", stats.ld, false, sizeClass)}
    ${buildStatBox("OC", stats.oc, false, sizeClass)}
  `;
}

function buildStatBox(label, value, isHighlight = false, sizeClass = "") {
  return `
    <div class="stat-box ${isHighlight ? "stat-box--highlight" : ""} ${sizeClass}">
      <span class="stat-box__label">${sanitizeHTML(label)}</span>
      <div class="stat-box__value">${sanitizeHTML(value)}</div>
    </div>
  `;
}

function buildStatblockSection(unit) {
  const showLabels = unit.statblocks.length > 1;
  return `
    <div class="unit-drawer__statblock">
      ${unit.statblocks
        .map(
          sb => `
            <div class="statblock-row">
              <div class="statblock-row__boxes">${buildStatBoxes(sb.stats)}</div>
              ${showLabels ? `<span class="statblock-row__label">${sanitizeHTML(sb.label)}</span>` : ""}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderStratagemSection(metadata) {
  if (typeof STRATAGEM_DATABASE === "undefined") return;

  const detachmentsWithStrats = metadata.detachments.filter(
    det => STRATAGEM_DATABASE[det.name],
  );
  if (detachmentsWithStrats.length === 0) return;

  rosterContainer.appendChild(
    el("div", "strat-section-header", "Detachment Rules &amp; Stratagems"),
  );

  detachmentsWithStrats.forEach(det => {
    rosterContainer.appendChild(
      buildDetachmentBlock(det, STRATAGEM_DATABASE[det.name]),
    );
  });
}

function buildDetachmentRulesBlock(rules) {
  const rows = rules
    .map(
      r => `
        <div class="ability-row">
          <strong class="ability-label">${formatText(r.name)}:</strong>
          <span class="ability-text ability-text--desc">${formatText(r.desc)}</span>
        </div>
      `,
    )
    .join("");

  return el(
    "div",
    "abilities-block detachment-rules-block",
    `
      <div class="abilities-block__header">Detachment Rules</div>
      <div class="abilities-block__body">${rows}</div>
    `,
  );
}

function buildDetachmentBlock(det, stratsList) {
  const wrapper = document.createDocumentFragment();

  const detRowMeta = [];
  if (det.dp > 0) detRowMeta.push(`${sanitizeHTML(det.dp.toString())} DP`);
  if (det.points > 0) detRowMeta.push(`${sanitizeHTML(det.points.toString())} pts`);
  detRowMeta.push(`${stratsList.length} stratagem${stratsList.length === 1 ? "" : "s"}`);

  const detRow = el("div", "detachment-row");
  detRow.tabIndex = 0;
  detRow.setAttribute("role", "button");
  detRow.innerHTML = `
    <span class="detachment-row__name">${sanitizeHTML(det.name)}</span>
    ${detRowMeta.length ? `<span class="detachment-row__points">${detRowMeta.join(" &middot; ")}</span>` : ""}
  `;

  const detDrawer = el("div", "detachment-drawer");
  if (det.rules && det.rules.length > 0) {
    detDrawer.appendChild(buildDetachmentRulesBlock(det.rules));
  }
  const stratGrid = el("div", "strat-grid");
  stratsList.forEach(strat => stratGrid.appendChild(buildStratCard(strat)));
  detDrawer.appendChild(stratGrid);

  let open = false;
  const toggle = () => {
    open = !open;
    detRow.classList.toggle("detachment-row--open", open);
    detDrawer.classList.toggle("detachment-drawer--open", open);
    detDrawer.style.maxHeight = open
      ? detDrawer.scrollHeight + 100 + "px"
      : "0px";
  };
  detRow.addEventListener("click", toggle);
  detRow.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  wrapper.appendChild(detRow);
  wrapper.appendChild(detDrawer);
  return wrapper;
}

function buildStratCard(strat) {
  const card = el("div", `strat-card ${getStratTheme(strat.rules.when)}`);
  card.innerHTML = `
    <div class="strat-card__header">
      <span class="strat-card__name">${sanitizeHTML(strat.name)}</span>
      <span class="strat-card__cp">${sanitizeHTML(strat.cp)}</span>
    </div>
    <div class="strat-card__body">
      <div><strong class="strat-label">When:</strong> <span class="strat-value">${formatText(strat.rules.when)}</span></div>
      <div><strong class="strat-label">Target:</strong> <span class="strat-value">${formatText(strat.rules.target)}</span></div>
      <div><strong class="strat-label">Effect:</strong> <span class="strat-value strat-value--effect">${formatText(strat.rules.effect)}</span></div>
    </div>
  `;
  return card;
}

function renderInlineTray(targetRow, unit) {
  const inlineDrawer = el("div", "unit-drawer");
  inlineDrawer.innerHTML = `
    <div class="unit-drawer__inner">
      ${buildStatblockSection(unit)}

      <div>
        <div class="weapon-section-header weapon-section-header--ranged">
          <img src="ranged.png" alt="Ranged Icon" class="weapon-section-header__icon"> RANGED WEAPONS
        </div>
        <div class="weapon-table-scroll">
          <table class="weapon-table">
            <tr class="weapon-table__head-row">
              <th class="weapon-table__head weapon-table__head--name">WEAPON PROFILE</th>
              <th class="weapon-table__head">RANGE</th>
              <th class="weapon-table__head">A</th>
              <th class="weapon-table__head">BS</th>
              <th class="weapon-table__head">S</th>
              <th class="weapon-table__head">AP</th>
              <th class="weapon-table__head">D</th>
              <th class="weapon-table__head weapon-table__head--keywords">KEYWORDS</th>
            </tr>
            ${buildWeaponRows(unit.ranged)}
          </table>
        </div>
      </div>

      <div class="unit-drawer__section">
        <div class="weapon-section-header weapon-section-header--melee">
          <img src="melee.png" alt="Melee Icon" class="weapon-section-header__icon weapon-section-header__icon--melee"> MELEE WEAPONS
        </div>
        <div class="weapon-table-scroll">
          <table class="weapon-table">
            <tr class="weapon-table__head-row">
              <th class="weapon-table__head weapon-table__head--name">WEAPON PROFILE</th>
              <th class="weapon-table__head">RANGE</th>
              <th class="weapon-table__head">A</th>
              <th class="weapon-table__head">WS</th>
              <th class="weapon-table__head">S</th>
              <th class="weapon-table__head">AP</th>
              <th class="weapon-table__head">D</th>
              <th class="weapon-table__head weapon-table__head--keywords">KEYWORDS</th>
            </tr>
            ${buildWeaponRows(unit.melee)}
          </table>
        </div>
      </div>

      ${buildEnhancementsBlock(unit)}
      ${buildAbilitiesBlock(unit)}
      ${buildKeywordsBlock(unit)}
    </div>
  `;

  targetRow.insertAdjacentElement("afterend", inlineDrawer);
  currentlyOpenDrawer = inlineDrawer;
  requestAnimationFrame(() => {
    inlineDrawer.style.maxHeight = inlineDrawer.scrollHeight + 50 + "px";
  });
}

// Only a flat integer A value (e.g. "4") has a meaningful total across
// models — dice notation like "D3" or "D6+3" can't be multiplied into a
// single number, so those are left alone.
function buildTotalAttacks(aValue, count) {
  if (count <= 1) return "";
  const base = Number(aValue);
  if (!Number.isFinite(base)) return "";
  return ` <span class="weapon-table__cell-total">(${base * count})</span>`;
}

function buildWeaponRows(weaponList) {
  if (weaponList.length === 0) {
    return `<tr><td colspan="8" class="weapon-table__empty">No profiles found.</td></tr>`;
  }
  return weaponList
    .map(
      w => `
        <tr class="weapon-table__row">
          <td class="weapon-table__cell weapon-table__cell--name">${formatText(w.name)}${
            w.count > 1
              ? ` <span class="weapon-table__count-badge">x${sanitizeHTML(w.count.toString())}</span>`
              : ""
          }</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.range)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.a)}${buildTotalAttacks(w.a, w.count)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.ws || w.bs)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.s)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.ap)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.d)}</td>
          <td class="weapon-table__cell weapon-table__cell--keywords">${buildKeywordBadges(w.keywords, "weapon")}</td>
        </tr>
      `,
    )
    .join("");
}

// Resolves a keyword's tooltip definition. Handles both exact names (e.g.
// "Synapse") and compound weapon-keyword text with a trailing value (e.g.
// "Anti-Monster 5+", "Sustained Hits 1") by falling back to the base
// CORE_WEAPON_KEYWORDS stem those are built from.
function resolveKeywordDef(rawName) {
  if (!rawName) return null;
  const upper = rawName.trim().toUpperCase();
  if (activeKeywordDefs[upper]) return activeKeywordDefs[upper];
  const stem = CORE_WEAPON_KEYWORDS.find(
    kw => upper === kw || upper.startsWith(kw + " ") || upper.startsWith(kw + "-"),
  );
  return stem ? activeKeywordDefs[stem] || null : null;
}

// Badge color signals what a keyword *is* and whether it's tappable:
// teal = weapon-ability keyword, orange = CORE rule, violet = FACTION rule,
// grey = no definition found (not interactive). forceKind pins weapon-table
// badges to teal regardless of the underlying rule's page/isCore flag --
// everywhere else (CORE/FACTION rows, the bottom Keywords block) the color
// is derived from the definition itself.
function buildKeywordBadge(rawName, forceKind) {
  const def = resolveKeywordDef(rawName);
  const kind = def ? forceKind || (def.isCore ? "core" : "faction") : "none";
  const dataAttr = def ? ` data-keyword="${sanitizeHTML(rawName)}"` : "";
  return `<span class="keyword-badge keyword-badge--${kind}"${dataAttr}>${formatText(rawName)}</span>`;
}

function buildKeywordBadges(keywords, forceKind) {
  if (!keywords || !keywords.trim()) {
    return `<span class="weapon-table__no-keywords">-</span>`;
  }
  return (
    `<div class="keyword-badge-row">` +
    keywords
      .split(",")
      .map(k => {
        const cleanK = k.trim();
        return cleanK ? buildKeywordBadge(cleanK, forceKind) : "";
      })
      .join("") +
    `</div>`
  );
}

function buildEnhancementsBlock(unit) {
  if (unit.enhancements.length === 0) return "";

  const rows = unit.enhancements
    .map(
      e => `
        <div class="ability-row">
          <strong class="enhancement-label">${formatText(e.name)}</strong>
          <span class="enhancement-cost">${sanitizeHTML(e.cost.toString())} pts</span>
          <span class="ability-text ability-text--desc">${formatText(e.desc)}</span>
        </div>
      `,
    )
    .join("");

  return `
    <div class="abilities-block">
      <div class="abilities-block__header abilities-block__header--enhancement">Enhancements</div>
      <div class="abilities-block__body">${rows}</div>
    </div>
  `;
}

function buildRuleChips(names) {
  return `<div class="keyword-badge-row">${names.map(n => buildKeywordBadge(n)).join("")}</div>`;
}

function buildAbilitiesBlock(unit) {
  const coreText =
    unit.coreRules.length > 0 ? buildRuleChips(unit.coreRules) : "-";
  let innerContent = `<div class="ability-row"><strong class="ability-label ability-label--core">CORE:</strong> <span class="ability-text">${coreText}</span></div>`;

  if (unit.factionRules.length > 0) {
    innerContent += `<div class="ability-row"><strong class="ability-label ability-label--faction">FACTION:</strong> <span class="ability-text">${buildRuleChips(unit.factionRules)}</span></div>`;
  }

  unit.abilities.forEach(a => {
    innerContent += `<div class="ability-row"><strong class="ability-label">${formatText(a.name)}:</strong> <span class="ability-text ability-text--desc">${formatText(a.desc)}</span></div>`;
  });

  return `
    <div class="abilities-block">
      <div class="abilities-block__header">Abilities &amp; Rules</div>
      <div class="abilities-block__body">${innerContent}</div>
    </div>
  `;
}

function buildKeywordsBlock(unit) {
  if (unit.keywords.length === 0) return "";
  return `
    <div class="keywords-block">
      <strong class="keywords-block__label">Keywords</strong>
      ${buildKeywordBadges(unit.keywords.join(","))}
    </div>
  `;
}

function closeActiveDrawer() {
  if (currentlyActiveRow) {
    currentlyActiveRow.classList.remove("unit-row--open");
  }
  if (currentlyOpenDrawer) {
    const target = currentlyOpenDrawer;
    target.style.maxHeight = "0px";
    setTimeout(() => target.remove(), 300);
  }
  currentlyOpenDrawer = null;
  currentlyActiveRow = null;
}

// --- KEYWORD TOOLTIPS ---
function closeKeywordTooltip() {
  if (openKeywordTooltip) {
    openKeywordTooltip.remove();
    openKeywordTooltip = null;
  }
  if (openKeywordAnchor) {
    openKeywordAnchor.classList.remove("keyword-badge--active");
    openKeywordAnchor = null;
  }
}

function openKeywordTooltipFor(anchor, def) {
  // Reuse the badge's own color class so the popover header matches what
  // was tapped (teal/orange/violet), instead of recomputing the kind.
  const kind = ["weapon", "core", "faction"].find(k =>
    anchor.classList.contains(`keyword-badge--${k}`),
  );
  const tooltip = el(
    "div",
    `keyword-tooltip${kind ? ` keyword-tooltip--${kind}` : ""}`,
    `
      <div class="keyword-tooltip__name">${sanitizeHTML(def.name)}</div>
      <div class="keyword-tooltip__desc">${formatText(def.desc)}</div>
    `,
  );
  document.body.appendChild(tooltip);

  const anchorRect = anchor.getBoundingClientRect();
  const tipRect = tooltip.getBoundingClientRect();
  const margin = 8;

  let left = anchorRect.left;
  if (left + tipRect.width > window.innerWidth - margin) {
    left = window.innerWidth - tipRect.width - margin;
  }
  if (left < margin) left = margin;

  let top = anchorRect.bottom + 6;
  if (top + tipRect.height > window.innerHeight - margin) {
    // No room below -- flip above the anchor instead.
    top = anchorRect.top - tipRect.height - 6;
    if (top < margin) top = margin;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

  anchor.classList.add("keyword-badge--active");
  openKeywordTooltip = tooltip;
  openKeywordAnchor = anchor;
}

// Single delegated handler: works identically for mouse clicks and touch
// taps, so there's no separate mobile interaction path to maintain. Tapping
// the same keyword again, tapping elsewhere, or scrolling closes it.
document.addEventListener("click", e => {
  const anchor = e.target.closest("[data-keyword]");
  if (anchor) {
    e.stopPropagation();
    const reopening = openKeywordAnchor === anchor;
    closeKeywordTooltip();
    if (reopening) return;
    const def = resolveKeywordDef(anchor.dataset.keyword);
    if (def) openKeywordTooltipFor(anchor, def);
    return;
  }
  if (openKeywordTooltip && !e.target.closest(".keyword-tooltip")) {
    closeKeywordTooltip();
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (openKeywordTooltip) closeKeywordTooltip();
  },
  { passive: true, capture: true },
);
