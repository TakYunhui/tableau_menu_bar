# tableau_menu_bar

Tableau Dashboard Extension 기반 좌측 Navigator POC 저장소.

현재 구현은 `카테고리(1Depth)`를 펼치고, 하위 `메인 / 세부(2Depth)` 항목을 선택하는 아코디언 메뉴 형태다.

## 현재 방향

- 같은 게시글 내부의 실제 화면 전환은 Tableau 쪽 구조와 병행한다.
- 좌측 Navigator는 카테고리 진입과 향후 세부 진입 구조를 보여주는 공통 메뉴 역할로 둔다.
- 현재 URL이 연결된 것은 각 카테고리의 `메인` 항목이다.

## 메뉴 구조

- 종합
  - 종합 메인
- 손익·재무·인사
  - 손익재무인사 메인
  - 손익재무인사 세부
- 생산
  - 생산 메인
  - 생산 세부
- 영업
  - 영업 메인
  - 영업 세부
- 구매
  - 구매 메인
  - 구매 세부

## 연결된 URL

- 손익재무인사 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17785666538950/sheet0`
- 생산 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4`
- 영업 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17790851223830/sheet1_1`
- 구매 메인
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/RE/sheet0`

`종합 메인`, 각 카테고리의 `세부` 항목은 아직 URL이 없다.

## 동작 규칙

1. 1Depth는 이동이 아니라 펼침/접힘 버튼이다.
2. 한 번에 하나의 1Depth만 열린다.
3. URL이 있는 2Depth만 실제 이동한다.
4. URL이 없는 2Depth는 구조만 먼저 보여준다.
5. 이동은 새 창이 아니라 현재 탭 URL 변경 방식이다.

## UI 상태

- 폭 `200px` 기준 사이드바
- 세로는 `min-height: 100vh` 유지
- `Pretendard` 폰트 사용
- 밝은 하늘색 계열 배경
- 펼쳐진 1Depth는 파란 선택 블록
- 2Depth는 직선형 블록 패널
- 각 1Depth 좌측에 아이콘 배치

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

## 파일 설명

- `docs/index.html`
  - Extension 진입 HTML
- `docs/menu-config.js`
  - 메뉴 트리와 URL 설정
- `docs/main.js`
  - 렌더링, single-open accordion, 이동 로직
- `docs/styles.css`
  - 현재 사이드바 UI 스타일
- `docs/tableau-menu-bar-poc.trex`
  - Tableau Extension manifest 초안

## 테스트 기준

### Desktop

1. 정적 서버로 `docs/`를 띄운다.
2. `tableau-menu-bar-poc.trex`의 `source-location`을 실제 주소와 맞춘다.
3. Tableau Desktop에 Extension을 추가해 메인 링크 이동을 확인한다.

### Cloud

1. GitHub Pages 등 HTTPS 정적 호스팅으로 배포한다.
2. Tableau Cloud의 Extension 허용 정책 또는 safelist 여부를 확인한다.
3. `메인` 항목 클릭 시 현재 탭 전체가 이동하는지 확인한다.

## 주의

- 현재 `trex`는 GitHub Pages 기준 초안이다.
- 실제 배포 URL이 달라지면 `source-location` 수정이 필요하다.
- Extension 이동은 URL 이동이라 페이지 전체 로딩이 발생한다.
- 같은 게시글 내부의 부드러운 전환은 Extension이 아니라 Tableau 쪽 구조가 담당한다.
