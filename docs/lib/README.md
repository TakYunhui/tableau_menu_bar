# lib

이 폴더는 POC에서 사용하는 외부 라이브러리 또는 로컬 복사본을 둘 위치다.

현재 POC는 Tableau Extensions API 스크립트를 CDN에서 직접 로드한다.

```html
<script src="https://extensions.tableauusercontent.com/resources/tableau.extensions.1.latest.min.js"></script>
```

향후 필요하면 아래처럼 정적 파일을 이 폴더로 옮길 수 있다.

- `tableau.extensions.1.latest.min.js`
- 아이콘 또는 보조 유틸 스크립트
