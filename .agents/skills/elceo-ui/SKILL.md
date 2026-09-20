---
name: elceo-ui
description: Canonical ELCEO frontend design, motion, responsive, performance, editorial, legal-UX, and backend-contract implementation rules for GPT Work/Codex.
---

# ELCEO UI Skill

## Mission

Build the ELCEO production frontend as a distinctive, serious, cinematic market-intelligence product. The work must feel authored for ELCEO, not generated from a generic SaaS/fintech template.

## Authorities

Read in this order:

1. `docs/design/ELCEO_UI_CONSTITUTION.md`
2. `docs/design/ELCEO_LANDING_SCENE_CONTRACT.md` for landing work
3. `docs/design/ELCEO_MOTION_GRAMMAR.md`
4. `docs/design/ELCEO_RESPONSIVE_RULES.md`
5. `docs/design/ELCEO_PERFORMANCE_BUDGET.md`
6. `docs/design/ELCEO_EDITORIAL_STANDARD.md`
7. `docs/design/ELCEO_LEGAL_UX_MATRIX.md`
8. `docs/design/ELCEO_ASSET_REGISTER.md`
9. `docs/backend-contract/README.md` and the mirrored backend contract
10. `docs/ui-handoff` in `Elceo-Mi` only when deeper canonical evidence is needed

The approved landing image is `docs/design/references/approved-landing-reference.png`.

## Visual rules

- Treat spacing, negative space, text anchors, media anchors, card geometry, surface contrast, and scene proportions as intentional composition.
- Do not convert asymmetric/editorial arrangements into neat grids unless the responsive contract explicitly does so.
- Do not add decorative section/card numbering unless explicitly requested.
- Do not apply orange glow to every surface. Orange/gold is an accent; near-black surfaces may remain quiet and borderless.
- Black/near-black is the primary field. White/soft-white is primary text. Orange/burnt orange/gold is the core accent family. Burgundy and blue are scene accents where specified.
- Use one deliberate display type vocabulary plus a quiet reading/UI system. Avoid fashionable generic serif insertions, ubiquitous all-caps eyebrow labels, random monospace, or orange-highlighted words in every heading.
- Large display type uses tight leading, optical tracking, balanced wrapping, and deliberate line breaks.
- Body copy is concise, readable, and capped to sensible measures.

## Landing narrative

The landing page is seven narrative scenes plus footer. It is a continuous visual story, not `section + gap + section`.

Use motif handoff, spatial continuity, persistent visual objects, scroll-linked transformation, and visual causality between scenes.

The globe is a persistent narrative object: assembled in the hero, then capable of separating into 3D continent components and participating in scroll reveals. As the user moves down-page, it must shrink/recede so content remains dominant. Do not allow the globe or continents to obscure primary text/content. On mobile, low-power, or reduced-motion contexts, replace this with a substantially simpler treatment.

## Interaction vocabulary

Use the approved patterns when the task calls for them:

- progressive text disclosure: compact resting copy, richer hover/focus reveal, tap alternative on touch;
- origin-preserving media expansion: video thumbnail expands from its physical source location and returns there;
- deckled/torn-paper aperture: irregular fibrous top and bottom edges, not a jagged rectangle;
- cursor-reactive lens: localized section response under pointer, not a decorative custom cursor;
- cursor-reactive parallax lightfield: slow inertial background response, not 1:1 pointer chasing;
- asymmetric chromatic card constellation: editorial placement with intentional voids and lower-edge dissolve;
- spatial perspective media carousel: non-clickable suspended planes that exchange depth with pointer/scroll input;
- tonal card mosaic: near-black surfaces with restrained separation, no default orange border glow;
- expanded editorial CTA: strong resting action with contextual information revealed around/below it.

## Motion ownership

- GSAP/ScrollTrigger owns cinematic, scroll-linked, pinned, scrubbed, and multi-element scene choreography.
- Motion/Framer Motion owns local component transitions, shared-layout transitions, dialogs, drawers, disclosure, and local UI state.
- Never let GSAP and Motion animate the same property on the same element at the same time.
- CSS transitions are preferred for simple interruptible hover/focus state changes.
- Three.js/R3F is used only for genuinely spatial content that CSS/SVG/Canvas cannot realistically deliver.

## Performance rules

- Prefer transform and opacity for high-frequency animation.
- Do not drive pointer animation through React state on every event.
- Use motion values, CSS custom properties, `gsap.quickTo`, or rAF-managed mutable values.
- Pause/unmount offscreen video and expensive scenes when safe.
- Avoid unconditional continuous WebGL render loops; use demand rendering where possible.
- Reuse geometry/materials/textures and dispose GPU resources explicitly.
- Lazy-load route-specific animation/3D dependencies.
- Do not ship 4K video where a smaller encode/poster is sufficient.
- Provide mobile/reduced-motion fallbacks for every cinematic feature.
- Test memory after repeated complete scroll journeys; memory must settle rather than grow monotonically.

## Responsive rules

Classify every major visual feature as:

- Essential: survives all viewports;
- Adaptive: same narrative purpose, simpler mobile realization;
- Desktop enhancement: may be disabled on small/coarse-pointer/reduced-motion contexts.

Mobile is authored, not merely scaled-down desktop.

## Backend and state rules

- Backend contract and server-owned state are authoritative.
- Never compute or fabricate ELCEO cognition, confidence, entitlements, subscription success, freshness, or admin authority in the browser.
- Browser-visible admin screens that need internal credentials must use a trusted Next.js server/BFF layer. Never expose `x-elceo-internal-token` to client JavaScript.
- Use the mirrored OpenAPI, route inventory, mocks, state-ownership, validation, auth, billing, notification, and contract-gap documents.
- If the UI needs unsupported behavior, record a contract gap instead of implementing a client-side substitute.

## Product/editorial rules

ELCEO is market intelligence / decision support only. Avoid language implying:

- buy/sell signals;
- execution or brokerage;
- deposit/custody;
- guaranteed outcomes;
- certainty or sure wins;
- financial advice.

Public educational language should be concrete and trader-readable. Prefer examples like headline shock, stale narrative, weak zone significance, single-timeframe bias, contradiction ignored, base/quote misread, and unreviewed pattern repetition over abstract internal-engine terminology.

## Legal UX

- Terms acceptance, risk/disclaimer acknowledgement, privacy, and cookie choices are first-class UX.
- Explicit age eligibility attestation must appear where designed, but backend persistence remains pending until the exact contract is approved.
- Do not imply that a visual checkbox is durably recorded unless the backend contract proves it.

## Implementation workflow

Before coding a page:

1. locate it in `docs/backend-contract/ui-page-inventory.md`;
2. map reads/mutations/state owner;
3. read its visual/motion rules;
4. classify assets as vector, raster, video, 3D, code-native, or hybrid;
5. define desktop/mobile/reduced-motion behavior;
6. implement without generic substitution;
7. validate accessibility, loading/empty/error/degraded states, performance, and contract correctness;
8. report unresolved gaps explicitly.

If implementation pressure would weaken an approved design or invent backend semantics, stop and surface the issue rather than shipping a generic workaround.
