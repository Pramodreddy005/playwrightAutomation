// base.ts
import { test as base } from '@playwright/test';

export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === 'failed') {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
    });
    console.log("File Saved");
  }
});

export { expect } from '@playwright/test';