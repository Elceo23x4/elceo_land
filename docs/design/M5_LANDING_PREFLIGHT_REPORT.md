# M5 landing revision — preflight, not closure

Date: 2026-09-25. PR #62, `m5/production-ui-design-implementation`.

Remote PR metadata and the clean local branch were verified at starting head
`e438103a837177590a5d9ef129dee705e44d0366`. PR remains open, draft, unmerged.
No new implementation head has been published by this preflight.

## Asset recovery and integrity

All twelve newly supplied PNGs are present and fully decodable with Pillow despite the preceding missing-file messages. Exact dimensions, original filenames, proposed semantic names, byte counts, SHA-256 hashes and alpha census are in `M5_LANDING_ASSET_PREFLIGHT.json`.

The eight references are opaque. The supplied globe, torn-paper strip and observer have genuine alpha. The environment is opaque and suitable as a background. No alpha was synthesized, no image regenerated, and no original image modified. Proposed filenames are proposals only: this preflight does not claim ingestion, optimization, runtime reachability or production usage.

## Resolved composition exception — Section 4

The newly approved `5th(1).png` is 1672 × 941. Direct visual inspection shows:

| Card | Approximate top, reference pixels | Visible content below y=410 |
|---|---:|---|
| Amber / Context | 244 | Title, supporting copy and material continue below 410 |
| Teal / Evidence | 410 | Lower card |
| Red / Selectivity | 279 | Title, supporting copy and material continue below 410 |
| Blue / Perspectives | 410 | Lower card |
| Magenta / Review | 279 | Title, supporting copy and material continue below 410 |

These are reference-image observations, not measured browser geometry. The cards dissolve gradually and do not have a single crisp bottom edge.

The written rules `T2 = B1`, `B3 = T2`, `T4 = B3`, `B5 = T4`, with B defined as card bottom, cannot simultaneously match this reference: at y≈410, the high cards still contain readable text and material. Ending/fading them there would cut approved content; moving the low cards beneath the full high-card content would change the approved composition.

Original decision required: preserve the overlapping vertical ranges exactly as the approved image shows, or follow literal end-to-start geometry and accept a different composition. No silent reinterpretation of B as an interior point is proposed.

`AGENTS.md` and `.agents/skills/elceo-ui/SKILL.md` prohibit silent composition substitution and require surfacing this conflict before implementation. This is a design-authority question, not a request to broaden scope or weaken a gate.

## Protected state and outstanding work

This preflight changes documentation only. It makes no application, asset, backend snapshot, auth, dashboard, dependency, resource threshold, aggregate gate or Vercel configuration changes.

The starting head remains blocked by the previously recorded retained-heap failure. Prior results are historical evidence, not a fresh acceptance run. No new claim is made for builds, resource acceptance, scene fidelity, browser screenshots or a Next preview deployment.

After the Section 4 decision: implement the eight scenes, prove layer/alpha/geometry/full-width behavior, rerun unchanged resource acceptance and authorized differential controls if necessary, establish the separate Next preview, and rerun all inherited exact-head gates. Real hero film, legal publication copy and broader product families remain outstanding. No production cutover or merge is authorized.

Resolution: the user explicitly approved end-to-start placement on 2026-09-25, preserving all other Section 4 visual language. Card 1 starts slightly earlier but shares the high-card bottom line. Implementation has resumed; see M5_LANDING_REVIEW_REPORT.md for current acceptance evidence. The preceding no-change statements describe preflight only, not subsequent implementation.
