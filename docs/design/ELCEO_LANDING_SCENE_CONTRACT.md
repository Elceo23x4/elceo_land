# ELCEO Landing Scene Contract

## Authority

Primary visual reference: `docs/design/references/approved-landing-reference.webp`.

This document describes implementation behavior around that approved composition. The image is the visual-direction authority; the canonical UI inventory remains page-scope authority and the backend handoff remains behavioral authority.

Do not introduce old revision names into implementation. Do not redraw approved scene composition without explicit user authorization.

## Global structure

The landing page contains seven narrative scenes plus footer. The page must read as a continuous visual journey with deliberate negative space, object continuity, and scene-to-scene transformation.

Do not add section numbers or card numbers.

### Scene 1 — Hero / world context

Purpose: establish ELCEO as market intelligence and introduce the world/global-market visual system.

Composition follows the approved image: dominant ELCEO typographic/brand presence, large globe/world object, remote restrained navigation, sparse supporting copy, and a compact video-preview aperture.

The video preview is not a generic embedded player. On activation it expands from its original location through a shared-layout/origin-preserving transition, then returns to that location on close.

The hero does not need a large primary onboarding CTA; the conversion CTA belongs later in the story.

#### Exploded-continent choreography

The hero globe is a real narrative object. During scroll:

1. begin assembled and dominant;
2. separate into 3D continent components with controlled depth, not an explosive particle effect;
3. use continent movement/reassembly as motif handoff between scenes;
4. continents may reveal/mask scene content as they pass, but must never impair reading or interaction;
5. progressively shrink/recede toward the lower viewport/page region so they stop dominating the content;
6. simplify substantially on mobile/low-power/reduced-motion contexts.

The desired effect is an exploded-continent assembly/disassembly system, not a constantly rotating decorative globe.

### Scene 2 — Atmospheric market-depth bridge

Purpose: shift from the visible market into deeper context.

Maintain the approved wide cinematic composition: burgundy/dark atmospheric landscape, large left-weighted statement, concise supporting copy on the opposite side, and substantial visual breathing room.

Do not convert this into a standard two-column feature section.

### Scene 3 — Deckled trader-problem aperture

Purpose: expose common decision flaws before explaining ELCEO's approach.

The section is a full-width horizontal torn/deckled paper aperture with irregular fibrous top and bottom edges. The dark page remains visible above and below. The interior uses burgundy/claret material treatment.

The trader-problem language remains concrete and concise, using concepts such as:

- Headline shock
- Stale narrative
- Weak zone significance
- Single-timeframe bias
- Contradiction ignored
- Base/quote misread
- Unreviewed pattern repetition

The section may use a localized cursor-reactive lens on capable desktop pointers. Mobile receives a static or low-motion equivalent.

### Scene 4 — Principles constellation

Purpose: express ELCEO's cognitive discipline visually.

Preserve the approved asymmetric placement and large voids. This is not a grid.

Cards are chromatic editorial placards with restrained corners and lower-edge dissolve into the black field. Preserve distinct color identities and staggered spatial reveal. Do not normalize the cards into equal columns.

Principle language stays concise and direct, e.g. context before reaction, evidence over emotion, selectivity over activity, multiple perspectives, continuous review.

### Scene 5 — Spatial information field

Purpose: show the transition from fragmented signals into connected context.

Preserve the approved dark cinematic composition: human-scale silhouette/figure, Earth/market-world horizon, and multiple suspended image/information planes at different Z-depths.

The planes form a non-clickable spatial media carousel. Pointer movement on desktop may cause controlled depth exchange using translateX/translateZ/rotateY/scale/opacity. This is not a conventional carousel with dots or clickable cards.

Mobile reduces this to a controlled swipe/scroll deck with one dominant panel and partial adjacent panels.

### Scene 6 — Dark card mosaic

Purpose: preview ELCEO's practical experience without turning the landing page into a feature dump.

Preserve the approved dark, integrated card treatment but refine the geometry toward the intended asymmetrical mosaic:

- one wide feature card spanning the upper portion of the cluster;
- one tall lower-left card;
- two shorter cards stacked on the lower-right;
- the entire cluster centered with large black exterior margins.

Surfaces are near-black tonal planes with restrained separation. Do not add orange glowing borders around the cards. Depth should come from luminance, layered shadow, imagery, and spacing.

Content may preview workspace/context, structured insights, tracked markets, journal/analytics, or similar user outcomes, but must remain consistent with the canonical page inventory and backend contract.

### Scene 7 — Conversion / onboarding CTA

Purpose: provide the primary transition from public story into product entry.

Use the approved large editorial CTA treatment with a blue-led background field rather than making orange the dominant scene color.

CTA copy should invite exploration/onboarding, not expose implementation details of Google auth. Preferred direction is action language such as `Start analyzing the market`, `Start exploring ELCEO`, or final copy explicitly approved later.

Supporting information may progressively disclose beneath/around the CTA on hover/focus. On touch devices, critical supporting copy must remain visible or use a deliberate tap-to-expand pattern.

Do not use `Continue with Google` as the primary landing CTA label. Google is the signup mechanism, not the product promise.

### Footer

Footer is not one of the seven scenes. It carries product navigation, help, Terms, Privacy, Risk Disclosure, Cookies, support links, and concise decision-support/no-broker/no-custody framing.

## Scroll continuity

At least one visual or spatial idea should hand off between adjacent scenes. Prefer continuity over independent entrance animations. Candidate handoffs include:

- globe/continent fragments becoming scene masks or edge motifs;
- burgundy hero atmosphere feeding the torn aperture;
- card geometry flattening/transforming into subsequent media planes;
- suspended media depth resolving into the dark mosaic;
- scene accents receding into the final blue CTA field.

No effect should make content harder to read or interact with.
