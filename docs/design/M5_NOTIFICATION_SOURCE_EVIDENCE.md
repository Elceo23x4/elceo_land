# M5 notification settings source evidence

All evidence is from frozen backend `771487b46874afc28a21f260a2c12f92bfe8f736`; no mirror or generated file changes. `/settings/notifications` is SET-05; `/notifications` remains the inbox. Summary is the only unread-count authority.

| Source | Git blob |
|---|---|
| packages/types/src/notifications.ts | 77f38acd94dbf510c34853981d26026010270d66 |
| packages/types/src/app-api.ts | 7b2ac62ef2168d581734e1903cfac7328fc2448e |
| packages/schemas/src/app-api.schema.ts | c6d870bfb56eb1f3ddafb8b9012c89e101eb5d33 |
| apps/web/lib/server/notifications/public-verification.ts | ef38f30482d645230f0fbdf5f6bafa84eb4c65de |
| apps/web/lib/server/notifications/target-address.ts | 4563f2a842e576f59c91c738ff9e388f92285f2c |
| services/notifications/src/verification/verification-service.ts | 7346a0d68281c4912088088560294a3b7c672027 |
| services/notifications/src/management/summary-service.ts | f0e5c1b920e9c28ce000d6395aeb41b03df66618 |
| services/notifications/src/management/target-service.ts | f3eb20b904068cb74f4d3392f1e5670684a95c4d |
| apps/web/app/api/notifications/health/route.ts | b1f66e8b3c56e64620e4885d38e51cd40b0e9bda |
| apps/web/app/api/notifications/subscriptions/[subscriptionId]/route.ts | 2fc2ac1284dcec51a09a507eda83a3fc69005c79 |
| apps/web/app/api/notifications/subscriptions/route.ts | a683373770e781f75eb2503be8f472314b8cf9dc |
| apps/web/app/api/notifications/targets/[targetId]/disable/route.ts | b80811e5246b7b670c0a2686949ff2b995398bc0 |
| apps/web/app/api/notifications/targets/[targetId]/enable/route.ts | 4588e2ba036415aa1569c9db9c593ff365240fb5 |
| apps/web/app/api/notifications/targets/route.ts | 2b0779c0d74510c45d9ea857e0f735bb36120a27 |
| apps/web/app/api/notifications/verification/consume/route.ts | f2ee742a3d85b6a2234ddc117150c74246b86e60 |
| apps/web/app/api/notifications/verification/issue/route.ts | 7dfd07247370adabb6d0fb3713195fce3dfd8020 |

## Refinements and limits

- Exact request-body refinements remain separate from generated OpenAPI. Target creation accepts email, in-app or an existing push subscription identifier. The UI does not register a provider SDK or invent a push identity.
- Subscription create persists channel, wildcard scope, enabled and minimum materiality. `decisionKind` and `minimumPriority` are validated but ignored; neither is offered as a working filter.
- Subscription PATCH uses `validateSubscriptionCreateRequest`, which requires `channel` despite its omission from `SubscriptionUpdateRequest`. The refinement explicitly requires the selected record's channel; the handler only applies enabled/threshold. No backend repair is implied.
- Minimum materiality is finite number/null; no invented range. Explicit clear sends null. Empty optional input omits the field.
- Verification issuance persists a hash and returns a raw proof only internally. The public mapper removes it; the reviewed route/service do not prove a delivery mechanism. The UI says challenge acknowledged, never email sent or target verified. Consume accepts user-supplied transient proof, clears the input before transport and awaits passive target readback. Missing delivery integration remains a blocker to end-to-end verification readiness.
- Owner-scoped target reads contain raw address/owner metadata. RSC display projections whitelist an email address only; raw address JSON, push IDs, private owner fields, raw receipts and provider payloads are not serialized in page content.
- Health returns only degraded/disabled target rows and critical receipts. Empty results do not certify healthy providers. No new provider capability endpoint is invented.
- Account channel/class preferences reuse the established account contract, re-reading and preserving motion. Configured preferences do not imply verification, provider health, delivery or entitlement.
- Each entity's dialogs share a synchronous lock. Each operation has one key/controller, a 30-second browser wait, unmount cleanup, no automatic retry, and full passive readback before another submission. Aborted waiting does not imply canceled server work.

## Navigation and gate evolution

Primary analytical navigation now follows the canonical six destinations, with a separate header notification dialog and inbox link. Settings follows the canonical seven destinations. The account-preference browser test's old `Motion preference` link name was replaced with exact `Preferences`, matching the authorized canonical navigation. Exact route/heading, saved-state and overflow checks remain. No security or parity assertion was removed. The existing Modal boundary handles focus and Escape; no broad client route tree was added.

Fixtures are controlled shapes only. They do not prove live delivery, provider configuration, verification transport, entitlement or production readiness.
