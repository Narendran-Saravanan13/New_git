import{test,expect}from '@playwright/test';
test('mouse actions', async ({page}) => {
    await page.goto('https://amazon.in/');
    await page.locator('#nav-link-accountList').hover();
    await page.locator('#nav-flyout-ya-newCust > a').click();
    await page.fill('//input[@class="a-input-text"]', 'snarendran93@gmail.com');
     await page.locator('#continue').click();
    await page.fill('#ap_password', 'naren@1993');
    await page.locator('//span[@id="auth-signin-button"]').click();
    await expect(page.locator('#nav-link-accountList')).toHaveText('Hello, Narendran Account & Lists');
    await page.mouse.wheel(0, 1000); 
    await page.mouse.wheel(0, -1000);
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(100, 100);
    await page.mouse.up();
    await page.mouse.click(200, 200);
    await page.mouse.dblclick(300, 300);
    await page.mouse.selectText(600, 600, 700, 700);
    await page.mouse.move(800, 800, {steps: 10});



})

