import 'server-only';

import { trustedOperationRegistry } from '../contracts/generated/trusted-operation-registry.generated';
import type { TrustedServerOperationKey } from '../contracts/policy';
import { createPolicyClient, type PolicyClient, type TransportConfiguration } from './transport';

/**
 * Typed admin/super-admin bridge operations only. M2 deliberately does not
 * implement an internal-token source, session forwarding, or an API proxy.
 */
export const createTrustedServerApiClient = (
  configuration: TransportConfiguration,
): PolicyClient<TrustedServerOperationKey> => createPolicyClient(trustedOperationRegistry, configuration);

export const mediationImplemented = false;
