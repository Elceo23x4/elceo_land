# M5 Production UI — Review report

Status: in progress; not accepted. This initial checkpoint changes gates only. No production UI, auth topology, API mediation, dashboard source/assets, backend snapshot or deployment configuration changed.

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
