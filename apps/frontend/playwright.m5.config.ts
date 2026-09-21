import { defineConfig } from '@playwright/test';
import parity from './playwright.m4.config';

// Same controlled backend and production Vite/Next servers as the inherited
// parity harness. No live credentials or product fixtures are added to pages.
export default defineConfig({
  ...parity,
  testDir: './tests/m5',
  timeout: 90_000,
});
