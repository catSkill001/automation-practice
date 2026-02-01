import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| FRAMES - ACCESS IFRAME CONTENT
|--------------------------------------------------------------------------
| Escenario:
| - Acceder a contenido dentro de un iframe
| - Interactuar con elementos dentro del frame
*/
test('interact with iframe content', async ({ page }) => {
  await page.goto('/');

  // Localizar el iframe
  const frame = page.frameLocator('#frame-one1434677811');

  // Interactuar con elementos dentro del iframe
  const nameInput = frame.locator('input[name="RESULT_TextField-1"]');
  await nameInput.fill('Test User');

  // Validar que el valor se ingresó
  await expect(nameInput).toHaveValue('Test User');
});

/*
|--------------------------------------------------------------------------
| FRAMES - MULTIPLE IFRAMES
|--------------------------------------------------------------------------
| Escenario:
| - Trabajar con múltiples iframes
| - Cambiar entre frames
*/
test('work with multiple iframes', async ({ page }) => {
  await page.goto('/');

  // Primer iframe
  const frame1 = page.frameLocator('#frame-one1434677811');
  const input1 = frame1.locator('input[name="RESULT_TextField-1"]');
  await input1.fill('Frame 1 Content');

  // Si hay un segundo iframe
  const frame2 = page.frameLocator('#frame-two1434677811');
  const input2 = frame2.locator('input[name="RESULT_TextField-2"]');
  await input2.fill('Frame 2 Content');

  // Validar ambos
  await expect(input1).toHaveValue('Frame 1 Content');
  await expect(input2).toHaveValue('Frame 2 Content');
});

/*
|--------------------------------------------------------------------------
| FRAMES - SWITCH TO FRAME AND BACK
|--------------------------------------------------------------------------
| Escenario:
| - Cambiar al contexto del frame
| - Realizar acciones
| - Volver al contexto principal
*/
test('switch frame context', async ({ page }) => {
  await page.goto('/');

  // Obtener el frame element
  const frameElement = await page.locator('#frame-one1434677811').elementHandle();
  const frame = await frameElement?.contentFrame();

  if (frame) {
    // Trabajar dentro del frame
    const nameInput = frame.locator('input[name="RESULT_TextField-1"]');
    await nameInput.fill('Context Switch Test');
    await expect(nameInput).toHaveValue('Context Switch Test');
  }

  // Volver al contexto principal (automático al salir del frame)
  const mainHeading = page.getByRole('heading', { name: /Automation Testing Practice/i });
  await expect(mainHeading).toBeVisible();
});
