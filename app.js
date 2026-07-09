const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const rosterContainer = document.getElementById("roster-container");

let currentlyOpenDrawer = null;
let currentlyActiveRow = null;

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
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(err => {
      console.error("Service worker registration failed:", err);
    });
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
    detachments: [],
    forceDispositions: [],
  };

  if (data.roster.costs) {
    const pts = data.roster.costs.find(c => c.name === "pts");
    if (pts) metadata.totalPoints = pts.value;
  }

  const armyRoster = [];

  selections.forEach(selection => {
    // Dynamic Detachment Extractor: Captures Name and Inherent Points Costs
    if (selection.name === "Detachment" && selection.selections) {
      selection.selections.forEach(sub => {
        if (sub.group === "Detachment") {
          let detPts = 0;
          if (sub.costs) {
            const p = sub.costs.find(c => c.name === "pts");
            if (p) detPts = p.value;
          }
          metadata.detachments.push({ name: sub.name, points: detPts });
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
      if (selection.costs) {
        const p = selection.costs.find(c => c.name === "pts");
        if (p) detPts = p.value;
      }
      if (!metadata.detachments.some(d => d.name === selection.name)) {
        metadata.detachments.push({ name: selection.name, points: detPts });
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
      stats: {
        m: "--",
        t: "--",
        sv: "--",
        w: "--",
        ld: "--",
        oc: "--",
        insv: null,
      },
      ranged: [],
      melee: [],
      abilities: [],
      coreRules: [],
      factionRules: [],
      keywords: new Set(),
    };

    extractNodeData(selection, flatUnit);
    flatUnit.keywords = Array.from(flatUnit.keywords);
    armyRoster.push(flatUnit);
  });

  return { metadata, armyRoster };
}

function extractNodeData(node, unit) {
  if (node.costs) {
    const pts = node.costs.find(c => c.name === "pts");
    if (pts) unit.points += pts.value;
  }
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
        if (unit.stats.m === "--") {
          unit.stats.m = getChar("M");
          unit.stats.t = getChar("T");
          unit.stats.sv = getChar("Sv");
          unit.stats.w = getChar("W");
          unit.stats.ld = getChar("LD");
          unit.stats.oc = getChar("OC");
          const inv = getChar("InSv");
          unit.stats.insv = inv !== "--" && inv !== "-" ? inv : null;
        }
      } else if (type.includes("ranged weapon")) {
        unit.ranged.push({
          name: profile.name,
          range: getChar("Range"),
          a: getChar("A"),
          bs: getChar("BS"),
          s: getChar("S"),
          ap: getChar("AP"),
          d: getChar("D"),
          keywords: getKeywords(),
        });
      } else if (type.includes("melee weapon")) {
        unit.melee.push({
          name: profile.name,
          range: getChar("Range"),
          a: getChar("A"),
          ws: getChar("WS"),
          s: getChar("S"),
          ap: getChar("AP"),
          d: getChar("D"),
          keywords: getKeywords(),
        });
      } else if (type === "abilities") {
        if (!unit.abilities.some(a => a.name === profile.name)) {
          unit.abilities.push({
            name: profile.name,
            desc: getChar("Description"),
          });
        }
      }
    });
  }

  if (node.selections) {
    node.selections.forEach(childNode => extractNodeData(childNode, unit));
  }
}

// --- 4. UI DRAW ENGINE ---
function renderDashboard(metadata, armyRoster) {
  rosterContainer.innerHTML = "";
  rosterContainer.appendChild(buildHeader(metadata));
  renderUnitSections(armyRoster);
  renderStratagemSection(metadata);
}

function buildHeader(metadata) {
  const headerWrapper = el("div", "roster-header");
  const leftMetaBlock = el("div", "roster-header__meta");

  const renderMeta = collapsed => {
    if (collapsed) {
      leftMetaBlock.innerHTML = `
        <div class="roster-header__collapsed-row">
          <span class="roster-header__name roster-header__name--collapsed">${sanitizeHTML(metadata.listName)}</span>
          <span class="roster-header__points roster-header__points--collapsed">${sanitizeHTML(metadata.totalPoints.toString())} pts</span>
          <span class="roster-header__faction roster-header__faction--collapsed">${sanitizeHTML(metadata.factionName)}</span>
        </div>
      `;
    } else {
      const detachmentChips = metadata.detachments.length
        ? metadata.detachments
            .map(
              d =>
                `<span class="chip">${sanitizeHTML(d.name)}${d.points > 0 ? ` <span class="chip__meta">${sanitizeHTML(d.points.toString())} pts</span>` : ""}</span>`,
            )
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
          <span class="roster-header__points">${sanitizeHTML(metadata.totalPoints.toString())} pts</span>
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

  headerWrapper.appendChild(leftMetaBlock);
  headerWrapper.appendChild(uploadBtn);

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

  row.innerHTML = `
    <div class="unit-row__title">
      <span class="unit-row__name">${sanitizeHTML(unit.name)}</span>
      <span class="unit-row__count">x${sanitizeHTML(unit.models.toString())}</span>
      <span class="unit-row__points">${sanitizeHTML(unit.points.toString())} pts</span>
    </div>
    <div class="unit-row__stats">
      ${buildStatBoxes(unit)}
    </div>
  `;

  const toggle = () => {
    if (currentlyActiveRow === row) {
      closeActiveDrawer();
      return;
    }
    closeActiveDrawer();
    currentlyActiveRow = row;
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

function buildStatBoxes(unit) {
  const hasInv = !!unit.stats.insv;
  return `
    ${buildStatBox("M", unit.stats.m)}
    ${buildStatBox("T", unit.stats.t)}
    ${buildStatBox("SV", unit.stats.sv)}
    ${buildStatBox("INV", hasInv ? unit.stats.insv : "-", hasInv)}
    ${buildStatBox("W", unit.stats.w)}
    ${buildStatBox("LD", unit.stats.ld)}
    ${buildStatBox("OC", unit.stats.oc)}
  `;
}

function buildStatBox(label, value, isHighlight = false) {
  return `
    <div class="stat-box ${isHighlight ? "stat-box--highlight" : ""}">
      <span class="stat-box__label">${sanitizeHTML(label)}</span>
      <div class="stat-box__value">${sanitizeHTML(value)}</div>
    </div>
  `;
}

function renderStratagemSection(metadata) {
  if (typeof STRATAGEM_DATABASE === "undefined") return;

  const detachmentsWithStrats = metadata.detachments.filter(
    det => STRATAGEM_DATABASE[det.name],
  );
  if (detachmentsWithStrats.length === 0) return;

  rosterContainer.appendChild(el("div", "strat-section-header", "Stratagems"));

  detachmentsWithStrats.forEach(det => {
    rosterContainer.appendChild(
      buildDetachmentBlock(det, STRATAGEM_DATABASE[det.name]),
    );
  });
}

function buildDetachmentBlock(det, stratsList) {
  const wrapper = document.createDocumentFragment();

  const detRow = el("div", "detachment-row");
  detRow.tabIndex = 0;
  detRow.setAttribute("role", "button");
  detRow.innerHTML = `
    <span class="detachment-row__name">${sanitizeHTML(det.name)}</span>
    ${det.points > 0 ? `<span class="detachment-row__points">${sanitizeHTML(det.points.toString())} pts</span>` : ""}
  `;

  const detDrawer = el("div", "detachment-drawer");
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
      <div class="unit-drawer__statblock">
        ${buildStatBoxes(unit)}
      </div>

      <div>
        <div class="weapon-section-header">
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
        <div class="weapon-section-header">
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

function buildWeaponRows(weaponList) {
  if (weaponList.length === 0) {
    return `<tr><td colspan="8" class="weapon-table__empty">No profiles found.</td></tr>`;
  }
  return weaponList
    .map(
      w => `
        <tr class="weapon-table__row">
          <td class="weapon-table__cell weapon-table__cell--name">${formatText(w.name)}</td>
          <td class="weapon-table__cell">${formatText(w.range)}</td>
          <td class="weapon-table__cell weapon-table__cell--strong">${formatText(w.a)}</td>
          <td class="weapon-table__cell">${formatText(w.ws || w.bs)}</td>
          <td class="weapon-table__cell">${formatText(w.s)}</td>
          <td class="weapon-table__cell">${formatText(w.ap)}</td>
          <td class="weapon-table__cell weapon-table__cell--damage">${formatText(w.d)}</td>
          <td class="weapon-table__cell weapon-table__cell--keywords">${buildKeywordBadges(w.keywords)}</td>
        </tr>
      `,
    )
    .join("");
}

function buildKeywordBadges(keywords) {
  if (!keywords || !keywords.trim()) {
    return `<span class="weapon-table__no-keywords">-</span>`;
  }
  return (
    `<div class="weapon-keywords">` +
    keywords
      .split(",")
      .map(k => {
        const cleanK = k.trim();
        return cleanK
          ? `<span class="weapon-keyword-badge">${formatText(cleanK)}</span>`
          : "";
      })
      .join("") +
    `</div>`
  );
}

function buildAbilitiesBlock(unit) {
  const coreText =
    unit.coreRules.length > 0 ? formatText(unit.coreRules.join(", ")) : "-";
  let innerContent = `<div class="ability-row"><strong class="ability-label ability-label--core">CORE:</strong> <span class="ability-text">${coreText}</span></div>`;

  if (unit.factionRules.length > 0) {
    innerContent += `<div class="ability-row"><strong class="ability-label ability-label--faction">FACTION:</strong> <span class="ability-text">${formatText(unit.factionRules.join(", "))}</span></div>`;
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
      <strong class="keywords-block__label">KEYWORDS:</strong>
      <span class="keywords-block__list">${sanitizeHTML(unit.keywords.join(", "))}</span>
    </div>
  `;
}

function closeActiveDrawer() {
  if (currentlyOpenDrawer) {
    const target = currentlyOpenDrawer;
    target.style.maxHeight = "0px";
    setTimeout(() => target.remove(), 300);
  }
  currentlyOpenDrawer = null;
  currentlyActiveRow = null;
}
