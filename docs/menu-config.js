window.TABLEAU_MENU_CONFIG = [
  {
    id: "overview",
    label: "종합",
    description: "경영 종합 대시보드 진입점",
    children: [
      {
        label: "경영 종합",
        kind: "entry",
        note: "첫 탭 주소 필요",
      },
    ],
    activeMatchers: [],
  },
  {
    id: "finance-hr",
    label: "손익·재무·인사",
    description: "손익·재무·인사 게시글 구조",
    children: [
      {
        label: "손익·재무 요약",
        kind: "entry",
        note: "첫 탭 주소 필요",
      },
      {
        label: "재무 현황",
        kind: "tab",
        note: "같은 게시글 내부 탭",
      },
      {
        label: "인사 현황",
        kind: "tab",
        note: "같은 게시글 내부 탭",
      },
      {
        label: "손익·재무·인사 세부",
        kind: "planned",
        note: "추후 추가 가능",
      },
    ],
    activeMatchers: [],
  },
  {
    id: "production",
    label: "생산",
    description: "생산 게시글 첫 탭으로 이동",
    entry: {
      label: "생산 현황",
      url: "https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4",
    },
    activeMatchers: ["/sheet4", "/sheet5"],
  },
  {
    id: "sales",
    label: "영업",
    description: "영업 게시글 구조",
    children: [
      {
        label: "영업 현황",
        kind: "entry",
        note: "첫 탭 주소 필요",
      },
      {
        label: "민수 현황",
        kind: "tab",
        note: "같은 게시글 내부 탭",
      },
      {
        label: "관수 현황",
        kind: "tab",
        note: "같은 게시글 내부 탭",
      },
      {
        label: "영업 세부 분석",
        kind: "planned",
        note: "추후 추가 가능",
      },
    ],
    activeMatchers: [],
  },
  {
    id: "purchase",
    label: "구매",
    description: "구매 게시글 구조",
    children: [
      {
        label: "구매 현황",
        kind: "entry",
        note: "첫 탭 주소 필요",
      },
      {
        label: "구매 세부 분석",
        kind: "planned",
        note: "추후 추가 가능",
      },
    ],
    activeMatchers: [],
  },
];
