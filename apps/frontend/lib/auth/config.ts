import 'server-only';

import { normalizeHttpOrigin, type AuthTopologyConfig } from './core';

const runtimeEnv = (): Record<string, string | undefined> =>
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};

export function getAuthTopologyConfig(
  env: Record<string, string | undefined> = runtimeEnv(),
): AuthTopologyConfig {
  const backend = env.ELCEO_BACKEND_ORIGIN;
  const publicApp = env.ELCEO_PUBLIC_APP_ORIGIN;
  if (!backend) throw new Error('ELCEO_BACKEND_ORIGIN is required for the canonical auth/BFF topology.');
  if (!publicApp) throw new Error('ELCEO_PUBLIC_APP_ORIGIN is required for the canonical auth/BFF topology.');
  return {
    backendOrigin: normalizeHttpOrigin(backend, 'ELCEO_BACKEND_ORIGIN'),
    publicOrigin: normalizeHttpOrigin(publicApp, 'ELCEO_PUBLIC_APP_ORIGIN'),
  };
}
