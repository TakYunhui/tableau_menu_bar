window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "종합",
    displayLabel: "종합",
    icon: "overview",
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
    displayLabel: "손익·재무\n인사",
    icon: "finance",
    children: [
      {
        label: "손익·재무 요약",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17785666538950/sheet0",
      },
      {
        label: "재무 현황",
        kind: "tab",
      },
      {
        label: "인사 현황",
        kind: "tab",
      },
      {
        label: "손익·재무·인사 세부",
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
        label: "생산 현황",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4",
      },
      {
        label: "생산 효율",
        kind: "tab",
      },
      {
        label: "생산 세부 분석",
        kind: "planned",
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
        label: "영업 현황",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17790851223830/sheet1_1",
      },
      {
        label: "민수 현황",
        kind: "tab",
      },
      {
        label: "관수 현황",
        kind: "tab",
      },
      {
        label: "영업 세부 분석",
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
        label: "구매 현황",
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/RE/sheet0",
      },
      {
        label: "구매 세부 분석",
        kind: "planned",
      },
    ],
    activeMatchers: ["/views/RE/"],
  },
];
