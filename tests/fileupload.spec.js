import { test, expect } from '@playwright/test'
test.skip("single file", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='singleFileInput']").setInputFiles('tests/files/surf.jpg');
    await page.locator('//button[text()="Upload Single File"]').click();
    await page.waitForTimeout(5000);
})

test("multiple file", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(['tests/files/surf.jpg', 'tests/files/876.P.jpg', 'tests/files/504.E.jpg']);
    await page.locator('//button[text()="Upload Multiple Files"]').click();
    await page.waitForTimeout(5000);
})