import { test,expect } from '@playwright/test';
test('webtable', async ({ page }) => {
await page.goto('https://cosmocode.io/automation-practice-webtable/');
const table = page.locator('//table[@id="countries"]');
const rows = table.locator('tbody tr');
console.log("total row:"+ await rows.count());
const col =rows.locator('td');
console.log("total column:"+ await col.count());

const rowscount = await rows.count();
for (let i = 0; i < rowscount; i++) {
    let row = rows.nth(i);
    let cells = row.locator('td').nth(1);
    let name = await cells.textContent();
    console.log(name);
}
let firstRow = rows.nth(0);
let firstRowCells = firstRow.locator('td');
let firstName = await firstRowCells.count();

for (let i = 0; i < firstName; i++) {
    let cell = firstRowCells.nth(i);
    console.log(await cell.textContent());
}
 const checkboxes = await page.$$("//input[@class='hasVisited']");
    for (const checkbox of checkboxes) {
        const isChecked = await checkbox.isChecked();
        if (!isChecked) {
            await checkbox.check();
        } 
    }  
})