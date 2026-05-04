# UI Redesign Plan (Apple-Style)

## The "Why" (Architectural intent)
- 제공해주신 `UI_rule.md`의 Apple 스타일 UI/UX 가이드라인(Clarity, Depth, Motion)을 포트폴리오에 반영하여, 시각적 계층 구조를 개선하고 콘텐츠의 가독성을 높입니다.
- 불필요한 시각적 요소(핸드폰 목업 화면)를 제거하여 미니멀하고 콘텐츠 중심적인 화면을 구성합니다.

## The "How" (Proposed changes)

### 1. `src/styles.css` (CSS 토큰 및 스타일 개편)
- **CSS 변수 교체**: `UI_rule.md`에 명시된 색상 토큰을 Vanilla CSS 변수로 적용합니다.
  - `--bg-color`: `#F5F5F7`
  - `--surface`: `rgba(255, 255, 255, 0.8)` (Glassmorphism 용)
  - `--text-primary`: `#1d1d1f`
  - `--text-secondary`: `#86868b`
  - `--accent`: `#007AFF`
  - `--border-color`: `#d2d2d7`
- **Typography & Spacing**: 폰트 스택을 Apple 기본(`-apple-system`, `BlinkMacSystemFont`, `Inter` 등)으로 굳히고, 줄 간격을 `leading-relaxed` 수준으로 넓힙니다.
- **Glassmorphism 적용**: `.topbar` 등의 네비게이션 및 떠있는 컴포넌트에 `backdrop-filter: blur(12px)`와 반투명 배경을 적용합니다.
- **모양 및 그림자**: `.project-card`, `.skill-block` 등의 모서리를 `border-radius: 16px` (2xl)로 둥글게 처리하고, 크고 부드러운 그림자(`shadow-xl` 수준)를 적용합니다.
- **다크 모드**: `@media (prefers-color-scheme: dark)`를 추가하여 `UI_rule.md` 하단에 명시된 다크모드 색상 팔레트(`#000000`, `#1C1C1E`, `#FFFFFF` 등)를 지원하도록 합니다.

### 2. `src/main.tsx` (핸드폰 화면 제거 및 레이아웃 수정)
- **목업 제거**: `<div className="device-visual"> ... </div>` 요소 및 내부 코드를 삭제합니다.
- **Hero 섹션 정렬**: 핸드폰 화면이 사라지면서 비게 되는 우측 공간을 해결하기 위해, `.hero`의 CSS Grid를 단일 컬럼으로 변경하거나 텍스트를 화면 중앙에 정렬하여 시각적 균형을 맞춥니다.

## The "Risks" (What might break?)
- 핸드폰 목업이 제거되면 Hero 섹션이 너무 비어 보일 수 있습니다. 이를 방지하기 위해 텍스트의 크기와 여백을 조정하여 레이아웃 밀도를 보완해야 합니다.
- Glassmorphism 효과는 일부 구형 브라우저에서 지원되지 않을 수 있으나, Fallback(불투명 배경색)을 함께 지정하여 해결합니다.

## The "Verification" (How will we prove it works?)
- 코드를 수정한 후 `npm run dev` 또는 `npm run build`를 통해 빌드 에러가 없는지 확인합니다.
- 변경된 CSS가 프로젝트 화면에 올바른 색상, 둥근 모서리, 부드러운 애니메이션 및 다크모드 대응을 정상적으로 렌더링하는지 교차 검증합니다.
