import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| RESIZABLE - RESIZE ELEMENT
|--------------------------------------------------------------------------
| Escenario:
| - Redimensionar un elemento arrastrando
| - Validar que el tamaño cambie
*/
test('resize element by dragging', async ({ page }) => {
  await page.goto('/');

  // Localizar el elemento resizable
  const resizableBox = page.locator('#resizable');
  
  // Obtener tamaño inicial
  const initialBox = await resizableBox.boundingBox();
  const initialWidth = initialBox?.width || 0;
  const initialHeight = initialBox?.height || 0;

  // Localizar el handle de resize (esquina inferior derecha)
  const resizeHandle = page.locator('#resizable .ui-resizable-se');

  // Arrastrar el handle para redimensionar
  await resizeHandle.dragTo(resizeHandle, {
    targetPosition: { x: 100, y: 100 }
  });

  // Obtener nuevo tamaño
  const newBox = await resizableBox.boundingBox();
  const newWidth = newBox?.width || 0;
  const newHeight = newBox?.height || 0;

  // Validar que el tamaño cambió
  expect(newWidth).not.toBe(initialWidth);
  expect(newHeight).not.toBe(initialHeight);
});

/*
|--------------------------------------------------------------------------
| RESIZABLE - RESIZE WITH KEYBOARD
|--------------------------------------------------------------------------
| Escenario:
| - Redimensionar usando teclado (si está soportado)
| - Validar cambios
*/
test('resize element with constraints', async ({ page }) => {
  await page.goto('/');

  const resizableBox = page.locator('#resizable');
  const resizeHandle = page.locator('#resizable .ui-resizable-se');

  // Obtener tamaño inicial
  const initialBox = await resizableBox.boundingBox();

  // Arrastrar con movimiento específico
  await page.mouse.move(
    (initialBox?.x || 0) + (initialBox?.width || 0),
    (initialBox?.y || 0) + (initialBox?.height || 0)
  );
  await page.mouse.down();
  await page.mouse.move(
    (initialBox?.x || 0) + (initialBox?.width || 0) + 50,
    (initialBox?.y || 0) + (initialBox?.height || 0) + 50
  );
  await page.mouse.up();

  // Validar que el elemento se redimensionó
  const newBox = await resizableBox.boundingBox();
  expect(newBox?.width).toBeGreaterThan(initialBox?.width || 0);
});
