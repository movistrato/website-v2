# Movistrato — Asset Registry

## Purpose

This file is the source of truth for real visual assets available to the website.

Do not invent filenames.

Do not use a Movistrato logo as a substitute for FARO product UI.

Last updated: 2026-08-27 (Phase 0 audit)

---

# 1. Movistrato brand assets

Directory: `public/brand/`

| Asset | Exact path | Dimensions | Content | Purpose | Notes |
|---|---|---|---|---|---|
| Wordmark (dark surfaces) | `public/brand/movistrato-logo-dark.png` | 1254×1254 | **REQUIRES VISUAL CONFIRMATION** | Navbar, footer on dark surfaces | Inspect before use |
| Wordmark (light surfaces) | `public/brand/movistrato-logo-light.png` | 1254×1254 | **REQUIRES VISUAL CONFIRMATION** | Navbar, footer on light surfaces | Inspect before use |
| Favicon source | `public/brand/logo_favicon.png` | 1254×1254 | Brand mark/symbol | Favicon generation source | Square format |
| PC composition | `public/brand/logo_dark_pc.png` | 1774×887 | Brand/logo on a PC — content unconfirmed | REFERENCE ONLY — do not use as FARO product screenshot | Inspect before any use |
| Phone composition | `public/brand/logo_light_cellphone.png` | 941×1672 | Brand/logo on a phone — content unconfirmed | REFERENCE ONLY — do not use as FARO product screenshot | Inspect before any use |
| Book reference | `public/brand/logo_book.png` | 1672×941 | Unknown — inspect | Do not use until inspected | Large file (1.9MB) |
| Various reference | `public/brand/logo_diversos.png` | 1672×941 | Unknown — inspect | Do not use until inspected | Large file (1.4MB) |

## Movistrato brand assets — Key recommendations

**BEST MOVISTRATO WORDMARK FOR LIGHT SURFACES:**
`public/brand/movistrato-logo-dark.png` — REQUIRES VISUAL CONFIRMATION

**BEST MOVISTRATO WORDMARK FOR DARK SURFACES:**
`public/brand/movistrato-logo-light.png` — REQUIRES VISUAL CONFIRMATION

**BEST MOVISTRATO M-SYMBOL / RIBBON GEOMETRY:**
MISSING — `MovistratoRibbon.astro` contains a placeholder wave path.
Real brand geometry must be provided as a production SVG.

---

# 2. FARO assets

Directory: `public/products/faro/`

| Asset | Exact path | Dimensions | Content | Purpose | Status |
|---|---|---|---|---|---|
| Dashboard screenshot | `public/products/faro/faro-desktop-dashboard.png` | 1917×861 | **FARO desktop UI — dashboard view** | Hero desktop primary, FARO section | ✅ IN USE — requires visual confirmation |
| Learning screenshot | `public/products/faro/faro-desktop-learning.png` | 1917×867 | **FARO desktop UI — learning session** | Hero desktop secondary, FARO Experience | ✅ IN USE — requires visual confirmation |
| FARO icon | `public/products/faro/faro-icon.png` | 1254×1254 | FARO app icon/logo | Product identification, favicon candidate | Available |
| Mobile learning | `public/products/faro/faro-mobile-learning.jpg` | Unknown | **VERY SMALL FILE (7KB) — likely unusable thumbnail** | Candidate for hero mobile layer | ❌ LIKELY UNUSABLE — inspect before use |

## FARO assets — Key recommendations

**BEST FARO ASSET FOR HERO DESKTOP:**
`public/products/faro/faro-desktop-dashboard.png` — currently used
Visual confirmation required.

**BEST FARO ASSET FOR HERO DESKTOP (SECONDARY):**
`public/products/faro/faro-desktop-learning.png` — currently used as overlay
Visual confirmation required.

**BEST FARO ASSET FOR HERO MOBILE:**
`public/products/faro/faro-mobile-learning.jpg` — LIKELY UNUSABLE (7KB)
If unusable: use `faro-desktop-learning.png` cropped/responsive on mobile.
A real FARO mobile screenshot is MISSING — must be provided.

**BEST FARO ASSET FOR FARO PRODUCT SECTION:**
`public/products/faro/faro-desktop-dashboard.png`
Visual confirmation required.

**BEST FARO ASSET FOR FARO EXPERIENCE:**
`public/products/faro/faro-desktop-learning.png`
Visual confirmation required.
Additional experience-state screenshots would strengthen this section.

---

```
public/
├── brand/
│   ├── logo_favicon.png           ← Master favicon source
│   ├── favicon.ico                ← 32x32 standard fallback
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   ├── apple-touch-icon.png       ← 180x180 iOS touch icon
│   ├── android-chrome-192x192.png ← PWA / Android 192px
│   ├── android-chrome-512x512.png ← PWA / Android 512px
│   ├── movistrato-logo-dark.png
│   ├── movistrato-logo-light.png
│   ├── logo_dark_pc.png
│   ├── logo_light_cellphone.png
│   ├── logo_book.png
│   └── logo_diversos.png
├── products/
│   └── faro/
│       ├── faro-desktop-dashboard.png
│       ├── faro-desktop-learning.png
│       ├── faro-icon.png
│       └── faro-mobile-learning.jpg
└── site.webmanifest
```

---

# 4. Asset usage rules

## Real product first

If a real FARO screenshot exists, use it instead of generated fake product UI.

## Preserve aspect ratio

Do not distort screenshots.

## Cropping

Cropping is allowed when it preserves enough context to recognise the product.

## Perspective

Keep perspective treatments subtle.

## Optimisation

Use Astro image optimisation where appropriate.

Always provide intrinsic dimensions or otherwise prevent layout shift.

Use responsive image sizing.

---

# 5. Audit procedure

An AI coding agent must not guess asset files.

Before visual work it should:

1. list every file under `public/brand/`;
2. list every file under `public/products/faro/`;
3. inspect each image;
4. classify its role;
5. update this registry with exact paths.

After that, this file becomes authoritative for asset selection.

---

# 6. Missing assets

The following assets are required but do not currently exist in the repository:

| Asset | Needed for | Priority |
|---|---|---|
| Real FARO mobile screenshot | Hero mobile layer, mobile experience | HIGH |
| Movistrato M/ribbon geometry (vector SVG) | Brand decoration throughout site | HIGH |
| FARO Experience state screenshots (Descobrir, Aprender, Praticar, Progredir) | Section 05 | MEDIUM |
| Additional FARO UI detail crops | FARO section | LOW |

---

# 7. Asset classification — pending visual confirmation

The following assets are in use or available but have not been visually confirmed by a human reviewer.

Visual confirmation is required before Phase 1 (Hero art direction) can be considered complete.

| Asset | Status |
|---|---|
| `public/products/faro/faro-desktop-dashboard.png` | USED — UNCONFIRMED |
| `public/products/faro/faro-desktop-learning.png` | USED — UNCONFIRMED |
| `public/brand/movistrato-logo-dark.png` | AVAILABLE — UNCONFIRMED |
| `public/brand/movistrato-logo-light.png` | AVAILABLE — UNCONFIRMED |
| `public/brand/logo_dark_pc.png` | AVAILABLE — DO NOT USE AS FARO |
| `public/brand/logo_light_cellphone.png` | AVAILABLE — DO NOT USE AS FARO |
