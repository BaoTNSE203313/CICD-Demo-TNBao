const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('Visual snapshot of homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Chụp ảnh giao diện và gửi lên Percy để so sánh Visual Regression
  await percySnapshot(page, 'Homepage UI Snapshot');
});
