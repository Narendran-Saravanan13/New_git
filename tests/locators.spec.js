import { test, expect } from '@playwright/test';
//const {test,expect}=require('@playwright/test');

test("Locators", async ({ page }) => {
  await page.goto('https://amazon.in/');
  
  await page.locator('#nav-link-accountList-nav-line-1').click();

//await page.click('text=Sign in');
  await page.waitForTimeout(3000)
})