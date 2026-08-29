# Hero Art Direction Audit v2

## 1. Audit of Current State
The Phase 01B attempt at "Editorial Interlock" failed because:
1. **Typographic Authority**: Staggering 3 lines of display text (`TECHNOLOGY / THAT ADAPTS / TO PEOPLE.`) while overlapping a complex UI screenshot destroyed legibility and felt disorganized rather than editorial.
2. **Product Integration**: The product screenshot felt "floating" rather than anchored into the architecture of the page. The secondary crop (Learning Experience) felt tacked on, lacking grid alignment.
3. **Metadata Detachment**: The bottom metadata (Product 01 / FARO / Platforms) felt like a detached footer rather than a cohesive part of the hero narrative.
4. **Brand Focus**: The composition leaned too heavily towards selling FARO immediately, rather than establishing Movistrato's institutional authority first.

## 2. Composition Directions Explored

### Direction A: The Typographic Frame (Recommended)
**Concept**: Total separation of typography and product visual, connected by strict grid lines (visible or invisible).
**Execution**: 
- A massive, flush-left, 3-line serif headline dominating the top left quadrant.
- The product asset (FARO Dashboard) anchors the bottom right quadrant.
- Metadata and CTA sit in the bottom left, aligned with the typography block.
**Pros**: Absolute legibility. Extremely authoritative. Clearly establishes Movistrato (the text) before FARO (the product). Matches the "Light Editorial / Compliance" and "Brandkit" precision vibe.
**Cons**: Requires strict whitespace management to avoid looking empty.

### Direction B: The Product Plane
**Concept**: The product is the environment.
**Execution**: 
- Full-bleed or massive container-width product screenshot occupying the entire right 70% of the screen.
- A solid color block (Warm Ivory) overlaps the left 30%, housing the headline and metadata.
**Pros**: Highly immersive. Shows the product immediately at scale.
**Cons**: Feels more like a standard SaaS layout. Less "corporate institutional" and more "product marketing".

### Direction C: The Asymmetric Interlock (Refined)
**Concept**: A cleaner version of the current attempt.
**Execution**: 
- Headline stays staggered, but the product screenshot is pushed strictly to the right, with only a 5-10% overlap, using a solid background behind the text to guarantee contrast.
- Uses precision alignment marks (fine rules) to connect the elements.
**Pros**: Dynamic and modern.
**Cons**: Still risks looking messy on fluid viewport resizing.

## 3. Chosen Direction: Direction A (The Typographic Frame)
We will proceed with **Direction A**. It best satisfies the requirement that this is "MOVISTRATO.COM, not FARO.COM" by giving the monumental typography room to breathe, establishing institutional authority before presenting the product. It adheres to the `design-taste-frontend` rules against centered heroes and `brandkit`'s preference for sparse, high-hierarchy typography and precise alignment.

### Execution Details:
1. **Typography**: Use `text-6xl` to `text-8xl` (fluid clamp) for the headline, flush left. Just clean, massive, flush-left typography using the Newsreader serif font.
2. **Grid**: Implement a strict CSS Grid. Left side (col 1-5) for text and CTA. Right side (col 7-12) for the product visual.
3. **Product Visual**: The FARO desktop dashboard (`/products/faro/faro-desktop-dashboard.png`) placed cleanly, no rotation, sharp edges, quality 95. We will remove the secondary overlapping crop for now to maintain purity.
4. **Metadata**: The "MOVISTRATO / 001" label and CTA/Platforms metadata will anchor the typography block with fine `1px` rule lines, creating a precision architectural feel.
