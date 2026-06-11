window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "속보",
    displayLabel: "속보",
    icon: "overview",
    children: [
      {
        label: "속보 메인",
        kind: "planned",
      },
    ],
    activeMatchers: [],
  },
  {
    id: "finance-hr",
    label: "손익·재무·인사",
    displayLabel: "손익·재무·인사",
    icon: "finance",
    children: [
      {
        label: "손익재무인사 메인",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17785666538950/sheet0",
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
    activeMatchers: ["/views/_17785666538950/"],
  },
  {
    id: "production",
    label: "생산",
    displayLabel: "생산",
    icon: "production",
    children: [
      {
        label: "생산 메인",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/__17809950247560/1_",
      },
    ],
    activeMatchers: ["/views/__17809950247560/"],
  },
  {
    id: "sales",
    label: "영업",
    displayLabel: "영업",
    icon: "sales",
    children: [
      {
        label: "영업 메인",
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
    id: "purchase",
    label: "구매",
    displayLabel: "구매",
    icon: "purchase",
    children: [
      {
        label: "구매 메인",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/RE/sheet0",
      },
      {
        label: "구매 상세",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17809733918700/sheet0/ac2a811d-b18c-4c81-b317-e2e3ce9bce6f/b6941347-9ea9-469c-964d-c62007b7230a",
      },
    ],
    activeMatchers: ["/views/RE/"],
  },
];
