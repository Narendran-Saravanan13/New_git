import{test, expect}from "@playwright/test";
test("playwright brush up", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator('//input[@placeholder="Enter Name"]').fill("Narendran S");
  await page.locator('//input[@placeholder="Enter EMail"]').fill("snarendran1313@gmail.com");
  await page.locator('//input[@placeholder="Enter Phone"]').fill("9500518671");
  await page.locator('//textarea[@id="textarea"]').fill("No:2/9 MG st, Kovilpatti, Tamilnadu, India");
  await page.locator('//label[text()="Male"]').click();
  const checkboxes = await page.$$("//div[@class='form-check form-check-inline']//input[@type='checkbox']");
    for (const checkbox of checkboxes) {
        const isChecked = await checkbox.isChecked();
        if (!isChecked) {
            await checkbox.check();
        }
    }
    await page.locator("#country").click();
    await page.locator("#country").selectOption("India");
    await page.locator('#colors').selectOption('Red');
    await page.getByText("Sorted List:").selectOption('Dog');


  await page.waitForTimeout(6000);






})