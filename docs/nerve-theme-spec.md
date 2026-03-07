# Nerve Theme Specification

> OpenClaw Operational UI — "Mission Control" Aesthetic
> Derived from the [Vective AI Brand Kit](https://vectiveai.com/brand/)
> Dark theme is the **primary/default**. Light theme is the alternative.

---

## 1. Color Palette

### 1.1 Brand Source Colors (Canonical)

| Token | Hex | Role |
|-------|-----|------|
| Authority Cyan | `#0891B2` | CTAs, links, active nav, focus rings |
| Vective Cyan (Brand) | `#22D3EE` | Logo on dark, decorative, marketing |
| Life Emerald | `#059669` | Success states, "on target" only |
| Slate Deep | `#0F172A` | Headings, body text (light mode) |
| Pure White | `#FFFFFF` | Primary backgrounds (light mode) |
| Slate Wash | `#F8FAFC` | Panel backgrounds (light mode) |
| Cool Panel | `#F1F5F9` | Data containers (light mode) |
| Slate Mid | `#64748B` | Secondary text |
| Steel Border | `#E2E8F0` | Card borders, dividers (light mode) |

### 1.2 Extended Palette (Nerve-specific derivations)

These extend the Vective palette for a full operational UI:

| Token | Hex | Derivation |
|-------|-----|-----------|
| Deep Space | `#030712` | Darkened Slate Deep — true dark bg |
| Midnight Panel | `#0C1222` | Between Deep Space and Slate Deep |
| Dark Surface | `#111827` | Card/panel surface on dark |
| Dark Elevated | `#1E293B` | Elevated surface (modals, dropdowns) |
| Dark Border | `#1E293B` | Subtle dividers on dark |
| Dark Border Strong | `#334155` | Prominent dividers on dark |
| Amber Warning | `#F59E0B` | Warning states |
| Red Error | `#EF4444` | Error / critical states |
| Cyan Dim | `#164E63` | Muted cyan for dark bg accents |
| Cyan Glow | `#22D3EE` (12% opacity) | Ambient glow behind active elements |

### 1.3 Dark Theme (Default)

```css
:root[data-theme="dark"], :root {
  /* Backgrounds */
  --nerve-bg-base:           #030712;   /* Deep Space — app background */
  --nerve-bg-panel:          #0C1222;   /* Midnight Panel — sidebar, secondary panels */
  --nerve-bg-surface:        #111827;   /* Dark Surface — cards, containers */
  --nerve-bg-elevated:       #1E293B;   /* Elevated — modals, popovers, dropdowns */
  --nerve-bg-inset:          #0F172A;   /* Slate Deep — inset areas, code blocks */

  /* Text */
  --nerve-text-primary:      #F8FAFC;   /* Slate Wash inverted — primary readable text */
  --nerve-text-secondary:    #94A3B8;   /* Slate 400 — descriptions, labels */
  --nerve-text-tertiary:     #64748B;   /* Slate Mid — placeholders, disabled */
  --nerve-text-inverse:      #0F172A;   /* Slate Deep — text on light/accent bg */

  /* Accent — Primary */
  --nerve-accent-primary:    #0891B2;   /* Authority Cyan — buttons, links, nav active */
  --nerve-accent-primary-hover: #0E7490; /* Darkened authority cyan */
  --nerve-accent-brand:      #22D3EE;   /* Vective Cyan — logo, decorative, highlights */
  --nerve-accent-dim:        #164E63;   /* Cyan Dim — subtle accent backgrounds */
  --nerve-accent-glow:       rgba(34, 211, 238, 0.12); /* Ambient glow */

  /* Borders */
  --nerve-border-default:    #1E293B;   /* Subtle */
  --nerve-border-strong:     #334155;   /* Prominent */
  --nerve-border-focus:      #0891B2;   /* Focus ring */

  /* Status */
  --nerve-status-success:    #059669;   /* Life Emerald */
  --nerve-status-success-bg: rgba(5, 150, 105, 0.15);
  --nerve-status-warning:    #F59E0B;   /* Amber */
  --nerve-status-warning-bg: rgba(245, 158, 11, 0.15);
  --nerve-status-error:      #EF4444;   /* Red */
  --nerve-status-error-bg:   rgba(239, 68, 68, 0.15);
  --nerve-status-info:       #0891B2;   /* Authority Cyan */
  --nerve-status-info-bg:    rgba(8, 145, 178, 0.15);

  /* Operational — mission control specific */
  --nerve-status-online:     #059669;   /* Green pulse */
  --nerve-status-idle:       #F59E0B;   /* Amber */
  --nerve-status-offline:    #64748B;   /* Gray */
  --nerve-status-critical:   #EF4444;   /* Red */

  /* Shadows */
  --nerve-shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.4);
  --nerve-shadow-md:   0 4px 12px rgba(0, 0, 0, 0.5);
  --nerve-shadow-lg:   0 8px 24px rgba(0, 0, 0, 0.6);
  --nerve-shadow-glow: 0 0 20px rgba(34, 211, 238, 0.15);

  /* Radii */
  --nerve-radius-sm:   4px;
  --nerve-radius-md:   8px;
  --nerve-radius-lg:   12px;
  --nerve-radius-full: 9999px;
}
```

### 1.4 Light Theme

```css
:root[data-theme="light"] {
  /* Backgrounds */
  --nerve-bg-base:           #FFFFFF;   /* Pure White */
  --nerve-bg-panel:          #F8FAFC;   /* Slate Wash — sidebar */
  --nerve-bg-surface:        #FFFFFF;   /* Cards */
  --nerve-bg-elevated:       #FFFFFF;   /* Modals (shadow-differentiated) */
  --nerve-bg-inset:          #F1F5F9;   /* Cool Panel — code blocks, insets */

  /* Text */
  --nerve-text-primary:      #0F172A;   /* Slate Deep */
  --nerve-text-secondary:    #475569;   /* Slate 600 */
  --nerve-text-tertiary:     #94A3B8;   /* Slate 400 */
  --nerve-text-inverse:      #F8FAFC;   /* Light text on dark/accent bg */

  /* Accent — Primary */
  --nerve-accent-primary:    #0891B2;   /* Authority Cyan (unchanged) */
  --nerve-accent-primary-hover: #0E7490;
  --nerve-accent-brand:      #0891B2;   /* Authority on light (not brand cyan — too light) */
  --nerve-accent-dim:        #ECFEFF;   /* Cyan 50 — subtle accent bg */
  --nerve-accent-glow:       rgba(8, 145, 178, 0.08);

  /* Borders */
  --nerve-border-default:    #E2E8F0;   /* Steel Border */
  --nerve-border-strong:     #CBD5E1;   /* Slate 300 */
  --nerve-border-focus:      #0891B2;

  /* Status (same hues, adjusted for light bg) */
  --nerve-status-success:    #059669;
  --nerve-status-success-bg: rgba(5, 150, 105, 0.10);
  --nerve-status-warning:    #D97706;   /* Slightly darker amber */
  --nerve-status-warning-bg: rgba(217, 119, 6, 0.10);
  --nerve-status-error:      #DC2626;   /* Slightly darker red */
  --nerve-status-error-bg:   rgba(220, 38, 38, 0.10);
  --nerve-status-info:       #0891B2;
  --nerve-status-info-bg:    rgba(8, 145, 178, 0.10);

  /* Operational */
  --nerve-status-online:     #059669;
  --nerve-status-idle:       #D97706;
  --nerve-status-offline:    #94A3B8;
  --nerve-status-critical:   #DC2626;

  /* Shadows */
  --nerve-shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.06);
  --nerve-shadow-md:   0 4px 12px rgba(0, 0, 0, 0.08);
  --nerve-shadow-lg:   0 8px 24px rgba(0, 0, 0, 0.12);
  --nerve-shadow-glow: 0 0 20px rgba(8, 145, 178, 0.08);

  /* Radii — same as dark */
  --nerve-radius-sm:   4px;
  --nerve-radius-md:   8px;
  --nerve-radius-lg:   12px;
  --nerve-radius-full: 9999px;
}
```

---

## 2. Typography

Directly from Vective brand guidelines. No substitutions.

### 2.1 Font Stack

```css
:root {
  --nerve-font-display: 'Space Grotesk', system-ui, sans-serif;
  --nerve-font-body:    'Inter', system-ui, sans-serif;
  --nerve-font-mono:    'JetBrains Mono', 'Fira Code', monospace;
}
```

### 2.2 Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

### 2.3 Type Scale

| Token | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| `--nerve-type-h1` | Space Grotesk | 700 | 32px | 1.2 | -0.02em | Page titles |
| `--nerve-type-h2` | Space Grotesk | 600 | 24px | 1.3 | -0.01em | Section headers |
| `--nerve-type-h3` | Space Grotesk | 600 | 20px | 1.3 | -0.01em | Card titles |
| `--nerve-type-h4` | Space Grotesk | 600 | 16px | 1.4 | 0 | Subsection headers |
| `--nerve-type-body` | Inter | 400 | 14px | 1.6 | 0 | Body text |
| `--nerve-type-body-sm` | Inter | 400 | 13px | 1.5 | 0 | Compact body |
| `--nerve-type-label` | Inter | 600 | 13px | 1.4 | 0.01em | Labels, nav items |
| `--nerve-type-caption` | Inter | 400 | 12px | 1.4 | 0.01em | Timestamps, metadata |
| `--nerve-type-data` | JetBrains Mono | 400 | 13px | 1.5 | 0 | Metrics, IDs, code |
| `--nerve-type-data-lg` | JetBrains Mono | 500 | 24px | 1.2 | -0.01em | Dashboard hero numbers |

**Note:** Nerve UI body text is 14px (not 15-16px as in marketing). Operational UIs need density. The 13px compact variant is for data-heavy views (tables, logs).

---

## 3. Component Styling

### 3.1 Cards

```css
.nerve-card {
  background: var(--nerve-bg-surface);
  border: 1px solid var(--nerve-border-default);
  border-radius: var(--nerve-radius-md);
  box-shadow: var(--nerve-shadow-sm);
  padding: 16px;
}

.nerve-card--elevated {
  background: var(--nerve-bg-elevated);
  box-shadow: var(--nerve-shadow-md);
}

/* Status card with left accent border */
.nerve-card--status {
  border-left: 3px solid var(--nerve-accent-primary);
  border-radius: var(--nerve-radius-sm);
}

.nerve-card--status[data-status="success"] {
  border-left-color: var(--nerve-status-success);
  background: var(--nerve-status-success-bg);
}

.nerve-card--status[data-status="warning"] {
  border-left-color: var(--nerve-status-warning);
  background: var(--nerve-status-warning-bg);
}

.nerve-card--status[data-status="error"] {
  border-left-color: var(--nerve-status-error);
  background: var(--nerve-status-error-bg);
}
```

### 3.2 Buttons

```css
/* Primary — Authority Cyan */
.nerve-btn-primary {
  background: var(--nerve-accent-primary);
  color: #FFFFFF;
  font: 600 13px/1 var(--nerve-font-body);
  padding: 8px 16px;
  border-radius: var(--nerve-radius-sm);
  border: none;
  cursor: pointer;
  transition: background 150ms ease;
}
.nerve-btn-primary:hover {
  background: var(--nerve-accent-primary-hover);
}
.nerve-btn-primary:focus-visible {
  outline: 2px solid var(--nerve-accent-brand);
  outline-offset: 2px;
}

/* Secondary — Ghost/outlined */
.nerve-btn-secondary {
  background: transparent;
  color: var(--nerve-text-primary);
  border: 1px solid var(--nerve-border-strong);
  padding: 8px 16px;
  border-radius: var(--nerve-radius-sm);
}
.nerve-btn-secondary:hover {
  background: var(--nerve-bg-elevated);
  border-color: var(--nerve-accent-primary);
}

/* Danger */
.nerve-btn-danger {
  background: var(--nerve-status-error);
  color: #FFFFFF;
}

/* Ghost — text-only */
.nerve-btn-ghost {
  background: transparent;
  color: var(--nerve-text-secondary);
  border: none;
  padding: 6px 12px;
}
.nerve-btn-ghost:hover {
  color: var(--nerve-text-primary);
  background: var(--nerve-bg-elevated);
}
```

### 3.3 Tables

```css
.nerve-table {
  width: 100%;
  border-collapse: collapse;
  font: 400 13px/1.5 var(--nerve-font-body);
}

.nerve-table th {
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--nerve-text-tertiary);
  padding: 8px 12px;
  border-bottom: 1px solid var(--nerve-border-strong);
}

.nerve-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--nerve-border-default);
  color: var(--nerve-text-primary);
}

.nerve-table tr:hover td {
  background: var(--nerve-bg-elevated);
}

/* Monospaced data cells */
.nerve-table td[data-type="id"],
.nerve-table td[data-type="metric"],
.nerve-table td[data-type="code"] {
  font-family: var(--nerve-font-mono);
  font-size: 12px;
}
```

### 3.4 Status Indicators

```css
/* Pulse dot — for agent/session online status */
.nerve-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.nerve-status-dot--online {
  background: var(--nerve-status-online);
  box-shadow: 0 0 6px var(--nerve-status-online);
  animation: nerve-pulse 2s ease-in-out infinite;
}
.nerve-status-dot--idle {
  background: var(--nerve-status-idle);
}
.nerve-status-dot--offline {
  background: var(--nerve-status-offline);
}
.nerve-status-dot--critical {
  background: var(--nerve-status-critical);
  animation: nerve-pulse-critical 1s ease-in-out infinite;
}

@keyframes nerve-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@keyframes nerve-pulse-critical {
  0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--nerve-status-critical); }
  50% { opacity: 0.7; box-shadow: 0 0 12px var(--nerve-status-critical); }
}

/* Badge — for counts, labels */
.nerve-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--nerve-radius-full);
  font: 500 11px/1 var(--nerve-font-body);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.nerve-badge--success { background: var(--nerve-status-success-bg); color: var(--nerve-status-success); }
.nerve-badge--warning { background: var(--nerve-status-warning-bg); color: var(--nerve-status-warning); }
.nerve-badge--error   { background: var(--nerve-status-error-bg);   color: var(--nerve-status-error); }
.nerve-badge--info    { background: var(--nerve-status-info-bg);    color: var(--nerve-status-info); }
```

### 3.5 Sidebar Navigation

```css
.nerve-sidebar {
  background: var(--nerve-bg-panel);
  border-right: 1px solid var(--nerve-border-default);
  width: 240px;
  padding: 12px 0;
}

.nerve-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  color: var(--nerve-text-secondary);
  font: 500 13px/1 var(--nerve-font-body);
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 120ms ease;
}

.nerve-nav-item:hover {
  color: var(--nerve-text-primary);
  background: var(--nerve-bg-surface);
}

.nerve-nav-item--active {
  color: var(--nerve-accent-primary);
  border-left-color: var(--nerve-accent-primary);
  background: var(--nerve-accent-glow);
}
```

### 3.6 Inputs & Forms

```css
.nerve-input {
  background: var(--nerve-bg-inset);
  border: 1px solid var(--nerve-border-default);
  border-radius: var(--nerve-radius-sm);
  padding: 8px 12px;
  font: 400 14px/1.4 var(--nerve-font-body);
  color: var(--nerve-text-primary);
  transition: border-color 150ms ease;
}

.nerve-input:focus {
  border-color: var(--nerve-border-focus);
  outline: none;
  box-shadow: 0 0 0 3px var(--nerve-accent-glow);
}

.nerve-input::placeholder {
  color: var(--nerve-text-tertiary);
}
```

### 3.7 Log / Terminal View

```css
.nerve-log {
  background: var(--nerve-bg-inset);
  border: 1px solid var(--nerve-border-default);
  border-radius: var(--nerve-radius-md);
  padding: 12px 16px;
  font: 400 12px/1.6 var(--nerve-font-mono);
  color: var(--nerve-text-secondary);
  overflow-x: auto;
}

.nerve-log .log-timestamp {
  color: var(--nerve-text-tertiary);
}

.nerve-log .log-level-info  { color: var(--nerve-status-info); }
.nerve-log .log-level-warn  { color: var(--nerve-status-warning); }
.nerve-log .log-level-error { color: var(--nerve-status-error); }
.nerve-log .log-level-debug { color: var(--nerve-text-tertiary); }
```

---

## 4. Icons

### 4.1 Recommended Icon Set

**[Lucide Icons](https://lucide.dev/)** — MIT licensed, 1000+ icons, SVG-native.

**Why Lucide:**
- Clean, geometric, 24×24 grid — matches Vective's precision aesthetic
- Consistent 1.5px stroke weight — pairs well with the brand's line-based marks
- Extensive coverage of operational/technical concepts (servers, terminals, activity, shield, etc.)
- React/Vue/Svelte packages available
- Visually harmonious with Space Grotesk and the hexagonal brand motifs

### 4.2 Icon Styling

```css
.nerve-icon {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Sidebar icons — slightly larger */
.nerve-sidebar .nerve-icon {
  width: 20px;
  height: 20px;
}

/* Status icons inherit status color */
.nerve-icon--success { color: var(--nerve-status-success); }
.nerve-icon--warning { color: var(--nerve-status-warning); }
.nerve-icon--error   { color: var(--nerve-status-error); }
```

### 4.3 Key Icon Mappings

| Concept | Lucide Icon | Notes |
|---------|-------------|-------|
| Sessions | `terminal` | Agent sessions |
| Agents | `bot` | Agent list/management |
| Health | `activity` | System health monitor |
| Settings | `settings` | Configuration |
| Logs | `scroll-text` | Log viewer |
| Nodes | `server` | Node management |
| Messages | `message-square` | Message channels |
| Security | `shield` | Security/auth views |
| Deploy | `rocket` | Deployment actions |
| Status OK | `check-circle-2` | |
| Status Warn | `alert-triangle` | |
| Status Error | `x-circle` | |
| Search | `search` | |
| Theme toggle | `sun` / `moon` | |

---

## 5. Logo / Mark — Nerve Product Mark

### 5.1 Design Direction

Nerve is the **nervous system** of OpenClaw — the sensory and control network. The mark should evoke:
- **Neural pathways** — signal transmission, connectivity
- **Mission control** — operational awareness, monitoring
- **Vective DNA** — the sacred V is immutable

### 5.2 Concept: "Neural V"

The sacred V is surrounded by branching neural pathways that extend from the hex vertices, resembling dendrites or signal traces on a circuit board. The hex border is partially dissolved into these nerve-like branches, suggesting the V is the central hub of a living network.

**Key visual elements:**
- Sacred V at center (unchanged geometry: `M 100 108 L 256 392 L 412 108`, stroke-width 48)
- Hex border with segments that fracture into branching lines at 2-3 vertices
- Small terminal nodes (circles, 3-5px) at branch endpoints — like synapses
- Asymmetric branching (not perfectly mirrored) for organic feel
- Clean enough to work at 32px

### 5.3 SVG Concept — Nerve Mark (Cyan variant)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Nerve Mark - Cyan on transparent -->
  <!-- Concept: Hex border dissolves into neural branching pathways -->
  <!-- The V is the central nervous system hub -->

  <!-- Neural branch traces from top-left vertex -->
  <path d="M 120 132 L 80 100 L 60 60" fill="none" stroke="#0891B2"
        stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
  <path d="M 80 100 L 40 105" fill="none" stroke="#0891B2"
        stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <circle cx="60" cy="60" r="4" fill="#0891B2" opacity="0.6"/>
  <circle cx="40" cy="105" r="3" fill="#0891B2" opacity="0.4"/>

  <!-- Neural branch traces from top-right vertex -->
  <path d="M 392 132 L 440 95 L 465 55" fill="none" stroke="#0891B2"
        stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
  <path d="M 440 95 L 470 110 L 490 100" fill="none" stroke="#0891B2"
        stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <path d="M 465 55 L 485 35" fill="none" stroke="#0891B2"
        stroke-width="1.5" stroke-linecap="round" opacity="0.25"/>
  <circle cx="465" cy="55" r="4" fill="#0891B2" opacity="0.6"/>
  <circle cx="490" cy="100" r="3" fill="#0891B2" opacity="0.4"/>
  <circle cx="485" cy="35" r="2.5" fill="#0891B2" opacity="0.3"/>

  <!-- Neural branch from bottom-left -->
  <path d="M 74 362 L 40 395 L 25 440" fill="none" stroke="#0891B2"
        stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
  <path d="M 40 395 L 15 385" fill="none" stroke="#0891B2"
        stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
  <circle cx="25" cy="440" r="4" fill="#0891B2" opacity="0.6"/>
  <circle cx="15" cy="385" r="2.5" fill="#0891B2" opacity="0.35"/>

  <!-- Neural branch from right side -->
  <path d="M 438 260 L 475 265 L 500 250" fill="none" stroke="#0891B2"
        stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  <path d="M 475 265 L 490 290" fill="none" stroke="#0891B2"
        stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
  <circle cx="500" cy="250" r="3" fill="#0891B2" opacity="0.5"/>
  <circle cx="490" cy="290" r="2.5" fill="#0891B2" opacity="0.35"/>

  <!-- Subtle signal pulse dot (emerald — operational "alive") -->
  <circle cx="456" cy="140" r="3.5" fill="#059669" opacity="0.6"/>
  <circle cx="50" cy="420" r="3" fill="#059669" opacity="0.4"/>

  <!-- Hex border — intact on most segments, with gaps where branches diverge -->
  <line x1="74" y1="362" x2="74" y2="158" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="74" y1="158" x2="120" y2="132" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="392" y1="132" x2="438" y2="158" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="438" y1="158" x2="438" y2="362" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="438" y1="362" x2="256" y2="468" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="256" y1="468" x2="74" y2="362" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <!-- Top segments — connecting through the V breach points -->
  <line x1="155" y1="112" x2="256" y2="52" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>
  <line x1="256" y1="52" x2="358" y2="112" stroke="#0891B2" stroke-width="5" stroke-linecap="round"/>

  <!-- The sacred V — immutable -->
  <path d="M 100 108 L 256 392 L 412 108"
        fill="none"
        stroke="#0891B2"
        stroke-width="48"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"/>
</svg>
```

### 5.4 Mark Variants Required

Following the Vective product mark convention:

| File | Description |
|------|-------------|
| `nerve-mark-cyan.svg` | Cyan on transparent (primary dark bg usage) |
| `nerve-mark-dark.svg` | Slate Deep on transparent (light bg usage) |
| `nerve-mark-white.svg` | White on transparent (colored bg usage) |
| `nerve-wordmark-dark.svg` | "Nerve" wordmark in Space Grotesk 700, Slate Deep |
| `nerve-wordmark-white.svg` | "Nerve" wordmark in Space Grotesk 700, white |
| `nerve-badge.svg` | Compact badge (mark + "NERVE" text) |

PNG rasters at 512, 256, 128, 64, 32px per Vective convention.

### 5.5 Wordmark Typography

- **"Nerve"** in Space Grotesk 700
- Letter-spacing: -0.02em
- Optional lockup: "Nerve" with small "by Vective" in Inter 400, positioned below or right-aligned
- The word "Nerve" alone works as primary — the mark provides brand connection

---

## 6. Favicon

### 6.1 Size Variants

Following the Vective favicon convention:

| Size | Variant | Content |
|------|---------|---------|
| 16×16 | Simplified | V-only with minimal hex suggestion (full hex illegible at this size) |
| 32×32 | Full mark | Complete Nerve mark (hex + neural branches + V) simplified |
| 48×48 | Full mark | Full Nerve mark with more detail |
| 180×180 | Apple Touch Icon | Full mark with generous padding |
| 192×192 | Android Chrome | Full mark |
| 512×512 | PWA icon | Full mark, production detail |

### 6.2 Favicon Color

- **Default (dark OS theme):** Cyan mark (`#0891B2`) on transparent
- **Light OS theme (if supporting `prefers-color-scheme`):** Slate Deep (`#0F172A`) on transparent
- **ICO fallback:** Cyan on transparent, embedded multi-res

### 6.3 HTML Implementation

```html
<!-- SVG favicon (modern browsers — supports dark/light mode) -->
<link rel="icon" type="image/svg+xml" href="/brand/nerve/favicon/nerve-favicon.svg">

<!-- ICO fallback (legacy) -->
<link rel="icon" type="image/x-icon" href="/brand/nerve/favicon/nerve-favicon.ico">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/brand/nerve/favicon/nerve-apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="/brand/nerve/favicon/nerve-icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/brand/nerve/favicon/nerve-icon-512.png">
```

### 6.4 SVG Favicon (supports theme via media query)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <style>
    path, line { stroke: #0891B2; }
    @media (prefers-color-scheme: light) {
      path, line { stroke: #0F172A; }
    }
  </style>
  <!-- Simplified hex suggestion -->
  <line x1="5" y1="22" x2="5" y2="10" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="27" y1="10" x2="27" y2="22" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="27" y1="22" x2="16" y2="29" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="16" y1="29" x2="5" y2="22" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Sacred V -->
  <path d="M 6 7 L 16 25 L 26 7"
        fill="none"
        stroke-width="4"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"/>
</svg>
```

---

## 7. Theme Switching

### 7.1 Implementation Pattern

```js
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Apply theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nerve-theme', theme);
}

// Initialize: user preference → system preference → dark (default)
const saved = localStorage.getItem('nerve-theme');
if (saved) {
  setTheme(saved);
} else {
  setTheme(prefersDark.matches ? 'dark' : 'dark'); // dark is default even for no-pref
}
```

### 7.2 Transition

```css
:root {
  transition: background-color 200ms ease, color 200ms ease;
}
```

---

## 8. Summary — Design Principles for Nerve

1. **Dark-first.** Dark theme is the default. It's a monitoring/ops tool — dark reduces fatigue.
2. **Cyan-anchored.** Authority Cyan (`#0891B2`) is the primary interactive color in both themes. Brand Cyan (`#22D3EE`) is reserved for the logo and decorative accents on dark backgrounds.
3. **Emerald is earned.** Life Emerald (`#059669`) only appears for success/operational/healthy states. Never decorative.
4. **Dense, not cramped.** 14px body, 13px compact, 12px captions. Tables and data views use the smaller scales. Generous padding compensates.
5. **Mono for data.** JetBrains Mono for anything that looks like a value: IDs, metrics, timestamps, paths, code.
6. **Status over decoration.** Color has meaning. If it's not a link, a status, or a brand element, it's gray-scale.
7. **Vective DNA.** The sacred V, the hex, the cyan — all present. Nerve is unmistakably a Vective product.
