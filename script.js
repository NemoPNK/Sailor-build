const appData = {
  spotlight: [
    {
      label: "Current best sword",
      value: "Dragon goddes",
      note: "Meta manuelle, orthographe a confirmer selon ton naming exact."
    },
    {
      label: "Current best melee",
      value: "Comis emperor",
      note: "Meta manuelle fournie par toi, prete a etre remplacee au prochain patch."
    },
    {
      label: "Best artefact set",
      value: "Abyssal Crown",
      note: "Focus sur les bonnes main stats et 2 sub stats minimum."
    },
    {
      label: "Source de verif",
      value: "Trello officiel",
      note: "Le site melange tes infos meta et les references du board public."
    }
  ],
  builds: {
    luck: {
      label: "Luck",
      name: "Luck Build",
      objective: "Optimise le farm, les drops et les sessions de grind longues.",
      items: [
        {
          id: "luck-race",
          slot: "Race",
          target: "Luckborn",
          note: "Trello: +35% Luck, +80% Damage, +90% Max HP, +15% Sword et Melee.",
          verified: true
        },
        {
          id: "luck-clan",
          slot: "Clan",
          target: "Eminence",
          note: "Reference Trello disponible. Aussi necessaire pour Atomic Mastery.",
          verified: true
        },
        {
          id: "luck-title",
          slot: "Title",
          target: "Celestial Favor",
          note: "Trello: tuer 5000 boss. Buff reference: +50% Luck.",
          verified: true
        },
        {
          id: "luck-rune",
          slot: "Rune",
          target: "Radiant Rune",
          note: "Trello: drop rare Infinite Tower. Base 17.5% Luck, max 28%.",
          verified: true
        },
        {
          id: "luck-power",
          slot: "Power",
          target: "Colossus",
          note: "A confirmer dans ta prochaine passe de data."
        },
        {
          id: "luck-passive",
          slot: "Spec passive",
          target: "Fortune chosen",
          note: "Nom fourni par toi, details de bonus a completer."
        },
        {
          id: "luck-bloodline",
          slot: "Bloodline",
          target: "Astral",
          note: "A preciser si tu veux les buffs affiches en detail."
        },
        {
          id: "luck-trait",
          slot: "Trait",
          target: "Emperor",
          note: "Trait meta manuelle, source/buffs a confirmer."
        },
        {
          id: "luck-relic",
          slot: "Relic",
          target: "Luck relic",
          note: "Nom cible note, mais les infos Trello exactes sont a raccorder."
        },
        {
          id: "luck-accessory",
          slot: "Accessories",
          target: "Kraken",
          note: "Reference boss Trello presente, mais bonus d'accessoire a lier ensuite.",
          verified: true
        }
      ]
    },
    sword: {
      label: "Sword",
      name: "Sword Build",
      objective: "Maximise les degats d'epee autour de la meta offensive actuelle.",
      items: [
        {
          id: "sword-race",
          slot: "Race",
          target: "Luckborn",
          note: "Trello: gros package damage + survivabilite.",
          verified: true
        },
        {
          id: "sword-clan",
          slot: "Clan",
          target: "Frostbane",
          note: "Reference Trello disponible. Lie a Ice Queen Mastery.",
          verified: true
        },
        {
          id: "sword-title",
          slot: "Title",
          target: "Best damage title",
          note: "Nom exact encore a definir. Dragon Queen semble etre une piste meta Tres forte sur Trello."
        },
        {
          id: "sword-rune",
          slot: "Rune",
          target: "Primordial Rune",
          note: "Trello: rare Infinite Tower. Base 75% DMG, max 120% DMG.",
          verified: true
        },
        {
          id: "sword-power",
          slot: "Power",
          target: "Colossus",
          note: "A confirmer dans ton prochain dump de stats."
        },
        {
          id: "sword-passive",
          slot: "Spec passive",
          target: "Rampage",
          note: "Source et buff exact a brancher plus tard."
        },
        {
          id: "sword-bloodline",
          slot: "Bloodline",
          target: "Astral",
          note: "Peut etre detaille avec buff et obtention des que tu me les donnes."
        },
        {
          id: "sword-trait",
          slot: "Trait",
          target: "Emperor",
          note: "Trait meta manuelle fournie par toi."
        },
        {
          id: "sword-relic",
          slot: "Relic",
          target: "Damage relic",
          note: "Nom cible note, version exacte a relier au Trello ou a ton doc perso."
        },
        {
          id: "sword-accessory",
          slot: "Accessories",
          target: "Kraken",
          note: "Accessoire cible actuel pour la meta sword.",
          verified: true
        },
        {
          id: "sword-weapon",
          slot: "Weapon",
          target: "Dragon goddes",
          note: "Actuellement defini comme meilleure sword dans tes infos."
        }
      ]
    },
    melee: {
      label: "Melee",
      name: "Melee Build",
      objective: "Pousse le corps-a-corps sur une configuration full damage endgame.",
      items: [
        {
          id: "melee-race",
          slot: "Race",
          target: "Luckborn",
          note: "Toujours tres forte pour conserver du damage et du confort.",
          verified: true
        },
        {
          id: "melee-clan",
          slot: "Clan",
          target: "Frostbane",
          note: "Reference Trello disponible. Lie a Ice Queen Mastery.",
          verified: true
        },
        {
          id: "melee-title",
          slot: "Title",
          target: "Best damage title",
          note: "Le nom exact du titre est encore a verrouiller."
        },
        {
          id: "melee-rune",
          slot: "Rune",
          target: "Primordial Rune",
          note: "Trello: setup damage tres agressif pour l'endgame.",
          verified: true
        },
        {
          id: "melee-power",
          slot: "Power",
          target: "Colossus",
          note: "Meta manuelle fournie par toi."
        },
        {
          id: "melee-passive",
          slot: "Spec passive",
          target: "Rampage",
          note: "A completer avec son obtention et ses chiffres."
        },
        {
          id: "melee-bloodline",
          slot: "Bloodline",
          target: "Astral",
          note: "A lier a une fiche complete plus tard."
        },
        {
          id: "melee-trait",
          slot: "Trait",
          target: "Emperor",
          note: "Trait meta manuelle fournie par toi."
        },
        {
          id: "melee-relic",
          slot: "Relic",
          target: "Damage relic",
          note: "Nom cible note, version exacte a confirmer."
        },
        {
          id: "melee-accessory",
          slot: "Accessories",
          target: "Kraken",
          note: "Repris comme accessoire meta actuel.",
          verified: true
        },
        {
          id: "melee-weapon",
          slot: "Weapon",
          target: "Comis emperor",
          note: "Actuellement defini comme meilleur melee dans tes infos."
        }
      ]
    }
  },
  upgrades: [
    {
      id: "upgrade-skill-tree",
      slot: "Player upgrade",
      target: "Skill tree",
      note: "Verrouille toute la progression de base avant d'optimiser le reste."
    },
    {
      id: "upgrade-tower",
      slot: "Player upgrade",
      target: "Tower upgrade",
      note: "Important pour le scaling endgame et les runes."
    },
    {
      id: "upgrade-boss-raid",
      slot: "Player upgrade",
      target: "Boss raid upgrade",
      note: "Prioritaire si tu farm la meta accessoires et titres."
    },
    {
      id: "upgrade-z-stats",
      slot: "Player upgrade",
      target: "Full Z stats",
      note: "Objectif de stat cap complet."
    },
    {
      id: "upgrade-ascend",
      slot: "Player upgrade",
      target: "Max ascend (1-10)",
      note: "Checkpoint final pour valider le palier max."
    },
    {
      id: "upgrade-haki",
      slot: "Player upgrade",
      target: "Max Haki level",
      note: "A garder a jour a chaque patch si le cap bouge."
    },
    {
      id: "upgrade-rune",
      slot: "Player upgrade",
      target: "Max Rune level",
      note: "Independant du choix Primordial / Radiant."
    },
    {
      id: "upgrade-b10",
      slot: "Player upgrade",
      target: "B10 Weapon and accessories",
      note: "Blessing details a completer via Trello ou ton futur doc."
    }
  ],
  artifacts: [
    {
      id: "artifact-helmet",
      slot: "Helmet",
      target: "Main stat HP",
      note: "Subs vises: DMG, Critical damage, Critical chance."
    },
    {
      id: "artifact-glove",
      slot: "Glove",
      target: "Main stat Damage",
      note: "Subs vises: Critical damage, Critical chance."
    },
    {
      id: "artifact-armor",
      slot: "Armor",
      target: "Main stat Critical damage",
      note: "Subs vises: DMG, Critical damage, Critical chance."
    },
    {
      id: "artifact-boots",
      slot: "Boots",
      target: "Main stat Damage",
      note: "Subs vises: DMG, Critical damage, Critical chance."
    }
  ],
  references: [
    {
      title: "Luckborn",
      body: "Race verifiee sur Trello. Buffs releves: +35% Luck, +80% Damage, +90% Max HP, +15% SwordDamageMulti, +15% MeleeDamageMulti."
    },
    {
      title: "Radiant Rune",
      body: "Drop rare Infinite Tower. Base 17.5% Luck, max 28% Luck."
    },
    {
      title: "Primordial Rune",
      body: "Drop rare Infinite Tower. Base 75% DMG, max 120% DMG."
    },
    {
      title: "Celestial Favor",
      body: "Titre verifie sur Trello. Obtainment indique: tuer 5000 boss. Buff releve: +50% Luck."
    },
    {
      title: "Eminence / Frostbane",
      body: "Les deux clans sont bien presents sur le Trello. Eminence est lie a Atomic Mastery, Frostbane a Ice Queen Mastery."
    },
    {
      title: "Dragon Queen",
      body: "Titre Trello releve a 97.5% Damage. Possible candidate pour ton champ 'best damage title' si c'est bien celui que tu vises."
    }
  ],
  missing: [
    "Le nom exact du 'best damage title' pour les builds Sword et Melee.",
    "L'orthographe exacte de 'Dragon goddes' et 'Comis emperor' pour afficher les bonnes cartes plus tard.",
    "Les bonus details de Colossus, Rampage, Fortune chosen, Astral, Emperor, Luck relic et Damage relic.",
    "La source exacte et les stats de l'accessoire Kraken si tu veux une vraie fiche complete dans le site.",
    "Les valeurs ou caps precis de Max Haki level, Max Rune level et Blessing B10 si tu veux du suivi plus detaille qu'une simple case."
  ]
};

const storageKey = "sailor-build-progress-v1";
const buildKeys = Object.keys(appData.builds);
const defaultState = {
  activeSection: "build",
  activeBuild: buildKeys[0],
  checked: {}
};

const state = loadState();

const spotlightGrid = document.querySelector("#spotlight-grid");
const summaryGrid = document.querySelector("#summary-grid");
const buildSwitcher = document.querySelector("#build-switcher");
const buildChecklist = document.querySelector("#build-checklist");
const upgradesChecklist = document.querySelector("#upgrades-checklist");
const artifactsChecklist = document.querySelector("#artifacts-checklist");
const referenceGrid = document.querySelector("#reference-grid");
const referenceGridArtifact = document.querySelector("#reference-grid-artifact");
const missingList = document.querySelector("#missing-list");
const buildTabsInline = document.querySelector("#build-tabs-inline");
const sectionTabs = document.querySelector("#section-tabs");
const summaryGridUpgrade = document.querySelector("#summary-grid-upgrade");
const itemTemplate = document.querySelector("#check-item-template");
const sectionPanels = document.querySelectorAll("[data-section-panel]");

const activeBuildLabel = document.querySelector("#active-build-label");
const activeBuildName = document.querySelector("#active-build-name");
const activeBuildObjective = document.querySelector("#active-build-objective");

const buildProgressCopy = document.querySelector("#build-progress-copy");
const buildProgressFill = document.querySelector("#build-progress-fill");
const upgradesProgressCopy = document.querySelector("#upgrades-progress-copy");
const upgradesProgressFill = document.querySelector("#upgrades-progress-fill");
const artifactsProgressCopy = document.querySelector("#artifacts-progress-copy");
const artifactsProgressFill = document.querySelector("#artifacts-progress-fill");

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

function renderApp() {
  renderSectionTabs();
  renderSectionPanels();
  renderSpotlight();
  renderBuildTabs();
  renderBuildChecklist();
  renderChecklist(upgradesChecklist, appData.upgrades);
  renderChecklist(artifactsChecklist, appData.artifacts);
  renderReferences();
  renderArtifactReferences();
  renderMissing();
  renderSummary();
  renderProgress();
}

function renderSectionTabs() {
  const buttons = sectionTabs.querySelectorAll("[data-section]");
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
      <p class="panel__label">${item.label}</p>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    `;
    spotlightGrid.append(card);
  });
}

function renderBuildTabs() {
  buildSwitcher.replaceChildren();
  buildTabsInline.replaceChildren();

  buildKeys.forEach((key) => {
    const build = appData.builds[key];
    buildSwitcher.append(createBuildButton(key, build, true));
    buildTabsInline.append(createBuildButton(key, build, false));
  });
}

function createBuildButton(key, build, useSelectLabel) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.build = key;
  button.className = `build-tab${state.activeBuild === key ? " is-active" : ""}`;
  button.textContent = useSelectLabel ? `${build.label} build` : build.label;
  button.addEventListener("click", () => {
    state.activeBuild = key;
    saveState();
    renderApp();
  });
  return button;
}

function renderBuildChecklist() {
  const build = appData.builds[state.activeBuild];
  activeBuildLabel.textContent = `${build.label} focus`;
  activeBuildName.textContent = build.name;
  activeBuildObjective.textContent = build.objective;
  renderChecklist(buildChecklist, build.items);
}

function renderChecklist(container, items) {
  container.replaceChildren();

  items.forEach((item) => {
    const fragment = itemTemplate.content.cloneNode(true);
    const wrapper = fragment.querySelector(".check-item");
    const input = fragment.querySelector("input");
    const slot = fragment.querySelector(".check-item__slot");
    const statusBadge = fragment.querySelector(".status-badge");
    const target = fragment.querySelector(".check-item__target");
    const note = fragment.querySelector(".check-item__note");

    const checked = Boolean(state.checked[item.id]);

    input.checked = checked;
    slot.textContent = item.slot;
    target.textContent = item.target;
    note.textContent = item.note;
    statusBadge.textContent = checked ? "ok" : "not ok";

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

function renderArtifactReferences() {
  referenceGridArtifact.replaceChildren();

  const cards = [
    {
      title: "Best set",
      body: "Abyssal Crown reste la cible principale pour ton endgame."
    },
    {
      title: "Sub stats",
      body: "2 bonnes sub stats minimum pour valider une piece."
    }
  ];

  cards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "reference-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    referenceGridArtifact.append(card);
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
  summaryGrid.replaceChildren();
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
      note: `${getCompletion(overallItems).done}/${overallItems.length} objectifs valides`
    },
    {
      label: `${build.name}`,
      value: formatPercent(getCompletion(build.items).percent),
      note: `${getCompletion(build.items).done}/${build.items.length} slots completes`
    },
    {
      label: "Player upgrades",
      value: formatPercent(getCompletion(appData.upgrades).percent),
      note: `${getCompletion(appData.upgrades).done}/${appData.upgrades.length} upgrades faits`
    },
    {
      label: "Artefact set",
      value: formatPercent(getCompletion(appData.artifacts).percent),
      note: `${getCompletion(appData.artifacts).done}/${appData.artifacts.length} pieces reglees`
    }
  ];

  cards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `
      <p class="panel__label">${item.label}</p>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    `;
    summaryGrid.append(card);
    summaryGridUpgrade.append(card.cloneNode(true));
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

function getCompletion(items) {
  const total = items.length;
  const done = items.filter((item) => Boolean(state.checked[item.id])).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, percent };
}

function formatPercent(value) {
  return `${value}%`;
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return { ...defaultState };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      activeSection: ["build", "upgrade", "artifact"].includes(parsed.activeSection)
        ? parsed.activeSection
        : defaultState.activeSection,
      activeBuild: buildKeys.includes(parsed.activeBuild) ? parsed.activeBuild : defaultState.activeBuild,
      checked: parsed.checked ?? {}
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}
