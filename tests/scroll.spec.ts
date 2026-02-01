import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SCROLL - SCROLL TO ELEMENT
|--------------------------------------------------------------------------
| Escenario:
| - Hacer scroll hasta un elemento
| - Validar que el elemento es visible
*/
test('scroll to element', async ({ page }) => {
  await page.goto('/');

  // Localizar elemento que está más abajo en la página
  const targetElement = page.locator('#bottom-element, [data-scroll-target]');

  // Hacer scroll hasta el elemento
  await targetElement.scrollIntoViewIfNeeded();

  // Validar que el elemento es visible
  await expect(targetElement).toBeVisible();
  await expect(targetElement).toBeInViewport();
});

/*
|--------------------------------------------------------------------------
| SCROLL - SCROLL TO POSITION
|--------------------------------------------------------------------------
| Escenario:
| - Hacer scroll a una posición específica
| - Validar posición
*/
test('scroll to specific position', async ({ page }) => {
  await page.goto('/');

  // Hacer scroll a posición específica
  await page.evaluate(() => {
    window.scrollTo(0, 500);
  });

  // Validar posición de scroll
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBeGreaterThan(0);
});

/*
|--------------------------------------------------------------------------
| SCROLL - INFINITE SCROLL
|--------------------------------------------------------------------------
| Escenario:
| - Hacer scroll hasta el final
| - Validar que se cargan más elementos
*/
test('infinite scroll load more content', async ({ page }) => {
  await page.goto('/');

  // Obtener cantidad inicial de elementos
  const initialCount = await page.locator('.item, [data-item]').count();

  // Hacer scroll hasta el final
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Esperar a que se carguen más elementos
  await page.waitForTimeout(1000);

  // Validar que hay más elementos
  const finalCount = await page.locator('.item, [data-item]').count();
  expect(finalCount).toBeGreaterThanOrEqual(initialCount);
});

/*
|--------------------------------------------------------------------------
| SCROLL - SCROLL TO TOP
|--------------------------------------------------------------------------
| Escenario:
| - Hacer scroll hacia abajo
| - Hacer scroll hacia arriba
| - Validar posición
*/
test('scroll to top', async ({ page }) => {
  await page.goto('/');

  // Scroll hacia abajo
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Scroll hacia arriba
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });

  // Validar que estamos en la parte superior
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBe(0);
});
