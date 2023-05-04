const { chromium, test } = require('@playwright/test');

test('recorded sauce demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.goto('https://www.google.com/search?q=forbes&oq=forbes&aqs=chrome..69i57.1541j0j4&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Forbes Forbes https://www.forbes.com', exact: true }).click();

  // ---------------------
  await context.close();
  await browser.close();
});
