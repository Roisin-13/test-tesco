const { test, expect } = require('@playwright/test');

test('third test', async ({ page }) => {
    await page.goto('https://www.tesco.com/');

    await expect(page).toHaveTitle(/Tesco - Supermarkets | Online Groceries, Clubcard & Recipes/);

    await expect(page.locator('.promo-button-link').nth(2)).toHaveAttribute('href', 'https://www.tesco.com/zones/every-little-helps?icid=dchp_c1_ccmp_BRCS_wk02');


});