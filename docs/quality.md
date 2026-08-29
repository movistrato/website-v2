# Movistrato — Quality Requirements

## 1. Performance
Prefer Server Components, static rendering, `next/image`, `next/font`, code splitting, lazy loading and CSS for simple motion.

Avoid unnecessary `"use client"`, large initial bundles, unnecessary animation libraries, oversized images, CLS and heavy 3D on initial load.

## 2. Client-component budget
Expected:
- ThemeToggle
- MobileNavigation

Future:
- interactive FARO demo
- advanced motion
- 3D

Static sections should remain Server Components.

## 3. Accessibility
Required:
- semantic HTML
- logical headings
- skip link
- keyboard navigation
- visible focus
- accessible navigation/mobile menu/theme/locale
- useful alt text
- decorative visuals hidden appropriately
- sufficient contrast
- reduced-motion support

## 4. Security
Keep attack surface small. Use secure headers, CSP where practical, HSTS on production, suitable Referrer/Permissions policies, frame protection and server-only secrets.

## 5. Contact
Future form: Next.js Route Handler, Zod, payload limits, honeypot, Turnstile, rate limiting, safe errors and approved mail provider.

## 6. Images
Use `next/image` where appropriate with dimensions, `sizes`, justified priority and responsive delivery.

## 7. Fonts
Use `next/font` for Newsreader, Inter and JetBrains Mono. Avoid browser runtime font requests.

## 8. Testing
Use Vitest for useful logic and Playwright for locale/theme/navigation/FARO/contact/404 journeys.

## 9. Visual QA
For major checkpoints inspect:
- 1440×900 light
- 1440×900 dark
- 390×844 light
- 390×844 dark

A passing build is not visual approval.

## 10. Development
Use:
```bash
npm run dev
```
for normal iteration and Fast Refresh.

## 11. Production validation
Before a major checkpoint is complete, run actual project scripts for type check, lint, tests and build.

## 12. Vercel
Keep deployment compatible with Vercel. Never commit deployment credentials.
