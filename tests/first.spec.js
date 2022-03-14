const { test, expect } = require('@playwright/test');

test('first test', async ({ page }) => {
  await page.goto('https://www.tesco.com/');

  await expect(page).toHaveTitle(/Tesco - Supermarkets | Online Groceries, Clubcard & Recipes/);

  await expect(page.locator('.promo-button-link').nth(0)).toHaveAttribute('href', 'https://secure.tesco.com/clubcard/vouchers/rac-breakdown-cover/UK-009599.prd?icid=dchp_c2_rac_wk02');


  //--clicks just before :(
  // const element = document.getElementsByClassName('.button-text');
  await page.locator('.carousel-item >> nth=0').click('delay: 2000');

  await expect(page.locator('h1')).toHaveText('RAC Breakdown Cover');


});