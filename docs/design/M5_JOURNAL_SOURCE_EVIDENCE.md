# M5 journal source refinements

Frozen source: `Elceo23x4/Elceo-Mi` at `771487b46874afc28a21f260a2c12f92bfe8f736`. These refinements supplement omitted OpenAPI request/response detail; they do not edit generated types, route policy or the frozen snapshot.

| Source | Exact Git blob |
|---|---|
| `services/analytics/src/types.ts` | `d47348002cabadba4230595385b36ab12c810d26` |
| `services/analytics/src/performance-metrics.ts` | `b584d039d86a331fcf670812b8c0927d2240463f` |
| `packages/types/src/journal-influence.ts` | `36d1c47e82aff194581cf3a4fec4adc14cfc84fe` |
| `packages/types/src/journal.ts` | `7f617d37c34c77194a57a834d86f60219aaabb4c` |
| `packages/types/src/app-api.ts` | `7b2ac62ef2168d581734e1903cfac7328fc2448e` |
| `packages/schemas/src/app-api.schema.ts` | `c6d870bfb56eb1f3ddafb8b9012c89e101eb5d33` |
| `services/application-state/src/journal/api-patch-mappers.ts` | `5a4a8e6535e69b2853deb9b7412285ece5e04a5c` |
| `services/application-state/src/journal/case-service.ts` | `7184d1f205d27776bd8133a2e851c5c9e1819ecd` |
| `services/application-state/src/journal/replay.ts` | `a25bd695ce0803b1ad28c72c67639a17dc76fb0b` |
| `apps/web/app/api/journal/analytics/route.ts` | `3066180ac21bc1e8724035c044a93563f4a7a234` |
| `apps/web/app/api/journal/entries/route.ts` | `1c7ac70da04f755fea35e9637b605c21a7ecf915` |
| `apps/web/app/api/journal/influence/latest/route.ts` | `9c348d15d1f935386a7d10488f4125282fea3e3d` |
| `apps/web/app/api/journal/influence/generate/route.ts` | `142169c8901856ff6e326d2b5dd69572c3a7e8c7` |
| `apps/web/app/api/journal/cases/[caseId]/plan/route.ts` | `7bf51eb875281e70f6778a3492df246d2ac4d68e` |
| `apps/web/app/api/journal/cases/[caseId]/execute/route.ts` | `be9d1b188d83543a61017213272e884de3e2f76d` |
| `apps/web/app/api/journal/cases/[caseId]/adjust/route.ts` | `6e7ef6600995fe0f5f3513176fae8b78dbca6ecf` |
| `apps/web/app/api/journal/cases/[caseId]/partial-close/route.ts` | `3a8d2f1ae3c7a38598685c98597dee6f929b1532` |
| `apps/web/app/api/journal/cases/[caseId]/close/route.ts` | `9e70e221e61a9967173cf1e3f0a5b943db77f88a` |
| `apps/web/app/api/journal/cases/[caseId]/cancel/route.ts` | `96fc2f9cad5bc44cdf1500f32a3c193b60b1fa5b` |
| `apps/web/app/api/journal/cases/[caseId]/review/route.ts` | `6b8ec82939849c2947c564d2133c207e84913896` |
| `apps/web/app/api/journal/cases/[caseId]/replay/route.ts` | `147cc7b4f03317c77eed153bb41aa9eab54f41f1` |

## Reading and display

`GET /api/journal/analytics` is a dedicated top-level legacy `JournalAnalyticsResult`, not the canonical `/api/analytics/latest` snapshot and not an API data envelope. The authenticated handler selects that owner's legacy entries with the server's entitlement history limit. Its catch-all maps errors to 401; the frontend cannot infer the underlying cause. `winRate` is returned as a percentage; `expectancy` is in R. Amounts carry no currency. The frontend projects service values and ordering without calculation, ranking or interpretation. No history is synthesized.

Influence uses `GET /api/journal/influence/latest` and explicit `POST /api/journal/influence/generate`, default `assetScope/timeframeScope='*'` from the handler. The POST takes no invented body or lookback. Both return `data.snapshot`; null means no snapshot, whereas missing/malformed content is rejected. Setup/behaviour/direction associations and influence scores are backend-owned. Direction win rate is a raw 0–1 ratio, deliberately labelled rather than transformed. Null averages remain unavailable. Subject IDs are not serialized into presentation.

## Seven lifecycle operations

Exact request types live in `lib/contracts/refinements/journal.ts`; generated files remain unchanged. The operation keys retain canonical method/path identity. The frozen mappers define exactly which request fields affect each operation. Required execute `openedAt`, close `closedAt` plus non-open outcome, and review `reviewedAt` are preserved. Optional blank inputs omit fields, supplied lists replace fields, zero and negative finite numbers remain explicit values. No financial calculation or speculative min/max is added. Times are explicitly entered as UTC. The UI does not currently offer clearing nullable/list fields to null/empty; that editing affordance is not claimed.

Transition display follows `case-service.ts`: draft → plan/cancel; planned → execute/cancel; executed → adjust/partial-close/close; partially_closed → adjust/close; closed/canceled → review; reviewed → no subsequent action. This is advisory presentation, never authorization. Every operation remains owner-scoped, server-validated, idempotent and audited by the frozen handler. “Execute” records a past execution; it never places a market order.

One shared lock across case dialogs prevents concurrent or repeated submissions. Each logical mutation has one key/controller and a 30-second browser wait; unmount clears the timer and aborts that wait. Unknown, rejected and successful outcomes keep forms locked until explicit passive saved-case navigation. Success requires a full projected case with the expected returned identity/status. Browser cancellation never proves server cancellation. No automatic retry, optimistic record update or locally generated case identity.

## Replay and entry gap

The replay read is owner-scoped and returns the stored case plus revisions. Only revision type, prior/next status, time and summary are displayed in returned order; raw `caseJson`, `snapshotJson`, actor/subject identifiers are excluded. Missing/malformed and empty history remain distinct.

The canonical surface inventory requests add/view entries inside case detail, but the frozen legacy journal entry type and `/api/journal/entries` do not carry a case-link field. A case-specific association cannot be proven. No entries are attached to cases by asset/time heuristics, and this capability is explicitly blocked. An independent legacy-entry workflow is not implemented by this checkpoint.

## Fixture and verification limits

All 13 canonical mocks remain unmodified. The canonical case mock supplies case projection/lifecycle test shape. No canonical fixture supplies this legacy analytics report or journal influence snapshot: `tests/journal/fixtures/{analytics,influence}.json` are clearly controlled, hand-authored source-shape fixtures, not live data or proof of production computation. Tests deliberately include null, zero, sparse history, malformed responses and private-field markers. Mock mutation handlers only return controlled shapes; they do not certify backend lifecycle persistence or concurrency. Backend authority is established by pinned source, not these fixtures.

Essential content remains readable without motion. Comparative tables become labelled record rows at tablet/mobile widths; dialogs use the inherited native top layer, focus containment and Escape restoration. No new motion library, asset, global stylesheet or broad client route is introduced. Exact-head CI and visual inspection are required before this family is accepted.
