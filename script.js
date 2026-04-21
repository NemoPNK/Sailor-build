const boardLink = "https://trello.com/b/EVZ6nToB/sailor-piece";
const directTrelloLinks = {
  "luckborn": "https://trello.com/c/MqAfEX2w",
  "eminence": "https://trello.com/c/oVFa6Jou",
  "frostbane": "https://trello.com/c/DtDaFLb9",
  "celestial favor": "https://trello.com/c/nsdSLGSm",
  "primordial rune": "https://trello.com/c/PFAheXK1",
  "radiant rune": "https://trello.com/c/FHw2DEhl",
  "kraken": "https://trello.com/c/dIZJ4xbR",
  "astral": "https://trello.com/c/p4Y99yCR",
  "dragon goddes": "https://trello.com/c/Mu0lsEAl",
  "best damage title": "https://trello.com/c/vMmiFMDA",
  "abyssal crown": "https://trello.com/c/XnwrlayY",
  "main stat hp": "https://trello.com/c/XnwrlayY",
  "main stat damage": "https://trello.com/c/XnwrlayY",
  "main stat critical damage": "https://trello.com/c/XnwrlayY"
};

const appData = {
  spotlight: [
    {
      label: "Current best sword",
      value: "Dragon goddes",
      note: "Current sword pick based on your latest meta."
    },
    {
      label: "Current best melee",
      value: "Comic emperor",
      note: "Current melee pick based on your latest meta."
    },
    {
      label: "Best artifact set",
      value: "Abyssal Crown",
      note: "Aim for the right main stat and at least 2 good sub stats."
    }
  ],
  builds: {
    luck: {
      label: "Luck",
      name: "Luck Build",
      objective: "Built for farming, drops and long grind sessions.",
      items: [
        { id: "luck-race", slot: "Race", target: "Luckborn", note: "Trello: +35% Luck, +80% Damage, +90% Max HP, +15% Sword and Melee.", link: boardLink },
        { id: "luck-clan", slot: "Clan", target: "Eminence", note: "Trello reference available. Also needed for Atomic Mastery.", link: boardLink },
        { id: "luck-title", slot: "Title", target: "Celestial Favor", note: "Trello: kill 5000 bosses. Reference buff: +50% Luck.", link: boardLink },
        { id: "luck-rune", slot: "Rune", target: "Radiant Rune", note: "Trello: rare Infinite Tower drop. Base 17.5% Luck, max 28%.", link: boardLink },
        { id: "luck-power", slot: "Power", target: "Colossus", note: "Needs confirmation in your next data pass.", link: boardLink },
        { id: "luck-passive", slot: "Spec passive", target: "Fortune chosen", note: "Name provided by you. Bonus details still needed.", link: boardLink },
        { id: "luck-bloodline", slot: "Bloodline", target: "Astral", note: "Can be expanded later with detailed buffs.", link: boardLink },
        { id: "luck-trait", slot: "Trait", target: "Emperor", note: "Manual meta pick. Source and buffs still to confirm.", link: boardLink },
        { id: "luck-relic", slot: "Relic", target: "Luck relic", note: "Target relic noted. Exact Trello data still to connect.", link: boardLink },
        { id: "luck-accessory", slot: "Accessory", target: "Kraken", note: "Boss reference exists on Trello. Accessory bonus still to connect.", link: boardLink }
      ]
    },
    sword: {
      label: "Sword",
      name: "Sword Build",
      objective: "Built to maximize sword damage around the current offensive meta.",
      items: [
        { id: "sword-race", slot: "Race", target: "Luckborn", note: "Trello: strong damage and survivability package.", link: boardLink },
        { id: "sword-clan", slot: "Clan", target: "Frostbane", note: "Trello reference available. Linked to Ice Queen Mastery.", link: boardLink },
        { id: "sword-title", slot: "Title", target: "Best damage title", note: "Exact title still missing. Dragon Queen looks like a strong Trello candidate.", link: boardLink },
        { id: "sword-rune", slot: "Rune", target: "Primordial Rune", note: "Trello: rare Infinite Tower drop. Base 75% DMG, max 120% DMG.", link: boardLink },
        { id: "sword-power", slot: "Power", target: "Colossus", note: "Needs confirmation in your next stat update.", link: boardLink },
        { id: "sword-passive", slot: "Spec passive", target: "Rampage", note: "Source and exact buff can be added later.", link: boardLink },
        { id: "sword-bloodline", slot: "Bloodline", target: "Astral", note: "Can be expanded with buffs and obtain method later.", link: boardLink },
        { id: "sword-trait", slot: "Trait", target: "Emperor", note: "Manual meta trait based on your input.", link: boardLink },
        { id: "sword-relic", slot: "Relic", target: "Damage relic", note: "Target relic noted. Exact version still to connect.", link: boardLink },
        { id: "sword-accessory", slot: "Accessory", target: "Kraken", note: "Current target accessory for the sword meta.", link: boardLink },
        { id: "sword-weapon", slot: "Weapon", target: "Dragon goddes", note: "Currently set as the best sword in your data.", link: boardLink }
      ]
    },
    melee: {
      label: "Melee",
      name: "Melee Build",
      objective: "Built for a full damage melee endgame setup.",
      items: [
        { id: "melee-race", slot: "Race", target: "Luckborn", note: "Still very strong for damage and comfort.", link: boardLink },
        { id: "melee-clan", slot: "Clan", target: "Frostbane", note: "Trello reference available. Linked to Ice Queen Mastery.", link: boardLink },
        { id: "melee-title", slot: "Title", target: "Best damage title", note: "Exact title still needs confirmation.", link: boardLink },
        { id: "melee-rune", slot: "Rune", target: "Primordial Rune", note: "Trello: very aggressive damage setup for endgame.", link: boardLink },
        { id: "melee-power", slot: "Power", target: "Colossus", note: "Manual meta pick based on your input.", link: boardLink },
        { id: "melee-passive", slot: "Spec passive", target: "Rampage", note: "Needs obtain method and exact numbers.", link: boardLink },
        { id: "melee-bloodline", slot: "Bloodline", target: "Astral", note: "Can be linked to a full info sheet later.", link: boardLink },
        { id: "melee-trait", slot: "Trait", target: "Emperor", note: "Manual meta trait based on your input.", link: boardLink },
        { id: "melee-relic", slot: "Relic", target: "Damage relic", note: "Target relic noted. Exact version still to confirm.", link: boardLink },
        { id: "melee-accessory", slot: "Accessory", target: "Kraken", note: "Used here as the current meta accessory.", link: boardLink },
        { id: "melee-weapon", slot: "Weapon", target: "Comis emperor", note: "Currently set as the best melee in your data.", link: boardLink }
      ]
    }
  },
  upgrades: [
    { id: "upgrade-skill-tree", slot: "Player upgrade", target: "Skill tree", note: "Lock in the core progression before optimizing the rest.", link: boardLink },
    { id: "upgrade-tower", slot: "Player upgrade", target: "Tower upgrade", note: "Important for endgame scaling and rune progression.", link: boardLink },
    { id: "upgrade-boss-raid", slot: "Player upgrade", target: "Boss raid upgrade", note: "Priority if you farm meta accessories and titles.", link: boardLink },
    { id: "upgrade-z-stats", slot: "Player upgrade", target: "Full Z stats", note: "Full stat cap objective.", link: boardLink },
    { id: "upgrade-ascend", slot: "Player upgrade", target: "Max ascend (1-10)", note: "Final checkpoint to validate the max tier.", link: boardLink },
    { id: "upgrade-haki", slot: "Player upgrade", target: "Max Haki level", note: "Keep updated whenever the cap changes.", link: boardLink },
    { id: "upgrade-rune", slot: "Player upgrade", target: "Max Rune level", note: "Independent from the Primordial / Radiant choice.", link: boardLink },
    { id: "upgrade-b10", slot: "Player upgrade", target: "B10 weapon and accessories", note: "Blessing details can be added later from Trello.", link: boardLink }
  ],
  artifacts: [
    { id: "artifact-helmet", slot: "Helmet", target: "Main stat HP", note: "Wanted subs: DMG, Critical damage, Critical chance.", link: boardLink },
    { id: "artifact-glove", slot: "Glove", target: "Main stat Damage", note: "Wanted subs: Critical damage, Critical chance.", link: boardLink },
    { id: "artifact-armor", slot: "Armor", target: "Main stat Critical damage", note: "Wanted subs: DMG, Critical damage, Critical chance.", link: boardLink },
    { id: "artifact-boots", slot: "Boots", target: "Main stat Damage", note: "Wanted subs: DMG, Critical damage, Critical chance.", link: boardLink }
  ],
  references: [
    { title: "Luckborn", body: "Verified on Trello. Buffs found: +35% Luck, +80% Damage, +90% Max HP, +15% SwordDamageMulti, +15% MeleeDamageMulti." },
    { title: "Radiant Rune", body: "Rare Infinite Tower drop. Base 17.5% Luck, max 28% Luck." },
    { title: "Primordial Rune", body: "Rare Infinite Tower drop. Base 75% DMG, max 120% DMG." },
    { title: "Celestial Favor", body: "Verified title on Trello. Requirement: kill 5000 bosses. Buff found: +50% Luck." },
    { title: "Eminence / Frostbane", body: "Both clans are present on Trello. Eminence is linked to Atomic Mastery, Frostbane to Ice Queen Mastery." },
    { title: "Dragon Queen", body: "Listed on Trello at 97.5% Damage. Strong candidate for your best damage title slot." }
  ],
  missing: [
    "The exact name of the best damage title for Sword and Melee builds.",
    "The exact spelling of Dragon goddes and Comis emperor for future card linking.",
    "Detailed buffs for Colossus, Rampage, Fortune chosen, Astral, Emperor, Luck relic and Damage relic.",
    "The exact source and stats for the Kraken accessory.",
    "Precise caps for Max Haki level, Max Rune level and Blessing B10 if you want more detailed tracking."
  ]
};

const storageKey = "sailor-build-progress-v2";
const buildKeys = Object.keys(appData.builds);
const defaultState = {
  activeSection: "info",
  activeBuild: buildKeys[0],
  buildFilter: "all",
  buildSearch: "",
  checked: {}
};

const state = loadState();

const spotlightGrid = document.querySelector("#spotlight-grid");
const buildSwitcher = document.querySelector("#build-switcher");
const buildChecklist = document.querySelector("#build-checklist");
const upgradesChecklist = document.querySelector("#upgrades-checklist");
const artifactsChecklist = document.querySelector("#artifacts-checklist");
const referenceGrid = document.querySelector("#reference-grid");
const missingList = document.querySelector("#missing-list");
const sectionTabs = document.querySelector("#section-tabs");
const sideRail = document.querySelector("#side-rail");
const summaryGridUpgrade = document.querySelector("#summary-grid-upgrade");
const itemTemplate = document.querySelector("#check-item-template");
const sectionPanels = document.querySelectorAll("[data-section-panel]");
const buildSearchInput = document.querySelector("#build-search");
const buildFilters = document.querySelector("#build-filters");

const activeBuildLabel = document.querySelector("#active-build-label");
const activeBuildName = document.querySelector("#active-build-name");
const activeBuildObjective = document.querySelector("#active-build-objective");

const buildProgressCopy = document.querySelector("#build-progress-copy");
const buildProgressFill = document.querySelector("#build-progress-fill");
const upgradesProgressCopy = document.querySelector("#upgrades-progress-copy");
const upgradesProgressFill = document.querySelector("#upgrades-progress-fill");
const artifactsProgressCopy = document.querySelector("#artifacts-progress-copy");
const artifactsProgressFill = document.querySelector("#artifacts-progress-fill");
const deckBuildName = document.querySelector("#deck-build-name");
const deckBuildRole = document.querySelector("#deck-build-role");
const deckBuildProgress = document.querySelector("#deck-build-progress");
const deckUpgradesProgress = document.querySelector("#deck-upgrades-progress");
const deckArtifactsProgress = document.querySelector("#deck-artifacts-progress");

document.querySelector("#reset-all").addEventListener("click", () => {
  state.checked = {};
  saveState();
  renderApp();
});

document.querySelector("#reset-build").addEventListener("click", () => {
  const build = appData.builds[state.activeBuild];
  build.items.forEach((item) => {
    delete state.checked[item.id];
  });
  saveState();
  renderApp();
});

renderApp();

buildSearchInput.addEventListener("input", (event) => {
  state.buildSearch = event.target.value;
  saveState();
  renderApp();
});

buildFilters.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.buildFilter = button.dataset.filter;
    saveState();
    renderApp();
  });
});

function renderApp() {
  renderSectionTabs();
  renderSectionPanels();
  renderSpotlight();
  renderBuildTabs();
  renderBuildChecklist();
  renderChecklist(upgradesChecklist, appData.upgrades);
  renderChecklist(artifactsChecklist, appData.artifacts);
  renderReferences();
  renderMissing();
  renderSummary();
  renderProgress();
  renderCommandDeck();
}

function renderSectionTabs() {
  const buttons = document.querySelectorAll("[data-section]");
  buttons.forEach((button) => {
    const isActive = button.dataset.section === state.activeSection;
    button.classList.toggle("is-active", isActive);

    if (!button.dataset.bound) {
      button.addEventListener("click", () => {
        state.activeSection = button.dataset.section;
        saveState();
        renderApp();
      });
      button.dataset.bound = "true";
    }
  });
}

function renderSectionPanels() {
  sectionPanels.forEach((panel) => {
    const shouldShow = panel.dataset.sectionPanel === state.activeSection;
    panel.classList.toggle("is-visible", shouldShow);
  });
}

function renderSpotlight() {
  spotlightGrid.replaceChildren();

  appData.spotlight.forEach((item) => {
    const card = document.createElement("article");
    card.className = "spotlight-card";
    card.innerHTML = `
      <p class="eyebrow">${item.label}</p>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    `;
    spotlightGrid.append(card);
  });
}

function renderBuildTabs() {
  buildSwitcher.replaceChildren();

  buildKeys.forEach((key) => {
    const build = appData.builds[key];
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.build = key;
    button.className = `build-tab${state.activeBuild === key ? " is-active" : ""}`;
    button.textContent = build.label;
    button.addEventListener("click", () => {
      state.activeBuild = key;
      saveState();
      renderApp();
    });
    buildSwitcher.append(button);
  });
}

function renderBuildChecklist() {
  const build = appData.builds[state.activeBuild];
  const filteredItems = getFilteredBuildItems(build.items);
  activeBuildLabel.textContent = `${build.label} setup`;
  activeBuildName.textContent = build.name;
  activeBuildObjective.textContent = `${build.objective} Showing ${filteredItems.length}/${build.items.length} entries.`;
  buildSearchInput.value = state.buildSearch;
  renderBuildFilters();
  renderChecklist(buildChecklist, filteredItems);
}

function renderChecklist(container, items) {
  container.replaceChildren();

  items.forEach((item) => {
    const fragment = itemTemplate.content.cloneNode(true);
    const wrapper = fragment.querySelector(".check-item");
    const input = fragment.querySelector("input");
    const slot = fragment.querySelector(".check-item__slot");
    const target = fragment.querySelector(".check-item__target");
    const note = fragment.querySelector(".check-item__note");
    const statusBadge = fragment.querySelector(".status-badge");
    const link = fragment.querySelector(".trello-link");

    const checked = Boolean(state.checked[item.id]);

    input.checked = checked;
    slot.textContent = item.slot;
    target.textContent = item.target;
    note.textContent = item.note;
    statusBadge.textContent = checked ? "ok" : "not ok";
    link.href = getTrelloLink(item);

    if (checked) {
      wrapper.classList.add("is-done");
      statusBadge.classList.add("is-done");
    }

    input.addEventListener("change", () => {
      state.checked[item.id] = input.checked;
      if (!input.checked) {
        delete state.checked[item.id];
      }
      saveState();
      renderApp();
    });

    container.append(fragment);
  });
}

function renderReferences() {
  referenceGrid.replaceChildren();

  appData.references.forEach((item) => {
    const card = document.createElement("article");
    card.className = "reference-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    referenceGrid.append(card);
  });
}

function renderMissing() {
  missingList.replaceChildren();

  appData.missing.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    missingList.append(li);
  });
}

function renderSummary() {
  summaryGridUpgrade.replaceChildren();

  const build = appData.builds[state.activeBuild];
  const overallItems = [
    ...buildKeys.flatMap((key) => appData.builds[key].items),
    ...appData.upgrades,
    ...appData.artifacts
  ];

  const cards = [
    {
      label: "Global completion",
      value: formatPercent(getCompletion(overallItems).percent),
      note: `${getCompletion(overallItems).done}/${overallItems.length} completed goals`
    },
    {
      label: build.name,
      value: formatPercent(getCompletion(build.items).percent),
      note: `${getCompletion(build.items).done}/${build.items.length} completed slots`
    },
    {
      label: "Player upgrades",
      value: formatPercent(getCompletion(appData.upgrades).percent),
      note: `${getCompletion(appData.upgrades).done}/${appData.upgrades.length} upgrades done`
    },
    {
      label: "Artifact set",
      value: formatPercent(getCompletion(appData.artifacts).percent),
      note: `${getCompletion(appData.artifacts).done}/${appData.artifacts.length} tuned pieces`
    }
  ];

  cards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `
      <p class="eyebrow">${item.label}</p>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    `;
    summaryGridUpgrade.append(card);
  });
}

function renderBuildFilters() {
  buildFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === state.buildFilter);
  });
}

function renderProgress() {
  const buildStats = getCompletion(appData.builds[state.activeBuild].items);
  const upgradesStats = getCompletion(appData.upgrades);
  const artifactStats = getCompletion(appData.artifacts);

  buildProgressCopy.textContent = `${buildStats.done}/${buildStats.total} - ${formatPercent(buildStats.percent)}`;
  buildProgressFill.style.width = `${buildStats.percent}%`;

  upgradesProgressCopy.textContent = `${upgradesStats.done}/${upgradesStats.total} - ${formatPercent(upgradesStats.percent)}`;
  upgradesProgressFill.style.width = `${upgradesStats.percent}%`;

  artifactsProgressCopy.textContent = `${artifactStats.done}/${artifactStats.total} - ${formatPercent(artifactStats.percent)}`;
  artifactsProgressFill.style.width = `${artifactStats.percent}%`;
}

function renderCommandDeck() {
  const build = appData.builds[state.activeBuild];
  const buildStats = getCompletion(build.items);
  const upgradesStats = getCompletion(appData.upgrades);
  const artifactStats = getCompletion(appData.artifacts);

  deckBuildName.textContent = build.name;
  deckBuildRole.textContent = build.objective;
  deckBuildProgress.textContent = `${buildStats.done}/${buildStats.total} - ${formatPercent(buildStats.percent)}`;
  deckUpgradesProgress.textContent = `${upgradesStats.done}/${upgradesStats.total} - ${formatPercent(upgradesStats.percent)}`;
  deckArtifactsProgress.textContent = `${artifactStats.done}/${artifactStats.total} - ${formatPercent(artifactStats.percent)}`;
}

function getCompletion(items) {
  const total = items.length;
  const done = items.filter((item) => Boolean(state.checked[item.id])).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, percent };
}

function formatPercent(value) {
  return `${value}%`;
}

function getFilteredBuildItems(items) {
  const query = state.buildSearch.trim().toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      query.length === 0 ||
      item.slot.toLowerCase().includes(query) ||
      item.target.toLowerCase().includes(query) ||
      item.note.toLowerCase().includes(query);

    if (!matchesSearch) {
      return false;
    }

    const checked = Boolean(state.checked[item.id]);
    if (state.buildFilter === "done") {
      return checked;
    }
    if (state.buildFilter === "missing") {
      return !checked;
    }
    return true;
  });
}

function getTrelloLink(item) {
  const key = item.target.toLowerCase();
  return directTrelloLinks[key] ?? item.link ?? boardLink;
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return { ...defaultState };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      activeSection: ["info", "build", "upgrade", "artifact"].includes(parsed.activeSection)
        ? parsed.activeSection
        : defaultState.activeSection,
      activeBuild: buildKeys.includes(parsed.activeBuild) ? parsed.activeBuild : defaultState.activeBuild,
      buildFilter: ["all", "missing", "done"].includes(parsed.buildFilter)
        ? parsed.buildFilter
        : defaultState.buildFilter,
      buildSearch: typeof parsed.buildSearch === "string" ? parsed.buildSearch : defaultState.buildSearch,
      checked: parsed.checked ?? {}
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}
