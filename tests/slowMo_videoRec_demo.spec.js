import { test, expect, chromium } from "@playwright/test";

test('SlowMo and Video Rec Demo', async() => {

    const browser = await chromium.launch({
        slowMo: 2000,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'test-recorded-videos/',
            size: { width: 800, height:600 }
        }
    });

    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php");
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await context.close();
});
