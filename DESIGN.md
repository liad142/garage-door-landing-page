# Design

Scope: this file records the visual system of **DMV Chimney & Airduct** (`/chimney`) only. The three garage-door brands share an older config-driven template (`src/components/BrandPage.tsx`, colors in `src/data/brands.ts`) that is not documented here and must not inherit these rules.

## Overview

The page is one DMV rowhouse cut open, read top to bottom: night sky, chimney stack, roof, upper floor, ground floor, basement, then the brick field the house stands on. Each service sits in the part of the house it cleans. A flue runs down the left edge of the page from the cap to the firebox.

## Colors

All tokens live on `.dca` in `src/app/chimney/chimney.css`.

| Token | Value | Role |
|---|---|---|
| `--dca-sky` | `#0e1620` | Hero ground (night sky) |
| `--dca-sky-2` | `#18273a` | Neighbouring rooftops silhouette |
| `--dca-soot` | `#14100d` | Page ground below the house, inputs |
| `--dca-room` | `#1e1814` | Room voids |
| `--dca-brick` | `#9b3b24` | Cut walls, stack, estimate field |
| `--dca-brick-deep` | `#6f2718` | Floor slabs, footing |
| `--dca-air` | `#cfe3df` | Clean flue and duct runs, drawing lines, list ticks |
| `--dca-mortar` | `#d9cab8` | Crown, level labels |
| `--dca-ink` / `--dca-ink-2` | `#f4ece2` / `#cdbfae` | Text, secondary text |
| `--dca-ember` | `#ffb224` | The call action only: buttons, phone number, focus ring, link underline |

Ember is reserved for things that lead to a phone call or the estimate. It is never decoration.

## Typography

Archivo (variable, `wght` + `wdth`), loaded with `next/font` in `src/app/chimney/page.tsx`.

- Display (h1, h2, phone number): weight 800, width 116%, tracking -0.02em, balanced wrap.
- Body: weight 400, 1.0625rem / 1.6, measure capped near 34–38em.
- Level labels and figure captions: weight 700, width 78–82%, uppercase, tracking 0.1–0.14em.

## Layout

- `--dca-stack` (left chimney column) and `--dca-wall` (right wall) frame every room; rooms are the voids between them.
- Floors are separated by a 34px slab carrying the level name.
- Section drawings (`src/components/chimney/Drawings.tsx`) share one stroke weight (1.5) and the palette above. They are decorative; the text carries the content.
- Radius is 4px on controls, 0 on structure.

## Motion

- Hero copy rises once on load; the cap sets onto the stack.
- The flue's soot lining clears from the cap downward with scroll, a brush head on the clean edge (`FlueSweep.tsx`). With reduced motion or no JavaScript the flue rests clean.
- Buttons scale to 0.97 on press; hover states are gated to hover-capable pointers.
- Nothing else moves. No scroll fade-ins.

## Content rules

- Print only owner-confirmed claims (see PRODUCT.md). No reviews, counts, prices or years until supplied.
- The phone number lives in one constant in `src/data/chimney.ts`.
