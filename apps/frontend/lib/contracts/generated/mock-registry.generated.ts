/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
export const canonicalMockRegistry = [
  {
    "file": "contracts/backend/mocks/account-billing.json",
    "key": "GET /api/account/billing",
    "family": "account",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/app-api.ts:AccountBillingSnapshotDto",
    "scenario": "active_focus_plan_subscription"
  },
  {
    "file": "contracts/backend/mocks/account-entitlements.json",
    "key": "GET /api/account/entitlements",
    "family": "account",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/entitlements.ts",
    "scenario": "premium_active_account"
  },
  {
    "file": "contracts/backend/mocks/admin-system-summary.json",
    "key": "GET /api/admin/system-summary",
    "family": "admin",
    "responseContract": "standard_api_envelope",
    "browserSafe": false,
    "sourceContract": "packages/types/src/admin-control-plane.ts:AdminSystemSummary",
    "scenario": "healthy_admin_control_plane"
  },
  {
    "file": "contracts/backend/mocks/analytics-latest.json",
    "key": "GET /api/analytics/latest",
    "family": "analytics",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/analytics.ts:AnalyticsSnapshot",
    "scenario": "latest_user_analytics"
  },
  {
    "file": "contracts/backend/mocks/auth-session.json",
    "key": "GET /api/auth/{...nextauth}",
    "family": "auth",
    "responseContract": "authjs_framework_owned",
    "browserSafe": true,
    "sourceContract": "apps/web/lib/auth/config.ts:Auth.js session callback",
    "scenario": "authenticated_session_projection"
  },
  {
    "file": "contracts/backend/mocks/billing-checkout-processing.json",
    "key": "POST /api/billing/checkout",
    "family": "billing",
    "responseContract": "handler_specific_json",
    "browserSafe": true,
    "sourceContract": "apps/web/app/api/billing/checkout/route.ts + services/application-state/src/billing/internal-payment.ts",
    "scenario": "sandbox_provider_checkout_processing"
  },
  {
    "file": "contracts/backend/mocks/coaching-latest.json",
    "key": "GET /api/coaching/latest",
    "family": "coaching",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/coaching.ts:CoachingSnapshot",
    "scenario": "latest_coaching_snapshot"
  },
  {
    "file": "contracts/backend/mocks/dashboard-focus-plan.json",
    "key": "GET /api/dashboard/{asset}",
    "family": "dashboard",
    "responseContract": "DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1",
    "browserSafe": true,
    "sourceContract": "packages/types/src/chart.ts:DashboardChartWorkspaceViewModel",
    "scenario": "focus_plan_materialized_dashboard"
  },
  {
    "file": "contracts/backend/mocks/journal-cases-list.json",
    "key": "GET /api/journal/cases",
    "family": "journal",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/journal.ts:CanonicalJournalCase",
    "scenario": "journal_case_list"
  },
  {
    "file": "contracts/backend/mocks/notifications-summary.json",
    "key": "GET /api/notifications/summary",
    "family": "notifications",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "services/notifications/src/management/summary-service.ts",
    "scenario": "healthy_notification_summary"
  },
  {
    "file": "contracts/backend/mocks/portfolio-watchlist.json",
    "key": "GET /api/portfolio/watchlist",
    "family": "portfolio",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/portfolio.ts:WatchlistEntry",
    "scenario": "active_watchlist"
  },
  {
    "file": "contracts/backend/mocks/super-admin-control-snapshot.json",
    "key": "GET /api/admin/commercial/users/{userId}/control-snapshot",
    "family": "admin",
    "responseContract": "standard_api_envelope",
    "browserSafe": false,
    "sourceContract": "packages/types/src/super-admin-commercial-controls.ts:SuperAdminCommercialControlSnapshot",
    "scenario": "durable_control_snapshot_no_active_override"
  },
  {
    "file": "contracts/backend/mocks/workspace-current.json",
    "key": "GET /api/workspace/current",
    "family": "workspace",
    "responseContract": "standard_api_envelope",
    "browserSafe": true,
    "sourceContract": "packages/types/src/workspace.ts:WorkspaceSnapshot",
    "scenario": "current_workspace_attention_needed"
  }
] as const;
