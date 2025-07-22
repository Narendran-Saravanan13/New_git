// add to cart laptop  on amazon 
import { test, expect } from '@playwright/test';

test("Browser Launch", async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  // Verify that the page title contains "Amazon"
  const title = await page.title();

  // Assertion to check if the title contains "Amazon"
  expect(title).toContain('Amazon');
  // Verify that the search bar is visible
  const searchBar = await page.getByPlaceholder("Search Amazon");
  expect(searchBar).toBeVisible();
  // Verify that the search bar is enabled
  const isSearchBarEnabled = await searchBar.isEnabled();
  expect(isSearchBarEnabled).toBe(true);
  // using placeholder to search for a laptop
  // Fill the search bar with 'laptop'
  await page.getByPlaceholder("Search Amazon").fill('laptop');
  // Click the search button
  await page.locator('//input[@id="nav-search-submit-button"]').click();
  // Wait for the search results to load
  //await page.locator('//a[@id="a-autoid-1-announce"]').click();
  // Click on the first item in the search results
  await page.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click();
  // Wait for the item details page to load
  await page.getByRole('//input[@id="add-to-cart-button"]').click();
  // Wait for the cart to update
  await page.waitForTimeout(5000)
  // Verify that the item has been added to the cart by Assertion
  const cartCount = await page.locator('//span[@id="nav-cart-count"]').textContent();
  expect(cartCount).toBe('1');
})