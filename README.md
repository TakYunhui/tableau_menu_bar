# tableau_menu_bar

Tableau Dashboard Extension 기반 메뉴바 POC 저장소.

현재 범위는 `생산` 1Depth 아래 2개 2Depth 링크를 두고, 클릭 시 현재 탭에서 Tableau URL 이동이 가능한지 확인하는 것이다.

## POC 범위

- 1Depth: `생산`
- 2Depth:
  - `생산 현황`
  - `생산효율`
- 이동 방식:
  - `window.top.location.href`
  - 실패 시 `window.open(url, "_self")`
- 테스트 대상:
  - Tableau Desktop
  - Tableau Cloud 게시 환경

## 링크

- 생산 현황:
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet4`
- 생산효율:
  - `https://prod-apnortheast-a.online.tableau.com/t/kisco/views/2/sheet5`

## 폴더 구조

```text
docs/
  index.html
  main.js
  styles.css
  tableau-menu-bar-poc.trex
  lib/
    README.md
```

`docs/` 기준의 정적 호스팅 구조로 잡았다. 참고 리포 `tableau_big_calender_v2` 와 같은 배치 방식이다.

## 파일 설명

- `docs/index.html`
  - POC UI
- `docs/main.js`
  - Accordion 토글, active 표시, Tableau 초기화, URL 이동 로직
- `docs/styles.css`
  - 최소 UI 스타일
- `docs/tableau-menu-bar-poc.trex`
  - Tableau Extension manifest 초안
- `docs/lib/README.md`
  - 외부 라이브러리 관리 메모

## 테스트 메모

### Desktop

1. 정적 파일을 웹서버로 띄운다.
2. `tableau-menu-bar-poc.trex`의 `source-location` URL이 실제 호스팅 주소와 맞는지 확인한다.
3. Tableau Desktop에서 Extension 추가 후 동작 확인한다.

### Cloud

1. GitHub Pages 또는 다른 HTTPS 호스팅에 `docs/` 내용을 배포한다.
2. Tableau Cloud의 Extension 허용 정책 또는 safelist 필요 여부를 확인한다.
3. 버튼 클릭 시 현재 탭 전체 URL이 바뀌는지 확인한다.

## 주의

- 현재 `trex`의 URL은 GitHub Pages 기준 초안이다.
- 실제 배포 URL이 달라지면 `source-location`을 반드시 수정해야 한다.
- 이 단계에서는 설정 화면, 외부 JSON, 다중 메뉴, 권한 제어를 넣지 않는다.
