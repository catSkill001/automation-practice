import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| FORMS - INPUT FIELDS
|--------------------------------------------------------------------------
| Escenario:
| - Llenar campos de texto
| - Validar que los valores se ingresen correctamente
*/
test('fill input fields', async ({ page }) => {
  await page.goto('/');

  // Localizar y llenar campos de texto
  const nameField = page.locator('#name');
  const emailField = page.locator('#email');
  const phoneField = page.locator('#phone');

  await nameField.fill('John Doe');
  await emailField.fill('john.doe@example.com');
  await phoneField.fill('1234567890');

  // Validar que los valores se guardaron correctamente
  await expect(nameField).toHaveValue('John Doe');
  await expect(emailField).toHaveValue('john.doe@example.com');
  await expect(phoneField).toHaveValue('1234567890');
});

/*
|--------------------------------------------------------------------------
| FORMS - TEXTAREA
|--------------------------------------------------------------------------
| Escenario:
| - Llenar un textarea
| - Validar que el texto se ingrese correctamente
*/
test('fill textarea field', async ({ page }) => {
  await page.goto('/');

  const textarea = page.locator('#message');
  const testMessage = 'This is a test message for the textarea field.';

  await textarea.fill(testMessage);
  await expect(textarea).toHaveValue(testMessage);
});

/*
|--------------------------------------------------------------------------
| FORMS - CHECKBOXES
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar checkboxes
| - Validar que se seleccionen correctamente
*/
test('select checkboxes', async ({ page }) => {
  await page.goto('/');

  // Localizar checkboxes (ajustar selectores según la página)
  const checkbox1 = page.locator('#sunday');
  const checkbox2 = page.locator('#monday');

  // Seleccionar checkboxes
  await checkbox1.check();
  await checkbox2.check();

  // Validar que están seleccionados
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).toBeChecked();

  // Deseleccionar uno
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();
});

/*
|--------------------------------------------------------------------------
| FORMS - RADIO BUTTONS
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar radio buttons
| - Validar que solo uno pueda estar seleccionado
*/
test('select radio buttons', async ({ page }) => {
  await page.goto('/');

  // Localizar radio buttons (ajustar selectores según la página)
  const maleRadio = page.locator('#male');
  const femaleRadio = page.locator('#female');

  // Seleccionar primer radio
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();
  await expect(femaleRadio).not.toBeChecked();

  // Cambiar a otro radio
  await femaleRadio.check();
  await expect(femaleRadio).toBeChecked();
  await expect(maleRadio).not.toBeChecked();
});
