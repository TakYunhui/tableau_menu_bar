# tableau_menu_bar

Tableau Dashboard Extension 기반 Navigator POC 저장소.

현재 방향은 `같은 게시글 내부 이동은 Tableau 상단 탭 유지`, `서로 다른 게시글 주소의 진입 대시보드만 좌측 Navigator에서 이동`이다.

## 용어

- `카테고리`
  - 종합 / 손익·재무·인사 / 생산 / 영업 / 구매
- `진입 대시보드`
  - 해당 게시글에서 사용자가 처음 보게 되는 첫 탭
- `내부 탭`
  - 같은 게시글 안에서 상단 탭으로 이동하는 나머지 화면

## 현재 구현 상태

- 좌측 Navigator는 기본적으로 전부 닫힌 상태로 시작한다.
- `손익·재무·인사`, `생산`, `영업`, `구매`는 카테고리 클릭 시 각 게시글의 첫 화면으로 바로 이동한다.
- `종합`만 아직 URL이 없어 접힘 구조로 유지한다.
- 상단 설명 박스와 운영 원칙 박스는 제거하고 메뉴만 남겼다.

## 현재 연결된 URL

- 손익·재무·인사
  - 진입 대시보드: `손익·재무 요약`
  - URL: `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17785666538950/sheet0`
- 생산
  - 진입 대시보드: `생산 현황`
  - URL: `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4`
- 영업
  - 진입 대시보드: `영업 현황`
  - URL: `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/_17790851223830/sheet1_1`
- 구매
  - 진입 대시보드: `구매 현황`
  - URL: `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/RE/sheet0`

## 메뉴 정책

1. 카테고리 클릭 시 가능한 경우 해당 게시글의 `첫 탭 주소`로 이동한다.
2. 같은 게시글 안의 나머지 화면은 Tableau 상단 탭에서 이동한다.
3. URL이 아직 없는 카테고리는 접힘 메뉴로 유지하고 구조만 보여준다.
4. 추후 다른 게시글 주소가 늘어나면 해당 카테고리를 direct link 또는 fold 구조로 확장한다.

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
  - Navigator POC 화면
- `docs/menu-config.js`
  - 카테고리 / 진입 대시보드 / 내부 탭 구조 정의
- `docs/main.js`
  - 렌더링, fold 동작, active 처리, Tableau 초기화, URL 이동 로직
- `docs/styles.css`
  - 사이드바형 UI 스타일
- `docs/tableau-menu-bar-poc.trex`
  - Tableau Extension manifest 초안

## 테스트 메모

### Desktop

1. 정적 파일을 웹서버로 띄운다.
2. `tableau-menu-bar-poc.trex`의 `source-location` URL이 실제 호스팅 주소와 맞는지 확인한다.
3. Tableau Desktop에서 Extension 추가 후 카테고리 direct 이동만 먼저 확인한다.

### Cloud

1. GitHub Pages 또는 다른 HTTPS 호스팅에 `docs/` 내용을 배포한다.
2. Tableau Cloud의 Extension 허용 정책 또는 safelist 필요 여부를 확인한다.
3. direct 이동 대상은 현재 브라우저 탭 전체가 바뀌는지 확인한다.

## 주의

- 현재 `trex`의 URL은 GitHub Pages 기준 초안이다.
- 실제 배포 URL이 달라지면 `source-location`을 수정해야 한다.
- Extension 기반 이동은 URL 이동이므로 페이지 전체 로딩은 수반된다.
- 무로딩 전환은 같은 게시글 내부에서 Tableau 상단 탭이 담당한다.
