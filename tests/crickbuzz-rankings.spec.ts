import { test, expect } from '@playwright/test';

test.describe('Crickbuzz Rankings Automation', () => {
  test('Navigate to Google, search for Crickbuzz, and get rankings', async ({ page }) => {
    // Step 1: Navigate to Google and search for Crickbuzz
    console.log('Step 1: Navigating to Google.com and searching for Crickbuzz...');
    await page.goto('https://www.google.com');
    
    // Fill the search box and search
    const searchBox = page.getByRole('combobox', { name: 'Search' });
    await searchBox.fill('crickbuzz');
    await page.keyboard.press('Enter');
    
    // Wait for search results page to load
    await page.waitForURL('**/search?q=*');
    console.log('✓ Google search completed');
    
    // Step 2: Navigate to Cricbuzz website directly
    console.log('Step 2: Navigating to Cricbuzz.com...');
    await page.goto('https://www.cricbuzz.com');
    await page.waitForLoadState('networkidle');
    console.log('✓ Cricbuzz homepage loaded');
    
    // Step 3: Navigate to Rankings page
    console.log('Step 3: Navigating to Rankings page...');
    const rankingsLink = page.getByRole('link', { name: /rankings/i }).first();
    await rankingsLink.click();
    
    // Wait for rankings page to load
    await page.waitForURL('**/cricket-stats/icc-rankings/**');
    await page.waitForTimeout(1500);
    console.log('✓ Rankings page loaded');
    
    // Step 4: Verify TEST Rankings (Rank 1) and collect data
    console.log('Step 4: Getting TEST Rankings - Rank 1 Player...');
    const testRank1 = await page.evaluate(() => {
      const rows = document.querySelectorAll('[role="row"]');
      let testData = null;
      for (const row of rows) {
        const cells = row.querySelectorAll('[role="cell"]');
        if (cells[0]?.textContent?.trim() === '1') {
          const playerElement = row.querySelector('a');
          const playerName = playerElement?.textContent?.trim() || '';
          const points = cells[2]?.textContent?.trim() || '';
          testData = { player: playerName, points };
          break;
        }
      }
      return testData;
    });
    
    console.log('TEST Rank 1 Player:', testRank1);
    expect(testRank1?.player).toContain('Joe Root');
    expect(testRank1?.points).toBe('880');
    
    // Step 5: Switch to ODI and get Rank 1 data
    console.log('Step 5: Getting ODI Rankings - Rank 1 Player...');
    await page.getByText('ODI', { exact: true }).click();
    await page.waitForTimeout(1000);
    
    const odiRank1 = await page.evaluate(() => {
      const rows = document.querySelectorAll('[role="row"]');
      let odiData = null;
      for (const row of rows) {
        const cells = row.querySelectorAll('[role="cell"]');
        if (cells[0]?.textContent?.trim() === '1') {
          const playerElement = row.querySelector('a');
          const playerName = playerElement?.textContent?.trim() || '';
          const points = cells[2]?.textContent?.trim() || '';
          odiData = { player: playerName, points };
          break;
        }
      }
      return odiData;
    });
    
    console.log('ODI Rank 1 Player:', odiRank1);
    expect(odiRank1?.player).toContain('Daryl Mitchell');
    expect(odiRank1?.points).toBe('840');
    
    // Step 6: Switch to T20 and get Rank 1 data
    console.log('Step 6: Getting T20 Rankings - Rank 1 Player...');
    await page.getByText('T20', { exact: true }).click();
    await page.waitForTimeout(1000);
    
    const t20Rank1 = await page.evaluate(() => {
      const rows = document.querySelectorAll('[role="row"]');
      let t20Data = null;
      for (const row of rows) {
        const cells = row.querySelectorAll('[role="cell"]');
        if (cells[0]?.textContent?.trim() === '1') {
          const playerElement = row.querySelector('a');
          const playerName = playerElement?.textContent?.trim() || '';
          const points = cells[2]?.textContent?.trim() || '';
          t20Data = { player: playerName, points };
          break;
        }
      }
      return t20Data;
    });
    
    console.log('T20 Rank 1 Player:', t20Rank1);
    expect(t20Rank1?.player).toContain('Abhishek Sharma');
    expect(t20Rank1?.points).toBe('875');
    
    // Step 7: Summary
    console.log('\n========== RANKINGS SUMMARY ==========');
    console.log(`TEST Rank 1: ${testRank1?.player} - ${testRank1?.points} points`);
    console.log(`ODI Rank 1: ${odiRank1?.player} - ${odiRank1?.points} points`);
    console.log(`T20 Rank 1: ${t20Rank1?.player} - ${t20Rank1?.points} points`);
    console.log('=====================================\n');
  });
});
