import { test, expect } from '@playwright/test'
test("screenshot", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  await page.screenshot({ path:"test/screenshot/"+ Date.now()+ 'screenshot.png', fullPage: true })
 await page.waitForEvent('load')
})