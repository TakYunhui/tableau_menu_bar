const MENU_MATCHERS = [
  {
    label: "생산 현황",
    url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4",
    match: "/sheet4",
  },
  {
    label: "생산효율",
    url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet5",
    match: "/sheet5",
  },
];

const state = {
  isOpen: true,
  isTableauReady: false,
};

const statusEl = document.getElementById("status");
const toggleEl = document.getElementById("production-toggle");
const iconEl = document.getElementById("production-icon");
const panelEl = document.getElementById("production-panel");
const linkEls = Array.from(document.querySelectorAll(".nav-link"));

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
    // Cross-origin restrictions are expected in some embedding contexts.
  }

  return window.location.href;
}

function syncAccordion() {
  toggleEl.setAttribute("aria-expanded", String(state.isOpen));
  panelEl.hidden = !state.isOpen;
  iconEl.textContent = state.isOpen ? "▾" : "▸";
}

function syncActiveLink() {
  const currentUrl = getCurrentUrl();

  linkEls.forEach((linkEl) => {
    const match = linkEl.dataset.match || "";
    const isActive = currentUrl.includes(match);
    linkEl.classList.toggle("is-active", isActive);
    linkEl.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function moveSameTab(targetUrl, label) {
  setStatus(`${label} 이동 시도 중`, "is-pending");

  try {
    window.top.location.href = targetUrl;
    return;
  } catch (error) {
    // Some Tableau environments may block direct top-frame navigation.
  }

  window.open(targetUrl, "_self");
}

function bindEvents() {
  toggleEl.addEventListener("click", () => {
    state.isOpen = !state.isOpen;
    syncAccordion();
  });

  linkEls.forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      const targetUrl = linkEl.dataset.url;
      const label = linkEl.dataset.label || "대시보드";
      moveSameTab(targetUrl, label);
    });
  });
}

async function initializeTableauExtension() {
  if (!window.tableau || !window.tableau.extensions) {
    setStatus("Tableau 외부 미리보기 상태. 버튼 클릭으로 URL 이동만 확인 가능", "is-warning");
    return;
  }

  try {
    await window.tableau.extensions.initializeAsync();
    state.isTableauReady = true;
    setStatus("Tableau Extensions API 초기화 완료", "is-ready");
  } catch (error) {
    setStatus(`Tableau 초기화 실패: ${error.message}`, "is-error");
  }
}

function bootstrap() {
  syncAccordion();
  syncActiveLink();
  bindEvents();
  initializeTableauExtension();
}

bootstrap();
