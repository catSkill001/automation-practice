import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DATE PICKER - SELECT DATE
|--------------------------------------------------------------------------
| Escenario:
| - Abrir date picker
| - Seleccionar una fecha
| - Validar que la fecha se seleccione correctamente
*/
test('select date from datepicker', async ({ page }) => {
  await page.goto('/');

  // Localizar el date picker
  const datePicker = page.locator('#datepicker');

  // Hacer click para abrir el date picker
  await datePicker.click();

  // Seleccionar una fecha específica (ejemplo: día 15)
  // Ajustar según la implementación del date picker
  await page.locator('a:has-text("15")').click();

  // Validar que la fecha se seleccionó
  // El formato puede variar, ajustar según la página
  await expect(datePicker).not.toHaveValue('');
});

/*
|--------------------------------------------------------------------------
| DATE PICKER - NAVIGATE MONTHS
|--------------------------------------------------------------------------
| Escenario:
| - Navegar entre meses en el date picker
| - Seleccionar fecha de otro mes
*/
test('navigate months in datepicker', async ({ page }) => {
  await page.goto('/');

  const datePicker = page.locator('#datepicker');
  await datePicker.click();

  // Navegar al siguiente mes
  await page.locator('.ui-datepicker-next').click();

  // Seleccionar una fecha del nuevo mes
  await page.locator('a:has-text("10")').click();

  await expect(datePicker).not.toHaveValue('');
});

/*
|--------------------------------------------------------------------------
| DATE PICKER - TYPE DATE DIRECTLY
|--------------------------------------------------------------------------
| Escenario:
| - Escribir fecha directamente en el campo
| - Validar formato
*/
test('type date directly in datepicker', async ({ page }) => {
  await page.goto('/');

  const datePicker = page.locator('#datepicker');
  const testDate = '01/15/2024';

  // Escribir fecha directamente
  await datePicker.fill(testDate);
  await datePicker.press('Enter');

  // Validar que la fecha se ingresó
  await expect(datePicker).toHaveValue(testDate);
});
