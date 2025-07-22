import{test,expect}from'@playwright/test';
test('radio button',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
 page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
//page.locator('#female').check();
await expect(page.locator('#female')).toBeVisible();
//await expect(page.locator('#male')).toBeFalsy();
    //await expect(page.locator('#female')).toBeFalsy();
await page.waitForTimeout(4000);


});