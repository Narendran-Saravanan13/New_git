 import { test, expect } from '@playwright/test';
// //const {test,expect}=require('@playwright/test');

// test("Locators", async ({ page }) => {
//   await page.goto('https://in.linkedin.com/');

//   //await page.locator("//a[@class='nav__button-secondary btn-secondary-emphasis btn-md']").click();
//   //await page.locator("//a[normalize-space(text())='Sign in']").click();
//   await page.locator("//a[text()='Join now']").click();
// await page.locator('//input[@aria-describedby="error-for-username"]').fill('user1234');
// await page.locator('//input[@autocomplete="current-password"]').fill('na123re34n');
// await page.locator('//button[@data-litms-control-urn="login-submit"]').click();
// //await page.click('text=Sign in');
//   await page.waitForTimeout(3000);
// })



test("Locators", async ({ page }) => {
  await page.goto('https://www.kalyanjewellers.net/');

  //await page.locator("//a[@class='nav__button-secondary btn-secondary-emphasis btn-md']").click();
  //await page.locator("//a[normalize-space(text())='Sign in']").click();
  await page.getByText('Our Brands').click();
await page.locator('//img[@title="precious stone collection"]').click();
await page.locator('//a[@class="btn btn-lg btn-outline-dark mt-3"]').click();
//await page.locator('//button[@data-litms-control-urn="login-submit"]').click();
//await page.click('text=Sign in');
  
await page.waitForTimeout(10000);
})



































