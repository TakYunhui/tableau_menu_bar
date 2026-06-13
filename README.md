# tableau_menu_bar

Tableau Dashboard Extension 기반 메뉴바 POC 저장소.

현재 구현은 `1Depth 카테고리 + 2Depth 대시보드 링크` 구조의 single-open accordion 메뉴다.

## 현재 메뉴 구조

- 속보
  - 속보
- 영업
  - 영업 메인
  - 영업 상세
- 생산
  - 생산 메인
- 구매
  - 구매 메인
- 손익재무인사
  - 손익재무인사 메인
  - 손익 상세
  - 인사 상세

## 연결 URL

- 속보
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17812256452380/1_`
- 영업 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2_17805514108510/1_`
- 생산 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/__17809950247560/1__1`
- 구매 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/4_/1_`
- 손익재무인사 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_V2_17811391757600/1_`
- 손익 상세
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17809066476870/1_`

## 설정된 dashboard name aliases

- 속보
  - `1. 속보`
- 영업 메인
  - `1. 영업 현황`
  - `2. 민수 현황`
  - `3. 관수 현황`
- 생산 메인
  - `1. 생산 현황`
  - `2. 생산 효율`
- 구매 메인
  - `1. 구매 현황`
  - `2. 입고 분석`
- 손익재무인사 메인
  - `1. 손익재무요약`
  - `2. 재무현황`
  - `3. 인사현황`
- 손익 상세
  - `1. 손익 상세: 제조원가`

## 동작 방식

1. 메뉴는 `속보 > 영업 > 생산 > 구매 > 손익재무인사` 순서로 노출된다.
2. 한 번에 하나의 1Depth만 펼쳐진다.
3. 링크가 있는 2Depth를 누르면 현재 탭에서 해당 Tableau URL로 이동한다.
4. `dashboardNames` 또는 `dashboardName`이 설정된 항목은 Tableau Extensions API의 dashboard name과 비교해 active 상태를 표시한다.
5. 로컬 미리보기처럼 Tableau 컨텍스트가 없는 경우에는 URL 비교 fallback이 동작한다.

## UI 기준

- `200px` 고정 폭 사이드바
- `min-height: 100vh` 전체 높이 유지
- `Pretendard` 폰트 사용
- 밝은 하늘색 계열 배경
- 현재 카테고리와 현재 대시보드 active 상태 표시

## 폴더 구조

```text
docs/
  index.html
  main.js
  menu-config.js
  styles.css
  tableau-menu-bar-poc.trex
  lib/
    README.md
```

## 주요 파일

- `docs/menu-config.js`
  - 메뉴 순서, 표시 라벨, URL, dashboardNames 설정
- `docs/main.js`
  - single-open accordion 렌더링, 현재 탭 이동, active 판별 로직
- `docs/styles.css`
  - 메뉴바 UI 스타일
- `docs/tableau-menu-bar-poc.trex`
  - Tableau Extension manifest 초안

## 테스트 메모

### Desktop

1. 정적 서버로 `docs/`를 띄운다.
2. `tableau-menu-bar-poc.trex`의 `source-location`을 실제 주소에 맞춘다.
3. Tableau Desktop에서 Extension을 추가해 메뉴 이동과 active 표시를 확인한다.

### Cloud

1. GitHub Pages로 `docs/`를 배포한다.
2. Tableau Cloud에서 Extension 허용 정책과 safelist 여부를 확인한다.
3. 메뉴 클릭 시 현재 탭 이동과 dashboard name 기반 active 표시를 확인한다.

## 주의

- Tableau 외부 단독 페이지에서는 실제 dashboard name을 읽을 수 없다.
- Tableau Cloud/Server 로그인 상태에 따라 이동 시 로그인 화면이 먼저 나올 수 있다.
- Extension 기반 이동은 링크 이동이므로 페이지 전체 로딩은 남는다.
