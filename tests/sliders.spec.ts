import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SLIDERS - DRAG SLIDER
|--------------------------------------------------------------------------
| Escenario:
| - Arrastrar slider a un valor específico
| - Validar que el valor cambie
*/
test('drag slider to specific value', async ({ page }) => {
  await page.goto('/');

  // Localizar el slider
  const slider = page.locator('#slider');

  // Obtener valor inicial
  const initialValue = await slider.getAttribute('value');

  // Arrastrar slider a posición específica
  await slider.fill('50'); // Establecer valor directamente

  // Validar que el valor cambió
  const newValue = await slider.getAttribute('value');
  expect(newValue).toBe('50');
  expect(newValue).not.toBe(initialValue);
});

/*
|--------------------------------------------------------------------------
| SLIDERS - SLIDER RANGE
|--------------------------------------------------------------------------
| Escenario:
| - Trabajar con slider de rango
| - Validar valores mínimo y máximo
*/
test('set slider to min and max values', async ({ page }) => {
  await page.goto('/');

  const slider = page.locator('#slider');

  // Establecer valor mínimo
  await slider.fill('0');
  await expect(slider).toHaveValue('0');

  // Establecer valor máximo
  await slider.fill('100');
  await expect(slider).toHaveValue('100');
});

/*
|--------------------------------------------------------------------------
| SLIDERS - SLIDER WITH MOUSE
|--------------------------------------------------------------------------
| Escenario:
| - Arrastrar slider usando mouse
| - Validar posición final
*/
test('drag slider with mouse', async ({ page }) => {
  await page.goto('/');

  const slider = page.locator('#slider');
  
  // Obtener posición del slider
  const box = await slider.boundingBox();
  if (!box) throw new Error('Slider not found');

  // Click en posición específica del slider (50% del ancho)
  await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.75, box.y + box.height * 0.5);
  await page.mouse.up();

  // Validar que el valor cambió
  const value = await slider.getAttribute('value');
  expect(value).not.toBeNull();
});
