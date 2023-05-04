import { test } from "@playwright/test";

test.describe('All Tests', () => {

    test.beforeEach(async({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
    });

    test.afterAll(async({ page }) => {
        await page.close();
    });

    test('HomePage', async({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('#item_3_title_link').click();
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    });

    test('Logout', async({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.waitForURL('https://www.saucedemo.com/');
    });
});
