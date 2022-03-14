const { test, expect } = require ('@playwright/test');

test('test', async ({ page }) => {
    // Go to https://www.tesco.com/
    await page.goto('https://www.tesco.com/');

    await page.locator('[aria-label="Main\\ Navigation"] a:has-text("Groceries")').first().click();

    await page.locator('text=Shop groceries').click();
    await expect(page).toHaveURL('https://www.tesco.com/groceries/?icid=dchp_groceriesshopgroceries');

    await expect(page.locator('h1')).toHaveText('Quick and convenient shopping');
  
    await page.locator('[placeholder="Search"]').click();
 
    await page.locator('[placeholder="Search"]').fill('carrot');
    
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://www.tesco.com/groceries/en-GB/search?query=carrot' }*/),
        page.locator('[placeholder="Search"]').press('Enter')
    ]);

    await expect(page.locator('h1')).toContainText(/carrot/);
});