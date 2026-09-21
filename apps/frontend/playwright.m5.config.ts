import { defineConfig } from '@playwright/test';
import parity from './playwright.m4.config';

// Same controlled backend and production Vite/Next servers as the inherited
// parity harness. No live credentials or product fixtures are added to pages.
export default defineConfig({
  ...parity,
  webServer: [
    { command: 'node ../../scripts/m5-mock-auth-server.mjs', url: 'http://127.0.0.1:4010/health', reuseExistingServer: false },
    ...(Array.isArray(parity.webServer) ? parity.webServer.slice(1) : []),
  ],
  testDir: './tests/m5',
  timeout: 90_000,
});
