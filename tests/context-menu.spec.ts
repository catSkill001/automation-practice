import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| CONTEXT MENU - RIGHT CLICK
|--------------------------------------------------------------------------
| Escenario:
| - Click derecho en elemento
| - Validar que aparece el menú contextual
*/
test('right click to show context menu', async ({ page }) => {
  await page.goto('/');

  const element = page.locator('#context-menu-target, [data-context-menu]');

  // Click derecho
  await element.click({ button: 'right' });

  // Validar que aparece el menú contextual
  const contextMenu = page.locator('.context-menu, [role="menu"]');
  await expect(contextMenu).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| CONTEXT MENU - SELECT MENU ITEM
|--------------------------------------------------------------------------
| Escenario:
| - Click derecho
| - Seleccionar opción del menú
| - Validar acción
*/
test('select item from context menu', async ({ page }) => {
  await page.goto('/');

  const element = page.locator('#context-menu-target');
  await element.click({ button: 'right' });

  // Seleccionar opción del menú
  const menuItem = page.locator('[role="menuitem"]:has-text("Copy"), .context-menu-item:has-text("Copy")');
  await menuItem.click();

  // Validar acción (ajustar según la página)
  await expect(page.locator('#result')).toContainText(/copied|selected/i);
});
