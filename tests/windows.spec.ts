import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| WINDOWS - OPEN NEW WINDOW
|--------------------------------------------------------------------------
| Escenario:
| - Click en botón que abre nueva ventana
| - Cambiar a la nueva ventana
| - Validar contenido
*/
test('open and switch to new window', async ({ page, context }) => {
  await page.goto('/');

  // Esperar a que se abra nueva ventana al hacer click
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: /new window|open window/i }).click()
  ]);

  // Cambiar a la nueva ventana
  await newPage.waitForLoadState();

  // Validar contenido de la nueva ventana
  await expect(newPage.getByRole('heading')).toBeVisible();

  // Cerrar nueva ventana
  await newPage.close();
});

/*
|--------------------------------------------------------------------------
| WINDOWS - MULTIPLE WINDOWS
|--------------------------------------------------------------------------
| Escenario:
| - Abrir múltiples ventanas
| - Cambiar entre ellas
| - Validar cada una
*/
test('handle multiple windows', async ({ page, context }) => {
  await page.goto('/');

  // Abrir primera ventana
  const [page1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: /new window/i }).click()
  ]);
  await page1.waitForLoadState();

  // Volver a página original y abrir segunda
  await page.bringToFront();
  const [page2] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: /new window/i }).click()
  ]);
  await page2.waitForLoadState();

  // Validar ambas ventanas
  await expect(page1.getByRole('heading')).toBeVisible();
  await expect(page2.getByRole('heading')).toBeVisible();

  // Cerrar ventanas
  await page1.close();
  await page2.close();
});

/*
|--------------------------------------------------------------------------
| WINDOWS - CLOSE WINDOW
|--------------------------------------------------------------------------
| Escenario:
| - Abrir ventana
| - Cerrarla
| - Validar que se cerró
*/
test('close opened window', async ({ page, context }) => {
  await page.goto('/');

  // Abrir ventana
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: /new window/i }).click()
  ]);

  await newPage.waitForLoadState();
  
  // Validar que la nueva página está abierta (tiene contenido)
  await expect(newPage.getByRole('heading')).toBeVisible();

  // Cerrar ventana
  await newPage.close();

  // Validar que se cerró (la página original sigue activa verificando su contenido)
  await expect(page.getByRole('heading', { name: /Automation Testing Practice/i })).toBeVisible();
});
