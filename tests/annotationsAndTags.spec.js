import { test } from "@playwright/test";

test.skip('Test One', async({ page }) => {});

test('Test Failed', async ({ page }) => {
    test.fail();
});

test.fixme('Test Fixed', async ({ page }) => {});

test('Test Slow', async ({ page }) => {
    test.slow();
});

test.only('Focus This Test', async ({ page }) => {
    // Run only focused tests in the entire project
});

// Tags
test('Test Login @smoke', async ({ page }) => {
    // ...
});
