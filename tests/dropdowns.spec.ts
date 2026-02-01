import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DROPDOWNS - SELECT ELEMENT
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar opciones de un dropdown
| - Validar que la selección se aplique correctamente
*/
test('select from dropdown', async ({ page }) => {
  await page.goto('/');

  // Localizar el select element
  const countrySelect = page.locator('#country');

  // Seleccionar una opción por valor
  await countrySelect.selectOption('india');

  // Validar que la opción se seleccionó
  await expect(countrySelect).toHaveValue('india');
});

/*
|--------------------------------------------------------------------------
| DROPDOWNS - SELECT BY LABEL
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar opción por texto visible
| - Validar selección
*/
test('select from dropdown by label', async ({ page }) => {
  await page.goto('/');

  const countrySelect = page.locator('#country');

  // Seleccionar por texto visible
  await countrySelect.selectOption({ label: 'India' });

  // Validar selección
  await expect(countrySelect).toHaveValue('india');
});

/*
|--------------------------------------------------------------------------
| DROPDOWNS - MULTIPLE SELECT
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar múltiples opciones
| - Validar todas las selecciones
*/
test('select multiple options from dropdown', async ({ page }) => {
  await page.goto('/');

  // Si hay un select múltiple (ajustar selector)
  const multiSelect = page.locator('#colors');

  // Seleccionar múltiples opciones
  await multiSelect.selectOption(['red', 'blue', 'green']);

  // Validar que todas están seleccionadas
  const selectedOptions = await multiSelect.evaluate((select: HTMLSelectElement) => {
    return Array.from(select.selectedOptions).map(option => option.value);
  });
  
  expect(selectedOptions).toContain('red');
  expect(selectedOptions).toContain('blue');
  expect(selectedOptions).toContain('green');
});
