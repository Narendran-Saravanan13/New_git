import { test, expect } from '@playwright/test';
import { Fb1 } from '../pages/fblogin';

test('Facebook login', async ({ page }) => {
    const fb = new Fb1(page);
    await fb.login();
    await fb.credentials('snarendran93@gmail.com', 'Sna@123456');





})



