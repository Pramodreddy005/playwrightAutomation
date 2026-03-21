import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 360000,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  preserveOutput: 'never',
  use: {
    trace: 'on-first-retry',
    headless: false,
    actionTimeout: 10000,  // timeout for each action like click, fill etc
    navigationTimeout: 30000,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});