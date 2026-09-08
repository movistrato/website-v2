# DESIGN SYSTEM & UI GUIDELINES — MOVISTRATO / ARCHITECTURAL EDITORIAL
> Use this document as the single source of truth for design, styling, typography, colors, animations, and component patterns when generating interfaces (e.g., modern Linktree / Profile Directory, Web Applications, Landing Pages).

---

## 1. BRAND IDENTITY & CORE AESTHETIC

- **Style Direction:** **Architectural Editorial / Refined Neo-Brutalism**
- **Brand Essence:** Modern engineering company building high-end software products (e.g., FARO). "Movement built on structure" (Movimento sustentado por estrutura).
- **Tone:** Sovereign, premium, precise, architectural, confident, minimalistic.
- **Strict Anti-Patterns (DO NOT USE):**
  - ❌ Generic purple/blue SaaS gradients or neon AI glows.
  - ❌ Generic pastel cards with huge blurry drop-shadows.
  - ❌ Symmetrical, soulless template cards with pills.
  - ❌ Cluttered layouts, fake stock photos, or meaningless 3D blobs.
  - ❌ Cliché glassmorphism everywhere.

---

## 2. COLOR PALETTE & TOKENS

The system supports seamless **Light** and **Dark** modes using semantic CSS variables.

### Primary Brand Accents
- **Brand Gold (`--brand-gold`):** `#D9A62E` (Signifies hierarchy, focal points, interactive hover states, active markers).

### Light Mode (`class="light"` or default)
- **Background (`--background`):** `#F2F0E9` (Warm Ivory / Paper Tone)
- **Surface (`--surface`):** `#FAF9F7`
- **Surface Elevated (`--surface-elevated`):** `#FFFFFF`
- **Foreground / Text (`--foreground`):** `#080806` (Deep Black / Off-Black)
- **Muted Text (`--muted`):** `#6F6F69`
- **Borders (`--border`):** `rgba(8, 8, 6, 0.10)` (Subtle, architectural 1px line)

### Dark Mode (`class="dark"`)
- **Background (`--background`):** `#080806` (Deep Black / Obsidian)
- **Surface (`--surface`):** `#10100E`
- **Surface Elevated (`--surface-elevated`):** `#151512`
- **Foreground / Text (`--foreground`):** `#F2F0E9` (Warm Ivory)
- **Muted Text (`--muted`):** `#99978F`
- **Borders (`--border`):** `rgba(242, 240, 233, 0.10)`

---

## 3. TYPOGRAPHY SYSTEM

Typography is treated as **architecture** and graphic composition.

| Role | Font Family | Tailwind / CSS Utility | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Display / Editorial** | **Newsreader** (Serif, Italic & Regular) | `font-serif italic font-normal` | Main headers, name, punchlines, vision statements. |
| **Interface / Body** | **Inter** (Sans-Serif) | `font-sans font-normal / font-medium` | Descriptions, readable body, button text, bio. |
| **Technical / Monospace** | **JetBrains Mono** | `font-mono tracking-widest uppercase` | Category tags, counters, badges, links metadata (`[01]`, `SYSTEM / 01`). |

### Typographic Rules:
- **Display Headings:** Use tight tracking, italic serif for emotional weight: e.g., `font-serif italic tracking-tight`.
- **Technical Tags:** Monospace labels are uppercase with generous tracking (`tracking-[0.2em] text-[10px] md:text-xs text-brand-gold`).
- **Hyphenation & Wrap:** Never wrap words awkwardly (`text-wrap: balance`).

---

## 4. BORDERS, SHADOWS & GEOMETRY

- **Borders:** Crisp `1px solid var(--border)`. High precision, architectural feel.
- **Corners / Radius:**
  - Containers & Structural blocks: `rounded-none` or `rounded-sm` (max 2px–4px).
  - Buttons & Interactive items: `rounded-none` or `rounded-sm` (sharp, confident edges).
  - NO large pill-shaped containers (`rounded-full` is restricted to avatars or small indicator dots).
- **Shadows:** Hard offset borders or no shadow at all. Zero blurry diffuse shadows.
- **Lines & Grids:** Subtle 1px background grid patterns (`opacity-[0.04]` to `opacity-[0.06]`) or fine horizontal rules (`border-b border-border/40`).

---

## 5. INTERACTIVE LINKTREE / BUTTON PATTERNS

For a **Linktree / Directory / Link Hub**, link items should look like refined architectural modules, not generic bubble cards:

### Link Item Anatomy:
1. **Container:** Full width, subtle background (`bg-surface/50` or `bg-surface-elevated`), 1px border (`border border-border/50`), sharp corners (`rounded-sm`).
2. **Metadata Prefix:** Monospace counter or category (`01 / PROJECT`, `02 / SOCIAL`, `03 / CONTACT`).
3. **Primary Text:** Bold Inter or elegant Newsreader title (`text-foreground group-hover:text-brand-gold`).
4. **Subtext / Detail:** Monospace or clean Inter muted subline (`text-muted text-xs`).
5. **Action Affordance:** Minimal right arrow `→` or technical diagonal arrow `↗` that translates on hover (`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`).
6. **Hover Experience:** 
   - Option A: Border color shifts to `border-brand-gold/60` with background fill transition.
   - Option B: Bottom/top background slide-up fill effect (cubic-bezier easing).

### Example Linktree Button JSX (Tailwind):
```tsx
<a 
  href="https://..." 
  target="_blank" 
  rel="noopener noreferrer"
  className="group relative flex items-center justify-between p-5 md:p-6 bg-surface/60 hover:bg-surface border border-border/60 hover:border-brand-gold/60 transition-all duration-300 rounded-sm overflow-hidden"
>
  {/* Accent indicator on hover */}
  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

  <div className="flex flex-col gap-1 z-10">
    <span className="font-mono text-[10px] tracking-[0.2em] text-brand-gold uppercase">
      01 / PLATFORM
    </span>
    <span className="font-sans font-medium text-base md:text-lg text-foreground group-hover:translate-x-1 transition-transform duration-300">
      Official Website & Products
    </span>
    <span className="font-sans text-xs text-muted">
      Explore the ecosystem, manifesto, and technology.
    </span>
  </div>

  <div className="flex items-center justify-center w-10 h-10 border border-border/40 group-hover:border-brand-gold/40 text-foreground group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-colors duration-300">
    <span className="font-mono text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
  </div>
</a>
```

---

## 6. HERO & PROFILE HEADER (LINKTREE)

- **Avatar / Emblem:** Sharp squircle or geometric frame with 1px gold/border detail.
- **Name / Title:** Newsreader serif italic for the name (`font-serif italic text-3xl md:text-4xl text-foreground`).
- **Tagline / Role:** JetBrains Mono uppercase subtitle with gold divider (`font-mono text-xs tracking-widest text-brand-gold uppercase`).
- **Bio Statement:** 1–2 lines in Inter with high line-height, constrained width (`max-w-[45ch] text-muted text-sm leading-relaxed`).

---

## 7. MOTION & INTERACTION

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (snappy, premium acceleration & deceleration).
- **Hover Micro-interactions:**
  - Micro-translations (`translate-x-1`, `translate-y-[-2px]`).
  - Line reveal / scale-y indicators.
  - Color transitions of borders and icons.
- **Entry Animations:** Staggered fade-in-up with 0.08s delays per link card.
- **Accessibility:** Respect `prefers-reduced-motion`.

---

## 8. SUMMARY PROMPT (TO COPY INTO AI)

```text
Build a modern, ultra-clean Linktree / Links Hub using the "Architectural Editorial" design system:
- Fonts: Newsreader (Italic Serif for headings/name), Inter (Clean Sans for descriptions), JetBrains Mono (Uppercase tracking for metadata/counters).
- Colors: Warm Ivory (#F2F0E9) background in Light mode, Deep Obsidian (#080806) in Dark mode, with Movistrato Gold (#D9A62E) for accents/highlights.
- Layout: Max-width ~580px centered column, 1px crisp borders, sharp 2px corners (no bubbly pills), monospace tags like '01 / PROJECT', hover transitions with subtle right/top arrows (↗), and an elegant brand footer.
```
