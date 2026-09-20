import { browserOperationRegistry } from '../contracts/generated/browser-operation-registry.generated';
import type { BrowserUserOperationKey } from '../contracts/policy';
import { createPolicyClient, type PolicyClient, type TransportConfiguration } from './transport';

/** Browser-safe user operations only. Auth.js remains framework-owned for M3. */
export const createBrowserApiClient = (
  configuration: TransportConfiguration,
): PolicyClient<BrowserUserOperationKey> => createPolicyClient(browserOperationRegistry, configuration);
