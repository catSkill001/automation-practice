import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| KEYBOARD - KEYBOARD SHORTCUTS
|--------------------------------------------------------------------------
| Escenario:
| - Usar atajos de teclado
| - Validar acción ejecutada
*/
test('use keyboard shortcuts', async ({ page }) => {
  await page.goto('/');

  // Focus en un elemento
  const input = page.locator('#name, input[type="text"]').first();
  await input.focus();

  // Usar atajo Ctrl+A (seleccionar todo)
  await page.keyboard.press('Control+a');
  
  // Escribir nuevo texto
  await page.keyboard.type('New Text');
  
  // Validar que el texto se ingresó
  await expect(input).toHaveValue('New Text');
});

/*
|--------------------------------------------------------------------------
| KEYBOARD - TAB NAVIGATION
|--------------------------------------------------------------------------
| Escenario:
| - Navegar entre campos con Tab
| - Validar focus
*/
test('navigate with tab key', async ({ page }) => {
  await page.goto('/');

  const firstInput = page.locator('#name').first();
  await firstInput.focus();

  // Navegar al siguiente campo con Tab
  await page.keyboard.press('Tab');
  
  // Validar que el focus cambió
  const focusedElement = await page.evaluate(() => document.activeElement?.id);
  expect(focusedElement).not.toBe('name');
});

/*
|--------------------------------------------------------------------------
| KEYBOARD - ENTER KEY SUBMIT
|--------------------------------------------------------------------------
| Escenario:
| - Presionar Enter para enviar formulario
| - Validar envío
*/
test('submit form with enter key', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('#name').first();
  await input.fill('Test Name');
  
  // Presionar Enter
  await page.keyboard.press('Enter');

  // Validar que se envió (ajustar según la página)
  await expect(page.locator('#result, [data-result]')).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| KEYBOARD - ESCAPE KEY CLOSE
|--------------------------------------------------------------------------
| Escenario:
| - Presionar Escape para cerrar modal/dialog
| - Validar cierre
*/
test('close modal with escape key', async ({ page }) => {
  await page.goto('/');

  // Abrir modal (ajustar según la página)
  await page.getByRole('button', { name: /open|show/i }).click();
  
  // Esperar a que aparezca el modal
  const modal = page.locator('.modal, [role="dialog"]');
  await expect(modal).toBeVisible();

  // Presionar Escape
  await page.keyboard.press('Escape');

  // Validar que el modal se cerró
  await expect(modal).not.toBeVisible();
});
