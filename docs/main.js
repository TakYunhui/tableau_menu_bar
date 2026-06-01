const MENU_CONFIG = window.TABLEAU_MENU_CONFIG || [];

const state = {
  openIds: new Set(),
};

const menuRootEl = document.getElementById("menu-root");

function getCurrentUrl() {
  try {
    if (window.top && window.top.location && window.top.location.href) {
      return window.top.location.href;
    }
  } catch (error) {
    // Reading top-frame location can fail in embedded preview contexts.
  }

  return window.location.href;
}

function isItemActive(item) {
  const currentUrl = getCurrentUrl();
  const activeMatchers = item.activeMatchers || [];

  if (activeMatchers.some((matcher) => currentUrl.includes(matcher))) {
    return true;
  }

  const children = item.children || [];
  return children.some((child) => Boolean(child.url && currentUrl.includes(child.url)));
}

function moveSameTab(targetUrl, label) {
  if (!targetUrl) {
    return;
  }

  try {
    window.top.location.href = targetUrl;
    return;
  } catch (error) {
    // Some Tableau contexts can block direct top-frame navigation.
  }

  window.open(targetUrl, "_self");
}

function toggleGroup(itemId) {
  if (state.openIds.has(itemId)) {
    state.openIds.delete(itemId);
  } else {
    state.openIds.add(itemId);
  }

  renderMenu();
}

function createIcon(iconKey) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("menu-icon");

  const stroke = document.createElementNS("http://www.w3.org/2000/svg", "path");
  stroke.setAttribute("fill", "none");
  stroke.setAttribute("stroke", "currentColor");
  stroke.setAttribute("stroke-linecap", "round");
  stroke.setAttribute("stroke-linejoin", "round");
  stroke.setAttribute("stroke-width", "1.8");

  const iconPaths = {
    overview: "M4 6h16M4 12h10M4 18h13",
    finance: "M5 17V9m5 8V5m5 12v-6m5 6V7",
    production: "M5 18V9l7-4 7 4v9M9 18v-4h6v4",
    sales: "M5 17l4-4 3 3 6-7",
    purchase: "M4 6h2l2.4 8.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 1-.8L21 9H8",
  };

  stroke.setAttribute("d", iconPaths[iconKey] || iconPaths.overview);
  svg.appendChild(stroke);
  return svg;
}

function createChildItem(child) {
  const row = document.createElement(child.url ? "button" : "div");
  row.className = `child-row kind-${child.kind}${child.url ? " is-link" : ""}`;

  if (child.url) {
    row.type = "button";
    row.addEventListener("click", () => {
      moveSameTab(child.url, child.label);
    });
  }

  const textWrap = document.createElement("div");
  textWrap.className = "child-copy";

  const label = document.createElement("span");
  label.className = "child-label";
  label.textContent = child.label;
  textWrap.appendChild(label);

  row.appendChild(textWrap);
  return row;
}

function createGroup(item) {
  const group = document.createElement("article");
  group.className = `menu-group${isItemActive(item) ? " is-active" : ""}`;

  const isOpen = state.openIds.has(item.id);
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.addEventListener("click", () => {
    toggleGroup(item.id);
  });

  const copy = document.createElement("div");
  copy.className = "menu-copy";

  const heading = document.createElement("div");
  heading.className = "menu-heading";
  heading.appendChild(createIcon(item.icon));

  const title = document.createElement("span");
  title.className = "menu-title";
  title.textContent = item.displayLabel || item.label;
  heading.appendChild(title);
  copy.appendChild(heading);

  toggle.appendChild(copy);

  const arrow = document.createElement("span");
  arrow.className = `menu-arrow${isOpen ? " is-open" : ""}`;
  arrow.textContent = "›";
  toggle.appendChild(arrow);

  group.appendChild(toggle);

  const panel = document.createElement("div");
  panel.className = "group-panel";
  panel.hidden = !isOpen;

  (item.children || []).forEach((child) => {
    panel.appendChild(createChildItem(child));
  });

  group.appendChild(panel);
  return group;
}

function renderMenu() {
  menuRootEl.innerHTML = "";

  MENU_CONFIG.forEach((item) => {
    menuRootEl.appendChild(createGroup(item));
  });
}

async function initializeTableauExtension() {
  if (!window.tableau || !window.tableau.extensions) {
    return;
  }

  try {
    await window.tableau.extensions.initializeAsync();
  } catch (error) {
    // Ignore preview-only initialization failures in the compact UI.
  }
}

function bootstrap() {
  renderMenu();
  initializeTableauExtension();
}

bootstrap();
