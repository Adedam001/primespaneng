# Design Brief — PrimeSpan Engineering Ltd

**Tone & Purpose:** Industrial minimalism for B2B technical buyers. Trust, precision, zero ornament. Every pixel serves lead conversion.

**Differentiation:** Dark industrial aesthetic with persistent sticky CTA button (amber "Request Technical Quote"). ISO certifications as trust anchors in footer. No bloat.

## Palette (OKLCH)

| Role | Light | Dark |
| --- | --- | --- |
| Background | 0.98 0 0 (off-white) | 0.12 0 0 (deep charcoal) |
| Foreground | 0.15 0 0 (near-black text) | 0.92 0 0 (light text) |
| Card | 0.95 0 0 (soft white) | 0.16 0 0 (dark card) |
| Primary (links) | 0.5 0.08 238 (steel blue) | 0.65 0.15 238 (bright steel) |
| Accent (CTA) | 0.65 0.15 50 (deep amber) | 0.72 0.18 50 (bright amber) |
| Muted | 0.88 0 0 (light grey) | 0.28 0 0 (slate) |
| Border | 0.92 0 0 (subtle light) | 0.24 0 0 (subtle dark) |
| Destructive | 0.55 0.22 25 (red, rare) | 0.65 0.19 22 (bright red) |

## Typography

| Tier | Family | Use |
| --- | --- | --- |
| Display | General Sans | Headlines, hero text, section titles |
| Body | DM Sans | Content, navigation, form labels |
| Mono | Geist Mono | Code, technical specs, model numbers |

**Type Scale:** 12px (caption) → 14px (small) → 16px (base) → 20px (lg) → 28px (xl) → 36px (2xl) → 48px (3xl) — progressive scale for hierarchy.

## Structural Zones

| Zone | Surface | Border | Purpose |
| --- | --- | --- | --- |
| Header | Card (0.16/0.95) | 1px border-muted | Sticky nav, logo, CTA button always visible |
| Hero | Background with overlay | None | Full-width dramatic, industrial imagery |
| Content Cards | Card (0.16/0.95) | 1px border-muted | Project cards, service boxes — consistent elevation |
| Footer | Muted/40 (0.28/0.12) | 1px border-muted top | Certifications, legal, copyright |
| Forms | Input (0.22/0.94) | 1px border-border focus:border-primary | Minimal friction — 4 fields max |

## Component Patterns

- **CTA Buttons:** Accent color (amber) with font-semibold, no uppercase, rounded-sm (2px). Hover: opacity-90. Never secondary unless downplaying action.
- **Form Inputs:** 1px border-border, bg-input, rounded-sm, focus:ring-2 ring-primary. Minimal padding, no shadows.
- **Cards:** bg-card, border-b border-muted (1px), shadow-card (2px 6px). No rounded corners for brutalist feel — use rounded-sm (2px) for slight softness.
- **Links:** text-primary, no underline until hover. Hover: underline, opacity-80.

## Motion & Interaction

- **Smooth Transitions:** `.transition-smooth` on interactive elements (0.3s ease-out).
- **Hover States:** Opacity shift (0.9) on buttons, underline on links.
- **No animation:** Entrance animations removed — speed and stability over delight.

## Constraints

- Dark mode only — no light mode toggle. Charcoal/steel/amber aesthetic requires dark context.
- Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).
- No decorative gradients, no bloom effects, no glow. Precision > ornament.
- Form max 4 fields: Name, Company, Email, Project Scope.
- Sticky header CTA visible on all pages.

## Spacing & Rhythm

- Base unit: 4px. Spacing: 8px, 12px, 16px, 24px, 32px, 48px.
- Content max-width: 1280px (2xl container).
- Card padding: 24px (content) to 32px (large sections).
- Hero height: min 400px (mobile), 500px+ (desktop).

## Signature Detail

Sticky header with persistent amber "Request Technical Quote" button. Footer ISO badge strip (ISO 9001, ISO 45001, PE license) — visual anchors for trust. Card borders subtle but visible — 1px muted color creates depth without ornamentation.
