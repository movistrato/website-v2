# Movistrato — AI Development Workflow

## 1. Objective
AI agents are implementation partners operating inside a defined product, architecture and design system. They do not invent the Movistrato identity.

## 2. Context loading
Always read:
- `AGENTS.md`
- `docs/architecture.md`

Then load only what the task needs.

Visual section:
- `docs/design-system.md`
- `docs/homepage.md`
- `docs/content.md`
- `docs/assets.md`
- `docs/ai/skills.md`

i18n:
- `docs/i18n.md`

Quality:
- `docs/quality.md`

Motion:
- `docs/motion.md`

Avoid loading every document and every skill simultaneously.

## 3. Skills
Use the hierarchy in `docs/ai/skills.md`.

Recommended visual priority:
1. design-taste-frontend
2. redesign-skill
3. composition-patterns
4. web-design-guidelines
5. brandkit
6. minimalist-skill
7. brutalist-skill
8. image-to-code-skill only when a visual reference is being analysed
9. awesome-design-md as reference only

## 4. Server-first
Start with Server Components. Add `"use client"` only when required and explain why.

## 5. Tailwind
Tailwind is allowed, but semantic project tokens remain the source of truth. Avoid arbitrary values everywhere and use CSS Modules/scoped CSS when complex art direction is clearer there.

## 6. Visual checkpoints
Do not implement the entire homepage in one uncontrolled task.

Recommended:
A. foundation
B. Header
C. Hero
D. Manifesto + What We Build
E. FARO chapter
F. FARO Experience + Adaptive System
G. Technology + Platforms
H. Company + Contact + Footer
I. responsive/theme/accessibility
J. motion
K. optional 3D

## 7. Browser-first review
During visual work use:
```bash
npm run dev
```

Review continuously.

Minimum checkpoint views:
- 1440×900 light
- 1440×900 dark
- 390×844 light
- 390×844 dark

## 8. Prototypes and inspiration
Stitch exports, screenshots and external sites are references, not production code. Extract hierarchy, rhythm, composition, typography, image art direction and interaction principles. Do not copy branding or components.

## 9. External systems
Use references for specific lessons only:
- Anthropic → editorial restraint
- Linear → software-product presentation
- Vercel → engineering precision
- Leica → premium image restraint
- Porsche → cinematic hierarchy
- Stripe → information hierarchy

Do not average multiple brands into one identity.

## 10. Assets
Before product imagery work:
1. read `docs/assets.md`;
2. verify exact file;
3. inspect it;
4. use intentionally.

If missing: `MISSING — DO NOT SUBSTITUTE`.

## 11. Product imagery
Do not treat screenshots as generic image blocks. They may be cropped, layered, masked, enlarged or recomposed editorially, but do not fabricate functionality.

## 12. Anti-slop review
Before finishing visual work, check for generic SaaS cards, random rounded rectangles, gradient clichés, huge shadows, tiny boxed icons, arbitrary spacing, equal feature grids, fake luxury whitespace and pasted screenshots.

## 13. Accessibility
Skills never override readability, keyboard usability, focus, contrast, touch targets or semantic order.

## 14. Responsive
Mobile is not a scaled-down desktop. Deliberately decide what simplifies, reorders, changes crop or disappears.

## 15. Missing context
If a task depends on missing copy, asset, product status or legal fact, report it rather than inventing it.

## 16. Reports
At meaningful checkpoints report:
- skills actually consulted;
- files changed;
- Server Components;
- Client Components and why;
- assets used;
- responsive decisions;
- accessibility/performance notes;
- validation results;
- remaining limitations.

## 17. Validation
Use `npm run dev` during development.

Before completing a major checkpoint, run the repository's actual scripts for:
- type checking
- lint
- tests
- build

Do not claim success without running them.

## 18. Legacy policy
The old Astro implementation is history/reference only. Do not migrate it component-by-component.
