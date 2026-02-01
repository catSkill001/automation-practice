import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| TABS - SWITCH BETWEEN TABS
|--------------------------------------------------------------------------
| Escenario:
| - Click en diferentes tabs
| - Validar que el contenido cambie
*/
test('switch between tabs', async ({ page }) => {
  await page.goto('/');

  // Localizar tabs
  const tab1 = page.locator('#tabs-1, [role="tab"]:has-text("Tab 1")');
  const tab2 = page.locator('#tabs-2, [role="tab"]:has-text("Tab 2")');
  const tab3 = page.locator('#tabs-3, [role="tab"]:has-text("Tab 3")');

  // Click en primer tab
  await tab1.click();
  await expect(page.locator('#tabs-1-panel, [role="tabpanel"]').first()).toBeVisible();

  // Click en segundo tab
  await tab2.click();
  await expect(page.locator('#tabs-2-panel, [role="tabpanel"]').nth(1)).toBeVisible();

  // Click en tercer tab
  await tab3.click();
  await expect(page.locator('#tabs-3-panel, [role="tabpanel"]').nth(2)).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| TABS - VERIFY TAB CONTENT
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar tab
| - Validar contenido específico
*/
test('verify tab content', async ({ page }) => {
  await page.goto('/');

  // Seleccionar tab específico
  const tab = page.locator('[role="tab"]:has-text("Tab 1")');
  await tab.click();

  // Validar contenido del tab
  const tabContent = page.locator('[role="tabpanel"]').first();
  await expect(tabContent).toBeVisible();
  await expect(tabContent).toContainText(/content|text/i);
});
