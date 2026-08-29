# MOVISTRATO.COM

# FRONTEND IMPLEMENTATION SPECIFICATION — V1

## STATUS

Architecture: APPROVED
Technology Stack: APPROVED
Visual Direction: APPROVED
Content Architecture: PARTIALLY DEFINED
Final Marketing Copy: NOT FINAL
Advanced Motion: NOT YET IMPLEMENTED
3D: NOT YET IMPLEMENTED

This document defines how the first production-quality frontend implementation of `movistrato.com` must be built.

This is NOT a request to generate another prototype.

This is NOT a request to reproduce Stitch HTML.

This is NOT a request to create a generic landing page.

This is the beginning of the actual production frontend.

---

# 1. READ BEFORE WRITING CODE

Before modifying any source file, read completely:

1. `/AGENTS.md`
2. `/README.md`
3. `/docs/architecture.md`
4. `/docs/design-system.md`
5. `/docs/frontend-implementation.md`
6. `/docs/i18n.md`
7. `/docs/performance.md`
8. `/docs/security.md`

Then inspect:

```text
/design/stitch-v2/screen.png
/design/stitch-v2/code.html
/design/stitch-v2/DESIGN.md
```

Then inspect all real Movistrato brand assets in:

```text
/public/brand/
```

Then inspect all real FARO product assets in:

```text
/public/products/faro/
```

DO NOT start implementation until you understand:

* company structure;
* design direction;
* rendering architecture;
* component architecture;
* language architecture;
* theme architecture;
* actual FARO assets.

---

# 2. SOURCE OF TRUTH ORDER

If two sources conflict, use this priority order:

1. `AGENTS.md`
2. Architecture documentation
3. This implementation specification
4. Design System documentation
5. Real Movistrato assets
6. Real FARO assets
7. Stitch screenshot
8. Stitch DESIGN.md
9. Stitch HTML

The Stitch HTML is LAST.

It is reference code only.

Do not allow generated prototype implementation details to override production architecture.

---

# 3. VERY IMPORTANT — DO NOT COPY STITCH CODE

The Stitch prototype may contain:

* Tailwind;
* CDN dependencies;
* generated imagery;
* incorrect company terminology;
* fake navigation;
* temporary text;
* hardcoded values;
* prototype-only layout hacks.

DO NOT paste it into production.

Instead:

study:

* proportions;
* layout;
* hierarchy;
* whitespace;
* typography;
* visual rhythm;
* section relationships;
* grid;
* graphical direction.

Then REIMPLEMENT those ideas properly using the existing Astro architecture and native CSS design system.

---

# 4. COMPANY MODEL

Movistrato is a:

# SOFTWARE PRODUCT COMPANY

It is NOT:

* a software agency;
* a consulting company;
* a web design agency;
* a digital studio;
* a freelancer portfolio.

Movistrato creates its own software products.

Current product:

# FARO

FARO is:

`PRODUCT / 01`

The architecture must support additional future Movistrato products without pretending they already exist.

---

# 5. BRAND RELATIONSHIP

Hierarchy:

```text
MOVISTRATO
Company
│
└── FARO
    Product / 01
```

The website is primarily the corporate website of Movistrato.

FARO should receive strong product prominence.

However:

the website must never visually imply that:

Movistrato = FARO.

FARO is the first product.

Movistrato is the company behind it.

---

# 6. CORE STACK — DO NOT CHANGE

Use the architecture already defined:

* Astro
* Svelte 5
* TypeScript strict
* Native modern CSS
* Astro Content Collections
* Astro i18n
* Cloudflare target
* pnpm
* Playwright
* Biome

Do NOT introduce:

* React;
* Next.js;
* Tailwind CSS;
* Bootstrap;
* large UI frameworks;
* component marketplaces;
* unnecessary state management;
* unnecessary client-side JavaScript.

Do not change the architecture unless explicitly instructed.

---

# 7. RENDERING PRINCIPLE

The website is:

# STATIC FIRST.

Use Astro for:

* page structure;
* content;
* layout;
* product information;
* company information;
* SEO;
* most visual presentation.

Use Svelte islands only where actual interaction exists.

Do not hydrate static sections.

---

# 8. CURRENT IMPLEMENTATION GOAL

Build the first complete static frontend of the Movistrato homepage.

The result must:

* look professional;
* be responsive;
* implement the approved visual identity;
* use real FARO assets;
* support PT and EN;
* support light and dark themes;
* have excellent HTML semantics;
* have excellent accessibility foundations;
* be ready for future motion;
* be ready for advanced product interactions.

Do NOT implement heavy scroll animation or 3D during this phase.

The static page must already look excellent.

---

# 9. DESIGN DIRECTION

Official visual direction:

# ARCHITECTURAL EDITORIAL

Conceptually:

Architectural Editorial

×

Refined Neo-Brutalism

×

Software Product Design

×

Modern Engineering

×

Editorial Typography

It must feel:

* modern;
* disciplined;
* bold;
* premium;
* technical;
* editorial;
* human;
* distinctive.

It must NOT feel:

* generic SaaS;
* ThemeForest;
* corporate template;
* Canva;
* AI startup;
* cyberpunk;
* crypto;
* gaming;
* design agency.

---

# 10. DESIGN PHILOSOPHY

The website must communicate professionalism through:

* typography;
* composition;
* precision;
* whitespace;
* hierarchy;
* real product UI;
* engineering discipline.

NOT through:

* fake corporate scale;
* excessive effects;
* gradients;
* glass cards;
* animations everywhere.

---

# 11. VISUAL SYSTEM

Use semantic tokens.

Primary light palette:

```text
Warm Ivory:
#F2F0E9

Deep Black:
#080806

Movistrato Gold:
use official brand gold if extracted from logo.

Fallback:
#D9A62E

Soft Grey:
approximately #8C8C8A
```

The official Movistrato gold asset should take precedence over approximate values.

Do not blindly use prototype colour values.

---

# 12. GOLD MEANING

Gold represents:

* active;
* meaningful;
* selected;
* progress;
* brand emphasis;
* interaction.

Gold must be scarce enough to retain meaning.

Never use gold merely to decorate large empty spaces.

---

# 13. LIGHT THEME

The primary visual canvas should initially emphasise light editorial design.

Do NOT use pure sterile white everywhere.

Prefer warm paper-like ivory.

The light theme should feel:

editorial;
architectural;
warm;
precise.

---

# 14. DARK THEME

Dark mode must be independently art-directed.

Use:

Deep Black.

Warm light typography.

Subtle structural borders.

Gold highlights.

Do NOT simply invert light mode.

Dark sections should feel:

technical;
cinematic;
product-driven.

---

# 15. TYPOGRAPHY

Use the typography system already approved.

## Display

Newsreader or approved equivalent.

Used for:

* large headlines;
* section statements;
* vision copy;
* oversized graphic typography.

## Body/UI

Inter or approved equivalent.

Used for:

* explanatory text;
* navigation;
* controls;
* UI.

## Technical

JetBrains Mono.

Used for:

* metadata;
* system labels;
* section numbering;
* product state.

Examples:

```text
MOVISTRATO / 001
PRODUCT / 01
TECHNOLOGY / SYSTEM
PLATFORM / CURRENT
```

---

# 16. FONT DELIVERY

Production fonts should ultimately be self-hosted.

Do not permanently rely on Google Fonts.

During this implementation:

if local approved fonts already exist:

use them.

Otherwise:

document the temporary fallback clearly.

Do NOT include browser-extension URLs or external experimental sources.

---

# 17. TYPOGRAPHY SCALE

Create responsive type tokens using `clamp()`.

Approximate conceptual ranges:

Hero display:

```text
mobile:
52–72px

desktop:
96–150px
```

Section display:

```text
mobile:
40–56px

desktop:
64–96px
```

Body:

```text
16–20px
```

Technical:

```text
11–13px
```

Do not blindly copy pixel values.

Test composition at multiple viewport sizes.

---

# 18. TYPOGRAPHY AS GRAPHIC DESIGN

Large words may become part of the composition.

Examples:

TECHNOLOGY

FARO

PEOPLE

MOVISTRATO

They may:

* cross multiple columns;
* partially crop;
* appear behind product UI;
* enter neighbouring layout regions.

But readability remains mandatory.

Controlled composition.

Never chaos.

---

# 19. GRID SYSTEM

Use the existing 12-column grid system.

Desktop:

12 columns.

Tablet:

8 columns.

Mobile:

4 columns.

Approximate maximum content width:

1440px.

Use existing design tokens.

Do not hardcode separate grid definitions in every section.

Create reusable layout primitives.

---

# 20. REQUIRED LAYOUT PRIMITIVES

Review/create reusable production components such as:

```text
Container.astro
Section.astro
EditorialGrid.astro
FullBleed.astro
ReadingColumn.astro
Stack.astro
Cluster.astro
```

Do not overabstract.

Only create primitives that reduce meaningful duplication.

---

# 21. STRUCTURAL LANGUAGE

Use thin lines instead of decorative shadows.

Lines may:

* divide sections;
* extend from labels;
* create grids;
* connect ideas;
* frame screenshots.

Borders should usually be approximately:

1px

with low opacity.

Do not make every element boxed.

---

# 22. DEPTH

Depth should primarily come from:

* layering;
* cropping;
* perspective;
* scale;
* overlap;
* tonal contrast.

Do not rely on SaaS-style soft box shadows.

---

# 23. RADIUS

Structural blocks:

0–4px.

Controls:

approximately 4px.

Native FARO UI may preserve its own design radii.

Do NOT wrap every section in rounded rectangles.

---

# 24. BRAND GEOMETRY

The Movistrato logo contains a distinctive ribbon/wave.

Create reusable brand geometry based on this shape.

Potential production component:

```text
MovistratoRibbon.astro
```

or SVG-based equivalent.

It should support:

* decorative background;
* clipped section transition;
* outlined version;
* gold variation;
* neutral variation.

Do not invent unrelated geometric branding.

The ribbon should become a recognisable Movistrato motif.

---

# 25. NAVIGATION — PRODUCTION CONTENT

Do NOT use prototype labels such as:

SOLUTIONS

SYSTEMS

ARCHIVE

GET STARTED

unless later specifically approved.

Use the actual initial navigation.

Preferred initial structure:

```text
MOVISTRATO

FARO
Technology
Company

PT / EN
Theme
Contact
```

Potential future navigation:

```text
Products
Technology
Company
Insights
Contact
```

If Insights has no real content yet, do not prioritise it in navigation.

---

# 26. NAVIGATION BEHAVIOUR

Desktop:

minimal horizontal navigation.

Mobile:

menu trigger.

Sticky behaviour allowed.

Use:

subtle background treatment after scrolling.

Avoid:

large pill navbar;
floating SaaS navbar;
excessive blur.

Create real links.

No `href="#"`.

---

# 27. HOME PAGE ARCHITECTURE

Build the homepage with the following first production structure:

```text
00 NAVIGATION

01 HERO

02 MANIFESTO

03 WHAT WE BUILD

04 PRODUCT / FARO

05 FARO EXPERIENCE

06 ADAPTIVE SYSTEM

07 TECHNOLOGY

08 PLATFORMS

09 COMPANY

10 CONTACT CTA

11 FOOTER
```

This is the current approved homepage architecture.

Do not introduce more sections without a clear reason.

---

# 28. SECTION 01 — HERO

Purpose:

Within seconds the visitor understands:

* this is Movistrato;
* it builds software;
* FARO exists;
* the company has a clear design/engineering identity.

Primary statement:

Portuguese conceptual direction:

# TECNOLOGIA QUE SE ADAPTA ÀS PESSOAS.

Do not treat this as mandatory final marketing copy.

It is currently approved working copy.

---

# 29. HERO COMPOSITION

Do NOT recreate the Stitch structure literally.

Avoid:

large text strictly left;
product strictly right.

Create a more editorial, asymmetric composition.

The Hero should combine:

* large Movistrato headline;
* technical label;
* real FARO interface;
* Movistrato ribbon;
* structural grid;
* a primary FARO CTA.

The FARO visual should interact with typography.

Possible overlaps are encouraged.

---

# 30. HERO PRODUCT ASSETS

USE REAL FARO ASSETS.

Inspect:

```text
/public/products/faro/
```

Choose the strongest appropriate:

* desktop dashboard;
* mobile interface;
* lesson interface.

Do not use generated fake software interfaces.

Do not substantially redesign FARO inside the marketing website.

Crop and frame the real UI professionally.

---

# 31. HERO CTA

Portuguese:

```text
EXPLORAR FARO
```

English:

```text
EXPLORE FARO
```

Secondary action is optional.

Do not create generic:

GET STARTED

unless FARO actually has an actionable onboarding destination.

---

# 32. HERO STATIC QUALITY

Before implementing motion, the Hero must look exceptional as a screenshot.

This is a hard requirement.

Do not compensate for weak composition with animation.

---

# 33. SECTION 02 — MANIFESTO

Working statement:

# O software pode compreender melhor as pessoas.

Purpose:

explain Movistrato's philosophy.

Use a restrained editorial layout.

Possible structure:

technical label;

large statement;

short supporting copy;

brand geometry fragment.

Do not create a generic two-column corporate About section.

---

# 34. MANIFESTO COPY

Keep copy concise.

Do not use unsupported claims such as:

"systems that already understand every user."

Movistrato is still building this vision.

Language must distinguish:

* current capability;
* company principle;
* future direction.

Do not use buzzwords.

---

# 35. SECTION 03 — WHAT WE BUILD

Concepts:

ENGINEERING

INTELLIGENCE

EXPERIENCE

Do NOT render these as three equal generic feature cards.

Use a single editorial composition.

Example:

ENGINEERING dominates.

INTELLIGENCE sits in a smaller technical area.

EXPERIENCE occupies another asymmetric region.

Use structural lines.

Use spacing.

Use typography.

---

# 36. ENGINEERING COPY PRINCIPLE

Do not claim:

enterprise-scale architecture;
massive load;
corporate-grade infrastructure

unless currently true.

Prefer:

architecture designed for evolution;

performance as a product requirement;

security considered from the system design;

cross-platform thinking.

We must not fake enterprise scale.

---

# 37. SECTION 04 — FARO INTRO

This is the primary product transition.

Move from Movistrato corporate language into FARO.

Dark background is recommended.

Use:

```text
PRODUCT / 01
```

Huge:

```text
FARO
```

Then a concise product definition.

Portuguese conceptual version:

> Uma plataforma de aprendizagem de línguas centrada em contexto, continuidade e adaptação.

Do NOT use unrelated copy such as:

"gestão adaptativa."

FARO is language learning.

---

# 38. FARO VISUAL COMPOSITION

Use real:

desktop FARO;

mobile FARO;

lesson interface.

Not all at identical sizes.

Create hierarchy.

Potential composition:

desktop browser:
dominant.

mobile:
overlapping foreground.

lesson detail:
small contextual crop.

Use native product colours inside FARO UI.

This contrast is desirable.

---

# 39. FARO BRAND COLOUR RULE

The corporate Movistrato environment stays:

ivory;
black;
gold.

FARO's own:

red;
green;
blue;
etc.

may appear INSIDE product screens.

Do not repaint FARO gold just to fit Movistrato.

Parent brand and product brand may coexist.

---

# 40. SECTION 05 — FARO EXPERIENCE

Purpose:

show how using FARO is different from merely describing it.

Concepts:

```text
DISCOVER
LEARN
PRACTICE
PROGRESS
```

Portuguese content can later become:

```text
DESCOBRIR
APRENDER
PRATICAR
PROGREDIR
```

Do not create four cards.

Build a layout ready to later become sticky/interactive.

For Phase 1:

static implementation only.

---

# 41. FARO EXPERIENCE STATIC DESIGN

Possible structure:

left:

large current concept.

right:

real FARO screenshot.

Below/alongside:

short explanation.

Each state should visually differ.

Ensure a future Svelte island can replace the static state without rewriting the surrounding layout.

---

# 42. SECTION 06 — ADAPTIVE SYSTEM

Purpose:

explain the core FARO idea in terms understandable to non-engineers.

Conceptual flow:

```text
UTILIZADOR
↓
INTERAÇÃO
↓
SINAIS
↓
CONTEXTO
↓
ADAPTAÇÃO
↓
PRÓXIMA EXPERIÊNCIA
```

Do not use a traditional PowerPoint flowchart.

Use the Architectural Editorial visual language.

---

# 43. ADAPTIVE SYSTEM DESIGN

Use:

* nodes;
* typography;
* structural lines;
* circles;
* ribbon-based path;
* restrained gold active state.

The static version must already make the concept understandable.

Later motion may progressively activate the system.

---

# 44. ADAPTIVE SYSTEM CLAIMS

Do not imply that every adaptation mechanism is already complete.

If needed, include understated metadata:

```text
SYSTEM / IN DEVELOPMENT
```

or equivalent.

Truthfulness is more important than marketing impact.

---

# 45. SECTION 07 — TECHNOLOGY

Purpose:

demonstrate engineering seriousness without turning the homepage into GitHub README.

Large working headline:

# ENGINEERED TO EVOLVE.

or Portuguese equivalent.

Present principles such as:

```text
PERFORMANCE
SECURITY
ADAPTABILITY
MULTIPLATFORM
INTELLIGENCE
```

Use numbered editorial rows rather than cards.

---

# 46. TECHNOLOGY DETAIL

A small lower technical strip may mention current technology.

Do not overload the homepage.

The detailed stack belongs on:

`/technology`.

Homepage should communicate engineering principles first.

---

# 47. SECTION 08 — PLATFORMS

Purpose:

show that FARO is a multi-device product.

Current/planned states must be truthful.

Use the factual product status from project documentation.

Do not assume prototype values.

Conceptual presentation:

```text
WEB
CURRENT

ANDROID
CURRENT

WINDOWS
CURRENT

LINUX
PLANNED

iOS
PLANNED

macOS
PLANNED
```

If actual status differs, use project truth.

---

# 48. PLATFORM DESIGN

Do not use six generic pills.

Use:

* operating-system icons;
* typography;
* device frames;
* platform state;
* structural composition.

Possible visual:

browser + phone + desktop.

Current platforms receive stronger visual emphasis.

Planned platforms remain quieter.

---

# 49. SECTION 09 — COMPANY

Return visually to Movistrato.

Working statement:

# FARO É O PRIMEIRO CAPÍTULO.

Purpose:

clarify that Movistrato is larger conceptually than one application.

Do not invent future products.

Explain only:

FARO is the first product.

Movistrato intends to continue building software products.

---

# 50. COMPANY COPY

Avoid:

"We are changing the world."

Avoid:

"global leader."

Avoid:

"next-generation technology company."

Use restrained, credible copy.

The design should communicate ambition.

The text should communicate clarity.

---

# 51. FOUNDER

A founder block is optional on homepage.

Do not implement it unless there is an approved image and final copy.

The Company page is a better location for fuller founder information.

---

# 52. SECTION 10 — CONTACT

Create a strong final CTA.

Do NOT use:

GET STARTED

if no appropriate onboarding exists.

Use something factual.

Potential Portuguese:

```text
FALAR COM A MOVISTRATO
```

or:

```text
CONTACTAR
```

Potential English:

```text
CONTACT MOVISTRATO
```

Copy can be refined later.

---

# 53. CTA VISUAL

Gold may become dominant here because this is a high-attention section.

But retain Architectural Editorial treatment.

Use:

* large typography;
* ribbon;
* structural line;
* single action.

Not:

gold rectangle + generic button only.

---

# 54. FOOTER

Use truthful initial footer.

Suggested architecture:

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

ONLY include external social links that actually exist.

Do not invent:

System Status;

Security Centre;

Technical Specifications.

Bottom:

```text
© 2026 Movistrato
```

Do not invent legal suffixes.

---

# 55. INTERNATIONALISATION

Implement every homepage string through the existing i18n system.

No mixed Portuguese/English.

No inline language ternaries scattered around components.

Create:

complete PT content;

complete EN content.

The PT version must use Portuguese from Portugal.

---

# 56. CONTENT MANAGEMENT

Do not put huge copy objects inside Astro components.

Keep page copy in the existing content/i18n architecture.

Presentation components should receive structured data.

---

# 57. THEME SYSTEM

All components consume semantic tokens.

Never use hardcoded:

white;
black;

when semantic variables exist.

Theme switching must continue to work without flashes.

Test both themes during implementation.

---

# 58. RESPONSIVE FIRST PASS

The homepage must support at least:

```text
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Do not assume only 1440px.

Check for:

overflow;
cropped typography;
product overlap failures;
too-small text;
broken grids.

---

# 59. MOBILE ART DIRECTION

Do NOT simply shrink desktop.

Desktop:

editorial canvas.

Mobile:

editorial poster.

Simplify:

* decorative geometry;
* excessive overlap;
* complex grid.

Preserve:

* giant typography;
* strong product UI;
* gold;
* section labels;
* rhythm.

---

# 60. MOBILE HERO

Use a vertically composed Hero.

Priority:

headline;

FARO mobile;

CTA.

A desktop browser crop may appear secondarily.

Do not squeeze a desktop composition into 390px.

---

# 61. ACCESSIBILITY

Required:

semantic landmarks;

correct heading hierarchy;

SkipToContent;

keyboard navigation;

focus-visible styles;

accessible mobile menu;

accessible theme toggle;

accessible language selection;

meaningful alt text;

decorative SVGs marked appropriately;

reduced-motion compatibility.

Never sacrifice usability for art direction.

---

# 62. IMAGE HANDLING

Use Astro image optimisation where appropriate.

Specify dimensions.

Prevent layout shift.

Use responsive `sizes`.

Do not load giant source images at mobile dimensions.

---

# 63. REAL PRODUCT IMAGE RULE

Real FARO screenshots should remain clear enough that the viewer can understand they are actual product UI.

Do not distort them excessively.

Perspective transforms must remain subtle.

---

# 64. PERFORMANCE

Static homepage should initially ship extremely little JavaScript.

Phase 1 client islands should ideally remain limited to:

* ThemeToggle;
* MobileNavigation if needed;
* any language functionality that truly needs client state.

Do not add Svelte to static visual sections during this phase.

---

# 65. CSS

Use native CSS.

Create/update:

```text
tokens.css
themes.css
typography.css
layout.css
motion.css
global.css
```

Use scoped Astro component CSS for specific components.

Do not recreate Tailwind as hundreds of utility classes.

---

# 66. DESIGN TOKENS

Ensure tokens exist for:

* colours;
* surfaces;
* typography;
* spacing;
* layout;
* border;
* radius;
* z-index;
* motion;
* breakpoints where appropriate.

Avoid arbitrary values spread across components.

---

# 67. MOTION — PHASE 1

Implement ONLY basic motion.

Allowed:

hover transitions;

focus transitions;

theme transitions;

small image hover states;

basic CSS reveal only if progressive enhancement is trivial.

Do NOT yet implement:

GSAP;

Three.js;

complex scroll timelines;

sticky animated stories;

WebGL;

parallax systems.

We first validate static art direction.

---

# 68. MOTION PLACEHOLDERS

Where advanced motion is planned, structure markup accordingly.

Add concise code comments such as:

```text
Future motion boundary:
FARO experience sticky sequence.
```

Do not add large TODO essays.

---

# 69. FUTURE MOTION PHASE

After the static design is approved, future work may include:

Hero:
typography + product parallax.

FARO:
sticky device choreography.

Adaptive System:
progressive node activation.

Ribbon:
scroll transformation.

Do not implement them now.

---

# 70. FUTURE 3D

Do not install Three.js now.

Reserve an architectural boundary for a future:

MovistratoRibbonExperience.

Possible later implementations:

* Three.js / Threlte;
* image sequence;
* rendered video;
* SVG/CSS.

The choice will be made after performance testing and visual prototyping.

---

# 71. COMPONENT ORGANISATION

Expected approximate page component structure:

```text
src/
├── components/
│   ├── brand/
│   │   └── MovistratoRibbon.astro
│   │
│   ├── layout/
│   ├── navigation/
│   ├── typography/
│   ├── ui/
│   └── sections/
│       ├── HomeHero.astro
│       ├── ManifestoSection.astro
│       ├── BuildPrinciples.astro
│       ├── FaroIntroduction.astro
│       ├── TechnologyPreview.astro
│       ├── PlatformSection.astro
│       ├── CompanySection.astro
│       └── ContactCTA.astro
│
└── features/
    └── faro/
        └── components/
            ├── FaroProductShowcase.astro
            ├── FaroExperience.astro
            └── FaroAdaptiveSystem.astro
```

Improve naming where appropriate.

Do not blindly create files simply to match this tree.

Responsibility matters more than exact naming.

---

# 72. FARO FEATURE BOUNDARY

Anything strongly tied to FARO belongs in:

```text
src/features/faro/
```

Generic marketing layout remains under:

```text
src/components/
```

This separation is important for future products.

---

# 73. NO GIANT HOMEPAGE COMPONENT

Do not build the entire homepage in:

`index.astro`

with hundreds of lines.

`index.astro` should compose sections.

Sections manage their own structure.

---

# 74. NO PREMATURE ABSTRACTIONS

Do not create:

GenericSectionEngine;

DynamicComponentFactory;

UniversalMarketingRenderer;

or similar abstractions.

The website has one real homepage.

Build explicit, maintainable components.

---

# 75. CONTENT TRUTH

Do NOT invent:

metrics;

customer count;

revenue;

awards;

enterprise performance;

partners;

testimonials;

offices;

team members;

future products.

Use only approved content.

If content is unknown:

leave it out.

---

# 76. DESIGN QUALITY CHECK

After first implementation, open the site at 1440px.

Inspect it as a creative director.

Ask:

Does it look like a template?

Does it look like a design agency?

Does it clearly look like software?

Is FARO visible enough?

Is typography strong enough?

Are there too many identical layouts?

Is the grid too rigid?

Is the page too empty?

Is the page too dense?

Is gold overused?

Does the ribbon feel related to Movistrato?

Fix issues before continuing.

---

# 77. PRODUCT COMPANY CHECK

The first screen and first 30 seconds of scrolling must clearly answer:

What is Movistrato?

It is a software product company.

What does it build?

Software products.

What exists today?

FARO.

What is FARO?

Language-learning software.

If this is not obvious:

the homepage fails.

---

# 78. NON-TECHNICAL VISITOR CHECK

A non-engineer should understand the page.

Do not lead with:

frameworks;
LLMs;
runtime;
edge;
hydration;
islands.

Engineering can appear later.

Benefits and products come first.

---

# 79. TECHNICAL VISITOR CHECK

An engineer should still notice:

clean implementation;

performance;

precise UI;

technology principles;

architectural discipline.

The site should subtly demonstrate that Movistrato takes engineering seriously.

---

# 80. DARK MODE QA

After light version is implemented:

review every section manually in dark mode.

Do not assume tokens automatically create a beautiful result.

Adjust:

surfaces;

borders;

product framing;

gold contrast;

typography.

---

# 81. MOBILE QA

Review every section manually at 390px.

Do not accept:

huge desktop typography clipping;

tiny product screenshots;

unreadable metadata;

horizontal overflow;

accidental overlap.

Create actual mobile art direction.

---

# 82. IMPLEMENTATION ORDER

Execute EXACTLY in staged passes.

## PASS 1 — FOUNDATIONS

Review:

tokens;
themes;
typography;
grid;
layout primitives.

Correct any weaknesses.

Do not yet build the entire homepage.

## PASS 2 — GLOBAL SHELL

Implement/refine:

Navigation;
Mobile Navigation;
Language;
Theme;
Footer.

Test accessibility.

## PASS 3 — HERO

Implement ONLY Hero.

Use real assets.

Review desktop + mobile + dark.

Do not continue until Hero quality is high.

## PASS 4 — MANIFESTO + WHAT WE BUILD

Implement these two sections.

Maintain editorial asymmetry.

## PASS 5 — FARO INTRO

Implement product transition and real product showcase.

## PASS 6 — FARO EXPERIENCE

Build static architecture.

No advanced sticky behaviour yet.

## PASS 7 — ADAPTIVE SYSTEM

Build static visual explanation.

## PASS 8 — TECHNOLOGY

Build homepage engineering preview.

## PASS 9 — PLATFORMS

Build actual platform status presentation.

## PASS 10 — COMPANY + CTA

Finish narrative.

## PASS 11 — RESPONSIVE PASS

Review all target widths.

## PASS 12 — THEME PASS

Review light/dark.

## PASS 13 — ACCESSIBILITY PASS

Keyboard + focus + semantics.

## PASS 14 — PERFORMANCE PASS

Inspect JS/image/font costs.

## PASS 15 — FINAL VISUAL POLISH

Spacing;
typography;
composition;
alignment;
brand consistency.

---

# 83. IMPORTANT WORKFLOW RULE

DO NOT implement all 11 sections and then ask for feedback.

Implement in milestones.

After:

* Pass 3;
* Pass 5;
* Pass 9;
* Pass 15;

produce a short implementation report and stop for visual review if operating interactively.

This prevents large amounts of mediocre generated frontend from accumulating.

---

# 84. SCREENSHOT REVIEW

If your environment allows browser screenshots:

capture at:

1440×900

390×844

for:

light;
dark.

Use these screenshots to review composition.

Do not trust code alone.

Visual QA is mandatory.

---

# 85. STITCH COMPARISON

Use Stitch only to evaluate:

* typography;
* editorial feeling;
* grid;
* spacing;
* structural lines.

Do NOT try to achieve pixel-perfect parity.

Production V1 should be better and more relevant to Movistrato than the Stitch prototype.

---

# 86. SPECIFIC STITCH ELEMENTS TO PRESERVE

Preserve conceptually:

* warm editorial canvas;
* huge Newsreader typography;
* technical JetBrains labels;
* 1px grid/borders;
* large structural whitespace;
* black FARO transition;
* restrained gold;
* low radius;
* visible architectural grid.

---

# 87. SPECIFIC STITCH ELEMENTS TO REJECT

Do NOT preserve:

* fake dashboard imagery;
* SOLUTIONS/SYSTEMS/ARCHIVE nav;
* GET STARTED;
* unrelated management-product messaging;
* fake corporate footer labels;
* System Status;
* Engineering Corp/System naming;
* Tailwind prototype architecture.

---

# 88. COPY STATUS

Current copy is working copy.

Keep content modular enough that final copy can later be changed without touching component markup.

Do not optimise component architecture around exact sentence length.

---

# 89. SEO

Ensure homepage metadata exists for both locales.

Working PT:

Title:

`Movistrato — Tecnologia que se adapta às pessoas`

Working description:

`A Movistrato desenvolve produtos de software focados em engenharia, inteligência e experiências digitais. Conheça o FARO, o primeiro produto da empresa.`

English should be naturally adapted.

These can later be refined.

---

# 90. SOCIAL / OG

Prepare appropriate OpenGraph foundation.

Do not generate fake marketing numbers.

Use Movistrato branding.

---

# 91. BUILD VALIDATION

After every major pass run:

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
```

Use the actual available scripts.

Do not leave type/build failures for later.

---

# 92. NO WARNINGS POLICY

Resolve:

unused imports;

broken links;

invalid HTML;

accessibility warnings;

hydration errors;

console errors.

Do not hide warnings.

---

# 93. FINAL PHASE-1 DELIVERABLE

Phase 1 ends when:

* homepage is complete;
* static design is strong;
* real FARO assets are used;
* PT works;
* EN works;
* light works;
* dark works;
* desktop works;
* mobile works;
* navigation works;
* accessibility foundation works;
* build passes;
* almost no unnecessary client JavaScript exists.

Advanced animation and 3D are explicitly NOT required for Phase 1 completion.

---

# 94. FINAL REPORT

At the end provide:

## Implemented

sections completed.

## Components Created

list.

## Existing Components Modified

list.

## Client Islands

list + reason.

## Assets Used

list.

## Responsive Behaviour

summary.

## Accessibility

summary.

## Performance

summary.

## Remaining

advanced motion;

3D;

final copy;

final content;

contact backend;

etc.

## Build

confirm:

check;

lint;

tests;

production build.

---

# 95. FINAL PRINCIPLE

Do not judge progress by:

how much code was written.

Judge progress by:

clarity;
quality;
precision;
maintainability;
visual coherence;
performance.

---

# FINAL COMMAND

Begin with:

# PASS 1 — FOUNDATIONS

Read all required repository documentation first.

Inspect the actual files.

Do not modify architecture unnecessarily.

Do not import Stitch code.

Do not implement the entire homepage immediately.

First audit and refine:

* tokens;
* typography;
* themes;
* grid;
* layout primitives.

Then report what you changed and why.

After that, proceed to:

# PASS 2 — GLOBAL SHELL

and then:

# PASS 3 — HERO.

The first major visual checkpoint is the completed Hero in:

* desktop light;
* desktop dark;
* mobile light;
* mobile dark.

The Hero must use real Movistrato/FARO assets.

Do not continue into the rest of the homepage until the Hero is visually strong.

Build deliberately.

Architecture before complexity.

Static quality before motion.

Product before decoration.

Movistrato before trends.
