# GitHub Pages Portfolio

Vite + React 기반의 개인 포트폴리오 사이트입니다. private repository의 README 원문은 배포물에 포함하지 않고, 공개 가능한 요약 데이터만 `src/data/projects.ts`에 보관합니다.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

이 저장소를 `JaeHoJeong1130.github.io` 이름의 public repository로 push하면 `.github/workflows/deploy.yml`이 GitHub Pages에 정적 사이트를 배포합니다.

GitHub repository settings에서 Pages source를 `GitHub Actions`로 설정하세요.

## Private README Workflow

1. private README 원문은 `private-readmes/` 같은 ignored 폴더에만 둡니다.
2. 공개 가능한 내용만 요약해서 `src/data/projects.ts`에 입력합니다.
3. build 결과물에 private repo URL, token, README 원문이 들어가지 않았는지 확인합니다.
