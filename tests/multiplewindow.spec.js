import { test, expect } from '@playwright/test';
test("multiple window", async ({ page,context}) => {
    await page.goto("https://the-internet.herokuapp.com/windows");
    // Click on the link to open a new window

    const [newpage] = await Promise.all([
        context.waitForEvent("page"), // Wait for the new page to open
        page.locator("//a[text()='Click Here']").click() // Click the link that opens the new window
    ]);
    const text = await newpage.locator("//h3[text()='New Window']")
    await expect(text).toBeVisible();
    await page.bringToFront(); 
    await expect(page.locator("//h3[text()='Opening a new window']")).toBeVisible();
    


})