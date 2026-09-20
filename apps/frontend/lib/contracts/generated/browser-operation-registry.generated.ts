/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
const browserOperationKeys = [
  "DELETE /api/notifications/push/subscription",
  "GET /api/account/access-decisions",
  "GET /api/account/billing",
  "GET /api/account/billing/events",
  "GET /api/account/billing/policy",
  "GET /api/account/billing/policy/transitions",
  "GET /api/account/billing/reconciliation-runs",
  "GET /api/account/entitlements",
  "GET /api/account/profile/social-identifiers",
  "GET /api/account/state",
  "GET /api/account/usage",
  "GET /api/analytics/latest",
  "GET /api/analytics/top-behaviors",
  "GET /api/analytics/top-setups",
  "GET /api/billing/intention",
  "GET /api/billing/subscription",
  "GET /api/coaching/action-plan",
  "GET /api/coaching/focus",
  "GET /api/coaching/latest",
  "GET /api/dashboard/{asset}",
  "GET /api/journal/analytics",
  "GET /api/journal/cases",
  "GET /api/journal/cases/{caseId}",
  "GET /api/journal/cases/{caseId}/replay",
  "GET /api/journal/entries",
  "GET /api/journal/influence/latest",
  "GET /api/notifications/alerts",
  "GET /api/notifications/health",
  "GET /api/notifications/inbox",
  "GET /api/notifications/subscriptions",
  "GET /api/notifications/summary",
  "GET /api/notifications/targets",
  "GET /api/portfolio/actions",
  "GET /api/portfolio/actions/{actionId}",
  "GET /api/portfolio/attention",
  "GET /api/portfolio/positions",
  "GET /api/portfolio/positions/{positionId}",
  "GET /api/portfolio/replay",
  "GET /api/portfolio/snapshot/current",
  "GET /api/portfolio/watchlist",
  "GET /api/portfolio/watchlist/{entryId}",
  "GET /api/refresh/freshness",
  "GET /api/refresh/history",
  "GET /api/refresh/latest",
  "GET /api/workspace/agenda",
  "GET /api/workspace/current",
  "GET /api/workspace/freshness",
  "GET /api/workspace/history",
  "PATCH /api/account/preferences",
  "PATCH /api/account/profile/social-identifiers",
  "PATCH /api/account/watchlist",
  "PATCH /api/notifications/alerts",
  "PATCH /api/notifications/subscriptions/{subscriptionId}",
  "PATCH /api/portfolio/actions/{actionId}",
  "PATCH /api/portfolio/positions/{positionId}",
  "PATCH /api/portfolio/watchlist/{entryId}",
  "POST /api/account/access-check",
  "POST /api/account/onboarding",
  "POST /api/analytics/generate",
  "POST /api/billing/checkout",
  "POST /api/billing/portal",
  "POST /api/coaching/generate",
  "POST /api/journal/cases",
  "POST /api/journal/cases/{caseId}/adjust",
  "POST /api/journal/cases/{caseId}/cancel",
  "POST /api/journal/cases/{caseId}/close",
  "POST /api/journal/cases/{caseId}/execute",
  "POST /api/journal/cases/{caseId}/partial-close",
  "POST /api/journal/cases/{caseId}/plan",
  "POST /api/journal/cases/{caseId}/review",
  "POST /api/journal/entries",
  "POST /api/journal/influence/generate",
  "POST /api/notifications/subscriptions",
  "POST /api/notifications/targets",
  "POST /api/notifications/targets/{targetId}/disable",
  "POST /api/notifications/targets/{targetId}/enable",
  "POST /api/notifications/verification/consume",
  "POST /api/notifications/verification/issue",
  "POST /api/portfolio/actions",
  "POST /api/portfolio/actions/{actionId}/complete",
  "POST /api/portfolio/actions/{actionId}/dismiss",
  "POST /api/portfolio/positions",
  "POST /api/portfolio/positions/{positionId}/cancel",
  "POST /api/portfolio/positions/{positionId}/close",
  "POST /api/portfolio/positions/{positionId}/open",
  "POST /api/portfolio/positions/{positionId}/reduce",
  "POST /api/portfolio/positions/{positionId}/thesis-health",
  "POST /api/portfolio/snapshot/generate",
  "POST /api/portfolio/watchlist",
  "POST /api/portfolio/watchlist/{entryId}/archive",
  "POST /api/portfolio/watchlist/{entryId}/status",
  "POST /api/portfolio/watchlist/{entryId}/thesis-health",
  "POST /api/refresh/run",
  "POST /api/workspace/refresh",
  "PUT /api/notifications/push/subscription"
] as const;

const idempotencyRequiredReadKeys = new Set<string>([
  "GET /api/account/profile/social-identifiers",
  "GET /api/journal/cases",
  "GET /api/journal/entries",
  "GET /api/notifications/alerts",
  "GET /api/notifications/subscriptions",
  "GET /api/notifications/targets",
  "GET /api/portfolio/actions",
  "GET /api/portfolio/actions/{actionId}",
  "GET /api/portfolio/positions",
  "GET /api/portfolio/positions/{positionId}",
  "GET /api/portfolio/watchlist",
  "GET /api/portfolio/watchlist/{entryId}"
]);

const responseContractOverrides: Partial<Record<(typeof browserOperationKeys)[number], string>> = {
  "GET /api/billing/intention": "handler_specific_json",
  "GET /api/billing/subscription": "handler_specific_json",
  "GET /api/dashboard/{asset}": "DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1",
  "GET /api/journal/analytics": "handler_specific_json",
  "GET /api/journal/entries": "handler_specific_json",
  "POST /api/billing/checkout": "handler_specific_json",
  "POST /api/billing/portal": "handler_specific_json",
  "POST /api/journal/entries": "handler_specific_json"
};

type BrowserOperationKey = (typeof browserOperationKeys)[number];

type BrowserRuntimePolicy = Readonly<{
  key: BrowserOperationKey;
  method: string;
  routePath: string;
  responseContract: string;
  idempotency: 'required' | 'not_required';
  allowedHeaders: readonly string[];
}>;

const createRuntimePolicy = (key: BrowserOperationKey): BrowserRuntimePolicy => {
  const separator = key.indexOf(' ');
  const method = key.slice(0, separator);
  const routePath = key.slice(separator + 1);
  const idempotency = method === 'GET' && !idempotencyRequiredReadKeys.has(key)
    ? 'not_required'
    : 'required';
  return {
    key,
    method,
    routePath,
    responseContract: responseContractOverrides[key] ?? 'standard_api_envelope',
    idempotency,
    allowedHeaders: idempotency === 'required' ? ['Idempotency-Key'] : [],
  };
};

export const browserOperationRegistry = Object.fromEntries(
  browserOperationKeys.map((key) => [key, createRuntimePolicy(key)]),
) as Readonly<Record<BrowserOperationKey, BrowserRuntimePolicy>>;
