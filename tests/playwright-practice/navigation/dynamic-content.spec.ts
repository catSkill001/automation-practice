import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DYNAMIC CONTENT - Contenido que cambia dinámicamente
|--------------------------------------------------------------------------
| Muchas aplicaciones modernas cargan contenido de forma dinámica:
| - AJAX requests
| - JavaScript que modifica el DOM
| - Lazy loading
| - Infinite scroll
| 
| Playwright maneja esto con:
| - Auto-waiting: Espera automáticamente a que los elementos sean actionable
| - waitForSelector(): Espera explícita por un elemento
| - waitForTimeout(): Espera por tiempo fijo (último recurso)
| - waitForLoadState(): Espera estados de carga
| 
| Best practice: Prefer waiting for specific conditions over fixed timeouts
| 
| Documentación: https://playwright.dev/docs/actionability
|--------------------------------------------------------------------------
*/

test.describe('Dynamic Content', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-023: Manejar botón dinámico
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo interactuar con contenido que cambia dinámicamente
  | 
  | Precondiciones:
  |   - La página debe tener un botón "START"
  |   - Al hacer click, el botón o contenido debe cambiar
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el botón "START"
  |   3. Hacer click en el botón
  |   4. Esperar 1 segundo para que el cambio dinámico ocurra
  | 
  | Resultado esperado:
  |   - El click se ejecuta correctamente
  |   - El contenido dinámico se actualiza
  |   - No hay errores durante la espera
  | 
  | Conceptos clave:
  |   - getByText(): Localiza por texto visible
  |   - waitForTimeout(): Espera tiempo fijo (1000ms = 1 segundo)
  |   - En producción, es mejor esperar por un cambio específico
  | 
  | Mejora recomendada:
  |   En lugar de waitForTimeout(), usar:
  |   await expect(elemento).toHaveText('nuevo texto');
  |   o
  |   await page.waitForSelector('.updated-class');
  |--------------------------------------------------------------------------
  */
  test('handle dynamic button', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // Sintaxis: await page.goto('URL');
    
    

    // Paso 2: Localizar el botón con texto "START"
    // Sintaxis: page.getByText('texto')
    // Hint: getByText busca elementos por su texto visible
    
    

    // Paso 3: Hacer click en el botón
    // Sintaxis: await button.click();
    
    

    // Paso 4: Esperar 1 segundo para que el contenido dinámico cambie
    // Sintaxis: await page.waitForTimeout(milisegundos);
    // Hint: 1000ms = 1 segundo
    // Nota: En producción es mejor esperar por un cambio específico
    
    
    
    // Mejores prácticas para contenido dinámico:
    // 1. Esperar por texto específico usando expect con toHaveText
    // 2. Esperar por un nuevo elemento usando waitForSelector
    // 3. Esperar por cambio de clase usando toHaveClass
    // 4. Esperar por cambio de estado usando toBeDisabled
    // 5. Esperar por desaparición usando toBeHidden
    // 6. Esperar por cambio de URL usando waitForURL
    // 7. Esperar por response de API usando waitForResponse
    // 8. Esperar por función customizada usando waitForFunction
  });
  
  /*
   * Otros patrones comunes para contenido dinámico:
   * 
   * test('wait for ajax loading', async ({ page }) => {
   *   await page.goto('/dashboard');
   *   
   *   // Esperar a que desaparezca el spinner de carga
   *   await expect(page.locator('.spinner')).toBeHidden();
   *   
   *   // Ahora podemos interactuar con el contenido cargado
   *   await expect(page.locator('.data-table')).toBeVisible();
   * });
   * 
   * test('infinite scroll', async ({ page }) => {
   *   await page.goto('/feed');
   *   
   *   // Contar items iniciales
   *   const initialCount = await page.locator('.post').count();
   *   
   *   // Scroll hasta el final
   *   await page.evaluate(() => {
   *     window.scrollTo(0, document.body.scrollHeight);
   *   });
   *   
   *   // Esperar a que carguen más items
   *   await page.waitForFunction((count) => {
   *     return document.querySelectorAll('.post').length > count;
   *   }, initialCount);
   *   
   *   // Verificar que hay más items
   *   const newCount = await page.locator('.post').count();
   *   expect(newCount).toBeGreaterThan(initialCount);
   * });
   */
});
