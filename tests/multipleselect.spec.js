import {test,expect} from '@playwright/test';
test('multiple select', async ({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.selectOption('#colors', ['Red', 'Green']);
 await page.waitForTimeout(4000);






})