# ELCEO Responsive Rules

## Principle

Mobile is an authored ELCEO experience, not a scaled-down desktop composition. Preserve narrative intent and information hierarchy while simplifying expensive or pointer-dependent presentation.

## Feature classes

Every major visual feature must be classified as one of:

- **Essential:** must survive every viewport/input mode.
- **Adaptive:** same narrative purpose, simpler realization on constrained devices.
- **Desktop enhancement:** may be disabled on small screens, coarse pointers, low-power conditions, or reduced-motion preference.

## Landing adaptations

- Hero identity, product framing, video access, and core copy are Essential.
- Globe/world motif is Adaptive: desktop may use 3D assembled/exploded continents; mobile uses a simpler lightweight globe/continent motif with reduced depth and no long pinned choreography.
- Cursor lens and cursor-reactive lightfield are Desktop enhancements; mobile receives static/ambient composition.
- Torn-paper/deckled aperture remains Essential but its horizontal content reflows without losing the material edge treatment.
- Principles constellation is Adaptive: preserve color identity, asymmetry, and lower-edge dissolve, but recompose into a deliberate staggered vertical sequence rather than forcing desktop coordinates.
- Spatial media carousel is Adaptive: desktop uses depth exchange; mobile uses horizontal swipe/scroll with one dominant panel and partial adjacent panels.
- Dark card mosaic is Adaptive: preserve hierarchy and tonal surface language; re-stack according to task priority rather than shrinking all four cards excessively.
- Progressive hover disclosure becomes tap disclosure or permanently visible critical supporting copy.
- Large final CTA remains Essential; supporting disclosure must remain touch-accessible.

## Breakpoint behavior

Do not design purely around framework defaults. Validate at representative widths including ~360, 390, 430, 768, 1024, 1280, 1440, 1920 and ultrawide conditions.

Use fluid sizing where appropriate (`clamp`, container queries, fluid gaps) but preserve optical limits. Text should not expand indefinitely on ultrawide displays.

## Typography

- Inputs remain at least 16px on mobile to avoid iOS zoom.
- Body reading text should generally remain 16px+.
- Display type may use viewport-aware clamps but needs hard min/max values.
- Maintain deliberate line breaks where they are compositional; do not allow responsive wrapping to create accidental single-word lines.

## Touch/accessibility

- Minimum touch target 44×44px.
- No essential information available only on hover.
- Avoid adjacent overlapping hit targets.
- Preserve zoom and text scaling support.

## Media

- Use art-directed crops/posters for mobile where full desktop media is wasteful.
- Do not autoplay large video on mobile merely to preserve desktop atmosphere.
- Prefer responsive images with explicit dimensions and modern formats.

## Acceptance

A page is not responsive merely because it does not overflow. It must preserve hierarchy, rhythm, scene intent, legibility, task completion, and reasonable performance for the target viewport/input mode.
