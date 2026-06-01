window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "종합",
    children: [
      {
        label: "경영 종합",
        kind: "planned",
      },
    ],
    activeMatchers: [],
  },
  {
    id: "finance-hr",
    label: "손익·재무·인사",
    entry: {
      label: "손익·재무 요약",
      url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17785666538950/sheet0",
    },
    activeMatchers: ["/views/_17785666538950/"],
  },
  {
    id: "production",
    label: "생산",
    entry: {
      label: "생산 현황",
      url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4",
    },
    activeMatchers: ["/views/2/"],
  },
  {
    id: "sales",
    label: "영업",
    entry: {
      label: "영업 현황",
      url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17790851223830/sheet1_1",
    },
    activeMatchers: ["/views/_17790851223830/"],
  },
  {
    id: "purchase",
    label: "구매",
    entry: {
      label: "구매 현황",
      url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/RE/sheet0",
    },
    activeMatchers: ["/views/RE/"],
  },
];
