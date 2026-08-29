# Movistrato — Design System

## 1. Visual language

Official direction:

# Architectural Editorial

A combination of:

- editorial typography;
- strict visual structure;
- refined neo-brutalism;
- software-product presentation;
- modern engineering;
- restrained experimentation.

The design should feel contemporary, precise and distinctive.

It must not feel like:

- a generic SaaS template;
- a design agency portfolio;
- cyberpunk;
- neon AI;
- crypto;
- gaming;
- traditional corporate boilerplate.

## 2. Core design principles

### 01 — Typography is architecture
Large display text is not merely copy. It is part of the composition.

### 02 — Product is the main visual evidence
Real FARO UI should communicate that Movistrato builds real software.

### 03 — Gold means significance
Gold is a signal, not a background colour used everywhere.

### 04 — Lines create structure
Use 1px architectural rules and grid lines instead of decorative shadows.

### 05 — Depth comes from layering
Use overlap, scale, perspective, cropping and tonal contrast.

### 06 — Whitespace must be intentional
Large empty areas must create hierarchy or tension. Avoid dead space.

### 07 — Avoid repetitive cards
Do not reduce every concept to equal rounded rectangles.

### 08 — Controlled asymmetry
The grid creates discipline; visual elements may deliberately cross it.

## 3. Colour tokens

Use semantic tokens in code.

### Brand

```text
--brand-gold: #D9A62E
```

If the exact official logo gold is extracted later, that value replaces the fallback.

### Light

```text
--background: #F2F0E9
--surface: #FAF9F7
--surface-elevated: #FFFFFF
--foreground: #080806
--muted: #6F6F69
--border: rgba(8, 8, 6, 0.10)
```

### Dark

```text
--background: #080806
--surface: #10100E
--surface-elevated: #151512
--foreground: #F2F0E9
--muted: #99978F
--border: rgba(242, 240, 233, 0.10)
```

Do not use a generic Material `primary` token as the brand colour.

Components should consume semantic tokens, not hardcoded black/white.

## 4. Gold behaviour

Gold may represent:

- active navigation;
- section marker;
- product state;
- interaction/focus;
- progress;
- primary emphasis.

Avoid large decorative gold fills unless the section intentionally uses gold as a major CTA moment.

## 5. Typography

### Display
**Newsreader**

Use for:

- Hero;
- section statements;
- large numbers;
- vision copy;
- oversized graphic words.

### UI / body
**Inter**

Use for:

- body copy;
- navigation;
- controls;
- explanatory content.

### Technical
**JetBrains Mono**

Use for:

- labels;
- metadata;
- section numbers;
- platform status;
- system states.

Technical labels are usually uppercase with modest letter spacing.

Examples:

```text
MOVISTRATO / 001
PRODUCT / 01
TECHNOLOGY / SYSTEM
PLATFORM / CURRENT
```

## 6. Responsive type

Use `clamp()`.

Conceptual ranges:

### Hero display
- mobile: 52–72px
- desktop: 88–144px

### Section display
- mobile: 40–56px
- desktop: 64–96px

### Body
- 16–20px

### Technical labels
- 11–13px

Never break words internally to fit a layout.

Default:

```css
word-break: normal;
overflow-wrap: normal;
hyphens: none;
```

## 7. Grid

Desktop:

- 12 columns
- max width ~1440px
- 64px outer margin target
- 24px gutters

Tablet:

- 8 columns

Mobile:

- 4 columns
- ~20px side margin

The grid is a guide, not a prison.

Controlled overlaps and full-bleed product visuals are encouraged where intentional.

## 8. Spacing

Use a 4px base unit.

Preferred spacing rhythm:

```text
4
8
12
16
24
32
48
64
96
128
192
```

Do not scatter arbitrary spacing values across components.

## 9. Borders and elevation

Default structural border:

- 1px
- low-opacity foreground

Avoid ambient soft shadows.

When stronger focus is needed, use:

- solid border;
- tonal block;
- optional subtle hard offset accent.

## 10. Radius

Structural blocks:

- 0–4px

Controls:

- ~4px

FARO product UI can preserve its native radii.

Do not apply large SaaS-style radii globally.

## 11. Buttons

### Primary
- strong foreground/background contrast
- low radius
- clear label
- restrained gold hover/focus accent

### Secondary
- transparent
- 1px border

Avoid giant pill buttons.

## 12. Navigation

Navigation should feel architectural, not like a floating SaaS pill.

Preferred hierarchy:

- Movistrato wordmark;
- FARO;
- Technology;
- Company;
- locale;
- theme;
- Contact.

Use clear spacing and a structural horizontal rule.

## 13. Imagery

Priority:

1. real FARO screenshots;
2. real Movistrato brand assets;
3. custom SVG geometry;
4. custom product visualisations.

Avoid generic stock photography.

Avoid generated fake software screenshots when real screenshots exist.

## 14. Brand geometry

The Movistrato M/ribbon is the main reusable geometric motif.

It may be used as:

- cropped background form;
- transition;
- SVG path;
- section divider;
- product framing;
- future motion/3D object.

Do not invent unrelated abstract blobs.

## 15. Dark/light rhythm

The website should not become one endless dark surface.

Preferred default visual rhythm:

```text
LIGHT — Hero
LIGHT — Manifesto
LIGHT — What We Build
DARK  — FARO
LIGHT/DARK — FARO Experience
DARK  — Adaptive System / Technology
LIGHT — Platforms
LIGHT — Company
GOLD/LIGHT — Contact
DARK — Footer
```

Dark mode still exists globally; this rhythm describes section art direction, not forced theme values.

## 16. Anti-patterns

Do not use:

- purple/blue AI gradients;
- glass cards everywhere;
- huge soft shadows;
- random 3D blobs;
- stock-office photography;
- equal feature-card grids as the default;
- excessive rounded containers;
- decorative motion without purpose.

---

## 17. VISUAL ART DIRECTION

This section supersedes generic "good design" advice.
Apply these rules before writing any visual code.

---

### 17.1 — Product imagery is graphic material

A software screenshot is NOT automatically an image block.

Do not place raw screenshots simply because empty space exists.

Real FARO UI may be:

- cropped;
- enlarged;
- fragmented;
- masked;
- layered;
- overlapped;
- partially hidden;
- placed behind typography;
- placed in front of typography;
- used as a texture;
- isolated into smaller UI details;
- recomposed into editorial product compositions.

The purpose is not to display every pixel.
The purpose is to communicate: **PRODUCT · INTERACTION · QUALITY · SYSTEM · EXPERIENCE**.

---

### 17.2 — Full screenshots are exceptions

A complete screenshot should only be shown when seeing the complete interface is genuinely valuable.

Do NOT default to:

```
[full screenshot]
[full screenshot]
[full screenshot]
```

Instead create hierarchy:

- **PRIMARY** — large FARO dashboard.
- **SECONDARY** — cropped FARO lesson detail.
- **TERTIARY** — one UI fragment or metadata element.

Different visual scales create depth and hierarchy.

---

### 17.3 — Oversized UI

Small pieces of FARO UI may become large graphic elements.

Examples: progress indicators, context cards, lesson text, START button, XP counter, progress percentage, navigation fragments.

The marketing website may enlarge these elements beyond their original product size when used as editorial visual material.

Do not alter the meaning of the original UI.
Do not fabricate functionality.

---

### 17.4 — Brand imagery

The primary abstract visual language of Movistrato must originate from the Movistrato brand itself.

Primary motif: **MOVISTRATO M / RIBBON**.

Potential uses: large crop, mask, visual path, section transition, image frame, future motion path, future 3D object.

Do NOT introduce unrelated blobs simply because they look futuristic.
Brand geometry should feel derived, not random.

---

### 17.5 — Concept visuals

Not every visual should be a photograph or screenshot.

For a software company, visual communication may include:
- diagrams, nodes, lines;
- system maps, progress states;
- data relationships, typography;
- technical notation, interface fragments.

Use concept visuals when they explain an idea better than photography.

---

### 17.6 — Photography rule

Photography is NOT the default visual filler.

Do not use generic photography such as: people working on laptops, meetings, offices, server rooms, students studying, generic lifestyle imagery.

Photography should only be used when it communicates something that product UI, brand graphics, typography, or a diagram cannot communicate more effectively.

---

### 17.7 — Typography as visual material

Large typography can behave as part of the visual composition.

It may:
- overlap other elements;
- create spatial tension;
- cross grid regions;
- become partially cropped;
- interact with product imagery.

But: never destroy readability; never split words internally; never create chaos for visual novelty.

---

### 17.8 — Scale contrast

Premium composition requires hierarchy in scale.

Avoid having GIANT TEXT next to GIANT IMAGE next to GIANT IMAGE.

Instead create PRIMARY → SECONDARY → TERTIARY visual hierarchy.
Every composition should have an obvious visual leader.

---

### 17.9 — Image composition rule

When multiple product images appear together they must form ONE composition.

They must not look like unrelated `<img>` blocks stacked vertically.

Use: overlap, cropping, shared alignment, scale differences, shared visual axes, controlled z-index, relationship to typography.

---

### 17.10 — Whitespace

Whitespace is active composition.

**Good whitespace:** isolates a statement, creates tension, directs attention, produces rhythm.

**Bad whitespace:** exists because an element has arbitrary height; leaves one half of the viewport empty without intention; compensates for weak composition.

Never confuse absence of content with editorial whitespace.

---

### 17.11 — Visual rhythm

The intended long-term homepage rhythm (document only — do not implement all sections yet):

```
LIGHT / EDITORIAL      → Hero
LIGHT / MINIMAL        → Manifesto
DARK / PRODUCT         → FARO
PRODUCT-COLOURED DETAIL → FARO Experience
DARK / SYSTEM          → Adaptive System + Technology
LIGHT / ENGINEERING    → Platforms
BRAND MOMENT           → Company
LIGHT / COMPANY        → Company detail
GOLD / CONTACT         → Contact CTA
DARK / FOOTER          → Footer
```

This rhythm describes section art direction, not forced global theme values.

---

### 17.12 — Three visual languages

The Movistrato website combines three related visual languages.
Each section may combine them differently. This prevents every section from looking identical.

#### CORPORATE LANGUAGE
Newsreader · Warm Ivory · Deep Black · Movistrato Gold · Ribbon · Editorial composition

#### PRODUCT LANGUAGE
Real FARO UI · Native FARO colours · Product interaction · Learning progress · Content · Screens

#### ENGINEERING LANGUAGE
JetBrains Mono · Lines · Nodes · Metadata · Numbers · System diagrams · Status information

---

### 17.13 — Visual signature

Movistrato should eventually have at least one distinctive visual element that becomes recognisable across the website.

Preferred candidate: **THE MOVISTRATO RIBBON**.

Future iterations may interpret it as: flat SVG, metallic ribbon, 2.5D object, 3D object, animated transition.

Do NOT implement 3D during the current phase.

---

### 17.14 — Design quality principle

The objective is NOT: more effects.
The objective is: **better composition**.

A section should first work perfectly as a static screenshot.
Only then may motion enhance it.
