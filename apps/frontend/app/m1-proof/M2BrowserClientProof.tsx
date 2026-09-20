'use client';

import {
  createBrowserApiClient,
  M2_BROWSER_API_CLIENT_BUNDLE_PROOF,
} from '../../lib/api/browser';
import {
  createSessionBoundBrowserApiClient,
  M3_SESSION_BOUND_CLIENT_PROOF,
} from '../../lib/api/authenticated-browser';

const proofClient = createBrowserApiClient({
  baseOrigin: 'https://m2-browser-proof.invalid',
  fetchImplementation: async () => {
    throw new Error('M2 browser proof transport must never execute.');
  },
});

export function M2BrowserClientProof() {
  const clientPresent = typeof proofClient.read === 'function' && typeof proofClient.mutate === 'function';
  const m3FactoryPresent = typeof createSessionBoundBrowserApiClient === 'function';

  return (
    <output
      hidden
      data-testid="m2-browser-client-proof"
      data-m2-browser-client={clientPresent ? M2_BROWSER_API_CLIENT_BUNDLE_PROOF : 'missing'}
      data-m3-session-client={m3FactoryPresent ? M3_SESSION_BOUND_CLIENT_PROOF : 'missing'}
    >
      {clientPresent ? M2_BROWSER_API_CLIENT_BUNDLE_PROOF : 'missing'}
      {m3FactoryPresent ? M3_SESSION_BOUND_CLIENT_PROOF : 'missing'}
    </output>
  );
}
