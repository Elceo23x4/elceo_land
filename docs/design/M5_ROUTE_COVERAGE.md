# M5 route/surface coverage — in progress

Source: frozen `docs/backend-contract/ui-page-inventory.md`. A route listed below is not final acceptance until its visual, responsive, accessibility and integration evidence is complete.

`M5_SURFACE_INVENTORY.generated.json` mechanically enumerates every canonical ID and durable route, retains each source row, and maps actual Next route files. Regenerate with `node scripts/check-m5-coverage.mjs --write`; CI checks drift with `node scripts/check-m5-coverage.mjs`. This proves inventory/file coverage only, not complete UI or behavioral acceptance. Missing overlays and system states stay explicitly pending.

| Inventory surface | Current implementation | State / backend owner | Authority and rendering |
|---|---|---|---|
| PUB-01 `/` | First seven-scene narrative implemented; fidelity/film/continent closure pending | Static public copy and clearly labelled controlled dashboard preview; no API or business authority | Approved PNG + written seven-scene contract; one registered, capability-gated landing motion owner |
| PUB-02 `/pricing` | Two authored plan perspectives; price publication explicitly unavailable | Static supported capabilities only; no checkout or entitlement inference | Frozen integration map dashboard projections; server-rendered |
| PUB-03 `/about` | Authored editorial page; controlled responsive/keyboard checks pass; final product acceptance pending | Static content; no API or mutation | Constitution/editorial standard; server-rendered type and code-native rules |
| PUB-04 `/faq` | Grouped accessible disclosures; controlled responsive/keyboard checks pass; final product acceptance pending | Native disclosure state only; no business authority | Frozen product/auth/payment limits; server-rendered native details |
| PUB-05 `/demo` | Illustrative market-review exercise with three native disclosures | No live data, generated values, session or API | Editorial standard; server-rendered and explicitly illustrative |
| PUB-06 `/help` | Account/context/journal/billing guidance; controlled responsive/keyboard checks pass; final product acceptance pending | Static guidance; no ticket submission or fake support destination | Frozen inventory and editorial standard; server-rendered |
| PUB-07 `/legal/terms` | Accessible document structure and supported product summary; approved full copy pending | Reading only; no acceptance persisted | Constitution/legal UX matrix; visible publication limitation |
| PUB-08 `/legal/privacy` | Accessible document structure and current sign-in/cookie explanation; full policy pending | No invented data-processing commitments | Frozen auth topology/legal UX matrix; visible publication limitation |
| PUB-09 `/legal/risk-disclosure` | Supported market-intelligence risk explanation; formal wording/version review pending | No acknowledgement persisted | Constitution/editorial/legal UX authorities; server-rendered |
| AUTH-01 `/login`, AUTH-02 `/signup` | Authored account-entry pages; controlled relay tests pass | M3 canonical session authority; Google-only entry through existing relay | Server pages, narrow registered form boundary; scoped typography; no credential store |
| Global public navigation/footer | Implemented; remaining destinations are pending within this M5 branch | Navigation only | Scoped public layout, touch targets, native mobile disclosure |
| Cookie information dialog | Necessary-only explanation, no optional categories or persistence fabricated | Presentation only; canonical session cookies remain opaque/server-owned | Native modal top layer, focus restoration, keyboard dismissal; CSS-module styling |
| APP-01 `/dashboard` | Accepted M4 implementation preserved | Exact inherited fixtures; no live intelligence binding | Full-frame cockpit and all protected assets unchanged |
| AUTH-03/04 recovery | Request/reset forms and two exact mediators | Neutral acceptance, explicit confirmed reset, unknown outcomes never retried | Frozen recovery/password evidence; five-width tested |
| AUTH-05 onboarding | Bounded status page | Canonical completion only; legal publication/age persistence blocks new completion | No fabricated consent controls or persistence |
| WKS-01/02/03 | Current, agenda and history; explicit refresh | Canonical snapshots, passive reads, one logical refresh key | Scoped operational layout; six-width tested |
| ANL-01 / COA-01 | Latest analytics/coaching and explicit generation | All scores, focus, cautions and priorities server supplied | Three-width tested; no intelligence computation |
| NTF-01 | Inbox, native details, summary and bounded read windows | Owner inbox independent of summary entitlement; canonical unread count | Six-width tested; no invented mark-read/archive |
| JRN-01/02/03 | Case list/detail and draft creation | Canonical records; explicit required-idempotency write | Six-width tested; lifecycle/analytics/influence still pending |
| SET-01/02/08 | Hub, read-only identity, security/recovery/sign-out | Canonical session; social editing still pending | Six-width tested; no unsupported security authority |
| SET-03/04 | Tracked markets and recorded motion preference | Exact account mutations; preserves notification flags | Six-width tested; no protected dashboard modification |
| SET-06/07 | Billing/intention, portal, access/usage/decisions | No return-URL grants; new-checkout selection is blocked by documented contract gap | Four-width checks added; full commercial acceptance pending |
| Other M5 routes/overlays | Pending | Must be mapped individually before implementation | No placeholder page files created |

Responsive classification: public reading/content/navigation is Essential; large editorial title proportions are Adaptive; landing pointer lens/depth and scroll choreography are Desktop enhancements, confined to the registered landing owner. Mobile layouts stack intentionally with 16px+ body/input typography and 44px+ controls. Modal movement is removed under reduced motion. No new global provider or authenticated shell is installed.
