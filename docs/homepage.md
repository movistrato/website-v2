# Movistrato — Homepage Specification

## 1. Purpose

The homepage must answer within the first moments:

1. What is Movistrato?
2. What does it build?
3. What is FARO?
4. Why is the company/product interesting?
5. Where can the visitor go next?

Movistrato must clearly read as a **software product company**.

FARO must clearly read as **Product 01**.

## 2. Homepage architecture

```text
00 Navigation
01 Hero
02 Manifesto
03 What We Build
04 FARO
05 FARO Experience
06 Adaptive System
07 Technology
08 Platforms
09 Company
10 Contact CTA
11 Footer
```

Do not add sections without a clear reason.

---

# 00 — Navigation

## Goal
Provide simple orientation without looking like a generic marketing navbar.

## Initial items

```text
MOVISTRATO
FARO
Technology
Company
PT / EN
Theme
Contact
```

Do not add:

- Solutions;
- Systems;
- Archive;
- Get Started;
- Security;
- System Status;

unless they become real destinations.

## Visual
- editorial;
- horizontal structural line;
- low radius;
- gold only for state/focus;
- accessible mobile menu.

---

# 01 — Hero

## Goal

Within 5 seconds the visitor understands:

- Movistrato builds software;
- FARO is a real product;
- the company has a deliberate engineering/design identity.

## Working PT headline

```text
TECNOLOGIA
QUE SE ADAPTA
ÀS PESSOAS.
```

This is working copy, not permanent final copy.

## Critical typography rule

Never split words internally.

Forbidden:

```text
TECNO
LOGIA

PESSOA
S
```

## Required visual assets

Use actual FARO UI:

- desktop/browser screenshot;
- mobile screenshot;
- optional lesson-detail crop.

Do not show a Movistrato logo inside a fake device as the product visual.

## Composition

Do not use a rigid “text left / image right” layout.

The Hero should use:

- large editorial type;
- FARO UI overlapping or interacting with typography;
- Movistrato ribbon geometry;
- 12-column structure;
- controlled asymmetry;
- clear CTA.

## CTA

PT:

`EXPLORAR FARO →`

EN:

`EXPLORE FARO →`

Do not use “Get Started” unless there is a real onboarding destination.

## Height

At 1440×900 the key Hero content should fit largely within the viewport.

Avoid arbitrary oversized hero heights that create dead space.

## Static quality

The Hero must look excellent as a still screenshot before advanced motion is introduced.

---

# 02 — Manifesto

## Working statement

`O software pode compreender melhor as pessoas.`

## Goal

Explain the philosophy behind Movistrato without turning it into generic corporate copy.

## Layout

- technical label;
- large editorial statement;
- concise supporting paragraph;
- optional subtle ribbon fragment;
- controlled asymmetry.

Do not use a generic “About us” two-column template.

---

# 03 — What We Build

## Concepts

- Engineering
- Intelligence
- Experience

## Goal

Explain how Movistrato thinks about products.

## Visual rule

Do not create three identical cards.

Use one editorial composition with different visual weights.

Example:

- Engineering dominant;
- Intelligence smaller/technical;
- Experience large in another region.

Use structure, lines and typography to connect them.

---

# 04 — FARO

## Label

`PRODUCT / 01`

## Goal

Introduce the first product and make it visually undeniable that Movistrato builds real software.

## Working PT definition

`Uma plataforma de aprendizagem de línguas centrada em contexto, continuidade e adaptação.`

## Visual

Recommended dark product chapter.

Use:

- large FARO desktop;
- overlapping FARO mobile;
- optional lesson detail;
- large `FARO` typography behind/in relation to product.

Do not use generated fake dashboards.

Keep FARO's native product colours inside the UI.

---

# 05 — FARO Experience

## Goal

Show the experience instead of merely listing features.

## Concepts

PT:

```text
DESCOBRIR
APRENDER
PRATICAR
PROGREDIR
```

EN:

```text
DISCOVER
LEARN
PRACTICE
PROGRESS
```

## Phase 1

Static editorial presentation.

## Later

May become a sticky/interactive sequence where copy and real FARO screens change while scrolling.

Do not implement four generic feature cards.

---

# 06 — Adaptive System

## Goal

Explain the adaptive-learning concept to a non-technical visitor.

## Conceptual flow

```text
UTILIZADOR
→ INTERAÇÃO
→ SINAIS
→ CONTEXTO
→ ADAPTAÇÃO
→ PRÓXIMA EXPERIÊNCIA
```

## Visual

Avoid a PowerPoint flowchart.

Use:

- lines;
- nodes;
- circles;
- technical labels;
- Movistrato ribbon/path;
- restrained gold active state.

If capabilities are still under development, show that honestly.

Possible label:

`SYSTEM / IN DEVELOPMENT`

---

# 07 — Technology

## Goal

Show engineering seriousness without becoming a README.

## Principles

```text
PERFORMANCE
SECURITY
ADAPTABILITY
MULTIPLATFORM
INTELLIGENCE
```

## Visual

Use numbered editorial rows or an asymmetric system.

Avoid five identical cards.

## Stack

Only a secondary teaser on the homepage.

Detailed technology belongs on `/technology`.

---

# 08 — Platforms

## Goal

Explain FARO's multi-device strategy clearly.

## Status

Use `docs/content.md` as the source of truth.

Current/planned platform states must never be invented.

## Visual

Avoid badges/pills.

Prefer:

- real OS icons;
- device composition;
- status labels;
- strong typography.

---

# 09 — Company

## Working statement

`FARO É O PRIMEIRO CAPÍTULO.`

## Goal

Re-establish Movistrato as the parent company.

Explain that FARO is the first product without inventing future products.

## Visual

Return to Movistrato brand geometry and lighter corporate/editorial space.

---

# 10 — Contact CTA

## Goal

Create a strong but factual final action.

Working PT:

`CONTACTAR A MOVISTRATO`

Working EN:

`CONTACT MOVISTRATO`

Gold can become more dominant here.

Do not use a generic “Get Started” CTA.

---

# 11 — Footer

## Structure

```text
MOVISTRATO

PRODUCT
FARO

COMPANY
Technology
Company
Contact

CONNECT
GitHub
LinkedIn

LEGAL
Privacy
Terms
Cookies

LANGUAGE
PT
EN
```

Only include real social destinations.

Bottom:

`© 2026 Movistrato`

Do not invent legal suffixes or fake portals.

---

# Responsive art direction

## Desktop
Treat the page as an editorial canvas.

## Mobile
Treat the page as a premium editorial poster.

Do not shrink desktop blindly.

Preserve:

- strong typography;
- product prominence;
- labels;
- gold;
- rhythm.

Simplify:

- decorative geometry;
- overlap;
- complex grid.

## Target review widths

- 375
- 390
- 430
- 768
- 1024
- 1280
- 1440
- 1920
