const { test, expect } = require('@playwright/test');

test('second test', async ({ page }) => {
    await page.goto('https://www.tesco.com/');

    await expect(page).toHaveTitle(/Tesco - Supermarkets | Online Groceries, Clubcard & Recipes/);

    await expect(page.locator('.promo-button-link').nth(1)).toHaveAttribute('href', 'https://www.tesco.com/groceries/en-GB/buylists/clubcard-prices/top-picks?icid=dchp_c1_ccmp_atl_wk02');


});