import { defineConfig } from '@playwright/test';
export default defineConfig({
 testDir: './tests',
 use: { baseURL: 'http://127.0.0.1:3101' },
 webServer: {
  command: 'npm run start -- --hostname 127.0.0.1 --port 3101',
  url: 'http://127.0.0.1:3101/m1-proof',
  reuseExistingServer: false,
  env: { ...process.env, ELCEO_BACKEND_ORIGIN: '', ELCEO_PUBLIC_APP_ORIGIN: '' },
 },
 projects: [ { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } }, { name: 'mobile-reduced-motion', use: { viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' } } ],
});
