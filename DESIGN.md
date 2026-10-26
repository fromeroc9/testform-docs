---
name: Terminal Precision
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#b090ff'
  on-tertiary-container: '#4600a7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines an authoritative, high-velocity infrastructure and developer-first platform. Built for platform engineers, DevOps leads, and QA architects, it treats software testing infrastructure with the deterministic rigor of Terraform and modern cloud state orchestration. 

The aesthetic is anchored in **Technical Minimalism** blended with **Precision High-Contrast Monospace Accents**. Interfaces avoid ornamental fluff in favor of dense information hierarchy, crystal-clear code syntax, deterministic layout structures, and high-visibility state indicators. The visual tone balances enterprise trust with hacker ergonomics—evoking speed, zero-drift precision, and surgical control over deployment pipelines.

## Colors

The system uses a default dark-mode palette engineered for prolonged terminal and dashboard focus, minimizing eye strain while highlighting critical diff states and pipeline status alerts.

- **Primary (`#10B981` Emerald)**: Represents verified status, successful runs, idempotency, and added diff state (`+`).
- **Secondary (`#06B6D4` Cyan)**: Drives secondary infrastructure actions, telemetry signals, link interactions, and active branch state.
- **Tertiary (`#8B5CF6` Violet)**: Highlights AST definitions, compiler targets, DAG nodes, and execution pipeline orchestrations.
- **Accent Warning/Modification (`#F59E0B` Amber)**: Denotes modified state (`~`), drift detection, or in-flight runs.
- **Accent Destruction (`#EF4444` Crimson)**: Reserved for destroyed resources (`-`), hard failures, or breaking pipeline assertions.
- **Neutrals**:
  - `Canvas / Root`: `#090D16` (Obsidian Deep)
  - `Surface 1 (Panels / Containers)`: `#0F172A` (Slate Void)
  - `Surface 2 (Hover / Elevated Nodes)`: `#1E293B` (Border & Layer Slate)
  - `Muted Borders`: `#334155` (Subtle structural grid lines)
  - `Text Primary`: `#F8FAFC`
  - `Text Muted`: `#94A3B8`

## Typography

Typography establishes an immediate developer-native cadence by pairing **Geist** for crisp, proportional UI chrome with **JetBrains Mono** for all operational parameters, terminal outputs, CLI blocks, diff markers, and data chips.

- Keep uppercase transformations strictly confined to monospace metadata badges and system status pills using `label-sm`.
- All telemetry, runtime timers, commit SHAs, file paths, and syntax-highlighted code blocks must execute strictly in `JetBrains Mono` with tabular numerals (`tnum`) activated.

## Layout & Spacing

The layout philosophy follows a rigid, modular 12-column fluid grid system that prioritizes dense technical dashboards and wide syntax blocks.

- **Desktop (≥ 1280px)**: 12-column layout, `margin-desktop` (48px) safe boundary, `gutter-desktop` (24px) element spacing. Sidebars collapse to fixed iconography or persistent 240px panes. Code windows and DAG orchestrators can expand to break containment on wide viewports (1440px+).
- **Tablet (768px - 1279px)**: 8-column layout, `margin-tablet` (32px), reflowing dual-pane CLI comparison cards into stacked tabs.
- **Mobile (< 768px)**: 4-column layout, `margin` (16px), gutters compressed to 16px. Terminal views lock to horizontal panning with scroll indicators.

## Elevation & Depth

This design system avoids diffused drop shadows and faux blur aesthetics. Depth is engineered strictly via **Tonal Surface Layering** reinforced with **Sub-pixel Borders**:

1. **Base Layer (Canvas)**: `#090D16` flat background.
2. **Structural Container (Level 1)**: `#0F172A` background encased in a crisp `1px solid #1E293B` stroke.
3. **Elevated Elements & Code Blocks (Level 2)**: `#131E32` background with `1px solid #334155` border.
4. **Interactive Hover / Focus State**: The element border shifts dynamically to `#10B981` (Primary Emerald) or `#06B6D4` (Secondary Cyan) with a subtle directional gradient sheen (`box-shadow: 0 0 0 1px #10B981, 0 8px 24px -4px rgba(16, 185, 129, 0.12)`).

## Shapes

The interface embraces a low-radius, architectural geometry (`roundedness: 1`). 

- Default interactive elements (buttons, text fields, badges, tab bars) utilize `0.25rem` (4px).
- Larger containers, code consoles, and comparative calculation cards scale to `rounded-lg` (`0.5rem` / 8px).
- Modals, complex DAG execution canvases, and global popovers cap at `rounded-xl` (`0.75rem` / 12px).
- Circular rounding (`9999px`) is reserved exclusively for small running daemon status pulses, user avatars, and status indicator dots.

## Components

### Buttons
- **Primary**: Solid `#10B981` fill with `#090D16` bold text. Hover shifts to `#34D399` with micro-scale (`scale-100` to `scale-[1.01]`).
- **Secondary / CLI Copier**: `#0F172A` surface, `1px solid #334155`, text `#F8FAFC`. Monospace icon affixed left (`$`). Hover yields `#1E293B` and `#06B6D4` stroke.
- **Destructive**: Bordered `#EF4444` outline with red-tinted surface (`rgba(239, 68, 68, 0.08)`).

### Interactive Terminal Code Windows
- Multi-tabbed window chrome featuring file path breadcrumbs (`tests/core/plan.tm.hcl`), status dot indicators (red/yellow/green macOS-style or minimal gray dashes), and instant copy button.
- Code canvas uses `#090D16` inset background with line numbers locked in muted `#475569`.
- Syntax tokens: Keywords in `#06B6D4`, strings in `#10B981`, variables/functions in `#8B5CF6`, warnings/drift in `#F59E0B`.

### State Diff Viewers (`+` / `~` / `-`)
- **Added (`+`)**: Tinted green background band (`rgba(16, 185, 129, 0.1)`), left-hand gutter marker `+` in bold emerald `#10B981`.
- **Modified (`~`)**: Tinted amber background band (`rgba(245, 158, 11, 0.1)`), left-hand gutter marker `~` in amber `#F59E0B`.
- **Destroyed (`-`)**: Tinted red background band (`rgba(239, 68, 68, 0.1)`), left-hand gutter marker `-` in crimson `#EF4444`.

### Provider Badges
- Compact rectangular badges (`rounded: 4px`, `label-sm`, padding `2px 8px`).
- Monochromatic neutral baseline (`bg: #1E293B`, `text: #94A3B8`) shifting to active cloud provider accents (AWS, GitHub, GitLab, DynamoDB, S3) on run hover.

### Comparative ROI & Cost Calculator Cards
- Dual-metric comparison modules contrasting manual QA infrastructure drift against Declarative TMaC.
- Embedded sliders and key counters featuring monospaced metrics, animated percentage reductions, and high-contrast accent rule lines.

### High-Impact Developer CTA Blocks
- Inset structural grid lines with dark gradient background fades.
- Instant shell prompt preview (`$ curl -fsSL https://testform.io/install.sh | sh`) with inline interactive execution triggers.