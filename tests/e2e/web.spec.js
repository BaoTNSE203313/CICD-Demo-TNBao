const { test, expect } = require('@playwright/test');

test('homepage has correct title and interaction', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Kiểm tra tiêu đề
  await expect(page).toHaveTitle(/Mock App/);
  
  // Tương tác click button
  await page.click('id=clickMeBtn');
  
  // Kiểm tra text hiện ra sau khi click
  const message = page.locator('id=message');
  await expect(message).toHaveText('Button was clicked!');
});
