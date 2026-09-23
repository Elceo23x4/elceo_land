# M5 Production UI — Review report

Status: in progress; not accepted. The gate-only repair is complete and its inherited baseline is green. M5 public presentation implementation is underway. Auth topology, API mediation, dashboard source/assets, backend snapshot and deployment configuration remain unchanged.

## Authorized evolution of inherited phase assumptions

The user explicitly authorized the following narrow gate corrections before substantial M5 implementation. All other M1–M4 protections remain required.

| Original assertion | Why M5 invalidates the phase assumption | Replacement invariant | Evidence of protection |
|---|---|---|---|
| The entire Next frontend has exactly five named client modules. | M5 authorizes narrow interactive dialogs, disclosures, forms and media boundaries. A permanent count prevents those features. | Every actual client directive must have a unique, non-stale entry in `M5_BOUNDARIES.json` with purpose and server-authority boundary. Page/layout/template client roots are prohibited. All client graphs retain the inherited secret/storage/cookie scan, extended to local runtime dependencies and substitute session authority. | AST-based directive/import parsing handles comments, static imports, re-exports, dynamic imports and `require`. Negative tests exercise unregistered/stale/duplicate clients, broad route clients, transitive secrets, server-only modules, opaque imports and substitute authority. Type-only imports remain erased. M2/M3 checks remain unchanged. |
| No ScrollTrigger import anywhere in `apps/frontend` or `src/dashboard`. | The approved landing motion grammar explicitly requires ScrollTrigger, while the old test was named for dashboard isolation. | Only individually registered modules directly under `features/landing/motion` may own ScrollTrigger. Only public route/landing feature graphs may reach them. Dashboard, app, auth, admin, root and shared module graphs cannot reach them, including through barrels/dynamic imports. | Positive synthetic landing ownership test and negative direct/transitive dashboard/application tests cover static, dynamic, re-export, require, dist and `gsap/all` imports. There is currently no production motion owner, so unregistered usage still fails everywhere. |

`M5_BOUNDARIES.json` is a review register, not automatic approval: every new boundary and motion owner must be reviewed in the implementation diff. Static analysis does not prove arbitrary program semantics; unchanged M2/M3 runtime and bundle checks and M4 browser parity remain required. The M1 exact API-route assertion remains unchanged; no broader mediation is authorized by this correction.

## Corrected inherited baseline

Local gate-only checkpoint, Node 22.23.2:

| Check | Result |
|---|---|
| Clean `npm ci` | Pass; 364 packages, committed lockfile unchanged |
| `build:vite` | Pass; inherited chunk-size/dynamic-import warnings remain |
| `build:next`, `typecheck:next` | Pass; inherited large dashboard SVG transform warning remains |
| `test:m1` | 16/16 pass, including 10 new boundary tests |
| `test:m2`, client boundary check | 24/24 pass; five inherited runtime client graphs pass |
| `test:m3` | 14/14 pass |
| `test:m4` | 5/5 static parity checks pass |
| `check:m2-contracts` | Pass; deterministic 168 operations, 13 mocks, 50 unresolved constraints |
| `check:ui-foundation`, `check:reference`, `test:foundation` | Pass; original PNG fully decoded and all three integrity rejection tests pass |
| `verify:backend-handoff` | Pass; all 28 pinned source paths/blob identities/byte counts/local hashes verified |
| M2/M3 production browser scans | Pass |
| M1 browser and full M4 visual/interaction/responsive/reduced-motion/memory harness | Pass in unchanged CI harness: both M1 projects and 5/5 M4 tests. Local Chromium download timed out; CI installed the exact locked browser successfully. |

### Exact gate-only head: inherited baseline green

PR #62 head `f5281906e20aff6cf1086c6376fe11dd3801f01e` / tree `b75234c742212447f6fe2ca4a2036189bc2ef435`:

- [M1 Next Candidate 35570154454](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154454): build/typecheck, 16 static/boundary tests and both browser projects passed.
- [M2 Frozen Contract Layer 35570154496](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154496): passed.
- [M3 Canonical Session Topology 35570154417](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154417): passed.
- [M4 Dashboard Parity 35570154421](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154421): all inherited gates and 5/5 empirical tests passed in 53.7 seconds; frozen snapshot and PNG verified afterward. Desktop changed-pixel ratio 0.00435494; mobile/reduced-motion 0.00848220, within unchanged accepted thresholds. [Seven evidence files](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154421/artifacts/10625552825) include the original harness captures/resource evidence.
- [UI Foundation Integrity 35570154410](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154410): passed.
- [Frontend Production Build 35570154409](https://github.com/Elceo23x4/elceo_land/actions/runs/35570154409): passed.

At this checkpoint application sources and accepted authorities remain byte unchanged. The narrow gate task is complete; subsequent M5 implementation must continue to satisfy these protections. This is not final M5 acceptance.

## Further phase-topology observation

The inherited M1 `shell.spec.ts` currently expects `/` and `/login` to return 404 because those pages did not exist in M1–M4. It remains unchanged for this gate-only checkpoint. When those authorized M5 pages are actually implemented, that expectation must become explicit successful-public-route assertions while retaining `/api/session` as absent, protected unconfigured routes as 503, the noindex engineering fixture, source-SVG proof and portal typography isolation. This is a phase-topology change, not authorization to alter auth/session semantics.

## First M5 presentation checkpoint — in progress

After the inherited baseline passed, implementation began with scoped public navigation/footer, self-hosted licensed typography, a registered native modal boundary and authored About, FAQ and Help pages. They consume no backend data and perform no mutations. FAQ/mobile navigation use native disclosures. Cookie information reflects necessary-only operation and fabricates no optional category or saved choice.

The public surface owns its font and CSS variables. The conditional body margin/background rule applies only while that surface exists. Root layout, application layouts, dashboard source/assets and APIs remain unchanged. New M5 browser tests cover nine widths, native disclosure, keyboard dialog focus containment/restoration, mobile targets, screenshots and client-navigation isolation of dashboard geometry/typography.

Next production build, typecheck and inherited M1–M4 static/runtime gates pass locally with these first public surfaces. New browser/visual evidence is pending CI. The cloud browser reports `ERR_BLOCKED_BY_CLIENT` for the local preview; no visual parity or finished-design claim is made from source inspection. React best-practice review preserves server-rendered pages, static data hoisting, one narrow ref-based dialog client and no data waterfalls or unnecessary client providers.

Remaining M5 scope includes landing, pricing/demo/legal content, auth/onboarding, app/settings/admin families, overlays, full coverage, visual polish and final cross-product acceptance. No completion or merge readiness is claimed by this checkpoint.

### First presentation CI findings

On `d43d3ab9ce11554261bcf92a0ab0890823949859`, all six inherited workflows passed, including unchanged M4 empirical parity. M5 run `35571280351` found native dialog Tab traversal could leave its controls at every width; an explicit bidirectional focus wrap was added and the original containment assertions retained/extended to Shift+Tab. The navigation test reached the dashboard but timed out waiting for network idleness; it now polls the exact geometry/font signature rather than unrelated network silence. The comparison itself remains unchanged. These M5 fixes require a fresh CI rerun before the checkpoint is accepted.

### Corrected first-presentation head — green

Head `3edbd450663ca8c8462edfc148ad9d0b77466584` passed all seven workflows:

- [M5 Production UI](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701436): all ten presentation tests passed, including keyboard focus containment/restoration at nine widths and exact dashboard geometry/font signature after public-to-dashboard navigation.
- [M4 Dashboard Parity](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701487): unchanged inherited parity harness passed.
- [M1 Next Candidate](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701521), [M2 Frozen Contract Layer](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701459), [M3 Canonical Session Topology](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701376), [UI Foundation Integrity](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701405), and [Frontend Production Build](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701453): passed.

The [M5 presentation artifact](https://github.com/Elceo23x4/elceo_land/actions/runs/35571701436/artifacts/10625993346) contains browser evidence. Downloading its temporary file reference locally returns HTTP 403; the screenshots have not yet been visually inspected. Automated success does not establish visual acceptance.

### Public reading expansion — pending verification

PUB-02 pricing now presents only the separate Kick Off / Focus Plan dashboard capabilities documented in the frozen `frontend-integration-map.md`, “Dashboard DTO expectations.” No amount, discount, asset quota, checkout action or entitlement inference is added. Current pricing is explicitly unpublished here. PUB-05 demo is an explicitly illustrative, non-numeric market-review exercise with keyboard-native questions; it is not a fabricated live dashboard or generated intelligence.

PUB-07–09 legal routes use a shared accessible document structure, anchor navigation and related-document links. Product/risk statements are limited to the constitution, editorial standard, legal UX matrix, frozen auth and state-ownership evidence. Complete approved Terms/Privacy copy was not found in the frontend or pinned handoff/source search. Publication status is visible; no effective date, legal entity, jurisdiction, retention promise, rights promise, contractual obligation or policy-version identifier is invented. Full legal publication remains a production acceptance dependency. Reading a document records no acknowledgement.

All five new pages are server components with code-native typography/rules and native disclosures. No new client module, global style, request, persistence or provider is introduced. Their essential reading/navigation survives every width; typographic proportions adapt without motion. React best-practice review confirms direct imports, no client data waterfall, no effect/state overhead and no new browser dependency. M5 browser coverage now exercises all eight implemented public routes at nine widths, plus anchor targets, explicit publication/price limitations and demonstration disclosure. Landing and the other M5 families remain outstanding.

### Account entry — pending verification

The preceding public-reading head `724cd446fc5a9a65791ef5dac038641c07064a73` passed all seven CI workflows: [M5 presentation](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938734), [M4 parity](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938950), [M1](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938653), [M2](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938878), [M3](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938783), [foundation](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938762), and [Vite production](https://github.com/Elceo23x4/elceo_land/actions/runs/35605938686). No inherited assertion was changed for those five routes.

AUTH-01/02 now have scoped editorial login/signup pages. One registered `GoogleEntry` client owns pending/error feedback and native form submission. It checks the existing public provider endpoint, fetches the canonical CSRF challenge, and posts to the existing same-origin Google sign-in relay. The provider ID is checked; no assumption that Google must report `oauth` rather than `oidc` is made. No provider-supplied redirect URL is trusted by the client. Opaque session cookies remain unread; no credential store, auth package, new endpoint, token source or identity is created. The server parent alone resolves signed-in presentation and uses the existing callback-path sanitizer.

Evidence: frozen `auth-session-and-authorization.md`, pinned `apps/web/app/(public)/login/SecureLoginClient.tsx` (Google sign-in/callback semantics), existing M3 relay and session helpers, and [official Auth.js REST action documentation](https://authjs.dev/reference/core/types#authaction). The controlled M5 service tests CSRF-cookie forwarding and native POST/redirect behavior; it never contacts Google or mints a session. Live OAuth provider configuration remains a separate deployment prerequisite, not a claim established by mocks.

Additional inherited gate evolution: M1 browser assertion `/login` = 404 is obsolete now that AUTH-01 is authored. It is replaced by explicit `/login` and `/signup` = 200 with Google entry markup in the deliberately unconfigured engineering server. `/` and `/api/session` remain 404 until the landing exists; protected routes still require 503 without canonical topology; SVG/portal/noindex fixture checks remain unchanged. M5 adds callback-injection rejection, safe non-reflected error copy, provider/CSRF failure without POST, canonical signed-in presentation and nine-width account-entry checks. M2/M3/M4 protections are unchanged.

On account-entry head `2e3f97934f1513f13d704bbe43fff9183e59cae5`, all six inherited workflows passed. [M5 run 35606679213](https://github.com/Elceo23x4/elceo_land/actions/runs/35606679213) passed 23/24 tests, including native CSRF/sign-in relay and nine-width account entry. The remaining test matched two `alert` elements: the intended provider-error message and Next's route announcer. Its locator is now scoped to the named account-entry region; both positive safe-copy and negative raw-error assertions are retained. This is a test-selector repair, not an application/security relaxation.

### Mechanical coverage baseline

Head `998c79c9cdf12de0fbd9ed7f0d997bb48332d2aa` completed all seven workflows successfully, including [M5 run 35607095110](https://github.com/Elceo23x4/elceo_land/actions/runs/35607095110) and [M4 parity run 35607095043](https://github.com/Elceo23x4/elceo_land/actions/runs/35607095043). The scoped error selector repaired the test without changing product behavior. Full M5 acceptance is still outstanding.

For visual review where artifact file downloads are unavailable, the M5 workflow now emits compressed copies of an explicit allowlist of controlled public/signed-out screenshots into its authorized job logs. This does not capture live users, credentials, protected dashboard data or arbitrary files. Original PNGs remain in the normal artifact. These copies enable direct visual inspection; their existence alone is not visual approval.

The generated surface inventory derives 91 canonical surface IDs, 61 durable routes and 23 explicitly enumerated admin routes from the unchanged frozen inventory. Eleven durable route files currently exist (including the preserved dashboard); this is file evidence, not an acceptance percentage. CI rejects drift, duplicate IDs/routes and product routes outside the canonical inventory. Overlay/system implementation and behavioral/visual evidence remain separate, outstanding obligations. The summary's “24 admin pages” disagrees with its 23 enumerated routes; no extra route has been invented.

## Landing narrative checkpoint — in progress

The visual-evidence transport succeeded on `582b17808b2acb336aa6b5207bb817287ed568ed`; controlled captures are now directly inspectable. Initial inspection covered desktop signup, desktop About and mobile pricing. It found the About title's accidental third line; the display scale was corrected. The subsequent capture head `f44753dce2b0263d80ad118f0dde3f3a6a885c47` passed all seven workflows, including M5's 25 tests and unchanged M4 parity. Visual acceptance of the complete product is not implied.

PUB-01 now has seven authored scene structures: geographic globe-backed ELCEO identity; burgundy landscape bridge; generated fibrous claret aperture; staggered chromatic principle placards; independently transformed editorial information planes over a human/world horizon; the specified wide/tall/two-short mosaic with an actual controlled dashboard capture; and a blue-led exploration CTA. Static content and essential supporting information remain available without JavaScript or hover. No live market values or backend intelligence are generated.

One registered client controller lazy-loads the sole registered `features/landing/motion/scene-choreography.ts` owner on large fine-pointer, non-reduced-motion displays. It owns scroll-linked world recession/placards and local pointer lens/depth. It adds no broad client route, WebGL loop, browser authority or shared/app motion import. Listeners and scoped GSAP tweens are reverted on unmount and motion-preference changes. Mobile receives a native horizontally scrollable information deck and staggered placards; all cinematic transforms are removed for reduced motion. New M5 tests exercise nine widths, image decode/render, seven scenes, heading bounds, native deck access, reduced-motion teardown and repeated navigation/scroll resource sampling.

Additional inherited gate evolution: M1's root `/` = 404 assertion is now obsolete because PUB-01 exists. It is replaced by `/` = 200 plus ELCEO market-intelligence content. `/api/session` remains 404; protected unconfigured document guards, canonical API allowlists, source-SVG proof and portal isolation remain unchanged. The complete inherited suite must rerun on this head.

Outstanding fidelity is explicit: there is no approved/generated usable film, because the available video generator returned `REQUIRES_PREMIUM`; no purchase or fake play control is made. The compact film aperture and origin-preserving expansion are therefore not implemented. The geographic still is the adaptive fallback, not independently transformable 3D continents. Scene-5 media richness and the new landing composition require direct capture review. These remain M5 acceptance gaps. The task's explicit continent-asset exception permits surrounding implementation; it does not convert either gap into acceptance.

All nine derivative stills are fully decoded, dimension/byte/hash checked and budget checked by a dedicated M5 asset gate. The original authority PNG, dashboard sources/assets, contracts/source pin, lockfile and deployment configuration remain unchanged. The capture is labelled demonstration data and does not live-bind the inherited dashboard cognition.

### Seven-scene checkpoint evidence and direct visual review

Head `2e9dcbe5ec43f2ed9d9d75fc8a90093024e90a9a` passed all seven workflows: [M5](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134042), [M4](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134005), [M3](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134035), [M2](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134167), [M1](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134262), [foundation](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134032), and [Vite](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134118). M5 includes a clean Node 22 locked install, both production builds, typecheck, asset integrity, nine-width landing checks and five repeated motion/navigation journeys. Its warmed final three heap samples remain within the 5 MiB spread and listener spread within 30. These are controlled Chromium regression measurements, not field Core Web Vitals or GPU acceptance.

The [original capture artifact](https://github.com/Elceo23x4/elceo_land/actions/runs/35917134042/artifacts/10775318771) is available. Desktop and mobile landing captures were directly inspected. Two mobile defects were identified despite green automation: the final blind-spot label approached the fibrous lower edge, and two-column lower mosaic copy became too narrow. The follow-up increases the aperture's content-safe inset and restacks the mosaic below 480px with 16px reading text. New browser assertions protect the label clearance and card reading width. This responsive correction follows the existing responsive authority; it does not revise desktop geometry or the approved scene contract.

Independent local verification again confirmed all 28 pinned handoff files by source path, blob, byte count and SHA-256. Comparison against merged M4 remains empty for `src/**`, legacy `public/**`, mirrored contracts/documents, approved references, lockfile, Vite configuration and Vercel configuration. Full M5 remains in progress: the remaining application/settings/admin/onboarding families and overlays have not been implemented, and film/continent/legal-content gaps remain open. This is not final M5 acceptance.
