# Movistrato Website — Agent Instructions

## Purpose
This repository contains the official corporate website of **Movistrato**, a software product company. The first product is **FARO**, a language-learning software product. This repository is the corporate website, not the FARO application.

## Source-of-truth order
1. `AGENTS.md`
2. `docs/architecture.md`
3. task-specific documentation under `docs/`
4. real Movistrato/FARO assets
5. approved visual references
6. installed design skills
7. generated prototypes / old implementation code

Installed skills advise. They do not define the Movistrato brand.

## Read only the context required
Always read:
- `AGENTS.md`
- `docs/architecture.md`

Then load only what is relevant:
- Visual/UI → `docs/design-system.md`, `docs/homepage.md`, `docs/content.md`, `docs/assets.md`, `docs/ai-workflow.md`
- Localisation → `docs/i18n.md`
- Accessibility/performance/security/testing → `docs/quality.md`
- Motion/3D → `docs/motion.md`
- AI/design skills → `docs/ai/skills.md`

Do not load every document and every skill for every task.

## Company model
```text
MOVISTRATO
└── PRODUCT / 01
    └── FARO
```

Movistrato builds its own software products. It is not presented as an agency, consultancy or freelancer portfolio.

Never invent clients, partners, investors, testimonials, metrics, awards, offices, team members, certifications or future products.

## Core stack
- **Next.js — App Router**
- **React**
- **TypeScript strict**
- **React Server Components by default**
- **Client Components only when interaction requires them**
- **Tailwind CSS for implementation**
- **semantic CSS variables/design tokens for visual identity**
- **next-intl**
- **next/font**
- **Zod**
- **Vitest**
- **Playwright**
- **Vercel** as primary deployment target

Do not reintroduce Astro or Svelte.

## Rendering rules
Default to Server Components.

Use `"use client"` only for real browser state, browser APIs or interaction.

Good Client Component examples:
- ThemeToggle
- MobileNavigation
- future interactive FARO demo
- future scroll-driven experience
- future 3D experience

Bad Client Component examples:
- headings
- paragraphs
- static layout
- static screenshots
- ordinary sections

## Static-first philosophy
Corporate pages should remain statically renderable wherever possible. Dynamic runtime behaviour should only be introduced for genuine requirements such as contact submission or future authenticated features.

## Tailwind rule
Tailwind is an implementation tool, not the design system. The visual source of truth remains `docs/design-system.md`.

Use semantic tokens. Avoid arbitrary Tailwind values everywhere. Do not add shadcn/ui or another large UI kit by default.

## Visual direction
Official visual language: **Architectural Editorial**.

Core ingredients:
- Warm Ivory
- Deep Black
- Movistrato Gold
- Newsreader
- Inter
- JetBrains Mono
- real FARO UI
- controlled asymmetry
- editorial typography
- architectural structure
- restrained neo-brutalism

Avoid generic SaaS, cyberpunk, neon AI, agency boilerplate, glassmorphism everywhere and card-grid marketing.

## Assets
Read `docs/assets.md` before visual work. Never silently substitute fake screenshots or unrelated imagery. If an asset is missing, report `MISSING — DO NOT SUBSTITUTE` unless explicitly asked to generate one.

## Content truth
Never present planned work as completed. Portuguese must be Portuguese from Portugal.

## Skills
Use `docs/ai/skills.md`. Do not invoke every style skill simultaneously.

Priority:
1. Movistrato design system
2. accessibility/usability
3. project architecture
4. design/composition skills
5. external references

## Visual workflow
Do not build the entire homepage in one uncontrolled pass.

Preferred checkpoints:
1. foundation
2. Header
3. Hero
4. Manifesto + What We Build
5. FARO product chapter
6. FARO Experience + Adaptive System
7. Technology + Platforms
8. Company + Contact
9. responsive/theme/accessibility
10. motion
11. optional 3D
12. final polish

## Browser review
For major visual checkpoints review at minimum:
- 1440×900 light
- 1440×900 dark
- 390×844 light
- 390×844 dark

A passing build is not visual approval.

## Engineering quality
Avoid giant page components, duplicated helpers, premature abstractions, generic section engines, unnecessary global state, random dependencies, unused hydration, fake data and inaccessible controls.

## Dependency policy
Before adding a dependency ask:
1. Is it genuinely necessary?
2. Can Next.js/React/CSS solve this?
3. What bundle/runtime cost does it add?
4. Is it maintained?
5. Can it remain isolated?

Do not add motion/3D libraries before an approved requirement exists.

## Final principle
**Architecture before complexity.  
Server by default.  
Static quality before motion.  
Product before decoration.  
Movistrato before trends.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
