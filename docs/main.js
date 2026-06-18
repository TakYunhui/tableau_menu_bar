const MENU_CONFIG = window.TABLEAU_MENU_CONFIG || [];

const state = {
  currentDashboardName: "",
};

const menuRootEl = document.getElementById("menu-root");

function normalizeUrl(rawUrl) {
  if (!rawUrl) {
    return "";
  }

  const [withoutHash] = rawUrl.split("#");
  const [withoutQuery] = withoutHash.split("?");
  return withoutQuery.replace(/\/+$/, "");
}

function getCurrentUrl() {
  try {
    if (window.top && window.top.location && window.top.location.href) {
      return window.top.location.href;
    }
  } catch (error) {
    return window.location.href;
  }

  return window.location.href;
}

function normalizeDashboardName(rawName) {
  return String(rawName || "").trim().replace(/\s+/g, " ");
}

function getCurrentDashboardName() {
  return normalizeDashboardName(state.currentDashboardName);
}

function getDashboardAliases(child) {
  if (Array.isArray(child.dashboardNames)) {
    return child.dashboardNames.map(normalizeDashboardName).filter(Boolean);
  }

  if (child.dashboardName) {
    return [normalizeDashboardName(child.dashboardName)].filter(Boolean);
  }

  return [];
}

function isUrlMatch(targetUrl, currentUrl) {
  const normalizedTarget = normalizeUrl(targetUrl);
  const normalizedCurrent = normalizeUrl(currentUrl);

  if (!normalizedTarget || !normalizedCurrent) {
    return false;
  }

  return normalizedCurrent === normalizedTarget || normalizedCurrent.startsWith(`${normalizedTarget}/`);
}

function getCurrentMatch() {
  const currentDashboardName = getCurrentDashboardName();
  const currentUrl = getCurrentUrl();

  for (const item of MENU_CONFIG) {
    const children = item.children || [];

    for (const child of children) {
      const dashboardAliases = getDashboardAliases(child);

      if (currentDashboardName && dashboardAliases.includes(currentDashboardName)) {
        return {
          itemId: item.id,
          childLabel: child.label,
        };
      }

      if (child.url && isUrlMatch(child.url, currentUrl)) {
        return {
          itemId: item.id,
          childLabel: child.label,
        };
      }
    }

    const activeMatchers = item.activeMatchers || [];
    if (activeMatchers.some((matcher) => currentUrl.includes(matcher))) {
      return {
        itemId: item.id,
        childLabel: null,
      };
    }
  }

  return {
    itemId: null,
    childLabel: null,
  };
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

function hasVisibleChildren(item) {
  return item.id === "finance-hr";
}

function getPrimaryChild(item) {
  return (item.children || [])[0] || null;
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
    overview: "M7 4h7l4 4v12H7zM14 4v4h4M9 12h6M9 16h6",
    finance: "M12 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M6.5 19.5v-1.2A3.8 3.8 0 0 1 10.3 14.5h3.4a3.8 3.8 0 0 1 3.8 3.8v1.2",
    production: "M5 18V9l7-4 7 4v9M9 18v-4h6v4",
    sales: "M5 17l4-4 3 3 6-7",
    purchase: "M4 6h2l2.4 8.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 1-.8L21 9H8",
  };

  stroke.setAttribute("d", iconPaths[iconKey] || iconPaths.overview);
  svg.appendChild(stroke);
  return svg;
}

function createChildItem(child, isCurrent, showBranchMarker) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = `child-row${isCurrent ? " is-current" : ""}`;
  row.addEventListener("click", () => {
    moveSameTab(child.url, child.label);
  });

  const textWrap = document.createElement("div");
  textWrap.className = "child-copy";

  const labelWrap = document.createElement("div");
  labelWrap.className = "child-label-wrap";

  if (showBranchMarker) {
    const branch = document.createElement("span");
    branch.className = "child-branch";
    branch.textContent = "↳";
    labelWrap.appendChild(branch);
  }

  const label = document.createElement("span");
  label.className = "child-label";
  label.textContent = child.label;
  labelWrap.appendChild(label);
  textWrap.appendChild(labelWrap);

  row.appendChild(textWrap);
  return row;
}

function createGroup(item, currentMatch) {
  const hasChildrenPanel = hasVisibleChildren(item);
  const group = document.createElement("article");
  const isCurrentGroup = currentMatch.itemId === item.id;
  group.className = `menu-group${isCurrentGroup ? " is-active" : ""}`;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-expanded", String(false));

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

  if (isCurrentGroup) {
    const status = document.createElement("span");
    status.className = "menu-current-badge";
    status.textContent = "현재";
    copy.appendChild(status);
  }

  toggle.appendChild(copy);

  const primaryChild = getPrimaryChild(item);
  toggle.addEventListener("click", () => {
    moveSameTab(primaryChild?.url, primaryChild?.label || item.label);
  });

  group.appendChild(toggle);

  if (!hasChildrenPanel) {
    return group;
  }

  const panel = document.createElement("div");
  panel.className = "group-panel";

  (item.children || []).slice(1).forEach((child) => {
    panel.appendChild(createChildItem(child, isCurrentGroup && currentMatch.childLabel === child.label, true));
  });

  group.appendChild(panel);
  return group;
}

function renderMenu() {
  const currentMatch = getCurrentMatch();

  menuRootEl.innerHTML = "";

  MENU_CONFIG.forEach((item) => {
    menuRootEl.appendChild(createGroup(item, currentMatch));
  });
}

async function initializeTableauExtension() {
  if (!window.tableau || !window.tableau.extensions) {
    return;
  }

  try {
    await window.tableau.extensions.initializeAsync();
    const dashboard = window.tableau.extensions.dashboardContent?.dashboard;
    state.currentDashboardName = dashboard?.activeDashboardName || dashboard?.name || "";
    renderMenu();
  } catch (error) {
    // Ignore preview-only initialization failures in the compact UI.
  }
}

function bootstrap() {
  renderMenu();
  initializeTableauExtension();
}

bootstrap();
