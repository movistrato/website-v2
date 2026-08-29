# Movistrato — Motion & Immersive Direction

## 1. Status

Advanced motion and 3D are deferred until the static visual system is approved.

The website must remain excellent without animation.

## 2. Motion language

Use four conceptual motion families:

### Reveal
Content becomes visible.

### Shift
Subtle positional transition.

### Focus
Contrast/gold emphasises an active state.

### Transform
Major narrative transition, usually product-related.

## 3. Motion principles

Motion should feel:

- precise;
- restrained;
- intentional;
- responsive.

Avoid:

- animation everywhere;
- exaggerated bouncing;
- gaming/neon effects;
- motion that delays navigation;
- fake loading screens.

## 4. Preferred implementation

Simple motion:

- CSS;
- Web Animations API.

Advanced motion:

Introduce a specialist library only when a concrete experience justifies it.

## 5. Future homepage opportunities

Potential advanced moments:

### Hero
- product/ribbon parallax;
- typography displacement.

### FARO
- sticky device choreography;
- screen transitions.

### Adaptive System
- progressive activation of nodes/path.

### Movistrato ribbon
- scroll transformation;
- potential 3D interpretation.

Do not implement all of these by default.

## 6. Reduced motion

Respect `prefers-reduced-motion`.

Essential information must never depend on animation.

## 7. 3D

Potential signature object:

**Movistrato ribbon**

Possible implementation strategies:

1. SVG/CSS 2.5D;
2. rendered image sequence;
3. video;
4. Three.js/Threlte.

Choose the lightest method that achieves the approved visual result.

3D is enhancement, not foundation.

## 8. Performance

Do not load expensive 3D/motion code on initial page load unless strictly necessary.

Prefer lazy/visible loading for advanced experiences.

Mobile may receive a simpler visual treatment.
