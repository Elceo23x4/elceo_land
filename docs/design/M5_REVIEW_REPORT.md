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
| M1 browser and full M4 visual/interaction/responsive/reduced-motion/memory harness | Pending; local Playwright browser download timed out. Existing unchanged CI harness is required before substantial M5 implementation. |

No baseline pass is claimed until the browser gates complete. Current application sources and accepted authorities are byte unchanged. Production builds and static checks are not substitutes for M4 empirical browser parity.

## Further phase-topology observation

The inherited M1 `shell.spec.ts` currently expects `/` and `/login` to return 404 because those pages did not exist in M1–M4. It remains unchanged for this gate-only checkpoint. When those authorized M5 pages are actually implemented, that expectation must become explicit successful-public-route assertions while retaining `/api/session` as absent, protected unconfigured routes as 503, the noindex engineering fixture, source-SVG proof and portal typography isolation. This is a phase-topology change, not authorization to alter auth/session semantics.
