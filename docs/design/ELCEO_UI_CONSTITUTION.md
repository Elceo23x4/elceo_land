# ELCEO UI Constitution

## Purpose

This document governs the production frontend in `Elceo23x4/elceo_land`. It exists to prevent generic design substitution, visual drift, unsupported backend behavior, and performance regressions while GPT Work/Codex implements the UI.

## Product identity

ELCEO is a market-intelligence and decision-support platform. It is not a broker, order-execution venue, deposit product, custody service, signal seller, or profit-guarantee product.

User-facing language must therefore avoid claims or verbs that imply execution, custody, guaranteed outcomes, certainty, or investment advice. Prefer context, evidence, pressure, contradiction, freshness, scenario, review, discipline, and decision support.

## Visual authority

The approved landing mockup stored under `docs/design/references/approved-landing-reference.webp` is the primary visual reference for the landing page.

The mockup is a visual-direction authority, not a page-scope or backend-contract authority. Do not infer missing pages, API behavior, entitlements, persistence, or legal semantics from the image.

Do not silently redesign approved composition. Asset placement, text placement, negative space, section proportions, surface treatment, card geometry, and motion implication are contractual visual decisions unless the user explicitly revises them.

## Design principles

1. No generic SaaS or fintech layout substitution.
2. No automatic card grids where the approved composition uses asymmetry, depth, or editorial spacing.
3. Negative space is structural, not wasted space.
4. Typography is architectural: size, line-height, tracking, measure, wrap, and placement are designed deliberately.
5. Motion must explain continuity, hierarchy, or change; decorative motion without narrative purpose is rejected.
6. The public site is a continuous visual story, not disconnected stacked sections.
7. Scene transitions should use motif handoff, visual causality, or spatial continuity where possible.
8. Orange/gold is a controlled accent, not a universal glow. Dark surfaces should not receive orange borders by default.
9. Burgundy, blue, and other scene colors are semantic scene accents, not global theme replacements.
10. References are design-grammar inspiration only. Do not clone third-party brand identity, copy, assets, or proprietary artwork.

## Landing-page constraints

The approved landing reference is the single composition reference. Do not refer to discarded mockup revisions in implementation instructions.

The landing page remains a seven-scene narrative plus footer. The design documents describe those scenes and their behavior. Do not add decorative section numbering or card numbering merely because a reference used them.

The globe is a narrative object, not static decoration. It begins as the hero-world visual and participates in scroll storytelling through controlled 3D continent separation/reassembly while progressively reducing its dominance lower on the page. Mobile and reduced-motion experiences may simplify or remove this behavior.

## Dashboard preservation

The existing dashboard is accepted design heritage. Treat it as a protected starting point. Any framework migration must preserve dashboard behavior, layout intent, interactions, state semantics, and accepted visual language unless an explicit dashboard task authorizes changes.

## Backend authority

`Elceo-Mi` remains the canonical backend/source-contract repository. Files mirrored into `docs/backend-contract/` and `contracts/backend/` are read-only snapshots for frontend implementation convenience.

Never invent client-owned business truth where the backend owns the state. This applies especially to authentication, authorization, entitlements, payment/subscription state, notification state, confidence/cognition outputs, freshness, and admin security.

## Known pending contract

Explicit age eligibility attestation is required in the UI and must ultimately be persisted, but the backend contract is intentionally pending until the exact UI semantics are finalized. Do not implement fake client-only persistence.

## Implementation rule

When a requested implementation would require a generic substitute, undocumented API behavior, invented persistence, or material deviation from the approved composition, stop and surface the conflict before coding it.
