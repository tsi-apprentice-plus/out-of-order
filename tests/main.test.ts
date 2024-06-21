import { test, expect } from '@playwright/test';

test.describe('App component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the component is rendered
    await page.goto('http://localhost:3000'); 
  });

  test('display search bar and all products', async ({ page }) => {
    // Check that the search bar is present
    const searchBar = page.locator('input.Product_Search');
    await expect(searchBar).toBeVisible();
    await expect(searchBar).toHaveAttribute('placeholder', 'Search');

    // Simulate typing in the search bar
    await searchBar.fill('Aracnia Zip Hoodie');
    await expect(searchBar).toHaveValue('Aracnia Zip Hoodie');

    // Check the product list
    const allProducts = page.locator('div.product-card-container .card');
    await expect(allProducts).toBeVisible();

  });

  test('filter products based on search query', async ({ page }) => {
    const searchBar = page.locator('input.Product_Search');
    await searchBar.fill('Aracnia Zip Hoodie'); 

    // Verify the correct products are shown
    const filteredAllProducts = page.locator('div.product-card-container .card');
    await expect(filteredAllProducts).toBeVisible();

    // Check the content of the filtered products
    const firstProduct = filteredAllProducts.first();
    await expect(firstProduct).toContainText('Aracnia Zip Hoodie'); 
  });

  test('navigate to product details page when product is clicked', async ({ page }) => {
    const firstProductLink = page.locator('div.product-card-container .card').first();
    await firstProductLink.click();

  });
});