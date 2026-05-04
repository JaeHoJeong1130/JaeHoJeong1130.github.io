# Apple-Style UI/UX Guidelines for OCR Project

## Core Philosophy
- **Clarity**: Content is central. Controls should be obvious but unobtrusive.
- **Depth**: Use layering, translucency (glassmorphism), and subtle shadows to convey hierarchy.
- **Motion**: Fluid transitions for state changes (hover, active, loading).

## Design Tokens

### Colors
- **Background**: `bg-[#F5F5F7]` (Light Gray/System Gray 6)
- **Surface**: `bg-white` or `bg-white/80` (for glass effects)
- **Primary**: `text-[#000000]` (90% opacity for headings)
- **Secondary**: `text-[#86868b]` (Subtle text)
- **Accent**: `bg-[#007AFF]` (Apple Blue) for primary actions
- **Destructive**: `text-[#FF3B30]` (System Red)
- **Border**: `border-[#d2d2d7]` (Subtle separator)

### Typography
- **Font Stack**: System UI (`-apple-system`, `BlinkMacSystemFont`, `San Francisco`, `Inter`, `sans-serif`)
- **Weights**:
  - Headings: `font-semibold` or `font-medium` (avoid heavy bolds unless large)
  - Body: `font-normal`
- **Readability**: Relaxed line height (`leading-relaxed`), comfortable tracking.

### Shapes & Spacing
- **Corner Radius**:
  - Cards/Modals: `rounded-2xl` or `rounded-xl`
  - Elements (buttons/inputs): `rounded-lg` or `rounded-md`
- **Padding**: Generous spacing. Avoid dense clustering.
- **Shadows**:
  - Low: `shadow-sm` (subtle separation)
  - Medium: `shadow-md` (floating elements)
  - High: `shadow-xl` (modals) - diffuse and soft.

## Components

### Buttons
- **Primary**: Blue background, white text, `rounded-full` or slightly rounded `rounded-lg`. No drop shadow on resting state, but subtle change on hover.
- **Secondary**: Light gray background (`bg-gray-100`), dark text.
- **Icon Buttons**: Minimalist, often just the icon with a hover background circle.

### Inputs
- **Style**: Minimal border (`border-gray-200`), slight background (`bg-gray-50/50`).
- **Focus**: Blue ring, no harsh outlines.
- **Labels**: Small, uppercase, tracking-wide optional, or clear placeholders.

### Glassmorphism
- Use `backdrop-blur-md` and `bg-white/70` for sticky headers or floating controls.

### Layout
- **Split View**:
  - **Left (Source)**: Darker or distinct background to frame the content.
  - **Right (Result)**: Clean white paper-like surface for text.

## Implementation Rules
- Use `lucide-react` for icons (stroke width 1.5 or 2 for elegance).
- Avoid "pure black" (`#000000`) for large text blocks; use `#1d1d1f`.
- Transitions: `transition-all duration-200 ease-in-out` default.

## Dark Mode
- **System**: Respect user preference (system default), allow manual toggle.
- **Palette**:
  - **Background**: Pure Black (`#000000`) or very dark gray (`#1C1C1E`) for OLED optimization.
  - **Surface**: Dark Gray (`#1C1C1E` or `#2C2C2E`) for cards/modals.
  - **Text**: White (`#FFFFFF`) for primary, Gray (`#98989D`) for secondary.
  - **Borders**: Darker separators (`#38383A`).
- **Elevation**: In dark mode, elevation is often conveyed by lighter surfaces rather than shadows.

