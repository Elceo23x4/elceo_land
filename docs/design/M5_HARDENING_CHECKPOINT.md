# M5 repair checkpoint — implementation and evidence contract

Status: BLOCKED on retained-heap trend; no product-family expansion is authorized by this checkpoint. PR #62, `m5/production-ui-design-implementation`. This checkpoint does not authorize M5 completion, page-family expansion before empirical success, merging, or production cutover.

## Auth state correctness

`getCanonicalEntryResolution` preserves the M3 discriminated resolution and maps thrown configuration/runtime/body failures to an explicit unavailable result. `AccountEntry` renders acquisition only for `signed_out`; authenticated and unavailable each have distinct server-rendered presentation. Unavailable has no sign-in form and offers a fresh server navigation to retry. Raw infrastructure errors are never reflected. An empty HTTP response is now malformed instead of being interpreted as JSON null; explicit canonical null/empty-object/401 signed-out handling remains unchanged.

Browser tests independently exercise authenticated, signed-out, 503, malformed DTO, empty body, dropped transport, interrupted body, provider failure, CSRF failure and recovery. The unconfigured M1 engineering server now asserts rendered unavailable semantics instead of Google acquisition; protected 503 checks and all SVG/portal checks remain intact. This corrects a false-success assertion, not a relaxation.

The M5 feature/component search found one authority-collapsing catch: AccountEntry's `catch(() => null)`, now removed. GoogleEntry already renders explicit unavailable feedback. LandingMotion's chunk-load catch is a presentation-only static fallback, not business/auth absence.

## Permanent system-state matrix

Reuse existing M2 result discriminants and M3 canonical session resolution. Do not introduce another session/result authority.

| Evidence | Permitted presentation | Forbidden inference |
|---|---|---|
| Canonical authenticated | Signed-in presentation | Client-derived role/entitlement |
| Explicit signed_out | Account acquisition | Inferring sign-out from failures |
| unavailable / thrown resolution | Dependency unavailable + server retry | Empty/session-null/acquisition fallback |
| Backend success with proven empty collection | Legitimate empty | Empty when response is malformed or failed |
| Validation / forbidden / not found / conflict / rate limited | Corresponding contract-specific state | Flattening errors into empty data |
| Transport / malformed payload / server failure | Distinct diagnostic category, safe unavailable UI where task-equivalent | Fabricated successful data |
| Proven stale / partial payload | Preserve backend stale/partial semantics | Calculating freshness or discarding caveats |
| Initial / loading / retrying | Transient presentation state | Authority persistence in browser storage |

Future page reviews must enumerate applicable rows, exact evidence and recovery; unsupported distinctions stay unresolved, not invented. Recovery/onboarding and broader product families remain pending.

## Responsive assets and full-width stages

SceneMedia is a server-only-by-default rendering component using Next `getImageProps` and native picture/media selection. No viewport effect, extra client owner or hydration branch is introduced. At <=760px the world/depth/horizon mobile source is selected; above 760px desktop is selected. Existing derivatives are preserved byte-for-byte; this change does not claim new crops or regenerated art. Hero uses eager/high-priority loading without a desktop-only preload that would defeat picture selection. Other media stays lazy. Mobile wordmark texture also selects the mobile derivative.

All nine assets are classified `production-consumed` in the integrity manifest. The gate walks actual runtime module imports (including dynamic imports/re-exports), parses JSX references and CSS declarations, and validates literal SceneMedia selections against the imported explicit media map. All map keys must be used, both derivative identities/dimensions must match provenance, every active file must exist/decode/hash-match, and no inactive/orphan/unregistered runtime asset can pass. Unsupported loading expressions require a reviewed checker extension, not a silent grep match. Browser currentSrc and request observations independently prove source selection and absence of opposite-variant downloads at nine widths.

Every scene wrapper and the footer now owns full available width. The hero, constellation, information stage and product section no longer impose max-width on their canvas. Scene-specific reading measures and the centered 800px mosaic remain inner composition. Browser rectangles prove stage x=0 and width=viewport at 360–2560px, including 390/1440/1920; adjacent stage geometry rejects accidental blank gaps. Screenshots remain necessary to assess environmental continuity and clipping beyond geometry.

## Resource constitution

The controlled Chromium test uses a cold boot, motion enable/reduce/re-enable proof, then three fixed full lifecycle journeys: initial document mount, client remount and cached client remount. Every journey traverses all seven scenes forward and backward, exercises both pointer fields, and leaves for About. The third post-journey sample is the warm baseline. Six identical measured journeys follow. All nine samples remain recorded; first-to-final and peak growth across the entire sequence must also stay within the original growth ceilings. Warm-up is never extended adaptively until a passing result appears. At each sample, About is rendered, the browser idles for 1500ms (longer than the longest 1100ms local easing), GC runs, two animation frames settle, then a second GC runs before CDP Performance/DOM counters are read. No live backend or changing account payload is involved.

| Counter | Final minus warm ceiling | Late retained-growth noise budget | OLS slope threshold per journey |
|---|---:|---:|---:|
| JS heap | 2 MiB | 128 KiB | 32 KiB |
| DOM nodes | 32 | 8 | 2 |
| Event listeners | 4 | 2 | 0.5 |

Final deltas and the last five samples are evaluated separately. Late growth beyond its noise budget fails when either OLS slope exceeds the threshold or at least three of four increments are positive. Negative/intermittent GC noise is allowed; persistent retained growth is not accepted merely because a spread is small. These bounded allowances accommodate framework cache bookkeeping and small transient browser wrappers; they are not calibrated to measured current values. Synthetic monotonic +0.1 MiB/journey growth is rejected even though below the old 5 MiB spread threshold. Node/listener leaks are independent failures.

Every sample and computed result is attached and logged with the exact checkout commit. A missing/nonfinite counter fails. This measures Chromium post-GC JS/DOM/listener retention, not field Web Vitals, total process memory or reliable GPU memory. No GPU acceptance is claimed for the absent continent geometry/video. M4's own harness and thresholds are unchanged.

## Exact-head aggregate

`M5 Exact Head Aggregate` is lightweight: no npm install or repeated builds. It queries GitHub's workflow-run and attempt-job APIs for the PR's exact head. Seven exact workflow file paths, expected jobs and critical verification steps must all be successful. Newer queued/running/failed runs supersede old successes. Skipped/missing/wrong-SHA jobs or required steps fail closed. Current-attempt job evidence is required; an incomplete partial rerun cannot borrow old attempt results. The PR head is checked against the immutable event head and local checkout, on each poll and immediately before publication. A second full snapshot must match run and attempt identities.

Each inherited workflow retains all existing checks and adds only an early status invalidation. A rerun resets `M5 exact-head acceptance` to pending; the cheap aggregate can be rerun after constituent reruns finish, without rerunning expensive suites. Status publication uses only contents/actions/PR read and commit-status write permission. API errors, missing identity, pagination overflow and timeout cannot produce success. Forks without status-write permission fail closed. No credential is printed or bundled.

GitHub does not offer an atomic transaction combining seven independent runs, PR head and merge. Consequently branch protection must retain the seven native required workflows **and** the aggregate status; aggregate success alone is not sufficient merge authorization. Native required checks cover the scheduling-to-invalidation window on a same-SHA rerun. New heads cannot inherit old-SHA success. This PR does not change repository branch protection or merge anything. The resulting mechanism is a final acceptance condition alongside inherited checks, not a replacement for them.

Official API evidence: https://docs.github.com/en/rest/actions/workflow-runs and https://docs.github.com/en/rest/actions/workflow-jobs (head_sha, run_attempt and attempt-specific job endpoints). Policy tests reject stale heads, wrong workflows/events, skipped steps, missing jobs and superseding reruns.

## Navigation and routes

RouteLink centrally renders current public destinations as aria-current text instead of self-navigation. Only this narrow pathname presentation boundary is client-owned. No auth or access decisions move into it. Login/signup, public and legal reading routes retain their existing page architecture.

Route identity tests cover canonical `/journal/[caseId]` and `/admin/commercial/users/[userId]`, static `/journal/new`, route groups, renamed-param collisions, concrete fixture IDs and undocumented pages. Exact canonical vocabulary is preserved. The 23 enumerated admin routes remain unchanged; no fabricated 24th page is added.

## Open blockers

Full recovery/onboarding, application/workspace, journal, portfolio, analytics/coaching/notifications, settings, admin, most overlays/system states, cross-product accessibility/performance closure, hero film/expansion, independent continent geometry, final scene-5 richness, approved legal publication copy, and candidate production deployment/cutover acceptance remain open. Password-reset policy/handler evidence gaps remain documented in M5_CONTRACT_GAPS.md. No new product routes or API mediation are part of this checkpoint.

## First empirical run — rejected, diagnosis in progress

Head `2f2f55c2a20847f90b2ccc3491635607f31da836` passed M1–M4, foundation and Vite. M5 passed 41/42 browser tests. All auth failure/recovery cases, source selection, width and navigation checks passed. The resource gate correctly rejected warm heap 5,360,144 → final 6,175,692 bytes (+815,548); late growth 282,748, slope 71,284.4 bytes/journey, all four late increments positive. Nodes remained 206 → 206 and listeners 369 → 369. The aggregate failed closed on this M5 failure (run 35945926986). No tolerance is changed. Controlled heap-type/class census instrumentation is added to distinguish retained product objects from framework/compiler allocation before selecting a correction. Acquisition markup is additionally made an explicit `signed_out` branch rather than the residual arm of a ternary.

## Evidence-backed warm-up correction

Diagnostic heads `084e6f8b8fd60d7c4055a8ed76321ce136f58efc` and `624c0232a67d07cd200f6c2a21f630c5302f49f3` reproduced the failure with flat nodes/listeners and zero net closure growth. The latter census found 773,604 bytes of compiled-code growth, including 535,360 instruction-stream bytes, 101,812 trusted-byte-array bytes and 43,560 feedback-vector bytes, versus 820,884 bytes total retained heap growth. Only eight new bytecode arrays were present. This identifies compiler/tiering allocation as the dominant measured growth; it does not prove all smaller retained objects are harmless.

The original baseline preceded the first client-side return to landing and did not exercise the pointer handlers. The corrected harness uses the fixed three lifecycle phases above, six measured repeats, forward/reverse traversal and pointer entry/movement/leave. No numeric tolerance, GC rule, M1–M4 assertion or application cleanup is loosened. A new first-sample-to-final/peak guard ensures warm-up cannot conceal accumulated growth. Synthetic tests reject both early hidden growth and sustained late growth. Heap census is opt-in (`M5_HEAP_DIAGNOSTICS=1`) so final acceptance runs without snapshot perturbation. If the corrected lifecycle still fails, the checkpoint remains blocked; warm-up must not simply be extended again.

## Resource-driver isolation

The corrected warm-up still failed at `2d06e86511b9fbd2df219616f54b5f63fcab16c2`: warm 5,960,920, final 6,357,208, delta 396,288 bytes; late growth 175,228 and slope 41,153.6. No warm-up count or tolerance was increased in response. Owner census at `f5cc68eac9adead6def90f69620da3d6fbc4b053` then identified test-runner compiler allocations including `innerSerialize`, `generateAriaTree`, `renderAriaSnapshotAsYaml`, `expectSingleElement`, `parseAttributeSelector`, `previewNode`, `renderAriaTreeAsJSON` and `queryRole`, alongside minified application functions. The trace does not attribute all allocation to tooling.

The resource journey now uses a small test-only main-world/CDP driver, avoiding repeated compilation of the test runner's large ARIA/selector/snapshot machinery during the measured loop. CDP still delivers real mouse movement and clicks; native browser scrolling traverses all scenes forward and backward. Required scene/target/heading checks fail on missing routes or elements. The driver is never imported by application code. Its stable allocation is included in every sample and disposed afterward. Unchanged `performance.timeOrigin` and continued driver identity prove client navigation has not performed a full-document reload to clear the heap. Semantic, accessibility, source-selection, width and auth assertions remain in the separate browser tests. All original growth/trend limits and the nine-journey lifecycle remain unchanged. Final acceptance must run without optional heap snapshots.

## Checkpoint report A–J — blocked, not M5 acceptance

### A. Identity and evidence discipline

Continue only PR #62 on `m5/production-ui-design-implementation`. The quantitative run below is explicitly head `d6045e57c5dc6dd14305d6e725bf62af4dd12ebe`, M5 run [35969294133](https://github.com/Elceo23x4/elceo_land/actions/runs/35969294133). The report follow-up adds a negative driver test and restores five intermediate native pointer moves; its own results must be read from its exact-head artifacts/PR status, never inferred from this earlier run. Every resource/width attachment and the artifact hash manifest records the checkout head. No report can embed its own future Git commit hash; the draft PR description records the final verified head and links its runs.

### B. Mandatory repair ledger

| Repair | Root cause | Implementation and principal files | Behavioral proof / permanent invariant |
|---|---|---|---|
| Auth-state semantics | Resolver failure/discriminant collapsed to null, causing ordinary acquisition | `lib/auth/server.ts`, `lib/auth/core.ts`, `features/account-entry/AccountEntry.tsx` | `tests/m5/account-entry.spec.ts`, `tests/shell.spec.ts`, auth runtime tests: acquisition requires explicit signed_out; infrastructure/malformed failures never imply anonymity |
| Responsive assets / provenance | Desktop-only source selection while mobile files were described as consumed | `features/landing/SceneMedia.tsx`, `scene-media.json`, narrative TSX/CSS, asset manifests, `scripts/m5-asset-reachability.mjs`, `check-m5-assets.mjs` | Parsed runtime graph + hash/decode/dimension checks and nine-width currentSrc/network observations; inactive/orphan/unregistered/mismatched sources fail |
| Resource settling | Spread-only test could accept persistent retained growth; incomplete initial warm-up and test-engine compiler allocation also contaminated measurement | `tests/m5/landing.spec.ts`, `resource-driver.ts`, optional `resource-snapshot.ts`, `scripts/m5-resource-policy.mjs` and rejection tests | First/peak, warm/final and late-trend guards now fail independently. The real measured heap still fails. This repair is not empirically closed |
| Exact-head aggregate | Separate workflow successes did not constitute one current-head proof | `.github/workflows/m5-exact-head.yml`, `scripts/m5-aggregate-policy.mjs`, `m5-aggregate-status.mjs`, seven existing workflows' early invalidation steps | Same SHA/run/attempt/job/step evidence required; stale/superseded/skipped/incomplete cases reject; actual M5 failures keep aggregate red |

All file paths in the first three rows are relative to `apps/frontend/` unless prefixed `scripts/`. The exact complete PR inventory is `M5_CHANGED_FILES.txt`; it includes historical M5 implementation as well as this checkpoint. No product-page family was added during hardening.

### C. Auth-state proof

Rendered login and signup distinguish canonical authenticated and explicit signed_out from 503, malformed DTO, empty body, dropped connection and interrupted-body failures. Every failure has unavailable presentation and no Google form. Recovery is exercised by a new server navigation, then genuine signed_out acquisition and a confirmed authenticated response. Provider and CSRF failures prevent submission and recover through the unchanged canonical relay. The unconfigured M1 server independently renders unavailable. These are controlled contract fixtures, not live authentication readiness.

### D. Asset proof

| Pair | <=760px source | >760px source | Classification |
|---|---|---|---|
| World | world-context-mobile.webp | world-context-desktop.webp | production-consumed |
| Depth | market-depth-mobile.webp | market-depth-desktop.webp | production-consumed |
| Horizon | information-horizon-mobile.webp | information-horizon-desktop.webp | production-consumed |

All nine declared still assets are reachable, hash/byte/dimension checked and fully decoded. Browser checks reject any download of the opposite derivative. Depth additionally supplies the wordmark texture; that intentional CSS use is distinct from its optimized scene-image request. Existing mobile derivatives are resized same-composition sources with responsive CSS framing, not newly created independent crops. Provenance makes no new art-direction claim.

### E. Resource evidence — FAIL

Measured without heap snapshots on `d6045e57c5dc6dd14305d6e725bf62af4dd12ebe`:

| Counter | Warm | Final | Delta | Late delta | Late OLS slope | Result |
|---|---:|---:|---:|---:|---:|---|
| JS heap bytes | 5,664,588 | 6,004,016 | +339,428 | +157,956 | +37,746 bytes/journey | FAIL |
| DOM nodes | 205 | 205 | 0 | 0 | 0 | PASS |
| Event listeners | 369 | 369 | 0 | 0 | 0 | PASS |

First journey heap was 5,249,668; final/peak growth +754,348 passes the 2 MiB total ceiling. Three fixed warm-up journeys and six measured repeats were recorded. All four late heap increments were positive. The 128 KiB late-growth budget and 32 KiB/journey slope bound reject the result. Node ceilings remain total +32, late +8, slope +2; listener ceilings remain total +4, late +2, slope +0.5. Idle remains 1500ms with GC, two frames and GC. None of these tolerances was raised. The strengthened guard has exposed an unresolved retained-heap trend; flat DOM/listeners and compiler census do not establish full memory acceptance.

The ownership trace and lower-overhead driver are diagnostic progress, not a claim that all growth was instrumentation. Further attribution of remaining application/framework code and retained allocations is required. No application rewrite, framework tuning, cache reset, full navigation or benchmark-threshold bypass is justified by current evidence. Warm-up is not extended again to obtain green.

### F. Aggregate proof

Policy tests reject older-head successes, moved heads, wrong workflow/event identities, newer queued/failing attempts, missing/wrong-head jobs and skipped verification steps. The actual aggregate failed on the observed M5 failures while all inherited workflow results remained green. A prior successful M5 head did not satisfy the current head. An aggregate success is deliberately absent. Required native checks must remain required alongside this status; see the documented GitHub transaction/rerun limitation above.

### G. Width and direct visual review

Browser assertions at 390, 1440 and 1920 (and six other widths) require all seven scene rectangles at x=0 with width exactly the viewport, full-width footer, no document horizontal overflow, in-bounds headings, loaded images and no positive gaps between scene rectangles. At wide widths the inner mosaic must remain narrower than 65% of the viewport. The 390/1440/1920 captures from the first hardening head were directly inspected: scene fields span the page, the aperture remains a band, and mosaic margins belong to its inner composition. No new global boxing or scene-gap defect was identified. This is width-checkpoint evidence, not acceptance of unfinished film, continents or scene-5 fidelity. Follow-up heads change only diagnostics/tests/docs; exact-head screenshots are still regenerated in CI.

### H. Regression protection

M1–M4, foundation and Vite remain green on the measured implementation head. Clean Node 22 npm ci, Vite build, Next build/typecheck, deterministic contracts, client/server and auth/BFF boundaries, original PNG and all 28 frozen handoff files pass. Protected-path diff against merged M4 is empty for `src/**`, legacy `public/**`, `contracts/backend/**`, `docs/backend-contract/**`, approved references, package-lock, Vite and Vercel configuration. M4's visual/interaction/responsive/reduced-motion/memory harness and dashboard bridge are unchanged. The existing Vercel deployment is still the Vite path, not Next production cutover proof.

### I. Remaining blockers

- Immediate checkpoint: retained-heap trend and therefore M5/aggregate acceptance remain red.
- Forgot/reset/onboarding; unresolved frozen recovery policy/handler evidence and pending durable age-attestation contract.
- Workspace/application, journal, portfolio, analytics/coaching/notifications, settings and admin families.
- Remaining overlays, dialogs/drawers, media expansion and product system-state behavior.
- Approved production hero film (generation unavailable on connected plan), independent continent/world geometry and final scene-5 fidelity.
- Approved legal publication copy and associated external publication details.
- Full cross-product responsive/accessibility/browser acceptance, resource/performance closure and field performance evidence.
- Candidate deployment/production preview proof and separately authorized cutover; final phase-wide exact-head acceptance.

### J. Recommendation

**Do not advance to forgot-password → reset-password → onboarding yet.** Auth, asset and aggregate mechanisms are repaired, but resource settling is not proven. Keep PR #62 draft, preserve the failing gate, and finish retained-resource attribution before family expansion. Nothing in this report marks M5 complete or authorizes merging.
