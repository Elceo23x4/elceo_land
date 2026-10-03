# M5 Admin and closure source evidence

Backend authority: `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`. Mirrored/generated contracts remain unchanged.

## Server boundary

The reviewed `/api/admin-command` mediator accepts only an explicit command vocabulary, JSON and an idempotency key. It requires same origin, rejects injected authorization/internal-token headers, enforces the pinned 64 KiB request-body limit and never retries. The server resolves the canonical session/role, checks backend permission using `/api/account/access-check`, and attaches the internal credential only to exact allowlisted operations. Credential echoes are withheld. No arbitrary URL, header, actor identity or generic proxy is accepted.

Display projections exclude provider payload/configuration, raw audit metadata and proof. Selected subject/market mismatches are rejected. Browser waiting ends after 30 seconds or dismissal/unmount, without claiming server cancellation. A shared operation lock requires authoritative readback before another logical change.

## Supported operations

Nine billing record operations (trial, activate, renew, change plan, past due, cancel at period end, expire, pause, resume), three entitlement operations (plan/state/override), provider mapping, fixture-only ingestion dry run/replay, and three commercial operations (gift, retract, restrict): 18 domain operations plus two step-up commands. The commercial three require backend challenge, backend verification and a separate explicit submission. Challenge target/provider/route scope and verification receipt are checked. Backend still decides freshness, replay, single use and authorization. Controlled success fixtures are not live-provider acceptance.

Price updates are unavailable: challenge creation requires a nonempty targetUserId but updateFocusPlanPrice consumes expectedTargetUserId:null. No bypass is supplied. Current-price read and user search/list are absent; known-ID lookup remains available. Metrics remain explicitly fixture_only. Production step-up providers remain provider_pending.

## Read and overlay semantics

All 23 routes map to frozen operations in `features/admin/reads.ts`; `schemas.ts` contains consumed whitelists. Null, zero, malformed, unavailable and denied remain distinct. Scalar collections use responsive tables; evidence narrative/confidence precede metadata. No browser cognition is computed. Evidence/SEO GETs assemble backend read-time projections from stored evidence rather than promising stored snapshots; no provider ingestion/publication is activated.

Account dialog uses canonical session identity and links to authoritative account views. Global freshness uses passive `/api/refresh/freshness`, `/latest`, `/history` reads; explicit `/run` consumes the pinned WorkspaceRefreshRequest validator with triggerKind manual. It renders only matching owner records, never generates on open, and does not automatically retry. Dashboard remains the M4 fixture implementation.

## Exact source blobs

| Frozen source | Git blob |
|---|---|
| `apps/web/app/api/account/access-check/route.ts` | `aff250bce226eef2e84ccc9a8053a051d1fd4f68` |
| `apps/web/app/api/admin/audit/route.ts` | `74612b588560689441ced2d390f8641ae2ed48ec` |
| `apps/web/app/api/admin/billing/activate/route.ts` | `c23f471bebb03e3f1b955b7b9f4cbe5c02b8be59` |
| `apps/web/app/api/admin/billing/cancel-at-period-end/route.ts` | `a27d79135b1042ecbfed8237fef90ccdee2dd340` |
| `apps/web/app/api/admin/billing/change-plan/route.ts` | `94c2cbb207ec849adfee0927e27ae59c25e35555` |
| `apps/web/app/api/admin/billing/expire/route.ts` | `696c2180b4ad0045fefda89e5acfe74c64ffa4b6` |
| `apps/web/app/api/admin/billing/operations/failures/route.ts` | `28a1ce62d8a54a2037d936b1e8d74e7c27ac51b7` |
| `apps/web/app/api/admin/billing/operations/retry-candidates/route.ts` | `8f07e3d98137cd8e9d51fcd13c2892c7529481f6` |
| `apps/web/app/api/admin/billing/operations/subject/route.ts` | `049de9a2027b2dde11b05a386bd8ff3521427d3a` |
| `apps/web/app/api/admin/billing/operations/summary/route.ts` | `7abb9ea7151bbbfbd15400452a7cd8d1d064bab2` |
| `apps/web/app/api/admin/billing/orchestration/latest/route.ts` | `682d7489aedc96444ef19a9b565fc02d6743609d` |
| `apps/web/app/api/admin/billing/orchestration/runs/route.ts` | `d1150861ae7e0bf4f95010c7f3cf5833ff72e9e8` |
| `apps/web/app/api/admin/billing/orchestration/subject/route.ts` | `66374daa969414bbe1182ef9c41d649596b9de6a` |
| `apps/web/app/api/admin/billing/past-due/route.ts` | `66c757c73d419f600a9011b5e9cfe7e6bc23e1c5` |
| `apps/web/app/api/admin/billing/pause/route.ts` | `d16883ed94fcce1a37432e41f5d162a5e39f816e` |
| `apps/web/app/api/admin/billing/policy/route.ts` | `c046dbac4650e37ae25b17130579ec2b5febb245` |
| `apps/web/app/api/admin/billing/policy/transitions/route.ts` | `14e59026a3fac68396b74c4fd4e79b89682d5f6c` |
| `apps/web/app/api/admin/billing/provider-events/route.ts` | `332a05606c8c873fd3524a4bf3de3ac70ba33be1` |
| `apps/web/app/api/admin/billing/provider-plan-mapping/route.ts` | `ff109c99a911229ee1c5527f5c00c4c34b9417a1` |
| `apps/web/app/api/admin/billing/provider-plan-mappings/route.ts` | `61b14cff4c791d2f8f9eee1794f86063028e8923` |
| `apps/web/app/api/admin/billing/renew/route.ts` | `256b82809d15f8ebfd4706585e161b28dea6c65c` |
| `apps/web/app/api/admin/billing/resume/route.ts` | `895701af8f2f2a8a828406dc297b7aa2a1ec2692` |
| `apps/web/app/api/admin/billing/trial/route.ts` | `d02c7824f5a37dcfd6e3c327a14651cd7d05f67c` |
| `apps/web/app/api/admin/commercial/metrics/route.ts` | `7ec23bc973cc9acb752a1a133dd54e58ee7a1118` |
| `apps/web/app/api/admin/commercial/prices/route.ts` | `dd9dd9abd2947f38eaf63aaca888ec3f1b6e1829` |
| `apps/web/app/api/admin/commercial/users/[userId]/control-snapshot/route.ts` | `c8dc160f9f13c556c7f0b395ad27ca1ca95dff20` |
| `apps/web/app/api/admin/commercial/users/[userId]/gift-focus-plan/route.ts` | `1849a7d5ebb2cd2fad3c7dc6e18648ed8a4fa754` |
| `apps/web/app/api/admin/commercial/users/[userId]/restrict/route.ts` | `84bd5e0eb42c755a84e6e69e7a36beb3b8e20b68` |
| `apps/web/app/api/admin/commercial/users/[userId]/retract-focus-gift/route.ts` | `f68a67e76a9f81f090621459b1932025e0562418` |
| `apps/web/app/api/admin/entitlements/override/route.ts` | `12a192f0af62e72d8bcb305ca583f89128f920d1` |
| `apps/web/app/api/admin/entitlements/plan/route.ts` | `de608746a91ff09c47a33a26fee177fc7d6955a3` |
| `apps/web/app/api/admin/entitlements/state/route.ts` | `a6525dd650bfde1b187a5e60210765a86fb03f88` |
| `apps/web/app/api/admin/freshness/route.ts` | `b6e0dc4600d092a9435108afa6063c623ef93b4f` |
| `apps/web/app/api/admin/market-evidence/cognition/route.ts` | `47877f679839c2eb45de0ecc63fbea6bd954854c` |
| `apps/web/app/api/admin/market-evidence/inspection/route.ts` | `f73fc4ce9e31651167f7dfa0cdcc0b8239fdcb07` |
| `apps/web/app/api/admin/market-evidence/payload-replay/route.ts` | `cd6fedfae488ebd65399449b88bf52b1cb3ccf5c` |
| `apps/web/app/api/admin/market-evidence/payloads/route.ts` | `672a80c0b6023dbb20845f98b39d25fbd999d760` |
| `apps/web/app/api/admin/market-evidence/provider-request/route.ts` | `73a1f353dd56a7b3e0d5cda2cdccf75ef44d9175` |
| `apps/web/app/api/admin/market-evidence/provider-response/route.ts` | `effcd064214e4e06946ec44cc1c9254fa0e4fe30` |
| `apps/web/app/api/admin/market-evidence/quality/route.ts` | `780621d510fc3cc8f22810fa534df91d23a43001` |
| `apps/web/app/api/admin/market-evidence/reasoning-input/route.ts` | `79972d88e487763d7fd00b4e98d0897749cdf073` |
| `apps/web/app/api/admin/market-evidence/scheduled-ingestion/dry-run/route.ts` | `e18329ba3f10494c9a82848fcb980cbf3da36aee` |
| `apps/web/app/api/admin/market-evidence/scheduled-ingestion/inspection/route.ts` | `7c952dd1b9fcb256395d7bccbc52e6b15a74b8ab` |
| `apps/web/app/api/admin/market-evidence/scheduled-ingestion/policies/route.ts` | `37b17a4453882970a619c2a13decc47340dcbfc9` |
| `apps/web/app/api/admin/market-evidence/scheduled-ingestion/replay/route.ts` | `c89ede3a1c671536c11d06c6c22d6d50a834a568` |
| `apps/web/app/api/admin/market-evidence/scheduled-ingestion/runs/route.ts` | `f2e92c5eb487ad306f62c0ca9d8386fa0f979e71` |
| `apps/web/app/api/admin/market-evidence/weighted/route.ts` | `e86cb82b79146a6c19c3169894e57bb3696a4a83` |
| `apps/web/app/api/admin/ops/route.ts` | `093309a21783cb8beffd2d30fe7d619420468779` |
| `apps/web/app/api/admin/providers/route.ts` | `5550c17b2477a94b1f16ad266f23731647a6e123` |
| `apps/web/app/api/admin/security/step-up/challenge/route.ts` | `16972686cdf515b4e7ba8df7c64a2ba1bd395644` |
| `apps/web/app/api/admin/security/step-up/readiness/route.ts` | `8d40eb808d2050380fb1520bb5deedeba16057a5` |
| `apps/web/app/api/admin/security/step-up/verify/route.ts` | `4676fedf5f90490c906c3326e07602c2315d83bb` |
| `apps/web/app/api/admin/seo/feed/route.ts` | `60481fce2db7d44d634df224452fde1f890d15bc` |
| `apps/web/app/api/admin/seo/sitemap/route.ts` | `f4cf624b99afd6234d6c68955d955b96ce0f3e14` |
| `apps/web/app/api/admin/system-summary/route.ts` | `5ab13197f8cce58e310972b9120597198527f5bc` |
| `apps/web/app/api/refresh/freshness/route.ts` | `c0653ded1d1ffa6dac543dd032ed967d345dce49` |
| `apps/web/app/api/refresh/history/route.ts` | `0132d60b9950fd8446eebe954befbb886a6128d9` |
| `apps/web/app/api/refresh/latest/route.ts` | `e0c9d4b6a3edcacfb68293433ca045c6b1eaaaea` |
| `apps/web/app/api/refresh/run/route.ts` | `e9bdcba66f6b8db83f2ace1d3557c60338c0d473` |
| `apps/web/lib/server/access/feature-access.ts` | `58fffd65520470a0fde3a724317fc80d45a1137c` |
| `packages/types/src/admin-control-plane.ts` | `5c0c393ad337b88ed194d6f688db7f446b4bae8b` |
| `packages/types/src/app-api.ts` | `7b2ac62ef2168d581734e1903cfac7328fc2448e` |
| `packages/types/src/billing-admin.ts` | `a66553af1ce64f705fd9259db1423062f666df63` |
| `packages/types/src/billing-lifecycle.ts` | `a4a2d9313a2f9a953fe072219a990c3064408525` |
| `packages/types/src/billing-orchestration.ts` | `c73889629c385043af83f5fcc156a24ec01ce635` |
| `packages/types/src/billing-policy.ts` | `db71c3df9947fcce160676a18ce7ef489e5c5317` |
| `packages/types/src/billing.ts` | `3ee016db0befadcca19366db6cd8a9f9b5a61e69` |
| `packages/types/src/commercial-entitlements.ts` | `24b3f918792c4c95efd7d541ca9e1598c273b2f6` |
| `packages/types/src/entitlements.ts` | `47f04280cafa972a280037eb5fa5405f149b9bce` |
| `packages/types/src/market-cognition-signals.ts` | `3419d0cfc86973005fe4cfdaf69b27d3ca1298c3` |
| `packages/types/src/market-data-providers.ts` | `dfd4141acc8f5f749b3a8211047bf9d7952ac1a2` |
| `packages/types/src/market-evidence-ingestion-schedule.ts` | `3e5135eb42478eda24be4b7b17f9fe29e500977d` |
| `packages/types/src/market-evidence-payloads.ts` | `0b6a4350e1445d673f3088c45186651331244879` |
| `packages/types/src/market-evidence-quality.ts` | `f9e42edeb4e16daaeaed87b2a6b9f5bbd8082304` |
| `packages/types/src/market-evidence-weighting.ts` | `b0cbe8cde1a83fbf7793f0c8f0d4a7877926bf1c` |
| `packages/types/src/market-evidence.ts` | `d9a70cc1bce6c5c5dd5faad5db62f17b6ae9493b` |
| `packages/types/src/refresh-runtime.ts` | `22bbb2494428c4c47aa731562c37e4d785e699bf` |
| `packages/types/src/seo-content-feed.ts` | `0ae4deb0a85885e44d6babe1fe2e9fa9c968c583` |
| `packages/types/src/super-admin-commercial-controls.ts` | `68b968e0abdc4e121a63c4a3c93a6e48d074cab0` |
| `packages/types/src/super-admin-metrics.ts` | `c429fb6ebedacf04f36848eabb725bd9ddae0016` |
| `services/application-state/src/super-admin-commercial-controls/index.ts` | `a974ce88241ac4eb0c8209f4ebe2a67a2de1a56b` |
| `services/reasoning/src/runtime/canonical-market-intelligence-boundary.ts` | `3079faeffd8ddcd06554a40e9f2bbc2afac644f6` |
