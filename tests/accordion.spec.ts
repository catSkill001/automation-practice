import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| ACCORDION - EXPAND AND COLLAPSE
|--------------------------------------------------------------------------
| Escenario:
| - Expandir sección del accordion
| - Validar que se muestre el contenido
| - Colapsar sección
*/
test('expand and collapse accordion section', async ({ page }) => {
  await page.goto('/');

  // Localizar primera sección del accordion
  const accordionSection = page.locator('#accordion h3').first();
  const accordionContent = page.locator('#accordion div').first();

  // Validar que inicialmente está colapsado (o expandido según implementación)
  const initialState = await accordionContent.isVisible();

  // Click para expandir/colapsar
  await accordionSection.click();

  // Validar cambio de estado
  const newState = await accordionContent.isVisible();
  expect(newState).not.toBe(initialState);
});

/*
|--------------------------------------------------------------------------
| ACCORDION - NAVIGATE MULTIPLE SECTIONS
|--------------------------------------------------------------------------
| Escenario:
| - Expandir múltiples secciones
| - Validar contenido de cada una
*/
test('navigate multiple accordion sections', async ({ page }) => {
  await page.goto('/');

  // Expandir primera sección
  const section1 = page.locator('#accordion h3').nth(0);
  await section1.click();
  await expect(page.locator('#accordion div').nth(0)).toBeVisible();

  // Expandir segunda sección
  const section2 = page.locator('#accordion h3').nth(1);
  await section2.click();
  await expect(page.locator('#accordion div').nth(1)).toBeVisible();

  // Validar que ambas tienen contenido
  const content1 = page.locator('#accordion div').nth(0);
  const content2 = page.locator('#accordion div').nth(1);
  
  await expect(content1).toBeVisible();
  await expect(content2).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| ACCORDION - VERIFY CONTENT
|--------------------------------------------------------------------------
| Escenario:
| - Expandir sección
| - Validar contenido específico
*/
test('verify accordion section content', async ({ page }) => {
  await page.goto('/');

  // Expandir sección específica
  const section = page.locator('#accordion h3:has-text("Section 1")');
  await section.click();

  // Validar contenido
  const content = page.locator('#accordion div').first();
  await expect(content).toBeVisible();
  await expect(content).toContainText(/Lorem|ipsum|content/i);
});
