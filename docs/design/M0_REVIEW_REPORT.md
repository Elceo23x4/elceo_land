# M0 architecture audit — review required

Audit date: 2026-09-20. Repository: `Elceo23x4/elceo_land`, PR #57, branch `foundation/elceo-ui-work-handoff`. Examined frontend commit: `e38d6d1cf1d8a2fc1104f10fb00de6a58f08a490`; comparison base: `df3893c62451fc33e5f95a732dc42ac9b04acc7b`.

**Original audit disposition: M0 blocked. See the approved repair rerun below for current local verification; M0 architectural acceptance remains pending. Do not start M1 or mark the foundation merge-ready.** This report records a static audit and failed validation attempts, not successful migration, deployment, or performance acceptance. No application, dependency, backend, geometry, SVG, or contract-authority changes were made.

The repository agent instructions, project UI skill, every design authority indexed by `docs/design/README.md`, first assignment, backend README/source/manifest, dashboard agent rules, and relevant dashboard implementation/contracts were read. Because the mirror cannot be completed, backend handoff documents were inspected directly from the exact pinned Git commit, read-only.

## 1. Backend snapshot materialization and verification

`check:ui-foundation` passes, but this is structural validation; it does not establish that source paths/blob identities exist or that the reference image decodes.

`sync:backend-handoff` fails with HTTP 404 on `artifacts/ui-handoff/mocks/account.json`. An authorized Git clone independently proves that this path does not exist at the pinned source commit. This is not merely an assumed credential/network failure.

All **15** document/artifact manifest entries match the exact source tree: 11 documents and four machine artifacts. All **12** mock entries fail: 11 paths do not exist; the one existing path, `mocks/auth-session.json`, has actual blob `d8bd0bb93e2a6224fba8d831e2b304288127a79d`, versus manifest value `51587a94fbe631ea5f4d014d456c2cba98f5babd`.

The pinned source actually contains **13** mock files. Appendix A records their exact Git identities for a concrete manifest correction review. No manifest identities were silently changed, no generated contents were hand-edited, and no newer backend state was substituted.

`verify:backend-handoff` fails because `SNAPSHOT.json` does not exist. The first assignment requires exact pinned identities; an incomplete snapshot cannot be committed as verified.

## 2. Generated files/count and pin

Backend source: `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`.

The failed sync wrote exactly two partial outputs before reaching the missing mock:

| File | Bytes |
|---|---:|
| `contracts/backend/backend-freeze-manifest.json` | 1,237 |
| `contracts/backend/handoff-summary.json` | 969 |

These incomplete outputs were removed after inspection. **Complete generated snapshot files committed: zero.** The current manifest expects 27 copied files plus `SNAPSHOT.json`; a correction covering the actual complete pinned tree would produce 28 copied files (11 documents, four artifacts, 13 mocks) plus `SNAPSHOT.json`, or 29 generated files. That is a proposed correction, not an accomplished sync.

The handoff source commit is distinct from the underlying functional freeze: the canonical handoff records functional main `20266494efd3a8d3a97c3ea9335c672e20fe7fa5` and functional tree `6f81f55269031e0ec6467cd60283593dd5b7c2d3`. Preserve both provenance levels.

## 3. Deployment baseline and diagnosis limits

GitHub status reads confirm:

| Context | Base main | Audited PR head |
|---|---|---|
| Vercel – elceo-land | success | failure |
| Vercel – elceo-land-l353 | failure | failure |

Primary failed deployment: [55o6zSKTDaBYD1cFCioBjMi5h5hP](https://vercel.com/elceo23x4s-projects/elceo-land/55o6zSKTDaBYD1cFCioBjMi5h5hP). Accepted base deployment: [AuU8zvgqZjJhiEMTKNXQiUdvLuHQ](https://vercel.com/elceo23x4s-projects/elceo-land/AuU8zvgqZjJhiEMTKNXQiUdvLuHQ).

The connected build-log action returned `Tool get_deployment_build_logs not found`. Deployment-detail access returned 403: the connected account is not authorized for scope `elceo23x4s-projects`. Team discovery returned an empty list. **Actual Vercel build logs were not obtained, so the precise primary deployment root cause remains unresolved.** The secondary failure is not grounds to dismiss the primary failure.

The foundation diff changes documentation, workflows, the reference, and three new package scripts. Application sources, Vite/Vercel configuration, dependencies and the build script are unchanged relative to base. No lockfile is committed. `npm ci` consequently fails. A normal local resolution (`npm install --package-lock=false --ignore-scripts --no-audit --no-fund`) fails ERESOLVE: it selects `react@19.3.0` while `@react-three/fiber@9.7.0` requires `react >=19 <19.3`. This proves a local unlocked-resolution risk shared by base and branch; it does **not** prove what happened in Vercel's resolver or cache.

No force install, peer-dependency bypass, speculative version change, deployment setting mutation or suppressed check was applied. Obtain primary logs/install settings, compare base/head under the same runtime and dependency resolution, then make only an evidence-backed foundation correction.

Additional snapshot workflow findings: path filters omit `MIRROR_MANIFEST.json` and generated snapshot paths; `git diff --quiet` misses newly generated untracked files before `git add`; verification hashes SHA-256 against snapshot metadata but does not independently recompute Git blob identities or check recorded byte counts. Cross-repository `GITHUB_TOKEN` permissions need verification if the source is private. These deserve narrowly scoped foundation fixes after the authority mismatch review.

## 4. Current frontend architecture

React 19 TypeScript SPA. Entry chain: `src/main.tsx` → `App` → `BrowserRouter` → eager `AppRoutes`. Vite uses React and SVGR plugins; `?react` SVG imports and `?url` asset imports need deliberate migration equivalents. Build is `tsc -b && vite build`; TypeScript uses strict bundler resolution. Vercel rewrites every path to `/index.html`.

| Existing route | Actual responsibility | Canonical mapping |
|---|---|---|
| `/` | Three-scene legacy landing; About/Pricing/FAQ popups; mobile blocker below 768px | PUB-01; popup content is partial evidence for PUB-02/03/04, not implemented routes |
| `/dashboard` | Responsive precision cockpit behind hardcoded `kickoffAccess` | APP-01, fixture prototype only |
| `/dashboard/assets` | Dashboard asset inspection | Development/review surface, not a canonical production product page |
| `/dashboard/system` | System-component preview | Development/review surface, not an authorization-protected admin page |
| `*` | Client not-found rendering | SYS-01; SPA fallback does not itself establish HTTP 404 status |

No real login, server session, entitlement enforcement, BFF or domain API client exists in this frontend. `RouteGate` uses mock state; its presence is not security evidence. Canonical inventory labels such as EXISTING refer to implementation evidence in the backend repository, not completed pages here.

Canonical target scope is nine public, five auth/onboarding, 16 core application, eight settings and 24 admin pages, plus 16 global overlays and ten system-state experiences. It is not one page per API endpoint. The separate cookie surface is required by the design legal matrix and must reflect actual technologies.

## 5. Dashboard parity risks and protected contracts

Active runtime is `DashboardResponsiveCockpit`, not the historical absolute cockpit. It owns asset, timeframe and linked-panel state. `DashboardResponsiveChartZone` owns layer toggles and overlay selection; `DashboardResponsivePanelLayer` owns seven panel workspaces, modes, expansion, drawers and fixture alert preferences.

Preserve `SHELL_RECTS`, `PANEL_FRAME_RECTS`, `PANEL_CONTENT_RECTS`, fluid viewport coordinate placement, layer order, isolated frame SVGs, central wheel/chart, source-safe icon extraction and inline stroke hover treatment. Do not replace with a generic grid or poster/contain layout. Preserve coaching's approved expansion behavior, minimum 0.78rem runtime text, Inter/Geist/system font stack, chart highlight colors, tab overflow arrows, hover/focus/pin/detail behavior and Escape handling.

Current chart always receives `fixtureNormalizedOhlcData`; asset/timeframe controls change local fixture context, not a proven live candle subscription. Deterministic cognition/scenario/review/condition-watch/cross-asset/freshness engines run in the browser. Preserve them only in isolated parity/demo fixtures; production must consume server DTOs and cannot carry forward browser-computed intelligence as truth.

The mock Kick Off gate currently wraps a richer cockpit. Production Kick Off is a reduced positive-allowlist DTO; do not recreate premium fields from it. Visual parity and production entitlement correctness need separate acceptance evidence.

CSS has two histories: legacy `.elceo-dashboard-scope` tokens and active `.dashboard-precision-viewport` typography/geometry. All routes are eagerly imported, so styles can participate globally. Global reset/font/root behavior must be compared after route splitting. Hover previews portal into `document.body`, outside the dashboard token ancestry: explicitly preserve scoped font variables in a portal host during migration.

Browser boundaries include `window`, `document`, `matchMedia`, layout measurements, ResizeObserver, portals, GSAP and chart creation. Hero state initializers directly read `window`; simply adding a client directive does not prove SSR safety. Keep browser-only imports/initialization inside guarded client boundaries.

The detail drawer declares `aria-modal` and handles Escape but has no implemented focus trap, initial focus or trigger-focus restoration. Some drawer buttons have no action handlers. Record these existing gaps rather than treating comments or inert controls as completed behavior. Responsive panel container queries exist, but a fixed full-viewport coordinate board is not proof of usable 360px touch layout. Resolve any mobile geometry conflict with the architect rather than silently changing approved coordinates.

## 6. Proposed Next.js target topology

This is a plan, not created code. Parenthesized groups do not change public URLs.

| Group / module | Pages or responsibility |
|---|---|
| `app/(public)` | `/`, pricing, about, faq, demo, help, legal/terms, legal/privacy, legal/risk-disclosure |
| `app/(auth)` | login, signup, forgot-password, reset-password, onboarding; v1 acquisition/login Google-only, recovery availability remains backend-dependent |
| `app/(app)` | dashboard; workspace/agenda/history; journal/new/[caseId]/analytics/influence; portfolio/watchlist/positions/actions; analytics; coaching; notifications |
| `app/(app)/settings` | hub, profile, assets, preferences, notifications, billing, access, security |
| `app/admin` | overview, freshness, operations, providers, audit; billing operations/orchestration/policy/provider-events/provider-mappings; entitlements; commercial/prices/users/[userId]; market-evidence/payloads/quality/cognition/inspection/scheduled-ingestion; seo |
| `app/api` | Explicit, allowlisted frontend server mediation where required; never an unrestricted internal proxy |
| `features/*` | Domain presentation, DTO adapters, state handling; dashboard remains an isolated feature |
| `components/{brand,public,app,admin,primitives}` | Shared presentation with deliberate CSS ownership |
| `lib/{api,auth,contracts,motion,telemetry,accessibility}` | Typed transport, server boundaries, shared policies and observation |

Each route family needs loading/error/not-found/access states; authenticated data must not enter shared public caches. Inventory IDs should accompany route acceptance cases. `/dashboard/assets` and `/dashboard/system` need an explicit development-only placement decision.

## 7. Backend/BFF/auth integration boundaries

The pinned handoff reports 153 route files, 168 operations, 99 browser-safe operations, 96 user UI operations, 52 admin bridge, three super-admin bridge, nine server-internal and four provider-webhook operations. Browser safety comes from operation metadata, not URL naming. Fifty operations have unresolved generated field constraints; generic OpenAPI objects are not permission to accept arbitrary fields.

Generate transport types from the frozen OpenAPI, use route-inventory classifications to constrain clients, then resolve unspecified DTO/validator details against pinned `packages/types` and `packages/schemas` source. Do not copy backend runtime services into the browser. Build contract tests around canonical mocks once the mirror is corrected; mocks establish shapes, not production readiness. Normalize standard error envelopes while preserving dedicated Auth.js/dashboard/checkout shapes.

Use one canonical Auth.js lifecycle: JWT strategy, seven-day max age, six-hour update age, Google enabled only with configured credentials. Backend callbacks own application-user creation, role/plan and onboarding state. Do not create an independent frontend user/session store or mint substitute identities. Google-only v1 UX must not imply email/password registration.

**Architecture decision still required:** frontend/backend production origins and Auth.js ownership. Prefer an explicitly reviewed same-origin routing/mediation arrangement that preserves canonical auth handlers, cookies and callbacks; validate cookie prefixes/path/domain/Secure/SameSite, CSRF, redirect allowlists, credential forwarding and logout before implementation. A separate frontend Auth.js instance is not automatically interchangeable with backend sessions. Cross-origin browser-safe classification alone does not prove CORS/cookie deployability.

For admin, authenticate and authorize the caller on the trusted server, allowlist operations, preserve backend permissions and step-up, inject `x-elceo-internal-token` only server-side, and allowlist returned DTOs. Never forward arbitrary browser-supplied internal headers, owner identities or upstream URLs. Add bundle/source-map/response/log secret checks; no token in `NEXT_PUBLIC_*`, browser storage or serialized component props.

For mutations keep one idempotency key per logical action/body across transport retries and reconcile ambiguous outcomes. Billing return goes to `/settings/billing`; re-read operation/billing/entitlements rather than unlocking on a redirect. Preserve notification distinctions between target configuration, verification, subscription and delivery health. Dashboard GET is passive; it must not initiate ingestion. Unknown or stale intelligence stays unavailable/stale, without a client formula fallback.

Age attestation persistence remains pending; terms/disclaimer are backend-recorded separately. Unsupported MFA, email/name/avatar edits, active-session management, account deletion/export and support-ticket writes must not be invented.

## 8. Assets, performance and memory

The attached `okrev(1).png` exists and displays successfully in this environment. The repository's canonical WebP does not: actual length **15,008 bytes**, RIFF-declared total **20,764 bytes**, header dimensions **320×569**; image viewing and Pillow decode fail. This is concrete truncation evidence. Restore the reviewed reference from the supplied original in a foundation repair; do not generate a replacement design. Written scene contracts explicitly refine the image: no scene numbering, revised scene-six mosaic, blue-led final CTA and product-action copy instead of the image's Google CTA.

Static asset inventory across `public` and `src/assets`: **166 files, 20,638,190 bytes**. This is repository storage, not measured network transfer or bundle size. Largest examples: yellow tape SVG 4,684,248 bytes in each tree; public wheel-side 1,867,459 bytes; source wheel-side 1,835,804 bytes; two dashboard wheel sources 1,598,041 bytes each. Public assets are copied to build output; eager SVGR component imports can add parsing/DOM cost. Actual compressed transfer and retained memory remain unmeasured.

Preserve accepted dashboard frames, geometry, radar, maps, sky, chart theme and font behavior. Audit duplicate wheel/source/public assets and development previews before deprecation; do not delete just because a filename looks historical. Preserve legacy landing as rollback evidence, but its pockets/trousers/large tape and mobile blocker are not the new seven-scene implementation. New globe continent meshes, deckled masks, separate media planes, posters and responsive variants still require production asset work. Font licensing/provenance is not proven merely by included WOFF2 files.

GSAP is used for landing ScrollTrigger/preloader and dashboard SVG star twinkle. Motion is used for local panel transitions/navigation. Three/R3F/Drei are dependencies, but the source import scan found no active imports or Canvas/useFrame usage; `GoldCursor3D` is a CSS cursor injector, not a WebGL scene. Lightweight Charts is dynamically imported by `ChartEngine`.

Static risks: eager landing/dashboard route imports; multi-megabyte SVGs; large scrolling filter animations; repeated infinite star tweens without visibility pausing; global cursor style; `font-display:block`; fixed viewport board and small legacy typography declarations. Existing GSAP contexts/listeners have cleanup paths. Chart cleanup disconnects ResizeObserver/cancels RAF/removes chart, but asynchronous import has no disposed-generation guard; a StrictMode effect cleanup/restart may permit late initialization on a still-connected element. Zero-size retry can recur every frame despite its 'retry once' comment. These are code risks, not measured leaks.

No LCP, INP, CLS, GPU/frame timings, heap snapshots, Lighthouse score or visual parity pass is claimed: dependencies could not install and deployment access is blocked. Required future evidence: cold/idle/full forward/reverse scroll, repeated journeys and return to idle; repeated route and drawer/tab/chart mount cycles; check retained chart/observer/timeline resources. Memory must settle rather than grow monotonically. Respect LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at field p75; lab runs alone cannot certify field p75.

## 9. Migration sequence and explicit gates

1. **M0 closure:** review/correct mock manifest against the unchanged pin, regenerate and commit exact snapshot; repair reference integrity; obtain primary Vercel logs and prove an evidence-backed build resolution. Review this audit. Do not start M1 now.
2. **M1 shell:** select supported/pinned runtime and dependencies with lockfile; establish App Router/TypeScript and minimal providers/tokens. Preserve Vite as independently buildable rollback path until parity. Resolve SVGR and browser-only boundaries. Gate: build/typecheck, HTTP routing, server/client separation, route CSS isolation.
3. **M2 contracts:** typed read/mutation adapters and operation allowlists. Gate: canonical shape/error/validation/idempotency tests, unsupported fields surfaced as gaps, no internal client operations.
4. **M3 session:** approve origin/cookie/callback topology; implement canonical Google session integration and server guards. Gate: first signup, returning login, denied/unconfigured provider, expiry/logout, onboarding, role/owner/entitlement denial, CSRF and secret checks. Resolve age persistence before claiming recorded eligibility.
5. **M4 dashboard parity:** first port deterministic fixture presentation unchanged; separately map server Focus/Kick Off DTOs. Gate: before/after screenshots and interaction scenarios for selectors, overlay linking/toggles, panel modes/expansion, drawers, keyboard and reduced motion. No geometry/source SVG redesign. Explicitly review production behavior where fixtures exceed backend capability.
6. **M5 page families:** public/legal/cookie/auth foundations, approved landing, application/settings/admin families in canonical inventory order, each with loading/empty/error/stale/offline/access states and server ownership checks.
7. **Cutover gate:** primary preview/build green; accepted dashboard parity; auth and typed contracts proven; secret scans; representative desktop/mobile/touch/keyboard/zoom; full memory/performance evidence. Switch Vercel framework/build/output intentionally and remove the SPA catch-all for Next routing/API correctness. Keep prior accepted deployment and Vite build available for rollback until acceptance; no automatic merge or production promotion.

Viewport matrix: 360, 390, 430, 768, 1024, 1280, 1440, 1920 and ultrawide, with coarse pointer and reduced motion. Accessibility gates: visible focus, logical tab order, modal trapping/restoration, readable contrast, 44px touch targets, zoom/text scaling and non-hover access. Visual approval cannot substitute for functional or performance acceptance.

## 10. Concrete review decisions/blockers

- Approve correcting the manifest's mock block to the actual 13 filenames/blob identities in Appendix A while retaining the exact source commit; then rerun and commit the generated snapshot. The current instruction to satisfy the existing identities is impossible against that commit.
- Restore the corrupt reference from the readable user attachment and add a real decode/integrity gate.
- Provide authorized Vercel scope access or export the primary failing build logs and project install/build/runtime settings. Do not approve a guessed deployment fix from the local ERESOLVE alone.
- Approve reproducible dependency pin/lockfile work once deployment evidence is available; no peer bypass.
- Decide frontend/backend origins and canonical Auth.js session ownership before M3.
- Resolve fixture/live DTO gaps, development preview exposure, mobile cockpit constraints, font provenance and final age-attestation semantics at their gates.

Stopping follows `WORK_FIRST_ASSIGNMENT.md` section 5, `WORK_START_PROTOCOL.md` stop conditions, and the `elceo-ui` skill's requirement to surface unsupported contract/design behavior. M0 is not accepted; M1 is not authorized by this report.

## 11. Commands/checks and results

| Check | Result |
|---|---|
| Clone specified frontend branch; inspect base/head diff | Success; no application/dependency/build-config changes in foundation diff |
| View supplied PNG | Success |
| View repository WebP; Pillow decode; inspect RIFF length | Fail; truncated file |
| `npm run check:ui-foundation` | Pass; structural only |
| `npm run sync:backend-handoff` | Fail: 404 missing pinned `mocks/account.json`; two partial files |
| Git tree/blob comparison of all 27 manifest entries | 15 match; 11 absent mock paths; one mock blob mismatch |
| `npm run verify:backend-handoff` | Fail: missing `SNAPSHOT.json` |
| GitHub combined statuses for base and audited head | Confirms primary green→red; secondary red→red |
| Vercel team discovery/build-log/deployment-detail reads | Empty teams; missing tool action; scope 403 respectively |
| `npm ci` | Fail: no lockfile |
| `npm install --package-lock=false --ignore-scripts --no-audit --no-fund` | Fail: React/R3F peer dependency ERESOLVE |
| `npm run build` | Blocked: `tsc: not found` after failed install; no TypeScript/build pass claimed |
| Source route/motion/browser API/asset/CSS inspection | Completed static audit; observations above |
| Browser visual, accessibility, heap/GPU and Web Vitals measurements | Not executed; runtime prerequisites blocked |

No application tests were added for this documentation-only audit. Exact pinned mock evidence follows.

## Appendix A — actual pinned mock tree (proposed manifest repair)

All paths below are relative to `artifacts/ui-handoff/mocks/` at the unchanged pinned source commit. Proposed destinations preserve these names under `contracts/backend/mocks/`. This is evidence for review, not a modified manifest.

| Filename | Git blob identity |
|---|---|
| `account-billing.json` | `d8fc6e6a3bd9499ffffa573805ddcec72fc129e3` |
| `account-entitlements.json` | `a09e68504c91a0708763836ab3492bea2a34d25e` |
| `admin-system-summary.json` | `da8d6cd8772914f3ec5ac5ab63e4807513d2ffb4` |
| `analytics-latest.json` | `92062ad9c6791b650ebd0040ddef2c227abad62f` |
| `auth-session.json` | `d8bd0bb93e2a6224fba8d831e2b304288127a79d` |
| `billing-checkout-processing.json` | `8dc32898b0ecf8c717d2245e16e7d1bfca1e2e17` |
| `coaching-latest.json` | `b661636763c6d65a8f0788e8f282122a84057e48` |
| `dashboard-focus-plan.json` | `0f4fcec7d423daa341f61ae49266d22a346a9ce8` |
| `journal-cases-list.json` | `39db98f012d1599d9eb66bf6f4b38aec135f7ee7` |
| `notifications-summary.json` | `ef52bd65a0b0b78b8eca2c406c7c4be76b7d59d4` |
| `portfolio-watchlist.json` | `4150187d69e8fbe0a97291063faab5759d9ae38b` |
| `super-admin-control-snapshot.json` | `aedb393bfeaa4652975932c54bc86b3ad50a3ad5` |
| `workspace-current.json` | `3b38666038227e8cd15d0a631fc073dcc40cbb01` |


## Approved M0 foundation repair rerun — 2026-09-20

This section supersedes the original audit's local foundation failure results while preserving the before-state evidence above. Work remains exclusively on PR #57 / `foundation/elceo-ui-work-handoff`. No application page, dashboard, landing implementation, backend runtime, framework configuration or migration was changed.

### Before / after

| Gate | Original result | Repair rerun |
|---|---|---|
| Frozen mirror | 12 invalid mock entries; partial sync | Only manifest mock block replaced with the 13 exact paths/blob identities independently checked against the pinned tree and Appendix A; all 28 source files plus snapshot materialized |
| Provenance | Exact source and functional freeze recorded | `SOURCE.json` unchanged; canonical freeze manifest copied byte-for-byte |
| Verification | Snapshot absent; SHA-256-only local verification | Exact pinned Git tree coverage, path, blob identity, Git source byte count, source bytes, copied bytes, snapshot metadata/SHA-256 and extra-file rejection |
| Sync partial writes | Missing source could leave partial files | All source entries validated before any output is written; copied files verified before snapshot publication |
| Workflow coverage | Manifest/generated paths omitted; untracked files missed | Full mirror directories and shared helper trigger sync; porcelain status includes untracked files before accepting synchronization; UI workflow now requires a complete verified snapshot |
| Visual authority | Truncated WebP | Original uploaded PNG copied without re-encoding or visual modification; all authority path references updated |
| PNG integrity | No decode check | Exact original SHA-256/byte count, all PNG chunk CRCs, complete zlib scanlines and RGBA pixel reconstruction; truncation/corruption/trailing-data rejection tests |
| Dependency resolution | React 19.3.0 versus R3F peer `<19.3` | Exact React/React DOM 19.2.8 and R3F 9.7.0; npm registry peer evidence checked; complete dependency tree valid |
| Reproducibility | No lockfile | npm lockfile v3 committed; clean `npm ci` succeeds without peer suppression |
| Type/build | Compiler unavailable after failed install | `tsc -b` and existing `npm run build` succeed |

### Exact local validation and scope

- Runtime: Node `v24.19.0`, npm `11.9.0`.
- `npm view react@19.2.8 version`, `npm view react-dom@19.2.8 peerDependencies`, `npm view @react-three/fiber@9.7.0 peerDependencies`: compatible published pairing confirmed.
- `npm install --no-audit --no-fund`: pass, no force/legacy-peer-deps/peer suppression.
- Move the installed dependency directory out of the repository, then `npm ci --no-audit --no-fund`: pass from absent `node_modules`; 171 packages installed.
- `npm ls --all`: pass before and after clean install, including Motion/Drei/R3F and their peer requirements. Other direct dependency ranges remain unchanged; the new lockfile captures their normal resolution because no prior lock existed.
- `./node_modules/.bin/tsc -b`: pass.
- `npm run build`: pass with Vite 8.3.0, 549 transformed modules.
- `npm run check:ui-foundation`, `npm run check:reference`: pass.
- `npm run sync:backend-handoff`, `npm run verify:backend-handoff`: pass using the default fresh pinned Git fetch, as well as the existing-clone path. Copied count is exactly 28; generated total is 29 including `SNAPSHOT.json`.
- `npm run test:foundation`: integrity rejection tests pass; covers damaged/truncated PNG, local bytes with recomputed SHA-256, wrong source byte counts, forged snapshot metadata, missing pinned source path and incorrect source blob.
- Repository skill validation: pass; only its authority image extension changed.
- `git diff --check`: pass. Source pin, document/artifact manifest blocks, `src/`, `public/`, `vite.config.ts`, `vercel.json`, `tsconfig.json` and `index.html` remain unchanged by this repair.

The PNG is 941×1672, 2,888,188 bytes, SHA-256 `a8a689790431cd2d3d4423383a45122e3b5a10abaae43bd6b8815396bd8db4d6`. It is the original supplied attachment, not a generated replacement. Scene-contract edits are limited to the authority filename extension.

### Build observations and deployment boundary

The successful build emits CSS 130.51 kB (gzip 22.71 kB) and main JavaScript 10,245.20 kB (gzip 2,922.30 kB). Vite warns about oversized chunks; Babel reports four SVGs over 500 kB. Lightweight Charts is dynamically imported in `ChartEngine.tsx` but also statically imported by `chartTheme.ts`, so it does not split into a separate chunk. These are measured build artifacts, not browser-memory or Web Vitals measurements. No bundle/performance refactor is authorized in this M0 repair.

The local dependency failure is repaired. **It is not established as the historical Vercel root cause.** No historic build logs have been obtained. After publishing this repair, the exact resulting head's primary Vercel status must be observed and reported; an inaccessible red deployment remains a stop condition, not permission to change framework/application configuration.

### Remaining review decisions

M0 architectural acceptance is still required. The original auth-origin/cookie/callback ownership, production fixture-to-DTO mapping, Kick Off entitlement projection, mobile cockpit geometry, development preview exposure, font provenance, age-attestation persistence, accessibility and browser-memory/performance decisions remain open. The dependency/build repair does not approve M1, production readiness or merge readiness. Keep PR #57 draft.
