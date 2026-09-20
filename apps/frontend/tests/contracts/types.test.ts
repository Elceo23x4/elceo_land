import accountBilling from '../../../../contracts/backend/mocks/account-billing.json';
import accountEntitlements from '../../../../contracts/backend/mocks/account-entitlements.json';
import adminSystemSummary from '../../../../contracts/backend/mocks/admin-system-summary.json';
import analyticsLatest from '../../../../contracts/backend/mocks/analytics-latest.json';
import authSession from '../../../../contracts/backend/mocks/auth-session.json';
import billingCheckout from '../../../../contracts/backend/mocks/billing-checkout-processing.json';
import coachingLatest from '../../../../contracts/backend/mocks/coaching-latest.json';
import dashboardFocus from '../../../../contracts/backend/mocks/dashboard-focus-plan.json';
import journalCases from '../../../../contracts/backend/mocks/journal-cases-list.json';
import notificationsSummary from '../../../../contracts/backend/mocks/notifications-summary.json';
import portfolioWatchlist from '../../../../contracts/backend/mocks/portfolio-watchlist.json';
import superAdminControl from '../../../../contracts/backend/mocks/super-admin-control-snapshot.json';
import workspaceCurrent from '../../../../contracts/backend/mocks/workspace-current.json';
import { createBrowserApiClient } from '../../lib/api/browser';
import type { OpenApiOperationTypes } from '../../lib/contracts/generated/openapi-operation-map.generated';

const assertMock = <K extends keyof OpenApiOperationTypes>(
  _operation: K,
  _mock: OpenApiOperationTypes[K]['response'],
) => undefined;

function successLiteral<T extends { ok: boolean }>(value: T): T & { ok: true } {
  if (value.ok !== true) throw new TypeError('Canonical standard-envelope mock must have ok:true.');
  return value as T & { ok: true };
}

assertMock('GET /api/account/billing', successLiteral(accountBilling));
assertMock('GET /api/account/entitlements', successLiteral(accountEntitlements));
assertMock('GET /api/admin/system-summary', successLiteral(adminSystemSummary));
assertMock('GET /api/analytics/latest', successLiteral(analyticsLatest));
assertMock('GET /api/auth/{...nextauth}', authSession);
assertMock('POST /api/billing/checkout', billingCheckout);
assertMock('GET /api/coaching/latest', successLiteral(coachingLatest));
assertMock('GET /api/dashboard/{asset}', dashboardFocus);
assertMock('GET /api/journal/cases', successLiteral(journalCases));
assertMock('GET /api/notifications/summary', successLiteral(notificationsSummary));
assertMock('GET /api/portfolio/watchlist', successLiteral(portfolioWatchlist));
assertMock('GET /api/admin/commercial/users/{userId}/control-snapshot', successLiteral(superAdminControl));
assertMock('GET /api/workspace/current', successLiteral(workspaceCurrent));

const browser = createBrowserApiClient({
  baseOrigin: 'https://api.example.invalid',
  fetchImplementation: fetch,
});

browser.mutate('POST /api/account/access-check', { idempotency: { key: 'logical-action-key' } });

// @ts-expect-error Required-idempotency operations cannot omit logical-action context.
browser.mutate('POST /api/account/access-check', {});

// @ts-expect-error Admin operations are absent from the browser-safe client key union.
browser.read('GET /api/admin/system-summary', {});

// @ts-expect-error Provider webhooks are not frontend operations.
browser.mutate('POST /api/billing/provider-events/{provider}', { path: { provider: 'stripe' } });
