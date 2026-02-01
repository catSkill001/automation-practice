import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| STATIC WEB TABLE
|--------------------------------------------------------------------------
| Escenario:
| - Buscamos una fila por texto
| - Validamos que contenga información esperada
*/
test('validate data in static web table', async ({ page }) => {

  // Abrimos la página.
  await page.goto('/');

  // Localizamos una fila de la tabla que contenga el texto del libro.
  // Usamos role=row porque es semántico y estable.
  const row = page.getByRole('row', { name: /Learn Selenium/i });

  // Verificamos que la fila exista y sea visible.
  await expect(row).toBeVisible();

  // Validamos que la fila contenga el autor esperado.
  // Esto evita depender de índices frágiles.
  await expect(row).toContainText('Amit');
});
