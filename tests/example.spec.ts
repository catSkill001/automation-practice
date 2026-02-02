import { test, expect } from '@playwright/test';

test('click START button', async ({ page }) => {

  // 1) Ir a la página
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // 2) Localizar el botón START usando getByRole que funciona con ambos estados
  const toggleButton = page.getByRole('button', { name: /START|STOP/ });

  // 3) Asegurarse de que el botón esté visible y habilitado
  await expect(toggleButton).toBeVisible();
  await expect(toggleButton).toBeEnabled();
  
  // Validar que inicialmente dice "START"
  await expect(toggleButton).toHaveText('START');

  // 4) Hacer click
  await toggleButton.click();

  // 5) Validar que el texto del botón cambió a "STOP"
  await expect(toggleButton).toHaveText('STOP');

});