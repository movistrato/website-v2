# Movistrato — AI / Design Skills

## Purpose
This is the skill registry and priority policy for AI agents working on the Movistrato frontend.

The actual skill implementations may be global or IDE-managed. Do not assume availability without verifying it.

## Authority
Skills never override:
1. `AGENTS.md`
2. architecture
3. Movistrato design system
4. content/product truth
5. accessibility/usability

## Primary skills
### `design-taste-frontend`
Primary anti-slop and visual-quality reviewer.

### `redesign-skill`
Structured redesign/audit skill for existing UI.

### `composition-patterns`
Layout hierarchy, grouping, asymmetry and responsive composition.

### `web-design-guidelines`
Usability, WCAG-conscious accessibility, focus, touch targets and contrast.

### `brandkit`
Brand consistency and company/product identity separation.

## Secondary skills
### `minimalist-skill`
Use for restraint and information hierarchy.

### `brutalist-skill`
Use selectively for typographic/grid sharpness, not raw brutalism.

### `image-to-code-skill`
Use only when translating a real visual reference/mockup.

## Reference library
### `awesome-design-md`
Reference library only.

Useful targeted lessons:
- Anthropic → editorial restraint
- Linear → software-product presentation
- Vercel → engineering precision
- Leica → image restraint
- Porsche → cinematic hierarchy
- Stripe → information hierarchy

Use one reference for one lesson. Do not merge all brands.

## Other possible installed skills
The environment may contain taste-skill-v1, gpt-tasteskill, soft-skill, stitch-skill, output-skill, imagegen-frontend-web, imagegen-frontend-mobile, writing-guidelines and react-view-transitions.

Use only if the task genuinely benefits.

## Review order
For major visual work:
1. implement according to Movistrato docs;
2. review with `design-taste-frontend`;
3. review with `redesign-skill`;
4. review with `composition-patterns`;
5. review with `web-design-guidelines`;
6. review identity with `brandkit`.

## Storage
If skills are global, leave them global. Do not copy third-party skill packages into `docs/` merely for completeness.

If the IDE supports project-local skills and you deliberately want local copies, use the exact directory/schema required by that IDE.

This file is only a registry/policy.
