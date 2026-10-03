# M5 portfolio source evidence

Authority: frozen `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`. No mirrored or generated contract is changed. Supplemental types in `lib/contracts/refinements/portfolio.ts` reproduce the exact portfolio and request types; symbol/timeframe/direction aliases are proven in the frozen events/journal types. These are source refinements for OpenAPI omissions, never independent specification ownership.

| Pinned source | Git blob |
|---|---|
| `packages/types/src/portfolio.ts` | `dd142ca4f15216b36951af4b1d00a2538709dc6c` |
| `packages/types/src/app-api.ts` | `7b2ac62ef2168d581734e1903cfac7328fc2448e` |
| `packages/types/src/events.ts` | `f0fa37320cb8a31eb0adac8390ab105bbc86c159` |
| `packages/schemas/src/portfolio.schema.ts` | `939232b12661edb7fb1d96856d5b62b463fcab41` |
| `packages/schemas/src/app-api.schema.ts` | `c6d870bfb56eb1f3ddafb8b9012c89e101eb5d33` |
| `services/application-state/src/portfolio/lifecycle.ts` | `c6ab3739eb7c892ed7e52158441651c22525c282` |
| `services/application-state/src/portfolio/query-service.ts` | `7af8d610d99b566b2fc7d4d4110cdc580484b933` |
| `services/application-state/src/portfolio/replay.ts` | `327798bee51c124c6a9cd1bcb767262ac3e21936` |
| `services/application-state/src/portfolio/snapshot-service.ts` | `c8ec0f52fc719733871038ef7d48add6832c334e` |
| `services/application-state/src/portfolio/watchlist-service.ts` | `97ad7132a1b9309d1e185e89bac5692656f0bdf4` |
| `services/application-state/src/portfolio/position-service.ts` | `9ab3882d435fc689ff4c4a0f02a936211d2358c3` |
| `services/application-state/src/portfolio/action-service.ts` | `de5b8988aa2f06b27087c995893d7a6a762e742a` |
| `services/application-state/src/runtime/canonical-portfolio-boundary.ts` | `d7684242995353ba6f8fed7f326f4203a918ac77` |
| `apps/web/app/api/portfolio/actions/[actionId]/complete/route.ts` | `60e6dd25bded9247875563c5166ba6963b8bf7dd` |
| `apps/web/app/api/portfolio/actions/[actionId]/dismiss/route.ts` | `7cb7445ace22fb81b1969cb4c63e1d2e56a995a7` |
| `apps/web/app/api/portfolio/actions/[actionId]/route.ts` | `4a65d152ff8127b39218433d967d963577f5eac3` |
| `apps/web/app/api/portfolio/actions/route.ts` | `6e8460e4a713366238cca3436bfdd4704e27242e` |
| `apps/web/app/api/portfolio/attention/route.ts` | `68a0fd00d3403a3b38fa50992cd1d4fa46da78a2` |
| `apps/web/app/api/portfolio/positions/[positionId]/cancel/route.ts` | `34fc6cf3c0a9341398d50930e1a7b9f6b255b465` |
| `apps/web/app/api/portfolio/positions/[positionId]/close/route.ts` | `7bf028b890b6b226611537b825d066a19a79bf3c` |
| `apps/web/app/api/portfolio/positions/[positionId]/open/route.ts` | `a1f2ead61c795ccf778ede38303f49b765e39683` |
| `apps/web/app/api/portfolio/positions/[positionId]/reduce/route.ts` | `a4ac7724f81cb413021c0f533e1551681748ba82` |
| `apps/web/app/api/portfolio/positions/[positionId]/route.ts` | `a931bdfa4ddb44a96cdba338300e9e7f6d2947c2` |
| `apps/web/app/api/portfolio/positions/[positionId]/thesis-health/route.ts` | `1972bc42c954aa521779415accd455b5eaea4301` |
| `apps/web/app/api/portfolio/positions/route.ts` | `49176258b4419f442279d2182116402285a9f2a6` |
| `apps/web/app/api/portfolio/replay/route.ts` | `09baa8e86d6e8bc62735d0d109687d70e16bb7ea` |
| `apps/web/app/api/portfolio/snapshot/current/route.ts` | `1476bae93a36e348e30d391f7e8d786c06ddee1c` |
| `apps/web/app/api/portfolio/snapshot/generate/route.ts` | `58945340090d4a18328d8a382b83c55fbe76dc95` |
| `apps/web/app/api/portfolio/watchlist/[entryId]/archive/route.ts` | `c4bec57d92b29a26342ea6b5c230a31e4ecb8041` |
| `apps/web/app/api/portfolio/watchlist/[entryId]/route.ts` | `091500602f524418cb5770536a486ee2be0af4ef` |
| `apps/web/app/api/portfolio/watchlist/[entryId]/status/route.ts` | `80eefd7085a77ae94ee77a83efe38a5f0971f5a6` |
| `apps/web/app/api/portfolio/watchlist/[entryId]/thesis-health/route.ts` | `82eb9eec336779911a04910000075428cd323172` |
| `apps/web/app/api/portfolio/watchlist/route.ts` | `9f9e958f09a765ee747213ecfe52046c353664b2` |

## Reads, records and scope

The four canonical routes are `/portfolio`, `/portfolio/watchlist`, `/portfolio/positions`, `/portfolio/actions`. Overview reads only `GET /api/portfolio/snapshot/current`, which calls the passive `getPortfolioSnapshot`. Snapshot arrays include all returned statuses, while snapshot counters are backend-computed; the frontend never recalculates them from displayed arrays. The snapshot service queries each entity family with limit 1000, so it is a saved window, not a claim of universal account completeness. Generation is an explicit idempotent POST, never a side effect of reading a page.

Watchlist GET uses default 50/max 200 and returns owner-scoped records; the page does not filter archived entries locally. It remains distinct from account tracked markets. Position list GET returns up to 50 open and 50 reducing records by default, combined/sorted on the backend. Proposed/closed/canceled records are accessed through owner-scoped item GET using `?selected=` within the canonical destination, not invented pages. Creation's saved identity supplies that readback link; no identity is generated in the browser. Action list GET returns up to 50 open actions. Completed/dismissed records remain readable by saved ID. Absence from a returned window is never interpreted as nonexistence.

The inventory-declared idempotency context on list/item GETs is preserved even where handlers are passive. List reads and selected item reads remain independent so an unavailable list does not manufacture an empty selected record. All item routes return current entity plus replay. The reusable history dialog shows returned revision type/time/summary in returned order, omitting raw snapshots and subject/actor identity. It validates matching kind/ID/current-record identity. Arbitrary entity IDs remain subject to backend ownership, never frontend permission inference.

## Proven attention conflict — blocked passive integration

The frozen `GET /api/portfolio/attention` calls `getPortfolioAttentionSummary`, which calls `getOrGeneratePortfolioSnapshot`; the canonical runtime boundary forwards it unchanged. Thus an ostensibly passive GET may generate/persist a snapshot on an account with none. This conflicts with the user's explicit no-generation-on-read requirement. The frontend **does not invoke this GET**, even after a preliminary snapshot check (which would leave a race). No substitute attention computation or backend mutation is added. Snapshot counts/entities remain presented as saved snapshot data, not as a fabricated attention response. A truly passive attention contract requires backend review. Static rejection coverage and the controlled service fail if the page invokes this endpoint.

## Mutations and limits

Seventeen supported operations: watchlist create/update/status/health/archive; position create/update/open/reduce/close/cancel/health; action create/update/complete/dismiss; snapshot generation. Each client call uses a literal generated operation key. Request refinements preserve required fields, finite numeric values, nullable DTO semantics and UTC timestamps; no invented min/max, market catalogue, pricing, sizing, valuation, P&L, entitlement or cognition is introduced. Operation-specific forms project only their reviewed keys. Portfolio entity IDs and subject identity cannot be submitted through these forms.

Status/thesis affordances reproduce frozen lifecycle tables only. They are advisory presentation; the backend still owns validation, authorization, idempotency and audit. Invalidated thesis has no recovery action because these routes do not pass explicitRecovery. Position cancel parses an optional note but discards it before the service call; this form therefore offers no note field and sends an empty body. Complete/dismiss timestamps are set by the server and the client sends no invented timestamp/body. Optional blank fields remain omitted; supplied target arrays replace that field. Null/empty clearing controls are not yet exposed and are not claimed.

Some frozen PATCH validators delegate to the broad journal patch validator. Supplemental request types and the form allowlist enforce the intended documented fields for this UI, but are not claimed as a substitute for backend runtime validation of arbitrary hostile requests. Backend semantics remain frozen.

One key/controller per logical mutation, 30-second browser wait and unmount cleanup remain mandatory. Dialogs sharing one entity are locked together after any request. Ambiguous outcomes remain uncertain and do not retry. Confirmation requires projected response, matching entity identity, and expected lifecycle status/health where applicable. Passive full saved-record navigation precedes another logical action. Browser abort does not imply server cancellation.

## Design and evidence scope

Portfolio uses a scoped entity ledger, recorded-value columns, service-priority action queue, snapshot count band and contextual saved-record section/history dialog. It adds no app-wide stylesheet, dashboard change, motion system or new mediation route. Tables reflow into labelled rows; dialogs retain native focus trapping/restoration and reduced-motion behavior.

The unchanged canonical `portfolio-watchlist.json` proves watchlist shape. Position/action fixtures are explicitly controlled source-shape fixtures; the test service assembles a controlled snapshot and echoes submitted lifecycle fields. They do not prove live persistence, business calculations, commercial readiness or backend transition enforcement. Unit/compile-time tests cover projection, null/zero, forbidden authority fields, required keys/times, replay privacy and the attention prohibition. Browser tests exercise all operations plus responsive, dialog/focus, empty/forbidden/malformed/unavailable and timeout/unmount cases. Exact-head CI and personal screenshot inspection remain required before a family checkpoint.
