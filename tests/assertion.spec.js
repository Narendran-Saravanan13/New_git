//hard assertion incase anyone case failure they won't run other cases
// This is a hard assertion, meaning if it fails, the test will stop executing further
// and will not run any subsequent assertions or steps.
// This is useful for critical assertions where you want to ensure the state of the application
// before proceeding with further actions or checks.
// If the assertion fails, Playwright will throw an error and stop the test execution.
// This will fail the test if the assertion is not met


import { test, expect } from '@playwright/test'
test("assertion test", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')

  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
  await expect(page.locator('h1')).toHaveText('Automation Testing Practice');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('h1')).toHaveClass(/title/);
  await expect(page.locator('h1')).toHaveAttribute('class', 'title');
  //await expect(page.locator('h1')).toHaveCSS('color', 'rgb(255, 0, 0)');
  await expect(page.locator('h1')).toHaveText('Automation Testing Practice', { timeout: 5000 });
  let radio = page.locator('input#male');
  await expect(radio).toBeEnabled();
  await expect(radio).toBeChecked();
  await expect(radio).toHaveValue('true');
  await expect(radio).toHaveAttribute('type', 'radio');
  await expect(radio).toHaveClass(/radio/);
  await expect(radio).toHaveCount(1);
  await expect(radio).toBeVisible();
  await expect(radio).toHaveText('male');
});


