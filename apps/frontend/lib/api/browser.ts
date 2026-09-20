import { browserOperationRegistry } from '../contracts/generated/browser-operation-registry.generated';
import type { BrowserUserOperationKey } from '../contracts/policy';
import {
  createPolicyClient,
  type PolicyClient,
  type TransportConfiguration,
} from './transport';

export const M2_BROWSER_API_CLIENT_BUNDLE_PROOF = 'elceo-m2-browser-api-client-v1' as const;

/**
 * Browser-safe typed client. M2 deliberately injects transport instead of
 * assuming a backend hostname, cookie/session mechanism, or CSRF policy.
 */
export const createBrowserApiClient = (
  configuration: TransportConfiguration,
): PolicyClient<BrowserUserOperationKey> => createPolicyClient(browserOperationRegistry, configuration);
