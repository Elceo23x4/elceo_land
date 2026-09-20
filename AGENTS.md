# ELCEO Frontend Agent Instructions

This repository is the production frontend for ELCEO.

Before designing, implementing, refactoring, or reviewing any UI, read these authorities in order:

1. `.agents/skills/elceo-ui/SKILL.md`
2. `docs/design/ELCEO_UI_CONSTITUTION.md`
3. the applicable file under `docs/design/`
4. `docs/backend-contract/README.md`
5. the mirrored backend contract under `docs/backend-contract/` and `contracts/backend/`

## Non-negotiable rules

- Do not invent API routes, DTOs, persistence, entitlements, billing states, auth semantics, notification semantics, or intelligence outputs.
- `Elceo23x4/Elceo-Mi` is the canonical backend/source-contract repository. Mirrored files here are read-only snapshots.
- Preserve the accepted dashboard while moving the production frontend to Next.js. Do not redesign it as part of framework migration.
- The approved landing visual reference is `docs/design/references/approved-landing-reference.webp`. Do not replace its composition with generic SaaS/fintech layouts.
- No generic substitution is allowed when a visual or interaction contract is specific. If an implementation cannot reproduce the approved intent realistically, stop and report the constraint.
- Do not use unsupported financial language: ELCEO is decision support, not brokerage, execution, custody, signals, investment advice, or a profit guarantee.
- Explicit age attestation is UI-required but backend persistence is pending. Do not fake persistence.
- Performance and responsive degradation are design requirements, not post-launch cleanup.

## Change protocol

For every substantial UI task:

1. identify the page/surface in the canonical UI inventory;
2. identify backend reads/mutations and state ownership;
3. identify visual authority and responsive/motion rules;
4. identify assets and rendering technology;
5. implement;
6. test desktop/mobile/reduced-motion/accessibility/performance;
7. report any contract gap rather than inventing behavior.
