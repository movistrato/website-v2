# Movistrato Website — Architecture

## 1. Goal
`movistrato.com` is the corporate website of Movistrato. It must remain fast, maintainable, multilingual, accessible, secure, visually ambitious, easy to iterate with AI and extensible to future products.

This is primarily a corporate/product-marketing website, not a client-side web application.

## 2. Core stack
- **Next.js — App Router**
- **React**
- **TypeScript — strict**
- **React Server Components by default**
- **Tailwind CSS + semantic CSS variables/design tokens**
- **next-intl**
- **next/font**
- **Zod**
- **Vitest**
- **Playwright**
- **Vercel**

Approved font roles:
- Newsreader — display
- Inter — body/UI
- JetBrains Mono — technical labels

## 3. Rendering philosophy
> Static first. Server by default. Client only when necessary.

Corporate content should normally be rendered as Server Components and statically generated/pre-rendered where possible.

Use runtime/dynamic behaviour only for genuine needs. Initial future dynamic boundary: contact submission.

## 4. Server vs Client Components
Server Components should handle layouts, page sections, copy, product visuals, SEO and static diagrams.

Client Components are for theme state, mobile-menu state and future interactive/animation/3D experiences.

Every `"use client"` must have a clear reason.

## 5. Routes
```text
/[locale]
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

Locales:
- `pt`
- `en`

## 6. Recommended structure
```text
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── technology/
│   │   ├── company/
│   │   ├── insights/
│   │   ├── contact/
│   │   └── legal/
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── brand/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── typography/
│   └── ui/
├── features/
│   └── faro/
│       ├── components/
│       ├── content/
│       └── visuals/
├── content/
├── i18n/
├── lib/
│   ├── forms/
│   ├── seo/
│   └── utils/
├── styles/
│   └── globals.css
└── types/
```

## 7. Generic vs FARO-specific
Generic corporate components belong under `src/components/`. FARO-specific presentation belongs under `src/features/faro/`.

## 8. Page composition
Route components should compose section components and remain small. Avoid giant `page.tsx` files.

## 9. Styling architecture
Tailwind is allowed for layout/responsive/state work. Semantic CSS variables remain the visual foundation.

Core concepts should include:
```text
--brand-gold
--background
--surface
--surface-elevated
--foreground
--muted
--border
--font-display
--font-body
--font-mono
--grid-max-width
```

For complex art direction, CSS Modules or scoped CSS are allowed when clearer than large utility strings.

## 10. Design system
`docs/design-system.md` is the visual source of truth. Do not silently introduce new brand colours, fonts, radius systems or generic SaaS shadows.

## 11. Theme
Support light, dark and system. Prevent theme flash. Persist explicit choice. Drive visual colour through semantic tokens.

## 12. Internationalisation
Use `next-intl`. Use `/pt` and `/en`, preserve equivalent routes on locale change and localise metadata. Avoid scattered locale ternaries.

## 13. Fonts
Use `next/font`. Approved roles: Newsreader, Inter, JetBrains Mono. Avoid runtime browser font requests.

## 14. Content
Initial content may live in typed TypeScript/MDX structures. Do not introduce a CMS before a real editing need exists.

## 15. Product architecture
FARO is Product 01. Do not hardcode the entire site around FARO. Keep a conceptual product model that can support future products.

## 16. Contact
Future flow:
```text
Client form
→ Next.js Route Handler
→ Zod
→ honeypot
→ Turnstile
→ rate limiting
→ Resend
→ Movistrato mailbox
```
No database initially required.

## 17. SEO
Use Next.js metadata APIs. Support title, description, canonical, locale alternates, OpenGraph, sitemap, robots and truthful structured data.

## 18. Images
Use `next/image` where appropriate. Prevent CLS, provide sizes and prioritise only true above-the-fold visuals.

## 19. Accessibility
Support semantic HTML, logical headings, keyboard navigation, visible focus, skip link, accessible mobile menu/theme/locale controls, useful alt text and reduced motion.

## 20. Performance
Avoid unnecessary client JavaScript. Prefer Server Components, static rendering, Next image/font optimisation and lazy loading of expensive future experiences.

## 21. Testing
Use Vitest for useful unit logic and Playwright for important flows such as locale/theme/navigation/FARO/contact/404.

## 22. Development
Primary iteration:
```bash
npm run dev
```
Use Fast Refresh and continuous browser review.

Production validation still requires type check, lint, tests and build.

## 23. Deployment
Primary target: Vercel. Keep deployment-specific concerns isolated from ordinary UI components.

## 24. Motion
CSS first. Add a specialist library only after a specific visual sequence is approved.

## 25. 3D
3D is optional enhancement. Potential approaches include React Three Fiber, image sequence, video or SVG/CSS 2.5D. Choose only after visual/performance validation.

## 26. Rewrite principle
This Next.js project is a clean implementation. Do not port old Astro components line-by-line. Preserve knowledge, content, assets, design decisions and lessons—not legacy code.
