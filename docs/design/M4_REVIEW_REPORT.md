# M4 Review Report — Dashboard Parity Migration

**Status:** implementation complete; stopped at the M4 architectural review gate

**Baseline:** merged M3 `main@2a6d34cda00c5979581b3d3eb4eb192830945803`

**Branch / PR:** `m4/dashboard-parity-migration` / draft PR #61

**Green implementation evidence head:** `42865c2a38da44399f3d132202b7a84e4f1c1cbf`

**Frozen backend authority:** `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`

M4 ports the accepted responsive market-cognition cockpit to the Next.js candidate without redesigning the dashboard, changing its deterministic fixture semantics, inventing richer backend state, or cutting production away from Vite. M5 page work and production Next.js cutover remain closed.

## Architecture and scope

The canonical Next App Router surface is `apps/frontend/app/(app)/dashboard/page.tsx`. It renders the accepted `DashboardResponsiveCockpit` through a narrow client bridge and relies on M3's server-side protected-route/session topology. It does not import the legacy mock `DashboardApp`, mock access state, or legacy route gate.

The Next route adds route-local loading and error boundaries. The error state explicitly refuses to synthesize market values. Portal typography is preserved for body-mounted hover previews through a migration-only CSS bridge. Vite `*.svg?react` typing is bridged for the candidate without changing source SVG bytes.

The following protected authorities remain byte unchanged from the M4 baseline:

- `src/dashboard/**`;
- `src/assets/source/dashboard/**`;
- dashboard geometry and frame sources;
- the legacy public asset tree;
- the frozen backend mirror and canonical mocks.

The richer accepted cockpit remains a deterministic fixture presentation during parity proof. The frozen Kick Off dashboard DTO is deliberately reduced and does not prove the richer panel fields. M4 therefore does not bind fixture cognition to live server truth, infer Focus Plan cognition from Kick Off data, or introduce client-side confidence, bias, contradiction, evidence, freshness, entitlement, or billing calculations.

## Frozen typed-read correction

M4 closes an M2 projection defect exposed by the frozen mixed-method route inventory. Read versus mutation invocation is now classified by the concrete HTTP method rather than route-file `sideEffectRisk`. A GET remains a `read()` operation even when its route file also contains protected writes.

The exact frozen GET operations that require `Idempotency-Key` now require typed logical-operation idempotency context. Runtime tests prove that the key is emitted, missing context fails before transport, and no automatic retry is introduced. Compile-time tests reject direct header bypass, missing required context, context on reads that do not accept it, and use of `mutate()` for an HTTP GET.

Generated contract authority remains unchanged: 168 operations, 13 canonical mocks, and 50 explicitly unresolved constraints.

## Gate repairs

Three test-harness faults were corrected from empirical CI evidence:

1. The M1 bundle scan previously rejected the string `ScrollTrigger` inside GSAP core's inert compatibility hook even though no ScrollTrigger plugin entered the dashboard graph. Secret/authority bundle scanning remains intact; a separate source-graph gate now rejects actual ScrollTrigger plugin imports under the Next candidate and `src/dashboard`.
2. The M4 static test matched its own forbidden legacy-gate token inside an explanatory comment. The comment was corrected; the source prohibition remains unchanged.
3. The accepted M1 Playwright config searched every future test directory. It is now explicitly isolated to `shell.spec.ts`, while M4 uses its dedicated config, servers, and test directory.

The original M1, M2, and M3 assertions were not suppressed or weakened.

## Browser parity evidence

The M4 workflow builds both production applications, starts the accepted Vite dashboard and protected Next dashboard against a deterministic session fixture, and compares them in Chromium.

### Visual and structural parity

Exact DOM text, panel count, class state, and rounded geometry signatures match between Vite and Next. Decoded screenshot comparison permits only bounded canvas/subpixel raster variance; it is not raw PNG-byte comparison.

| Viewport | Changed pixels above 12/255 channel delta | Changed-pixel ratio | Mean absolute raster error |
|---|---:|---:|---:|
| 1440×900 desktop | 5,644 | 0.4355% | 0.0371% |
| 390×844 mobile, reduced motion | 2,792 | 0.8482% | 0.0609% |

Both are well inside the enforced 4% changed-pixel and 1% mean-error ceilings. The small difference is concentrated in chart/canvas rasterization; dashboard DOM, text, layout, geometry, frames, and source assets remain exact.

### Interaction and keyboard parity

Vite and Next produce the same accepted state transitions for:

- keyboard opening and Escape dismissal of the asset selector;
- asset change to `NAS100`;
- timeframe change to `4H`;
- chart zone-layer toggle state;
- panel section navigation;
- panel market-alert state and accessible-name transition;
- panel expansion and Escape restoration;
- detail drawer opening and Escape dismissal.

The gate compares the final interaction-state projection between both runtimes and also asserts the expected accepted state explicitly.

### Responsive and reduced-motion parity

Exact structural/geometry parity is exercised at 360×800, 390×844, 768×1024, 1024×768, 1440×900, and 1920×1080. Page-level horizontal overflow is rejected. Reduced-motion media state and running-animation counts must match the accepted Vite oracle.

### Memory/performance comparison

Cold settled desktop measurements on the green implementation run were:

| Runtime | JS heap used | DOM nodes | JS event listeners |
|---|---:|---:|---:|
| Vite oracle | 7,113,120 bytes | 19,617 | 302 |
| Next candidate | 9,276,280 bytes | 19,651 | 442 |

The candidate carries a measured fixed framework overhead of approximately 2.16 MB heap, 34 nodes, and 140 listeners. The gate now bounds that overhead at 3 MB, 100 nodes, and 200 listeners so it cannot silently expand.

After five repeated toggle/expand/drawer/tab cycles with forced garbage collection:

| Retained growth | Vite oracle | Next candidate |
|---|---:|---:|
| JS heap | 2,183,456 bytes | 1,655,100 bytes |
| DOM nodes | 15 | 14 |
| Event listeners | 0 | 0 |

The Next migration therefore introduces no migration-specific retained-resource growth in the exercised dashboard lifecycle; listener count settles exactly and retained heap/node growth is lower than the accepted oracle. This is a deterministic Chromium comparison, not a claim about field Core Web Vitals or every possible long-lived production session.

## Exact-head acceptance evidence

Implementation head `42865c2a38da44399f3d132202b7a84e4f1c1cbf` passed:

| Gate | Result |
|---|---|
| M4 Dashboard Parity run 35549629600 | all static, inherited, browser parity, responsive, reduced-motion, interaction, memory, backend-snapshot, and UI-authority steps green; 5/5 browser tests passed |
| M1 Next Candidate run 35549629574 | build, typecheck, six static checks, and both M1 browser projects green |
| M2 Frozen Contract Layer run 35549629630 | deterministic generation, runtime/type/boundary/bundle checks green |
| M3 Canonical Session Topology run 35549629617 | canonical session, BFF, proxy, inherited gates, and bundle checks green |
| Frontend Production Build run 35549629556 | accepted Vite production build green |
| UI Foundation Integrity run 35549629661 | approved reference decode/hash and 28-file frozen backend authority green |
| Vercel preview | successful deployment for the implementation head |

The M4 artifact contains both Vite/Next screenshots, visual/performance JSON, and repeated-cycle memory JSON. The final review-report-only head must repeat the same exact-head gates before acceptance.

## Preserved limitations and non-goals

- Dashboard cognition remains fixture-backed until a later explicitly approved live-binding task can consume server DTOs without fabricating absent fields.
- Existing accepted dashboard limitations documented by M0, including incomplete drawer focus trapping/restoration and inert secondary fixture action buttons, were not disguised as completed accessibility behavior and were not changed under a parity-only migration.
- No landing implementation, M5 page family, trusted admin-operation mediation, production Vercel framework cutover, or Vite deletion is included.
- No production live-data, payment, entitlement, notification-delivery, or intelligence semantics are claimed by this report.

## Review disposition

M4 is complete within its approved migration boundary and is ready for architectural acceptance after the report-only exact-head rerun remains green. Keep PR #61 draft until that review decision. Do not begin M5 from this branch.
