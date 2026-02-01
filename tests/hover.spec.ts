import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| HOVER - MOUSE HOVER EFFECTS
|--------------------------------------------------------------------------
| Escenario:
| - Hacer hover sobre un elemento
| - Validar que aparezca tooltip o contenido
*/
test('hover over element to show tooltip', async ({ page }) => {
  await page.goto('/');

  // Localizar elemento con hover
  const hoverElement = page.locator('button:has-text("Hover over me")');

  // Hacer hover
  await hoverElement.hover();

  // Validar que aparece el tooltip o contenido
  const tooltip = page.locator('.tooltip, [role="tooltip"]');
  await expect(tooltip).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| HOVER - HOVER MENU ITEMS
|--------------------------------------------------------------------------
| Escenario:
| - Hacer hover sobre menú
| - Validar que aparezcan submenús
*/
test('hover to reveal dropdown menu', async ({ page }) => {
  await page.goto('/');

  // Localizar elemento del menú
  const menuItem = page.locator('text=Menu Item');

  // Hacer hover
  await menuItem.hover();

  // Validar que aparece el submenú
  const subMenu = page.locator('.submenu, [role="menu"]');
  await expect(subMenu).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| HOVER - HOVER AND CLICK
|--------------------------------------------------------------------------
| Escenario:
| - Hacer hover para revelar elemento
| - Click en el elemento revelado
*/
test('hover and click revealed element', async ({ page }) => {
  await page.goto('/');

  const hoverTrigger = page.locator('#hover-trigger');
  
  // Hacer hover
  await hoverTrigger.hover();

  // Esperar a que aparezca el elemento
  const revealedButton = page.locator('#revealed-button');
  await expect(revealedButton).toBeVisible();

  // Click en el elemento revelado
  await revealedButton.click();

  // Validar acción completada
  await expect(page.locator('#result')).toContainText('Clicked');
});
