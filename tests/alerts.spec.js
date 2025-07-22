import { test, expect } from '@playwright/test'
test("ok button", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByText('Simple Alert').click();
    //alert handler: 'page.on' is used to handle the alert dialog
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
    })
   

})



// test("ok confirm", async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/')


//     page.on('dialog', async (dialog) => {
//         expect(dialog.type()).toContain('confirm');
//         expect(dialog.message()).toBe('Press a button!');
//         await dialog.accept();
//     })

//     await page.locator('//button[@id="confirmBtn"]').click();
//     await expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');

// })





// test("prompt", async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     page.on('dialog', async (dialog) => {
//         expect(dialog.type()).toContain('prompt');
//         expect(dialog.defaultValue()).toContain('Harry Potter');
//         expect(dialog.message()).toBe('Please enter your name:');
//         await dialog.accept("naren");
//         //await dialog.dismiss();
//     })

//     await page.getByText('Prompt Alert').click();
//     await expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello naren! How are you today?');
//     //expect(page.locator('//p[@id="demo"]')).toHaveText('User cancelled the prompt.');



// })



