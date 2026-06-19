window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "속보",
    displayLabel: "속보",
    icon: "overview",
    children: [
      {
        label: "속보",
        dashboardNames: ["1. 속보", "2. 일일원가"],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/0__v3/1_",
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
        dashboardNames: [
          "1. 영업 현황",
          "2. 민수 현황",
          "3. 관수 현황",
          "상세 - 프로젝트 DC 추이",
          "상세 - 민수 프로젝트",
          "상세 - 관수 프로젝트",
        ],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2_17805514108510/1_",
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
        dashboardNames: ["1. 생산 현황", "2. 생산 효율"],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/__17809950247560/1__1",
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
        dashboardNames: ["1. 구매 현황", "2. 입고 분석"],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/4_/1_",
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
        dashboardNames: ["1. 손익재무요약", "2. 재무현황", "3. 인사현황"],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_V2_17811391757600/1_",
      },
      {
        label: "손익 상세",
        dashboardNames: ["1. 제조원가", "2. 철근수익성", "상세 - 철근수익성"],
        kind: "entry",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17809066476870/1__1",
      },
      {
        label: "인사 상세",
        dashboardNames: ["1. 인사상세", "상세 - 직원리스트"],
        kind: "planned",
        url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17813683386770/1__1",
      },
    ],
    activeMatchers: ["/views/_V2_17811391757600/"],
  },
];
