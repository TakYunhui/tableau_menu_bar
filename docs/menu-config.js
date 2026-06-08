window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "종합",
    displayLabel: "종합",
    icon: "overview",
    children: [
      {
        label: "종합 메인",
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
        kind: "planned",
      },
      {
        label: "재무 상세",
        kind: "planned",
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
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4",
      },
    ],
    activeMatchers: ["/views/2/"],
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
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17790851223830/sheet1_1",
      },
      {
        label: "영업 상세",
        kind: "planned",
      },
    ],
    activeMatchers: ["/views/_17790851223830/"],
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
        kind: "planned",
      },
    ],
    activeMatchers: ["/views/RE/"],
  },
];
