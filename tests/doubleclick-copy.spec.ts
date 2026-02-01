import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DOUBLE CLICK - COPY TEXT
|--------------------------------------------------------------------------
| Escenario:
| - Escribimos texto en Field1
| - Hacemos doble click en "Copy Text"
| - Verificamos que Field2 tenga el mismo valor
*/
test('double click - copies Field1 into Field2', async ({ page }) => {

  // Navegamos a la página base.
  await page.goto('/');

  // Localizamos el primer input usando su id.
  // En este caso el id es estable y explícito.
  const field1 = page.locator('#field1');

  // Localizamos el segundo input.
  const field2 = page.locator('#field2');

  // Localizamos el botón por rol y nombre accesible.
  // Esto es preferible a usar CSS genérico.
  const copyBtn = page.getByRole('button', { name: 'Copy Text' });

  // Escribimos texto en el primer campo.
  // fill limpia el input antes de escribir.
  await field1.fill('WELCOME');

  // Ejecutamos la acción específica de doble click.
  // Esto simula el comportamiento real del usuario.
  await copyBtn.dblclick();

  // Validamos que el segundo campo tenga el mismo valor.
  // toHaveValue espera hasta que el valor sea el esperado.
  await expect(field2).toHaveValue('WELCOME');
});