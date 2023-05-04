import { test } from '@playwright/test';

let context;
let page;

test.beforeAll(async({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({ snapshots: true, screenshots: true });
  page = await context.newPage();
});

test.afterAll(async() => {
  await context.tracing.stop({ path: 'saucedemo-trace.zip' });
});

test('recorded sauce demo', async() => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
