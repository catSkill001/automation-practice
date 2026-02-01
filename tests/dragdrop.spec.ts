import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DRAG AND DROP
|--------------------------------------------------------------------------
| Escenario:
| - Arrastramos un elemento
| - Lo soltamos en un target
| - Validamos que el drop fue exitoso
*/
test('drag element to target', async ({ page }) => {

  // Abrimos la página.
  await page.goto('/');

  // Localizamos el elemento que se va a arrastrar.
  const source = page.locator('#draggable');

  // Localizamos el área de destino.
  const target = page.locator('#droppable');

  // Ejecutamos drag and drop nativo de Playwright.
  // Esto abstrae los eventos de mouse y reduce flakiness.
  await source.dragTo(target);

  // Validamos que el drop tuvo efecto.
  // En esta demo suele cambiar el texto del target.
  await expect(target).toContainText('Dropped');
});
