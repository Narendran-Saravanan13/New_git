import { test, expect } from '@playwright/test'
test.skip("frame1", async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames = await page.frames();
    console.log(allFrames.length);
    let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill('Naren');

})

test.skip("frame3", async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames = await page.frames();
    console.log(allFrames.length);
    let frame3 = await page.frameLocator(`//frame[@src='frame_3.html']`)
    await frame3.locator('//input[@name="mytext3"]').fill('Naren');


})

test.only("Iframe", async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames = page.frames();
    let parent =  page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await parent.fill('[name="mytext3"]',"Git");

    let child= parent.childFrames();
    await child[0].locator('//div[@id="i9"]//div[@class="AB7Lab Id5V1"]').click();

    await page.waitForTimeout(5000);




})