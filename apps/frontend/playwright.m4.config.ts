import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/m4',
  workers: 1,
  fullyParallel: false,
  timeout: 45_000,
  use: {
    reducedMotion: 'reduce',
    colorScheme: 'dark',
  },
  webServer: [
    {
      command: 'node ../../scripts/m4-mock-auth-server.mjs',
      url: 'http://127.0.0.1:4010/health',
      reuseExistingServer: false,
    },
    {
      command: 'npm run start -- --hostname 127.0.0.1 --port 3102',
      url: 'http://127.0.0.1:3102/m1-proof',
      reuseExistingServer: false,
      env: {
        ...process.env,
        ELCEO_BACKEND_ORIGIN: 'http://127.0.0.1:4010',
        ELCEO_PUBLIC_APP_ORIGIN: 'http://127.0.0.1:3102',
      },
    },
    {
      command: 'npm --prefix ../.. run preview -- --host 127.0.0.1 --port 4173',
      url: 'http://127.0.0.1:4173/dashboard',
      reuseExistingServer: false,
    },
  ],
});
