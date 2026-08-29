# MOVISTRATO FRONTEND AUDIT
**Date:** 2026-08-27  
**Auditor:** AI Senior Architect (read-only, no modifications made)  
**Build status at time of audit:** `pnpm check` → 0 errors. `pnpm build` → success, 3 pages.

---

## 1. Executive Summary

1. **The architectural foundation is sound.** Astro 5, Svelte 5 islands, TypeScript strict, native CSS layers, and the Cloudflare adapter are correctly configured. No React, no Next.js, no Tailwind contamination.
2. **The homepage is currently just Hero + Footer.** Sections 02–10 (Manifesto through Contact CTA) are completely absent.
3. **P0 BLOCKER — Hero headline renders literal `\n` characters.** The title prop `"TECHNOLOGY\nTHAT ADAPTS\nTO PEOPLE."` is passed via JSX-like syntax in `.astro`. Astro treats attribute strings as raw text, not JavaScript template literals. The `\n` arrives as the two-character sequence backslash-n (not ASCII 10). The regex `/\n/g` looks for ASCII 10, finds no match. No `<br/>` is inserted. Raw string with literal backslash-n renders on screen.
4. **P0 BLOCKER — ThemeToggle.svelte is non-functional.** The component defines `_toggleTheme` (with underscore) but binds `on:click={toggleTheme}` (without). The theme toggle is non-functional and the button may be invisible.
5. **P0 BLOCKER — No FARO product imagery in Hero.** `logo_dark_pc.png` and `logo_light_cellphone.png` are likely Movistrato brand/logo compositions, NOT FARO software screenshots. The visitor sees no software product.
6. **P0 BLOCKER — Mobile Hero has horizontal overflow.** At 390px, `white-space: pre-wrap` combined with the `\n` bug (one long line) causes text to escape the right viewport edge.
7. **P0 BLOCKER — Mobile navigation has no fallback.** Navigation links (FARO, Technology, Company) are hidden at < 1024px with no mobile menu, hamburger, or alternative access mechanism.
8. **P1 — Asset directory structure does not match `docs/assets.md`.** Spec requires `public/brand/` and `public/products/faro/`. All assets live in `public/` root with ambiguous filenames. Registry remains `PENDING AUDIT`.
9. **P1 — Real FARO UI screenshots may not exist.** After inspecting all assets, no file is confirmed to show FARO product UI. All filenames suggest brand/logo imagery.
10. **P1 — Hero desktop composition is a basic text-left / image-right template.** Despite the 12-column grid, the layout is a rigid 2-column split with no editorial layering or intentional overlap.
11. **P1 — `MovistratoRibbon.astro` is not real brand geometry.** The SVG is a generic Bézier wave — not the Movistrato M-symbol.
12. **P1 — Fonts are not loaded.** No `<link>` to Google Fonts, no self-hosted font files. Newsreader, Inter, and JetBrains Mono render only if locally installed. The design system's primary visual tool is absent.
13. **P2 — Missing CSS files.** `docs/architecture.md` specifies `typography.css`, `layout.css`, and `motion.css`. None exist.
14. **P2 — No SEO metadata.** No canonical, OpenGraph, hreflang, sitemap, or structured data.
15. **P3 — `src/features/faro/` boundary does not exist.** Architecture spec mandates this for future scalability.

---

## 2. Repository Map

```
website-movistrato/
├── AGENTS.md                  ← Primary agent instructions
├── CLAUDE.md                  ← Present but empty
├── astro.config.mjs           ← Astro 7, cloudflare adapter, svelte, i18n
├── biome.json                 ← Biome 2.5.10 linter/formatter
├── package.json               ← Clean — no react/next/tailwind
├── tsconfig.json              ← strict, @/* alias
├── playwright.config.ts       ← E2E config (zero tests written)
├── docs/
│   ├── architecture.md        ← Source of truth for stack/structure
│   ├── design-system.md       ← Updated 2026-08-27 (simplified format)
│   ├── homepage.md            ← Section-by-section spec
│   ├── content.md             ← Copy rules, truthfulness constraints
│   ├── assets.md              ← Asset registry (all PENDING AUDIT)
│   ├── i18n.md                ← Locale routing spec
│   ├── quality.md             ← Performance, a11y, security, testing
│   ├── motion.md              ← Deferred (static first)
│   ├── ai-workflow.md         ← Agent discipline guide
│   └── audits/               ← This document
├── src/
│   ├── components/
│   │   ├── brand/
│   │   │   └── MovistratoRibbon.astro   ← Generic wave SVG (not brand geometry)
│   │   ├── layout/
│   │   │   ├── Container.astro          ← 1440px max-width wrapper ✅
│   │   │   └── Grid.astro              ← 4/8/12 col responsive grid ✅
│   │   ├── navigation/
│   │   │   ├── Navbar.astro            ← Desktop-only nav (no mobile menu)
│   │   │   ├── Footer.astro            ← Dark section, correct structure
│   │   │   └── LanguageSwitcher.astro  ← Drops to home on switch (not current page)
│   │   ├── sections/
│   │   │   └── HomeHero.astro          ← 360 lines, all problems here
│   │   └── ui/
│   │       ├── SkipToContent.astro     ← Correct ✅
│   │       └── ThemeToggle.svelte      ← Broken (function name mismatch)
│   ├── content/               ← Empty (no .md files anywhere)
│   ├── i18n/
│   │   └── utils.ts           ← Minimal locale helper (no translation dict)
│   ├── layouts/
│   │   ├── BaseLayout.astro   ← HTML shell + theme bootstrap (missing fonts)
│   │   ├── SiteLayout.astro   ← Navbar + Footer + slot ✅
│   │   └── ProductLayout.astro← Hardcoded 1200px max-width (wrong token)
│   ├── pages/
│   │   ├── index.astro        ← Redirects to /en/
│   │   ├── en/index.astro     ← EN homepage (title \n bug)
│   │   └── pt/index.astro     ← PT homepage (title \n bug)
│   └── styles/
│       ├── reset.css          ← Clean reset (overflow-wrap:break-word on h1 — conflict)
│       ├── tokens.css         ← Spacing, fonts, sizes, motion, radius, grid ✅
│       ├── themes.css         ← Light/dark color tokens ✅
│       └── global.css         ← Layer declaration + body base ✅
│       [MISSING: typography.css, layout.css, motion.css]
└── public/                    ← All assets at root, no subdirectory structure
    ├── favicon.ico / .svg
    ├── logo_book.png          ← 1672×941 — content unknown
    ├── logo_dark.png          ← 1254×1254 — brand mark, dark variant
    ├── logo_dark_pc.png       ← 1774×887 — widescreen, used in hero desktop
    ├── logo_diversos.png      ← 1672×941 — "various" — content unknown
    ├── logo_favicon.png       ← 1254×1254 — brand mark source
    ├── logo_light.png         ← 1254×1254 — brand mark, light variant
    └── logo_light_cellphone.png← 941×1672 — portrait, used in hero mobile
```

---

## 3. Documentation Compliance

| Area | Source of Truth | Status | Notes |
|---|---|---|---|
| Framework stack | `architecture.md` | ✅ | Astro 7, Svelte 5, TS strict, native CSS |
| CSS layers | `architecture.md §9` | ⚠️ | `typography.css`, `layout.css`, `motion.css` missing |
| Directory structure | `architecture.md §5` | ⚠️ | `src/features/faro/`, `src/lib/`, `src/types/` missing |
| Layouts | `architecture.md §6` | ✅ | Base, Site, Product present. ArticleLayout deferred. |
| No Tailwind/React | `AGENTS.md` | ✅ | Clean `package.json` |
| Static-first | `AGENTS.md` | ✅ | Only ThemeToggle hydrates |
| Asset registry | `assets.md` | ❌ | All PENDING AUDIT |
| Asset directory | `assets.md` | ❌ | No `public/brand/` or `public/products/faro/` |
| Hero composition | `homepage.md §01` | ❌ | Headline broken, wrong assets, basic 2-col |
| Navigation | `homepage.md §00` | ⚠️ | Correct links desktop, no mobile menu |
| Homepage sections | `homepage.md` | ❌ | Sections 02–10 absent |
| No word breaks | `homepage.md §01` | ❌ | `\n` bug causes exactly the forbidden breaks |
| i18n routing | `i18n.md` | ⚠️ | Routes exist; switch drops to home not current page |
| SEO metadata | `i18n.md §4` | ❌ | No canonical, OG, hreflang |
| Accessibility | `quality.md §3` | ⚠️ | Skip link ✅. Toggle broken ❌. No mobile menu ❌. |
| Performance | `quality.md §1` | ✅ | Only 1 island, no heavy deps. Images unoptimised. |
| Testing | `quality.md §8` | ❌ | Zero tests written |
| Content truthfulness | `content.md` | ✅ | No fabricated claims found |
| PT copy quality | `content.md §8` | ✅ | European Portuguese confirmed |

---

## 4. Asset Inventory

> **Critical:** `docs/assets.md` requires `public/brand/` and `public/products/faro/`. Neither directory exists. All assets are at root with ambiguous names. Registry must be populated before hero implementation.

| Asset | Path | Dimensions | Likely Type | Used? | Status |
|---|---|---|---|---|---|
| favicon.ico | `/public/favicon.ico` | — | Favicon | ✅ | Keep |
| favicon.svg | `/public/favicon.svg` | — | Favicon SVG (no `<title>`) | ✅ | Fix a11y |
| logo_book.png | `/public/logo_book.png` | 1672×941 | Unknown — render/lifestyle | ❌ | Inspect before use |
| logo_dark.png | `/public/logo_dark.png` | 1254×1254 | Brand mark (dark/light surfaces) | ❌ | → `public/brand/` |
| logo_dark_pc.png | `/public/logo_dark_pc.png` | 1774×887 | Widescreen brand comp or FARO desktop? | ✅ (Hero) | **Inspect — if brand not FARO: remove from hero** |
| logo_diversos.png | `/public/logo_diversos.png` | 1672×941 | "Various" — reference | ❌ | Inspect |
| logo_favicon.png | `/public/logo_favicon.png` | 1254×1254 | Brand mark source | ❌ | → `public/brand/` |
| logo_light.png | `/public/logo_light.png` | 1254×1254 | Brand mark (light surfaces) | ❌ | → `public/brand/` |
| logo_light_cellphone.png | `/public/logo_light_cellphone.png` | 941×1672 | Portrait brand comp or FARO mobile? | ✅ (Hero) | **Inspect — if brand not FARO: remove from hero** |

**Confirmed FARO screenshots: 0.** The hero is showing Movistrato brand imagery where FARO product UI must appear.

---

## 5. Homepage Coverage

| Section | ID | Status | Component | Problem |
|---|---|---|---|---|
| Navigation | 00 | ⚠️ PARTIAL | `Navbar.astro` | No mobile menu. Toggle broken. |
| Hero | 01 | ❌ BROKEN | `HomeHero.astro` | `\n` bug, wrong assets, basic layout |
| Manifesto | 02 | ❌ MISSING | — | Not implemented |
| What We Build | 03 | ❌ MISSING | — | Not implemented |
| FARO | 04 | ❌ MISSING | — | Not implemented |
| FARO Experience | 05 | ❌ MISSING | — | Not implemented |
| Adaptive System | 06 | ❌ MISSING | — | Not implemented |
| Technology | 07 | ❌ MISSING | — | Not implemented |
| Platforms | 08 | ❌ MISSING | — | Not implemented |
| Company | 09 | ❌ MISSING | — | Not implemented |
| Contact CTA | 10 | ❌ MISSING | — | Not implemented |
| Footer | 11 | ✅ ACCEPTABLE | `Footer.astro` | Correct for checkpoint |

---

## 6. Hero Deep Audit

### 5-Second Communication Test
- Movistrato builds software? ❌ No product UI visible
- FARO is the first product? Weakly — metadata label present but below fold
- FARO is language-learning software? ❌ Nothing communicates this

**FAILS the 5-second test.**

### Typography (detailed)
The headline is broken by two compounding mechanisms:

**Mechanism 1 (primary):** `title="TECHNOLOGY\nTHAT ADAPTS\nTO PEOPLE."` in `.astro` attribute syntax. Astro does not evaluate `\n` as JavaScript escape in attribute strings — it passes the literal backslash + n character. `title.replace(/\n/g, '<br/>')` uses a regex matching ASCII 10 (linefeed). The input contains ASCII 92 + 110 (backslash + n). No match. No replacement. The raw string including `\n` renders in the DOM.

**Mechanism 2 (secondary):** `reset.css` sets `overflow-wrap: break-word` on `h1`. `HomeHero.astro` sets `overflow-wrap: normal` on `.hero-title`. Astro component styles are in `<style>` blocks which are injected as `data-astro-cid-*` scoped rules but are NOT explicitly placed inside `@layer components`. If these rules fall outside the cascade layer system, the reset's `@layer reset` rule and the component rule compete with unpredictable specificity. This is a latent risk even after fixing Mechanism 1.

### Composition
- Desktop: 7-col text block + 5-col product block (with 1-col overlap at col 7)
- The product column has `aspect-ratio: 1/1` — forces a square
- `desktop-frame` (landscape image, 1774×887) fills this square; visually distorted or cropped
- `mobile-frame` (portrait image, 941×1672) at `width: 28%` inside the square — extremely small
- The Ribbon SVG at `width: 140%` extends beyond the product container — uncontrolled
- Result: not editorial layering. A collapsed, cramped product box.

### Above the Fold (1440×900)
- Navbar (80px)
- Technical label (24px)
- Hero headline (one broken line, ~60px height instead of ~240px)
- Metadata row
- CTA button
- Large dead space (remaining of `min-height: calc(100svh - 80px)` = ~740px)
- **No recognisable product UI visible above the fold**

---

## 7. Visual Design Audit

### Typography

| Check | Spec | Actual | Status |
|---|---|---|---|
| Display font | Newsreader | Defined in token, not loaded | ❌ |
| Body font | Inter | Defined, not loaded | ❌ |
| Mono font | JetBrains Mono | Defined, not loaded | ❌ |
| Font loading | Self-hosted | No font loading mechanism in BaseLayout | ❌ |
| Hero headline size | Large, `clamp()` | `clamp(4.5rem, 7.5vw, 8.5rem)` — correct range | ✅ (if text rendered) |
| Line height | Tight 0.88–0.98 | `0.9` on desktop title | ✅ |
| Word breaks | Never internal | Violated by `\n` bug | ❌ |
| Mono labels uppercase | Required | No `text-transform: uppercase` on `.technical-label` | ⚠️ |

### Colour

| Token | Value | Notes | Status |
|---|---|---|---|
| `--color-background` light | `#f2f0e9` Warm Ivory | Correct | ✅ |
| `--color-background` dark | `#080806` Deep Black | Correct | ✅ |
| `--color-brand` Gold | `#d9a62e` | Correct value | ✅ |
| Gold usage | Restrained, meaningful | Label line, CTA hover, contact border — too sparse to read as brand | ⚠️ |
| `themes.css` layer | Should be in own layer | Both `tokens.css` and `themes.css` are in `@layer tokens` — minor violation | ⚠️ |

### Grid

- `Container.astro` and `Grid.astro` implement the system correctly ✅
- `HomeHero.astro` duplicates grid logic with a custom `repeat(12, 1fr)` — does not reuse `Grid.astro`
- The `hero-grid-bg` decorative grid is visual only; actual layout columns are not aligned to it
- This is the distinction: **a decorative grid background ≠ compositional grid usage**

### Spacing

- `hero-section` has `min-height: calc(100svh - 80px)` with `padding: 96px top + 96px bottom`
- `footer { margin-top: var(--space-32) }` = 128px gap between hero bottom and footer
- On a page with only Hero + Footer, this creates ~200px of completely empty space between them

---

## 8. Architecture Audit

### Hydration Inventory

| Component | Directive | Necessary? | Notes |
|---|---|---|---|
| `ThemeToggle.svelte` | `client:load` | ✅ Yes | Needs localStorage access |

No unnecessary hydration found. Island budget is minimal and correct.

### CSS Architecture Gap

| Expected | Exists | Impact |
|---|---|---|
| `reset.css` | ✅ | — |
| `tokens.css` | ✅ | — |
| `themes.css` | ✅ | — |
| `typography.css` | ❌ | Type rules scattered in component scoped styles |
| `layout.css` | ❌ | Layout patterns not systematised |
| `motion.css` | ❌ | Acceptable (motion deferred) |

### Dependency Audit

| Package | Classification | Notes |
|---|---|---|
| `astro` | ✅ Essential | — |
| `@astrojs/svelte` | ✅ Essential | ThemeToggle island |
| `@astrojs/cloudflare` | ⚠️ Justified | Review if static-only deployment needed |
| `@astrojs/check` | ✅ Essential | — |
| `@biomejs/biome` | ✅ Essential | — |
| `@playwright/test` | ✅ Justified | E2E tests planned |
| `@types/node` | ✅ Needed | playwright.config.ts uses process |
| `svelte` | ✅ Essential | — |
| `typescript` | ✅ Required | Pinned 5.7.3 for `astro check` compatibility |

**No React, Tailwind, GSAP, Three.js, or contaminating frameworks.** ✅

---

## 9. Responsive Audit

| Viewport | Issue | Severity |
|---|---|---|
| 1440px | Headline one broken line, dead space below, no product | P0 |
| 1280px | Same issues scaled | P0 |
| 1024px | Nav breakpoint switches, hero issues persist | P0 |
| 768–1023px | Nav links hidden (< 1024px breakpoint), no mobile menu | P0 |
| 430px | Nav links hidden, text overflow, broken headline | P0 |
| 390px | Horizontal overflow on hero text | P0 |
| 375px | Same as 390px | P0 |

---

## 10. Accessibility Audit

### CRITICAL
| ID | Issue | File |
|---|---|---|
| A01 | FARO, Technology, Company links inaccessible on all mobile viewports | `Navbar.astro` |
| A02 | ThemeToggle button non-functional (`_toggleTheme` vs `toggleTheme`) | `ThemeToggle.svelte` |

### MAJOR
| ID | Issue | File |
|---|---|---|
| A03 | `MovistratoRibbon.astro` SVG not `aria-hidden="true"` — exposed to screen readers | `MovistratoRibbon.astro` |
| A04 | Image alt text describes intended content, not actual content ("FARO Mobile Interface" on a brand image) | `HomeHero.astro` |
| A05 | `favicon.svg` has no `<title>` element | `public/favicon.svg` |
| A06 | No visible focus rings on `.hero-cta`, `.nav-link` | `HomeHero.astro`, `Navbar.astro` |
| A07 | Language switcher shows no current locale indicator | `LanguageSwitcher.astro` |

### MINOR
| ID | Issue | File |
|---|---|---|
| A08 | `SkipToContent` uses `position: static` on `:focus` — causes reflow | `SkipToContent.astro` |
| A09 | Language switcher link has no `lang` attribute | `LanguageSwitcher.astro` |
| A10 | Two `<h1>` elements exist (mobile + desktop), one hidden via `display:none` | `HomeHero.astro` |

---

## 11. Performance Audit

### JS Shipped
| Bundle | Size | Notes |
|---|---|---|
| Svelte runtime | ~29KB | Amortises with more islands |
| ThemeToggle island | ~0.5KB | Acceptable |
| Total | ~30KB | Low |

### Images
| Asset | Size | Problem |
|---|---|---|
| `logo_dark_pc.png` | 388KB | No srcset, no WebP, no Astro Image optimisation |
| `logo_light_cellphone.png` | 530KB | Same |
| Total hero images | ~920KB | Unoptimised |

### Fonts
**Fonts not loaded.** Zero font loading in `BaseLayout.astro`. No font files in `public/`. The entire design system's typographic identity depends on fonts that are not shipping.

---

## 12. i18n & SEO Audit

### i18n
| Check | Status | Notes |
|---|---|---|
| `/en/` and `/pt/` routes | ✅ | — |
| `<html lang>` | ✅ | Set via `BaseLayout.astro` |
| Translation dictionary | ❌ | Copy hardcoded in `.astro` files (violates `i18n.md §3`) |
| Language switch preserves path | ❌ | Drops to locale root |
| Current locale indicator | ❌ | None |

### SEO
| Check | Status |
|---|---|
| `<title>` | ✅ |
| `<meta description>` | ⚠️ Default "Movistrato" fallback only |
| Canonical | ❌ |
| OpenGraph | ❌ |
| hreflang | ❌ |
| Sitemap | ❌ |
| robots.txt | ❌ |
| Structured data | ❌ |

---

## 13. Content & Truthfulness Audit

| Check | Status | Notes |
|---|---|---|
| No invented metrics/users/testimonials | ✅ | Clean |
| Company as software product company | ✅ | Correct positioning |
| FARO as Product 01 | ✅ | Label present |
| Platform claims (WEB/ANDROID/WINDOWS) | ✅ | Matches `content.md §4` |
| No "Get Started" | ✅ | CTA is "EXPLORE FARO" / "EXPLORAR FARO" |
| European Portuguese | ✅ | Verified |
| Social link accuracy | ⚠️ | GitHub/LinkedIn at `/movistrato` — unverified, may 404 |

---

## 14. Root Causes

### RC-01: Hero Headline Typography Bug
```
PROBLEM        Hero headline renders with literal \n visible, one long broken line
SYMPTOM        "TECHNOLOGY\nTHAT ADAPTS\nTO PEOPLE." appears as one string on screen
TECHNICAL      Astro attribute strings are raw text, not JS template literals.
               \n in attribute = backslash + n (two chars, not newline char ASCII 10).
               regex /\n/g matches ASCII 10. No match. No <br/>. Raw string rendered.
               white-space: pre-wrap then lets the \n render visibly.
DESIGN CAUSE   Copy is hardcoded as attribute prop instead of using i18n content
               or being defined in frontmatter as a JS variable.
FILES          src/pages/en/index.astro:8
               src/pages/pt/index.astro:8
               src/components/sections/HomeHero.astro:15
SEVERITY       P0
```

### RC-02: ThemeToggle Non-functional
```
PROBLEM        Theme toggle button is non-functional
SYMPTOM        Clicking does nothing; user cannot switch themes
TECHNICAL      ThemeToggle.svelte:10 defines `function _toggleTheme()` (underscore prefix)
               ThemeToggle.svelte:27 binds `on:click={toggleTheme}` (no underscore)
               JavaScript ReferenceError: toggleTheme is not defined
FILES          src/components/ui/ThemeToggle.svelte:10,27
SEVERITY       P0
```

### RC-03: Wrong Assets in Hero
```
PROBLEM        Hero shows no FARO product UI
SYMPTOM        Product composition displays brand/logo imagery, not software product
TECHNICAL      Implementation selected logo_dark_pc.png and logo_light_cellphone.png
               without performing the required asset audit (docs/assets.md §4).
               These files have not been visually confirmed to contain FARO UI.
               All filename evidence suggests brand/logo compositions.
DESIGN CAUSE   docs/assets.md was never populated. The asset audit step was skipped.
               ai-workflow.md §6 requires inspect-before-use, which was bypassed.
FILES          src/components/sections/HomeHero.astro:35,76,82
               public/logo_dark_pc.png, public/logo_light_cellphone.png
               docs/assets.md (PENDING AUDIT)
SEVERITY       P0
```

### RC-04: Mobile Navigation Inaccessible
```
PROBLEM        Navigation links unreachable on mobile
SYMPTOM        FARO, Technology, Company hidden with no alternative at < 1024px
TECHNICAL      .nav-center { display: none } below 1024px breakpoint
               No hamburger, no disclosure button, no off-canvas, no anchor
DESIGN CAUSE   Mobile menu acknowledged as future Svelte island but never implemented
FILES          src/components/navigation/Navbar.astro:73-75
SEVERITY       P0
```

### RC-05: Fonts Not Loaded
```
PROBLEM        Design system fonts unavailable
SYMPTOM        Newsreader, Inter, JetBrains Mono render only if locally installed
TECHNICAL      BaseLayout.astro has no font loading (no <link>, no @font-face)
               No font files in public/. docs/quality.md §7 requires self-hosting.
FILES          src/layouts/BaseLayout.astro
SEVERITY       P1 — Design system entirely dependent on these fonts
```

---

## 15. Prioritised Findings

| ID | Severity | Problem | Root Cause | Files | Recommended Direction |
|---|---|---|---|---|---|
| F01 | P0 | Hero headline renders `\n` literally | Astro attr ≠ JS template | `en/index.astro:8`, `pt/index.astro:8`, `HomeHero.astro:15` | Pass title as array prop `string[]` OR define as JS variable in frontmatter |
| F02 | P0 | ThemeToggle broken — function name mismatch | `_toggleTheme` vs `toggleTheme` | `ThemeToggle.svelte:10,27` | Remove underscore prefix from function definition |
| F03 | P0 | No FARO product imagery in hero | Asset audit skipped | `HomeHero.astro:35,76,82`, `docs/assets.md` | Perform visual asset audit; populate `docs/assets.md`; reorganise to `public/brand/` + `public/products/faro/` |
| F04 | P0 | Mobile nav completely inaccessible | No mobile menu implemented | `Navbar.astro:73-75` | Implement accessible mobile disclosure nav (Svelte island) |
| F05 | P0 | Mobile hero text overflows viewport | RC-01 + `white-space: pre-wrap` | `HomeHero.astro` | Fix F01 first; then test mobile layout |
| F06 | P1 | Fonts not loaded anywhere | No font loading in BaseLayout | `BaseLayout.astro` | Add Google Fonts or self-host Newsreader, Inter, JetBrains Mono |
| F07 | P1 | Hero is basic 2-col template | No editorial layering | `HomeHero.astro` | Recompose after F01+F03+F08 resolved |
| F08 | P1 | `MovistratoRibbon.astro` is generic wave | Not real brand geometry | `MovistratoRibbon.astro` | Define real Movistrato M-geometry as production SVG |
| F09 | P1 | Asset directory structure wrong | No `public/brand/` or `public/products/faro/` | `public/` | Reorganise assets per `docs/assets.md` |
| F10 | P1 | No i18n translation dictionary | Copy hardcoded in `.astro` | All pages | Create `src/i18n/translations.ts` typed string maps |
| F11 | P1 | No SEO metadata | BaseLayout missing OG/canonical/hreflang | `BaseLayout.astro` | Add SEO component |
| F12 | P2 | `typography.css`, `layout.css` missing | Architecture spec not followed | `src/styles/` | Create in next foundation pass |
| F13 | P2 | Language switch drops to home | Switcher redirects to locale root | `LanguageSwitcher.astro` | Preserve current path when switching |
| F14 | P2 | `ProductLayout` hardcoded 1200px | Not using `--grid-max-width` token | `ProductLayout.astro:22` | Replace with `var(--grid-max-width)` |
| F15 | P2 | No focus rings on interactive elements | Reset removes outlines, not restored | `HomeHero.astro`, `Navbar.astro` | Add explicit `:focus-visible` styles |
| F16 | P2 | `MovistratoRibbon` not `aria-hidden` | Decorative SVG exposed to AT | `MovistratoRibbon.astro` | Add `aria-hidden="true"` |
| F17 | P2 | Zero Playwright tests | Config present, tests absent | `playwright.config.ts` | Write locale routing + nav + theme tests |
| F18 | P2 | `content.config.ts` deprecated Zod | `z` from `astro:content` deprecated | `src/content.config.ts` | Import `z` from `zod` directly |
| F19 | P3 | `src/features/faro/` not created | Architecture boundary missing | `src/` | Create when FARO section implemented |
| F20 | P3 | Images not optimised | Raw PNG, no WebP, no `<Image>` | `HomeHero.astro`, `public/` | Use Astro `<Image>` with format optimisation |
| F21 | P3 | Social links unverified | May 404 | `Footer.astro:44-45` | Verify before launch |

---

## 16. What Is Already Good

1. **Architecture stack** — Astro 7 + Svelte 5 + TS strict + native CSS. No contamination. Excellent choice.
2. **CSS cascade layer declaration** — `global.css` correctly orders `reset, tokens, base, layout, components, utilities`.
3. **Token system** — `tokens.css` + `themes.css` correctly implement Warm Ivory / Deep Black / Gold with proper CSS custom properties.
4. **Theme bootstrap** — `BaseLayout.astro` inline script correctly prevents FOSC (Flash of System Color) using localStorage + `prefers-color-scheme`.
5. **`Container.astro`** — Clean max-width wrapper with correct 1440px / 64px margins.
6. **`Grid.astro`** — Correct 4/8/12-col responsive grid.
7. **Layout composition chain** — `BaseLayout` → `SiteLayout` → page follows the architecture spec cleanly.
8. **Footer structure** — `Footer.astro` uses tokens, correct dark section inversion, and appropriate nav columns.
9. **`SkipToContent` component** — Implemented and functional.
10. **Single island constraint** — Only one hydrated component. Correct discipline.
11. **Content truthfulness** — No fabricated metrics, testimonials, capabilities, or false claims anywhere.
12. **i18n routing** — `/en/` and `/pt/` compile and redirect correctly. `<html lang>` is set.
13. **TypeScript strict** — Enabled, passing, `@/` alias configured.
14. **Clean build** — `pnpm check` 0 errors. `pnpm build` success.

---

## 17. What Must Be Preserved

1. `src/styles/reset.css` — keep; verify h1 `overflow-wrap` doesn't conflict after fix
2. `src/styles/tokens.css` — keep; extend with typography and layout systems
3. `src/styles/themes.css` — keep as-is
4. `src/styles/global.css` — keep layer declaration
5. `src/layouts/BaseLayout.astro` — keep theme bootstrap; add font loading + SEO
6. `src/layouts/SiteLayout.astro` — keep
7. `src/components/layout/Container.astro` — keep
8. `src/components/layout/Grid.astro` — keep
9. `src/components/navigation/Footer.astro` — keep for this checkpoint
10. `src/components/ui/SkipToContent.astro` — keep
11. `astro.config.mjs` — keep i18n config, review cloudflare adapter
12. `tsconfig.json` — keep strict + `@/` alias
13. `src/content.config.ts` — keep structure, fix zod import

---

## 18. What Must Be Reworked

1. `HomeHero.astro` — full recompose after F01, F03, F08 resolved
2. `ThemeToggle.svelte` — fix function name (F02); then refine presentation
3. `Navbar.astro` — add mobile menu (F04); preserve desktop design direction
4. `LanguageSwitcher.astro` — preserve current path on switch (F13)
5. `MovistratoRibbon.astro` — replace wave with real brand geometry (F08)
6. `BaseLayout.astro` — add font loading (F06) and SEO component (F11)
7. `ProductLayout.astro` — fix hardcoded 1200px (F14)
8. `src/pages/en/index.astro` and `src/pages/pt/index.astro` — fix title prop (F01)
9. `docs/assets.md` — populate with real inventory after visual inspection (F03/F09)

---

## 19. What Must Be Removed

Nothing must be deleted at this stage.

`scripts/generate-pages.js` generates CommonJS warnings — review if still needed.
If `logo_book.png` / `logo_diversos.png` contain no product-usable imagery, document as reference-only but do not delete.

---

## 20. Recommended Implementation Order

### Phase 0 — Correct Foundations (BEFORE any more visual work)
- F02: Fix ThemeToggle function name
- F01: Fix title prop `\n` rendering (change to array prop)
- F06: Add font loading (Newsreader, Inter, JetBrains Mono)
- F03+F09: Perform visual asset audit, create `public/brand/` + `public/products/faro/`, populate `docs/assets.md`
- F04: Implement accessible mobile navigation

### Phase 1 — Hero Recomposition (Checkpoint A)
- Redesign `HomeHero.astro` using correct assets + editorial composition
- Real FARO imagery + brand geometry + tight typography
- Visual review: 1440×900 light/dark, 390×844 light/dark

### Phase 2 — Manifesto + What We Build (Checkpoint B)
- `Manifesto.astro`, `WhatWeBuild.astro`
- Editorial asymmetric layouts per spec

### Phase 3 — FARO Section
- Create `src/features/faro/` boundary
- `FaroSection.astro` with real desktop + mobile FARO screenshots

### Phase 4 — FARO Experience
- Static editorial: DESCOBRIR / APRENDER / PRATICAR / PROGREDIR
- Real FARO screens per concept

### Phase 5 — Adaptive System + Technology (Checkpoint C)
- SVG/line diagram for adaptive learning flow
- Technology principles editorial section

### Phase 6 — Platforms + Company
- Platform matrix with real status labels
- Company chapter with brand geometry return

### Phase 7 — Contact CTA + Footer Polish
- Contact CTA with gold emphasis
- Footer responsive audit

### Phase 8 — SEO + i18n Completion
- SEO component: OG/canonical/hreflang/structured data
- Translation dictionary: `src/i18n/translations.ts`
- Fix language switcher path preservation

### Phase 9 — Accessibility + Performance
- Complete a11y pass on all sections
- Astro `<Image>` optimisation for all assets
- Playwright E2E tests: locale routing + nav + theme + FARO page

### Phase 10 — Motion (Checkpoint E)
- Only after static UI approved at all checkpoints
- CSS transitions first

### Phase 11 — Optional 3D
- Only if genuinely serves product demonstration

---

## 21. GO / NO-GO

### Verdict: **GO WITH CORRECTIONS**

The architectural foundation is genuinely healthy. Stack, layers, tokens, layout system, theme bootstrap, and composition chain are all sound and do not require rebuilding.

Five P0 blockers must be resolved before further visual implementation is meaningful:

1. **F01** — `\n` bug invalidates every headline
2. **F02** — Theme toggle broken, dark mode cannot be user-tested
3. **F03** — No FARO imagery, product communication impossible
4. **F04** — Mobile navigation inaccessible
5. **F06** — Fonts not loaded, design system visually non-functional

These are targeted, mechanical fixes. None requires architectural changes. Phase 0 should take a single focused session. After that, Phase 1 Hero recomposition can proceed with a solid foundation.

---

## Appendix A — Current Homepage Map

```
CURRENT HOMEPAGE (2026-08-27)

Navigation
└── component:  src/components/navigation/Navbar.astro
└── CSS:        scoped in Navbar.astro (sticky, 80px, flex, structural line)
└── assets:     none (text labels only)
└── islands:    ThemeToggle.svelte (client:load) — BROKEN

Hero (min-height: calc(100svh - 80px))
└── component:  src/components/sections/HomeHero.astro
└── CSS:        scoped (360 lines, hero-section, grid-bg, desktop/mobile split)
└── assets:     /logo_dark_pc.png (1774×887), /logo_light_cellphone.png (941×1672)
               [both likely brand compositions, not FARO product UI]
└── brand SVG:  MovistratoRibbon.astro [generic wave, not brand geometry]
└── STATUS:     BROKEN — headline \n bug, wrong assets, mobile overflow, no FARO

[128px margin gap]

Footer
└── component:  src/components/navigation/Footer.astro
└── CSS:        scoped (dark section, token overrides)
└── assets:     none
└── STATUS:     ACCEPTABLE for this checkpoint
```

---

## Appendix B — Hero Root-Cause Map

```
HERO ROOT-CAUSE MAP

Typography:
- title="TECHNOLOGY\nTHAT ADAPTS\nTO PEOPLE." in .astro attribute = literal \n (not newline)
- regex /\n/g in HomeHero.astro:15 matches ASCII 10, not backslash+n — no match
- title.replace() returns unchanged string, set:html renders raw \n characters
- white-space: pre-wrap on .hero-title makes \n visible as whitespace on screen
- At mobile (< 1024px), one long line exceeds container width → horizontal overflow
- reset.css overflow-wrap:break-word on h1 may conflict with hero's overflow-wrap:normal
- Fonts (Newsreader) not loaded → metrics wrong, editorial ambition lost

Layout:
- Desktop: 7-col text | 5-col product — rigid 2-column template (forbidden by spec)
- Product column: aspect-ratio: 1/1 forces square — wrong for landscape/portrait images
- desktop-frame (landscape 1774×887) forced into square → distorted
- mobile-frame (portrait 941×1672) at width:28% → tiny, almost invisible
- Ribbon at width:140% → extends beyond product container boundaries
- No genuine overlap between typography and product — two separate boxes
- hero-grid-bg is purely decorative gradient — not compositional grid usage

Assets:
- /logo_dark_pc.png — 1774×887 widescreen, very likely brand/logo composition
- /logo_light_cellphone.png — 941×1672 portrait, very likely Movistrato logo on phone
- No confirmed FARO product UI screenshot exists in repository
- docs/assets.md: all fields PENDING AUDIT — never completed

Grid:
- hero-layout-grid uses repeat(12, 1fr) — duplicates Grid.astro, not reusing it
- hero-grid-bg decorative grid lines do not align to actual content columns
- Text column (1–7) and product column (7–12) do not interact editorially

Responsive:
- hero-mobile and hero-desktop separate compositions — correct architectural approach
- Both compositions share the same \n bug
- hero-mobile at 390px: font-size clamp(2.8rem, 12vw, 4.5rem) = ~46px
- With \n bug: one ~800px wide string on a 390px viewport = horizontal scroll
- MovistratoRibbon: width:120% in mobile = ~468px on 390px screen — bleeds right

Content:
- PT: "TECNOLOGIA\nQUE SE ADAPTA\nÀS PESSOAS." — correct copy, broken rendering
- EN: "TECHNOLOGY\nTHAT ADAPTS\nTO PEOPLE." — correct copy, broken rendering
- Label "MOVISTRATO / 001" — acceptable
- Metadata: PRODUCT/01, FARO, PLATFORMS, WEB/ANDROID/WINDOWS — truthful ✅
- CTA: "EXPLORE FARO" / "EXPLORAR FARO" — correct ✅

Theme:
- Light/dark token swap: architecturally correct
- Theme toggle: broken (function name mismatch) — user cannot switch
- logo_dark_pc + logo_light_cellphone have no dark-mode-aware variant handling
- In dark mode: logo_light_cellphone (presumably light bg) on dark background = poor contrast

Architecture:
- HomeHero.astro: 360 lines, two full h1 compositions in one file
- Two <h1> in DOM — one hidden via display:none; screen readers skip hidden ✅
- No src/features/faro/ — FARO-specific content in generic src/components/sections/
- Ribbon SVG is a generic Bézier wave, not Movistrato brand geometry
```

---

## Appendix C — Asset Decision

```
BEST FARO ASSET FOR HERO DESKTOP:
MISSING — DO NOT SUBSTITUTE
Inspect logo_dark_pc.png visually before using. If it shows Movistrato 
brand/logo on a computer, do not use. Obtain real FARO desktop screenshot.

BEST FARO ASSET FOR HERO MOBILE:
MISSING — DO NOT SUBSTITUTE
Inspect logo_light_cellphone.png visually. If it shows Movistrato 
logo on a phone (not FARO UI), do not use. Obtain real FARO mobile screenshot.

BEST FARO ASSET FOR PRODUCT SECTION:
MISSING — DO NOT SUBSTITUTE

BEST FARO ASSET FOR FARO EXPERIENCE:
MISSING — DO NOT SUBSTITUTE

BEST MOVISTRATO BRAND ASSET:
Likely: /public/logo_dark.png (1254×1254) for dark surfaces (light mark)
        /public/logo_light.png (1254×1254) for light surfaces (dark mark)
Requires visual confirmation. Move to public/brand/ after audit.

MOVISTRATO M-SYMBOL / RIBBON GEOMETRY:
MISSING — MovistratoRibbon.astro is a generic wave, not the real brand geometry.
The real geometry must be defined or obtained before it can be used.
```

---

*Audit complete. 2026-08-27. No source files were modified.*
