window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "속보",
    displayLabel: "속보",
    icon: "overview",
    children: [
      {
        label: "속보",
        dashboardName: "1. 속보",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17812256452380/1_",
      },
    ],
    activeMatchers: ["/views/_17812256452380/"],
  },
  {
    id: "sales",
    label: "영업",
    displayLabel: "영업",
    icon: "sales",
    children: [
      {
        label: "영업 메인",
        dashboardName: "1. 영업 메인",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2_17805514108510/1_",
      },
      {
        label: "영업 상세",
        kind: "planned",
      },
    ],
    activeMatchers: ["/views/2_17805514108510/"],
  },
  {
    id: "production",
    label: "생산",
    displayLabel: "생산",
    icon: "production",
    children: [
      {
        label: "생산 메인",
        dashboardName: "1. 생산 현황",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/__17809950247560/1_",
      },
    ],
    activeMatchers: ["/views/__17809950247560/"],
  },
  {
    id: "purchase",
    label: "구매",
    displayLabel: "구매",
    icon: "purchase",
    children: [
      {
        label: "구매 메인",
        dashboardName: "1. 구매 현황",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/4_/1_",
      },
      {
        label: "구매 상세",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17809733918700/sheet0/ac2a811d-b18c-4c81-b317-e2e3ce9bce6f/b6941347-9ea9-469c-964d-c62007b7230a",
      },
    ],
    activeMatchers: ["/views/4_/"],
  },
  {
    id: "finance-hr",
    label: "손익재무인사",
    displayLabel: "손익재무인사",
    icon: "finance",
    children: [
      {
        label: "손익재무인사 메인",
        dashboardName: "1. 손익재무요약",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_V2_17811391757600/1_",
      },
      {
        label: "손익 상세",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17809066476870/1/da8a7653-4813-4351-9ce8-d365a5e484b4/ecdf54bb-49db-43b5-882c-32ca3f88b4ff",
      },
      {
        label: "인사 상세",
        kind: "planned",
      },
    ],
    activeMatchers: ["/views/_V2_17811391757600/"],
  },
];
