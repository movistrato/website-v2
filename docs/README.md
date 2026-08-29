# Movistrato Website Documentation

These files are the persistent source of truth for the Next.js implementation of `movistrato.com`.

## Current stack
- Next.js App Router
- React
- TypeScript strict
- Server Components by default
- Tailwind CSS + semantic design tokens
- next-intl
- next/font
- Vitest
- Playwright
- Vercel

## Documents
- `architecture.md` — technical architecture and Next.js rules
- `design-system.md` — Movistrato visual identity
- `homepage.md` — homepage narrative and sections
- `content.md` — company/product truth and copy rules
- `assets.md` — real Movistrato/FARO asset registry
- `i18n.md` — next-intl rules
- `quality.md` — performance/accessibility/security/testing
- `ai-workflow.md` — AI implementation workflow
- `motion.md` — motion/3D constraints
- `ai/skills.md` — AI design-skill hierarchy

## Legacy
The old Astro implementation is history/reference only. If old architecture documents are kept, store them under `docs/archive/astro-v1/`.

## `design/` folder
A `design/` directory is optional, not required. The new project can be built from the current docs, real `public/` assets and references supplied during tasks.

If a design experimentation folder becomes useful later, it can be added without changing architecture.
