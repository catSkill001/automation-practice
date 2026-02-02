import { test, expect } from '@playwright/test';

test('click START button', async ({ page }) => {

  // 1) Ir a la página
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // 2) Localizar el botón START
  const startButton = page.locator('button[name="start"]');

  // 3) Asegurarse de que el botón esté visible y habilitado
  await expect(startButton).toBeVisible();
  await expect(startButton).toBeEnabled();

  // 4) Hacer click
  await startButton.click();

  // 5) Validar que algo cambió 
  //    (esto depende de qué hace ese click en la página)
  //    Si querés ver qué cambió, abrimos la consola del navegador
  //    y observamos el DOM después del click.

  // Ejemplo de validación: comprobar que el texto del botón cambió a "STOP"
  await expect(startButton).toHaveText('STOP');

});
