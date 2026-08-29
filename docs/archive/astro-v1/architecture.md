# Movistrato Website — Architecture

## 1. Goal

`movistrato.com` is the corporate website of Movistrato.

It must remain:

- fast;
- maintainable;
- multilingual;
- accessible;
- secure;
- visually ambitious;
- easy to extend to future Movistrato products.

It is primarily a content/product-marketing website, not a client-side web application.

## 2. Core stack

- **Astro** — routing, pages, layouts, static rendering, SEO and content.
- **Svelte 5** — interactive islands only.
- **TypeScript** — strict mode.
- **Native CSS** — design tokens, cascade layers, scoped component CSS.
- **Astro Content Collections** — structured product/insight content.
- **Astro i18n** — locale routing.
- **Cloudflare** — intended deployment/edge platform.
- **pnpm** — package manager.
- **Biome** — lint/format.
- **Playwright** — end-to-end testing.

Do not change the stack without an explicit architectural decision.

## 3. Rendering model

Principle:

> Static first. Dynamic when necessary.

The following should normally be pre-rendered:

- Home;
- Products;
- FARO;
- Technology;
- Company;
- Insights;
- Legal pages.

Use server-side/runtime code only when a feature genuinely requires it.

Initial dynamic boundary:

- future contact form endpoint.

Do not make the entire website SSR because one form is dynamic.

## 4. Islands architecture

Astro components handle:

- layout;
- typography;
- content;
- product presentation;
- most decorative visuals;
- SEO.

Svelte islands are allowed only where browser state/interactivity is required.

Examples:

- theme control;
- accessible mobile menu if client state is necessary;
- future FARO interactive demo;
- future scroll choreography;
- future 3D experience.

Static text/content must not become a Svelte island.

## 5. Repository boundaries

Recommended structure:

```text
src/
├── components/
│   ├── brand/
│   ├── layout/
│   ├── media/
│   ├── navigation/
│   ├── sections/
│   ├── typography/
│   └── ui/
├── features/
│   └── faro/
│       ├── components/
│       ├── content/
│       └── media/
├── content/
│   ├── products/
│   └── insights/
├── i18n/
├── layouts/
├── lib/
│   ├── analytics/
│   ├── forms/
│   ├── seo/
│   └── security/
├── pages/
├── styles/
└── types/
```

### Generic vs product-specific

Generic corporate components belong under:

`src/components/`

FARO-specific presentation belongs under:

`src/features/faro/`

Future products should receive their own feature boundary.

## 6. Layouts

Expected layouts:

### `BaseLayout`
Responsible for:

- HTML document;
- document metadata;
- theme bootstrap;
- global CSS/font setup.

### `SiteLayout`
Responsible for:

- corporate navigation;
- main content;
- footer.

### `ProductLayout`
Responsible for product-specific page shell.

### `ArticleLayout`
Reserved for Insights content.

## 7. Page architecture

Initial routes:

```text
/[locale]/
/[locale]/products
/[locale]/products/faro
/[locale]/technology
/[locale]/company
/[locale]/insights
/[locale]/contact
/[locale]/legal/privacy
/[locale]/legal/terms
/[locale]/legal/cookies
```

Locales initially:

- `pt`
- `en`

## 8. Content architecture

Products and editorial content must be structured and validated.

Do not hardcode FARO into every generic component.

The product model should support future products without requiring a site rewrite.

Conceptual Product fields:

- id;
- slug;
- name;
- short description;
- status;
- platforms;
- locale;
- SEO metadata.

## 9. Styling architecture

Use native CSS.

Global style files:

```text
src/styles/
├── reset.css
├── tokens.css
├── themes.css
├── typography.css
├── layout.css
├── motion.css
└── global.css
```

Suggested cascade order:

```css
@layer reset, tokens, base, layout, components, utilities;
```

Use component-scoped CSS for local presentation rules.

Do not recreate Tailwind as hundreds of custom utility classes.

## 10. Dependency policy

Before adding a dependency ask:

1. Can native platform/CSS/Astro solve this?
2. Is this feature truly needed?
3. What browser JavaScript cost does it create?
4. Is the dependency actively maintained?
5. Can it remain isolated behind a clear boundary?

No library is added solely because it makes a demo easier.

## 11. Contact architecture

Future contact flow:

```text
Browser
→ server endpoint
→ validation
→ honeypot
→ Turnstile
→ rate limiting
→ email provider
→ Movistrato mailbox
```

No database is required initially.

Secrets must remain server-side.

## 12. Future CMS

Local Content Collections are enough initially.

A CMS may be introduced later if non-technical editors need to manage content.

The UI should not depend directly on the storage mechanism so local content can later be replaced without redesigning the frontend.

## 13. Future 3D

3D is an enhancement, not an architectural dependency.

Possible future approaches:

- Threlte/Three.js;
- rendered image sequence;
- video;
- SVG/CSS 2.5D.

The choice is made per experience after visual/performance testing.

## 14. Architectural principle

Prefer explicit, small, understandable components over generic rendering engines or premature abstraction.

The website must be easy to understand both by developers and AI coding agents.
