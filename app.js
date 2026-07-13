const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const rosterContainer = document.getElementById("roster-container");

let currentlyOpenDrawer = null;
let currentlyActiveRow = null;

// The last-loaded roster, kept around so attach/unattach actions (which
// change which units are combined) can re-render the whole dashboard
// without needing to re-parse or re-upload anything.
let currentMetadata = null;
let currentArmyRoster = null;

// User-defined "Attached Units" groupings: { id, memberIds: [unit.id, ...] }.
// Purely a display construct the user builds by hand -- see attachUnits().
let attachGroups = [];
const ATTACH_STORAGE_KEY = "40k_attach_groups";

// Keyword name (uppercase) -> { name, desc, isCore }, rebuilt per roster load.
let activeKeywordDefs = {};
let openKeywordTooltip = null;
let openKeywordAnchor = null;

// --- ACCENT COLOR PREFERENCES ---
// Curated palette, all legible against --bg-page (#19191c). Excludes red/
// coral since --accent-danger is a fixed semantic color (stratagem
// opponent's-turn theme, over-budget points) and isn't user-configurable.
const ACCENT_PALETTE = [
  { name: "Teal", hex: "#2dd4bf" },
  { name: "Amber", hex: "#f2b544" },
  { name: "Violet", hex: "#b794f6" },
  { name: "Sky Blue", hex: "#60a5fa" },
  { name: "Emerald", hex: "#34d399" },
  { name: "Pink", hex: "#f472b6" },
  { name: "Cyan", hex: "#22d3ee" },
  { name: "Indigo", hex: "#818cf8" },
  { name: "Gold", hex: "#fbbf24" },
];

const DEFAULT_ACCENTS = { primary: "#2dd4bf", secondary: "#f2b544", tertiary: "#b794f6" };
const ACCENT_STORAGE_KEY = "40k_accent_prefs";
const ACCENT_SLOTS = [
  { key: "primary", label: "Primary Accent", cssVar: "--accent", cssSoftVar: "--accent-soft" },
  { key: "secondary", label: "Secondary Accent", cssVar: "--accent-amber", cssSoftVar: "--accent-amber-soft" },
  { key: "tertiary", label: "Tertiary Accent", cssVar: "--accent-violet", cssSoftVar: "--accent-violet-soft" },
];

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function loadAccentPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(ACCENT_STORAGE_KEY));
    return { ...DEFAULT_ACCENTS, ...(saved || {}) };
  } catch {
    return { ...DEFAULT_ACCENTS };
  }
}

function applyAccentPrefs(prefs) {
  ACCENT_SLOTS.forEach(slot => {
    const hex = prefs[slot.key] || DEFAULT_ACCENTS[slot.key];
    document.documentElement.style.setProperty(slot.cssVar, hex);
    document.documentElement.style.setProperty(slot.cssSoftVar, hexToRgba(hex, 0.17));
  });
}

// Apply as early as possible so there's no flash of the default palette.
applyAccentPrefs(loadAccentPrefs());

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

// sanitizeHTML only escapes &, <, > -- safe for text content, but rule names
// like `Scouts 8"` contain a literal " that would otherwise break out of a
// double-quoted HTML attribute. Use this instead of sanitizeHTML whenever
// building an attribute value (e.g. data-keyword="...").
function escapeAttr(str) {
  return sanitizeHTML(str).replace(/"/g, "&quot;");
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

// --- .ros (BattleScribe XML) SUPPORT ---
// New Recruit's .ros export is a straight XML mirror of its JSON export --
// same tree, attributes instead of object keys. Converting it into the exact
// same nested shape the JSON path produces means processArmyList never needs
// to know which format the roster originally came from.
const XML_NUMERIC_ATTRS = new Set([
  "value",
  "number",
  "page",
  "catalogueRevision",
  "gameSystemRevision",
  "battleScribeVersion",
]);
const XML_BOOLEAN_ATTRS = new Set(["hidden", "primary"]);

// Wrapper element tag -> the tag name of the items inside it. BattleScribe's
// schema doesn't pluralize consistently (costLimits/costLimit vs costs/cost),
// so this has to be an explicit map rather than a naming rule.
const XML_CHILD_COLLECTIONS = {
  costs: "cost",
  costLimits: "costLimit",
  forces: "force",
  rules: "rule",
  selections: "selection",
  profiles: "profile",
  categories: "category",
  characteristics: "characteristic",
};

function xmlElementToObject(el) {
  const obj = {};
  Array.from(el.attributes).forEach(attr => {
    if (XML_NUMERIC_ATTRS.has(attr.name)) obj[attr.name] = Number(attr.value);
    else if (XML_BOOLEAN_ATTRS.has(attr.name)) obj[attr.name] = attr.value === "true";
    else obj[attr.name] = attr.value;
  });

  if (el.tagName === "characteristic") {
    obj.$text = el.textContent;
    return obj;
  }

  Array.from(el.children).forEach(child => {
    if (child.tagName === "description") {
      obj.description = child.textContent;
      return;
    }
    const itemTag = XML_CHILD_COLLECTIONS[child.tagName];
    if (itemTag) {
      obj[child.tagName] = Array.from(child.children)
        .filter(item => item.tagName === itemTag)
        .map(xmlElementToObject);
    }
  });

  return obj;
}

function parseRosXML(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "application/xml");
  if (doc.querySelector("parsererror")) return null;
  const rosterEl = doc.querySelector("roster");
  if (!rosterEl) return null;
  return { roster: xmlElementToObject(rosterEl) };
}

function handleFile(file) {
  const isJSON = file.type === "application/json" || file.name.endsWith(".json");
  const isROS = file.name.endsWith(".ros");
  if (!isJSON && !isROS) {
    alert("Please upload a valid JSON or .ros file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const rawData = isROS ? parseRosXML(e.target.result) : JSON.parse(e.target.result);
      if (!rawData) throw new Error("Empty or unparseable roster file");
      localStorage.setItem("40k_roster_cache", JSON.stringify(rawData));
      dropZone.style.display = "none";
      loadRoster(rawData);
    } catch (err) {
      console.error("Roster parsing error:", err);
      alert("Failed to parse the file. Is it a valid New Recruit export?");
    }
  };
  reader.readAsText(file);
}

function loadRoster(rawData) {
  const parsed = processArmyList(rawData);
  if (!parsed) {
    alert("This file doesn't look like a valid army roster export.");
    localStorage.removeItem("40k_roster_cache");
    dropZone.style.display = "flex";
    return;
  }
  activeKeywordDefs = parsed.metadata.keywordDefs || {};
  currentMetadata = parsed.metadata;
  currentArmyRoster = parsed.armyRoster;
  attachGroups = loadAttachGroups(parsed.metadata.rosterId);
  renderDashboard(parsed.metadata, parsed.armyRoster);
}

// --- ATTACHED UNITS (user-driven combine) ---
function loadAttachGroups(rosterId) {
  try {
    const raw = localStorage.getItem(ATTACH_STORAGE_KEY);
    if (!raw) return [];
    const stored = JSON.parse(raw);
    if (stored.rosterId !== rosterId || !Array.isArray(stored.groups)) return [];
    return stored.groups;
  } catch (err) {
    return [];
  }
}

function saveAttachGroups() {
  localStorage.setItem(
    ATTACH_STORAGE_KEY,
    JSON.stringify({ rosterId: currentMetadata?.rosterId, groups: attachGroups }),
  );
}

function generateGroupId() {
  return "combo-" + Math.random().toString(36).slice(2, 10);
}

// Combining two already-combined groups merges their real member units into
// one group (reusing one of the two group ids) rather than nesting groups --
// attachGroups only ever stores flat lists of real unit ids.
function attachUnits(unitA, unitB) {
  const groupIdA = unitA.isCombined ? unitA.id : null;
  const groupIdB = unitB.isCombined ? unitB.id : null;
  const idsA = unitA.isCombined ? unitA.members.map(m => m.id) : [unitA.id];
  const idsB = unitB.isCombined ? unitB.members.map(m => m.id) : [unitB.id];

  attachGroups = attachGroups.filter(g => g.id !== groupIdA && g.id !== groupIdB);
  attachGroups.push({
    id: groupIdA || groupIdB || generateGroupId(),
    memberIds: [...idsA, ...idsB],
  });

  saveAttachGroups();
  currentlyActiveRow = null;
  currentlyOpenDrawer = null;
  renderDashboard(currentMetadata, currentArmyRoster);
}

// Detaching down to a single remaining member dissolves the group entirely --
// an "attached unit" of one doesn't mean anything.
function unattachUnit(groupId, memberUnitId) {
  const group = attachGroups.find(g => g.id === groupId);
  if (!group) return;
  group.memberIds = group.memberIds.filter(id => id !== memberUnitId);
  if (group.memberIds.length < 2) {
    attachGroups = attachGroups.filter(g => g.id !== groupId);
  }
  saveAttachGroups();
  currentlyActiveRow = null;
  currentlyOpenDrawer = null;
  renderDashboard(currentMetadata, currentArmyRoster);
}

// An empty/whitespace-only answer clears the custom name, reverting the
// combined unit to its auto-generated "A + B" name.
function renameCombinedUnit(groupId, currentName) {
  const answer = window.prompt("Rename unit", currentName);
  if (answer === null) return;
  const group = attachGroups.find(g => g.id === groupId);
  if (!group) return;
  group.customName = answer.trim() || undefined;
  saveAttachGroups();
  currentlyActiveRow = null;
  currentlyOpenDrawer = null;
  renderDashboard(currentMetadata, currentArmyRoster);
}

// Builds the pseudo-units shown under "Attached Units" from the current
// attachGroups + the flat per-unit armyRoster, and returns what's left over.
// Stale member ids (e.g. after re-uploading a changed roster) are dropped;
// groups that fall below 2 valid members are dissolved and the cleanup persisted.
function buildCombinedUnits(armyRoster) {
  const unitsById = new Map(armyRoster.map(u => [u.id, u]));
  let changed = false;

  attachGroups = attachGroups.filter(group => {
    const validIds = group.memberIds.filter(id => unitsById.has(id));
    if (validIds.length !== group.memberIds.length) {
      group.memberIds = validIds;
      changed = true;
    }
    if (validIds.length < 2) {
      changed = true;
      return false;
    }
    return true;
  });
  if (changed) saveAttachGroups();

  const consumedIds = new Set();
  const combined = attachGroups.map(group => {
    const members = group.memberIds.map(id => unitsById.get(id));
    members.forEach(m => consumedIds.add(m.id));
    return {
      id: group.id,
      isCombined: true,
      members,
      name: group.customName || members.map(m => m.name).join(" + "),
      points: members.reduce((sum, m) => sum + m.points, 0),
      models: members.reduce((sum, m) => sum + m.models, 0),
      keywords: Array.from(new Set(members.flatMap(m => m.keywords))),
    };
  });

  const remaining = armyRoster.filter(u => !consumedIds.has(u.id));
  return { combined, remaining };
}

// --- 3. DATA EXTRACTION ---
function processArmyList(data) {
  const forces = data?.roster?.forces;
  if (!forces || forces.length === 0) return null;

  const selections = forces[0].selections || [];

  const metadata = {
    listName: data.roster.name || "Unnamed Roster",
    rosterId: data.roster.id || null,
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
        if (sub.group === "Detachment" || sub.group === "Detachments") {
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
      id: selection.id,
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

  const { combined, remaining } = buildCombinedUnits(armyRoster);
  const allTopLevelUnits = [...combined, ...remaining];

  renderAttachedUnitsSection(combined, allTopLevelUnits);
  renderUnitSections(remaining, allTopLevelUnits);
  renderStratagemSection(metadata);
}

// Shows "used / limit" when New Recruit reports a points limit for the
// battle size, otherwise just the used total.
function formatPointsLabel(metadata) {
  const used = metadata.totalPoints.toString();
  return metadata.pointsLimit ? `${used} / ${metadata.pointsLimit}` : used;
}

function buildAccentPickerRow() {
  const prefs = loadAccentPrefs();
  const row = el("div", "accent-picker-row");
  // Selects live inside the header, which toggles collapsed/expanded on
  // click -- stop the click here so picking a color doesn't also collapse it.
  row.addEventListener("click", e => e.stopPropagation());

  ACCENT_SLOTS.forEach(slot => {
    const wrap = el("div", "accent-picker");
    const label = el("label", "accent-picker__label", slot.label);
    const select = document.createElement("select");
    select.className = "accent-picker__select";

    ACCENT_PALETTE.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.hex;
      opt.textContent = c.name;
      opt.style.color = c.hex;
      if (c.hex.toLowerCase() === (prefs[slot.key] || "").toLowerCase()) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    select.style.borderColor = prefs[slot.key];
    select.style.color = prefs[slot.key];
    select.addEventListener("change", () => {
      const newPrefs = loadAccentPrefs();
      newPrefs[slot.key] = select.value;
      localStorage.setItem(ACCENT_STORAGE_KEY, JSON.stringify(newPrefs));
      applyAccentPrefs(newPrefs);
      select.style.borderColor = select.value;
      select.style.color = select.value;
    });

    wrap.appendChild(label);
    wrap.appendChild(select);
    row.appendChild(wrap);
  });

  return row;
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

  const actionsCol = el("div", "roster-header__actions-col");
  actionsCol.appendChild(actions);
  actionsCol.appendChild(buildAccentPickerRow());

  headerWrapper.appendChild(leftMetaBlock);
  headerWrapper.appendChild(actionsCol);

  let collapsed = false;
  headerWrapper.addEventListener("click", () => {
    collapsed = !collapsed;
    headerWrapper.classList.toggle("roster-header--collapsed", collapsed);
    renderMeta(collapsed);
  });

  return headerWrapper;
}

function renderAttachedUnitsSection(combinedUnits, allTopLevelUnits) {
  if (combinedUnits.length === 0) return;
  rosterContainer.appendChild(
    el("div", "category-header category-header--attached", "ATTACHED UNITS"),
  );
  combinedUnits.forEach(cu =>
    rosterContainer.appendChild(buildCombinedUnitRow(cu, allTopLevelUnits)),
  );
}

function renderUnitSections(armyRoster, allTopLevelUnits) {
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
      rosterContainer.appendChild(buildUnitRow(unit, allTopLevelUnits)),
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
      rosterContainer.appendChild(buildUnitRow(unit, allTopLevelUnits)),
    );
  }
}

function buildUnitRow(unit, allTopLevelUnits) {
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
    renderInlineTray(row, unit, allTopLevelUnits);
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

// Collapsed row for a combined "Attached Units" entry -- deliberately has no
// statblock preview (there isn't one single statline to show), just name/
// count/points, same as the top line of a normal unit row.
function buildCombinedUnitRow(combinedUnit, allTopLevelUnits) {
  const row = el("div", "unit-row unit-row--combined");
  row.tabIndex = 0;
  row.setAttribute("role", "button");

  row.innerHTML = `
    <div class="unit-row__title">
      <span class="unit-row__name">${sanitizeHTML(combinedUnit.name)}</span>
      <span class="unit-row__count">x${sanitizeHTML(combinedUnit.models.toString())}</span>
      <span class="unit-row__points">${sanitizeHTML(combinedUnit.points.toString())} pts</span>
    </div>
  `;

  const nameEl = row.querySelector(".unit-row__name");
  const renameBtn = buildRenameControl(combinedUnit);
  nameEl.parentNode.insertBefore(renameBtn, nameEl);

  const toggle = () => {
    if (currentlyActiveRow === row) {
      closeActiveDrawer();
      return;
    }
    closeActiveDrawer();
    currentlyActiveRow = row;
    row.classList.add("unit-row--open");
    renderCombinedInlineTray(row, combinedUnit, allTopLevelUnits);
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

const RENAME_ICON_SVG = `
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
`;

// Sits to the left of the name specifically so it's not adjacent to the rest
// of the row's tap target -- reduces the chance of an accidental rename tap
// when the intent was to open/close the drawer.
function buildRenameControl(combinedUnit) {
  const btn = el("button", "rename-btn", RENAME_ICON_SVG);
  btn.type = "button";
  btn.title = "Rename unit";
  btn.setAttribute("aria-label", "Rename unit");
  btn.addEventListener("click", e => {
    e.stopPropagation();
    renameCombinedUnit(combinedUnit.id, combinedUnit.name);
  });
  return btn;
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

function renderInlineTray(targetRow, unit, allTopLevelUnits) {
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
  inlineDrawer.querySelector(".unit-drawer__inner").appendChild(
    buildAttachControl(unit, allTopLevelUnits),
  );

  targetRow.insertAdjacentElement("afterend", inlineDrawer);
  currentlyOpenDrawer = inlineDrawer;
  requestAnimationFrame(() => {
    inlineDrawer.style.maxHeight = inlineDrawer.scrollHeight + 50 + "px";
  });
}

// Drawer body for a combined "Attached Units" entry. Reuses the same section
// layout as a normal unit (statblock / ranged / melee / enhancements /
// abilities / keywords) but every section is partitioned into labeled blocks
// per constituent unit -- nothing is merged or deduped across unit
// boundaries, since these are still legally separate units standing together.
function renderCombinedInlineTray(targetRow, combinedUnit, allTopLevelUnits) {
  const inlineDrawer = el("div", "unit-drawer unit-drawer--combined");
  const members = combinedUnit.members;
  inlineDrawer.innerHTML = `
    <div class="unit-drawer__inner">
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
            ${buildCombinedWeaponRows(members, "ranged")}
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
            ${buildCombinedWeaponRows(members, "melee")}
          </table>
        </div>
      </div>

      ${buildCombinedEnhancementsBlock(members)}
      ${buildCombinedAbilitiesBlock(members)}
      ${buildCombinedKeywordsBlock(members)}
    </div>
  `;

  const inner = inlineDrawer.querySelector(".unit-drawer__inner");
  inner.insertBefore(
    buildCombinedStatblockSection(combinedUnit.id, members),
    inner.firstChild,
  );
  inner.appendChild(buildAttachControl(combinedUnit, allTopLevelUnits));

  targetRow.insertAdjacentElement("afterend", inlineDrawer);
  currentlyOpenDrawer = inlineDrawer;
  requestAnimationFrame(() => {
    inlineDrawer.style.maxHeight = inlineDrawer.scrollHeight + 50 + "px";
  });
}

// One labeled row per constituent unit, each with its own statblock(s) and
// an "Unattach from unit" button -- unattaching removes just that one unit
// from the group and sends it back to its normal category.
// Mirrors buildStatblockSection's row layout exactly (stat boxes + label,
// all on one line) -- the only addition is an Unattach button on the same
// row, to the right of the label.
function buildCombinedStatblockSection(groupId, members) {
  const container = el("div", "unit-drawer__statblock unit-drawer__statblock--combined");
  members.forEach(m => {
    const memberBlock = el("div", "combined-statblock-member");
    m.statblocks.forEach(sb => {
      const label = m.statblocks.length > 1 ? `${m.name} — ${sb.label}` : m.name;
      const row = el("div", "statblock-row");
      row.innerHTML = `
        <div class="statblock-row__boxes">${buildStatBoxes(sb.stats)}</div>
        <span class="statblock-row__label">${sanitizeHTML(label)}</span>
      `;
      const unattachBtn = el("button", "unattach-btn", "Unattach from unit");
      unattachBtn.type = "button";
      unattachBtn.addEventListener("click", e => {
        e.stopPropagation();
        unattachUnit(groupId, m.id);
      });
      row.appendChild(unattachBtn);
      memberBlock.appendChild(row);
    });
    container.appendChild(memberBlock);
  });
  return container;
}

function buildSubHeaderRow(label) {
  return `<tr class="weapon-table__subheader-row"><td class="weapon-table__subheader" colspan="8">${sanitizeHTML(label)}</td></tr>`;
}

function buildCombinedWeaponRows(members, key) {
  const withProfiles = members.filter(m => m[key].length > 0);
  if (withProfiles.length === 0) return buildWeaponRows([]);
  return withProfiles
    .map(m => buildSubHeaderRow(m.name) + buildWeaponRows(m[key]))
    .join("");
}

function buildCombinedEnhancementsBlock(members) {
  const withEnhancements = members.filter(m => m.enhancements.length > 0);
  if (withEnhancements.length === 0) return "";

  const sections = withEnhancements
    .map(m => {
      const rows = m.enhancements
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
        <div class="abilities-block__member">
          <div class="abilities-block__member-header">${sanitizeHTML(m.name)}</div>
          ${rows}
        </div>
      `;
    })
    .join("");

  return `
    <div class="abilities-block">
      <div class="abilities-block__header abilities-block__header--enhancement">Enhancements</div>
      <div class="abilities-block__body">${sections}</div>
    </div>
  `;
}

function buildCombinedAbilitiesBlock(members) {
  const sections = members
    .map(m => {
      const coreText = m.coreRules.length > 0 ? buildRuleChips(m.coreRules) : "-";
      let inner = `<div class="ability-row"><strong class="ability-label ability-label--core">CORE:</strong> <span class="ability-text">${coreText}</span></div>`;
      if (m.factionRules.length > 0) {
        inner += `<div class="ability-row"><strong class="ability-label ability-label--faction">FACTION:</strong> <span class="ability-text">${buildRuleChips(m.factionRules)}</span></div>`;
      }
      m.abilities.forEach(a => {
        inner += `<div class="ability-row"><strong class="ability-label">${formatText(a.name)}:</strong> <span class="ability-text ability-text--desc">${buildAbilityDescHTML(a.desc)}</span></div>`;
      });
      return `
        <div class="abilities-block__member">
          <div class="abilities-block__member-header">${sanitizeHTML(m.name)}</div>
          ${inner}
        </div>
      `;
    })
    .join("");

  return `
    <div class="abilities-block">
      <div class="abilities-block__header">Abilities &amp; Rules</div>
      <div class="abilities-block__body">${sections}</div>
    </div>
  `;
}

function buildCombinedKeywordsBlock(members) {
  const withKeywords = members.filter(m => m.keywords.length > 0);
  if (withKeywords.length === 0) return "";

  const sections = withKeywords
    .map(
      m => `
        <div class="keywords-block__member">
          <div class="keywords-block__member-header">${sanitizeHTML(m.name)}</div>
          ${buildKeywordBadges(m.keywords.join(","))}
        </div>
      `,
    )
    .join("");

  return `
    <div class="keywords-block">
      <strong class="keywords-block__label">Keywords</strong>
      ${sections}
    </div>
  `;
}

// Sits at the bottom of every unit drawer, plain or combined. Lists every
// other top-level entry (including other Attached Units groups, so several
// units can be folded into one bigger combined unit) as a tap target.
function buildAttachControl(unit, allTopLevelUnits) {
  const wrapper = el("div", "attach-control");
  const candidates = allTopLevelUnits.filter(u => u.id !== unit.id);

  const btn = el("button", "attach-btn", "+ Attach Unit");
  btn.type = "button";

  const picker = el("div", "attach-picker");
  candidates.forEach(candidate => {
    const option = el(
      "button",
      "attach-picker__option",
      sanitizeHTML(candidate.name),
    );
    option.type = "button";
    option.addEventListener("click", e => {
      e.stopPropagation();
      attachUnits(unit, candidate);
    });
    picker.appendChild(option);
  });

  if (candidates.length === 0) {
    btn.disabled = true;
    btn.title = "No other units to attach";
  }

  btn.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = picker.classList.contains("attach-picker--open");
    document
      .querySelectorAll(".attach-picker--open")
      .forEach(p => p.classList.remove("attach-picker--open"));
    if (!isOpen) picker.classList.add("attach-picker--open");
  });

  wrapper.appendChild(btn);
  wrapper.appendChild(picker);
  return wrapper;
}

document.addEventListener("click", e => {
  if (e.target.closest(".attach-control")) return;
  document
    .querySelectorAll(".attach-picker--open")
    .forEach(p => p.classList.remove("attach-picker--open"));
});

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
  const dataAttr = def ? ` data-keyword="${escapeAttr(rawName)}"` : "";
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

// Some abilities (e.g. a Leader's "can be attached to..." list) are just a
// long run of bullet lines. Past 3 of them, collapse the rest behind a
// "Show more" toggle rather than dumping the whole list into the drawer.
const LIST_BULLET_RE = /^\s*[-•●■▪]\s*/;

function buildAbilityDescHTML(desc) {
  const lines = (desc || "").split("\n");
  const bulletIndices = lines
    .map((line, i) => (LIST_BULLET_RE.test(line) ? i : -1))
    .filter(i => i !== -1);

  if (bulletIndices.length <= 3) return formatText(desc);

  const cutoff = bulletIndices[2];
  const visible = lines.slice(0, cutoff + 1).join("\n");
  const hidden = lines.slice(cutoff + 1).join("\n");
  const hiddenCount = bulletIndices.length - 3;
  const toggleId = "ability-more-" + Math.random().toString(36).slice(2, 9);

  return `
    ${formatText(visible)}
    <span class="ability-desc-hidden" id="${toggleId}" hidden>${formatText(hidden)}</span>
    <br><button type="button" class="ability-show-more" data-target="${toggleId}" data-hidden-count="${hiddenCount}">Show ${hiddenCount} more</button>
  `;
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".ability-show-more");
  if (!btn) return;
  e.stopPropagation();
  const hiddenSpan = document.getElementById(btn.dataset.target);
  if (!hiddenSpan) return;
  if (hiddenSpan.hasAttribute("hidden")) {
    hiddenSpan.removeAttribute("hidden");
    btn.textContent = "Show less";
  } else {
    hiddenSpan.setAttribute("hidden", "");
    btn.textContent = `Show ${btn.dataset.hiddenCount} more`;
  }
});

function buildAbilitiesBlock(unit) {
  const coreText =
    unit.coreRules.length > 0 ? buildRuleChips(unit.coreRules) : "-";
  let innerContent = `<div class="ability-row"><strong class="ability-label ability-label--core">CORE:</strong> <span class="ability-text">${coreText}</span></div>`;

  if (unit.factionRules.length > 0) {
    innerContent += `<div class="ability-row"><strong class="ability-label ability-label--faction">FACTION:</strong> <span class="ability-text">${buildRuleChips(unit.factionRules)}</span></div>`;
  }

  unit.abilities.forEach(a => {
    innerContent += `<div class="ability-row"><strong class="ability-label">${formatText(a.name)}:</strong> <span class="ability-text ability-text--desc">${buildAbilityDescHTML(a.desc)}</span></div>`;
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
