import {test, expect} from '@playwright/test';
test('keyboard actions', async ({page}) => {
    await page.goto('https://onlinetextcompare.com/');
    
    // Type some text
    await page.fill('#inputField', 'Hello World');
    
    // Press Enter
    await page.keyboard.press('Enter');
    
    // Press Tab to move focus
    await page.keyboard.press('Tab');
    
    // Type more text in the next field
    await page.fill('#nextInputField', 'Playwright Testing');
    
    // Use arrow keys to navigate
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowRight');
    
    // Use Ctrl/Cmd + A to select all text
    await page.keyboard.down('Control'); // or 'Meta' for Mac
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control'); // or 'Meta'
    
    // Copy selected text
    await page.keyboard.press('Control+C'); // or 'Meta+C' for Mac
    
    // Paste copied text into another field
    await page.fill('#pasteField', '');
    await page.keyboard.press('Control+V'); // or 'Meta+V' for Mac
    
    // Verify the pasted text
    const pastedText = await page.inputValue('#pasteField');
    expect(pastedText).toBe('Playwright Testing');







})