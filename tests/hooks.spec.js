import { test, expect } from '@playwright/test';

test.beforeEach('login', async ({ page}) => {
    
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.getByRole('button', { name: 'Log in' }).click();

})

// test("multiple", async () => {
//     const products = await page.$$('.hrefch');
//     await expect(products).toHaveLength(9)
// })

test("products", async ({ page }) => {
    await page.locator('(//a[@class="hrefch"])[1]').click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });
    test("cart", async ({ page }) => {
        await page.locator('//a[text()="Cart"]').click();
    });

    test("logout", async ({ page }) => {

        await page.locator('#logout2').click();
        await expect(page.locator('#nameofuser')).toHaveText('');
        await page.waitForTimeout(5000);
    })
})
