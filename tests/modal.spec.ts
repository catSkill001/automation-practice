import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| MODAL - OPEN AND CLOSE MODAL
|--------------------------------------------------------------------------
| Escenario:
| - Abrir modal
| - Cerrar modal
| - Validar estados
*/
test('open and close modal', async ({ page }) => {
  await page.goto('/');

  // Abrir modal
  await page.getByRole('button', { name: /open modal|show modal/i }).click();

  // Validar que el modal está visible
  const modal = page.locator('.modal, [role="dialog"]');
  await expect(modal).toBeVisible();

  // Cerrar modal
  await page.getByRole('button', { name: /close|×/i }).click();

  // Validar que se cerró
  await expect(modal).not.toBeVisible();
});

/*
|--------------------------------------------------------------------------
| MODAL - INTERACT WITH MODAL CONTENT
|--------------------------------------------------------------------------
| Escenario:
| - Abrir modal
| - Interactuar con elementos dentro del modal
| - Validar interacción
*/
test('interact with modal content', async ({ page }) => {
  await page.goto('/');

  // Abrir modal
  await page.getByRole('button', { name: /open modal/i }).click();

  const modal = page.locator('.modal, [role="dialog"]');
  await expect(modal).toBeVisible();

  // Interactuar con input dentro del modal
  const modalInput = modal.locator('input').first();
  await modalInput.fill('Modal Test');

  // Validar que el valor se ingresó
  await expect(modalInput).toHaveValue('Modal Test');
});

/*
|--------------------------------------------------------------------------
| MODAL - CLOSE MODAL WITH BACKDROP
|--------------------------------------------------------------------------
| Escenario:
| - Abrir modal
| - Click fuera del modal (backdrop)
| - Validar cierre
*/
test('close modal by clicking backdrop', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /open modal/i }).click();

  const modal = page.locator('.modal, [role="dialog"]');
  await expect(modal).toBeVisible();

  // Click en el backdrop (fuera del modal)
  await page.locator('.modal-backdrop, .overlay').click({ position: { x: 0, y: 0 } });

  // Validar que se cerró
  await expect(modal).not.toBeVisible();
});
