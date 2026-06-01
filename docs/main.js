const MENU_CONFIG = window.TABLEAU_MENU_CONFIG || [];

const state = {
  openIds: new Set(),
};

const statusEl = document.getElementById("status");
const menuRootEl = document.getElementById("menu-root");

function setStatus(message, tone) {
  statusEl.textContent = message;
  statusEl.className = `status ${tone}`;
}

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

  const entryUrl = item.entry && item.entry.url;
  return Boolean(entryUrl && currentUrl.includes(entryUrl));
}

function moveSameTab(targetUrl, label) {
  if (!targetUrl) {
    setStatus(`${label} URL이 아직 없다`, "is-warning");
    return;
  }

  setStatus(`${label} 이동 중`, "is-pending");

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

function createBadge(kind) {
  const badge = document.createElement("span");
  badge.className = `chip chip-${kind}`;

  if (kind === "entry") {
    badge.textContent = "첫 탭";
  } else if (kind === "tab") {
    badge.textContent = "상단 탭";
  } else {
    badge.textContent = "추후";
  }

  return badge;
}

function createChildItem(child) {
  const row = document.createElement(child.url ? "button" : "div");
  row.className = `child-row${child.url ? " is-link" : ""}`;

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
  row.appendChild(createBadge(child.kind));
  return row;
}

function createGroup(item) {
  const group = document.createElement("article");
  group.className = `menu-group${isItemActive(item) ? " is-active" : ""}`;

  if (item.entry && item.entry.url) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-link";
    button.addEventListener("click", () => {
      moveSameTab(item.entry.url, item.label);
    });

    const copy = document.createElement("div");
    copy.className = "menu-copy";

    const title = document.createElement("span");
    title.className = "menu-title";
    title.textContent = item.label;
    copy.appendChild(title);

    button.appendChild(copy);

    const arrow = document.createElement("span");
    arrow.className = "menu-arrow";
    arrow.textContent = "↗";
    button.appendChild(arrow);

    group.appendChild(button);
    return group;
  }

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

  const title = document.createElement("span");
  title.className = "menu-title";
  title.textContent = item.label;
  copy.appendChild(title);

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
    setStatus("미리보기", "is-warning");
    return;
  }

  try {
    await window.tableau.extensions.initializeAsync();
    setStatus("연결됨", "is-ready");
  } catch (error) {
    const message = error && error.message ? error.message : "초기화 제한";
    setStatus(message, "is-warning");
  }
}

function bootstrap() {
  renderMenu();
  initializeTableauExtension();
}

bootstrap();
