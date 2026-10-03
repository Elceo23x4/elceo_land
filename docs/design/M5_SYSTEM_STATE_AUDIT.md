# M5 canonical overlay and system-state audit

Implementation/source audit complete; final exact-head empirical acceptance pending. Source coverage is not a claim that every state screenshot has been inspected.

| Surface | Implementation and evidence |
|---|---|
| AUTH-06 | Login/Auth.js errors: account-entry.spec.ts and M3. |
| AUTH-07 | Secure CSRF sign-out disclosure: settings.spec.ts. |
| WKS-04 | Server workspace freshness/timestamps: workspace.spec.ts. |
| WKS-05 | Explicit workspace refresh: generation-lifecycle.spec.ts. |
| OVL-01 | AccountAffordance; canonical identity and authoritative account destinations: system-states.spec.ts. |
| OVL-02 | NotificationAffordance; server unread count, no mark-read on open: delivery-settings.spec.ts. |
| OVL-03 | M4 asset selector preserved with fixtures; live binding explicitly outside M5. |
| OVL-04 | M4 evidence presentation preserved; M4 parity suite, no live binding. |
| OVL-05 | M4 confidence context preserved; M4 parity suite, no live binding. |
| OVL-06 | GlobalFreshness and explicit GlobalRefresh: system-states.spec.ts. |
| OVL-07 | Denied-state access link and authoritative access/usage view: commercial.spec.ts. Checkout catalogue remains blocked. |
| OVL-08 | Seven lifecycle dialogs: journal-analysis.spec.ts. |
| OVL-09 | Selected portfolio entity replay/history: portfolio.spec.ts. |
| OVL-10 | Targets/subscriptions: delivery-settings.spec.ts. |
| OVL-11 | Proof issue/consume and clearing: delivery-settings.spec.ts. Delivery is not inferred. |
| OVL-12 | Canonical billing/intention and reconciliation states: commercial.spec.ts. Browser return cannot unlock access. |
| OVL-13 | Server-mediated step-up challenge/verify/explicit change: admin.spec.ts and mediation runtime. |
| OVL-14 | Canonical session guards and 401 feedback: M3, account-entry/system-states/Admin tests. |
| OVL-15 | Uncertain/conflict locks and authoritative readback: journal, portfolio, delivery, Admin and global-refresh tests. |
| OVL-16 | Domain unavailable/readiness/invalid states: workspace, notifications, Admin tests. |
| SYS-01 | Authored app/not-found.tsx: system-states.spec.ts. |
| SYS-02 | Root app/error.tsx and protected dashboard boundary; no raw exceptions or automatic write replay. |
| SYS-03 | Domain loading.tsx for workspace/dashboard/journal/portfolio/analytics/coaching/settings/notifications/Admin; Next build. |
| SYS-04 | Session authority and operation-specific 401 feedback: M3 and system-states/Admin tests. |
| SYS-05 | Role denial differs from permission/entitlement denial: Admin runtime and commercial tests. |
| SYS-06 | Rate-limit guidance with no repeat: system-states and Admin runtime. |
| SYS-07 | 503/dependency states distinct from empty/malformed: workspace/delivery/Admin/system tests. |
| SYS-08 | Timeout/network/close/unmount uncertainty and cleanup: generation-lifecycle, delivery, global-refresh, Admin runtime. |
| SYS-09 | Separate domain empty states: workspace, journal, portfolio, notification tests. |
| SYS-10 | Server freshness/dependency/caution labels and timestamps: workspace/review/global freshness/Admin projections. |

## Refinement

Accepted ordinary-user domain structures remain intact. Admin uses grouped control navigation, metric hierarchy, scalar-record tables with mobile labels, audit emphasis and cognition-first detail. Dialogs retain native inertness, Escape, visible focus and restoration; disabled-fieldset controls are excluded from the focus loop. Loading states do not synthesize data. No fake charts or browser-owned business conclusions.

## Limits

M4 dashboard overlays remain fixture-backed. Legal/onboarding, support, checkout, account/security, notification delivery, portfolio attention and case-entry association remain bounded by the frozen gaps. Admin adds the price-target mismatch and pending verification providers. These are external contract/content gaps, not permission to invent completion. Run the full integrated matrix and inspect responsive screenshots/resource evidence before acceptance.
