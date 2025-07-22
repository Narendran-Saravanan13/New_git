import { test, expect } from '@playwright/test';
test('checkbox', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const checkboxes = await page.$$("//div[@class='form-check form-check-inline']//input[@type='checkbox']");
    for (const checkbox of checkboxes) {
        const isChecked = await checkbox.isChecked();
        if (!isChecked) {
            await checkbox.check();
        }
    }

    await page.waitForTimeout(4000);
});