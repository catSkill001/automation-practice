import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SLIDER - Interacción con range inputs
|--------------------------------------------------------------------------
| Los sliders (input type="range") son complicados de automatizar porque:
| - No aceptan directamente fill() con valores
| - Requieren eventos de mouse o teclado
| - Pueden tener pasos (step) y rangos personalizados
| 
| En este test:
| - Validamos que la sección de slider existe
| - Verificamos el texto del rango de precios
| 
| Nota: La manipulación directa de sliders en esta página de práctica
| no está completamente implementada, por lo que nos enfocamos en la validación
| de la presencia de los elementos.
| 
| Documentación: https://playwright.dev/docs/input#type-characters
|--------------------------------------------------------------------------
*/

test.describe('Slider', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-019: Interactuar con slider
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que la sección de slider está presente y visible
  | 
  | Precondiciones:
  |   - La página debe tener una sección con heading "Slider"
  |   - Debe mostrar texto "Price range:"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Buscar el heading "Slider"
  |   3. Verificar que es visible
  |   4. Buscar el texto "Price range:"
  |   5. Verificar que es visible
  | 
  | Resultado esperado:
  |   - La sección de slider se encuentra
  |   - El texto del rango de precios es visible
  | 
  | Conceptos clave:
  |   - Algunos elementos son difíciles de interactuar en ciertos contextos
  |   - Es válido verificar presencia y visibilidad como prueba básica
  |   - En casos reales, manipularíamos el slider con evaluate()
  | 
  | Ejemplo de manipulación real de slider:
  | ```
  | await page.locator('input[type="range"]').evaluate((slider, value) => {
  |   slider.value = value;
  |   slider.dispatchEvent(new Event('input', { bubbles: true }));
  | }, '150');
  | ```
  |--------------------------------------------------------------------------
  */
  test('interact with slider', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Verificar que la sección de Slider existe
    // Esto valida que el componente está en la página
    await expect(page.getByText('Slider')).toBeVisible();
    
    // Verificar que el texto del rango de precios es visible
    // "Price range:" indica que el slider está configurado
    await expect(page.locator('text=Price range:')).toBeVisible();
    
    /*
     * Para manipular un slider en un test real:
     * 
     * // Método 1: Usando evaluate (más confiable)
     * const slider = page.locator('input[type="range"]');
     * await slider.evaluate((el: HTMLInputElement, value) => {
     *   el.value = value.toString();
     *   el.dispatchEvent(new Event('change', { bubbles: true }));
     *   el.dispatchEvent(new Event('input', { bubbles: true }));
     * }, 150);
     * 
     * // Método 2: Usando keyboard
     * await slider.focus();
     * await page.keyboard.press('ArrowRight'); // Aumenta valor
     * await page.keyboard.press('ArrowLeft');  // Disminuye valor
     * 
     * // Método 3: Usando boundingBox y mouse
     * const box = await slider.boundingBox();
     * if (box) {
     *   const x = box.x + (box.width * 0.5); // 50% del slider
     *   await page.mouse.click(x, box.y + box.height / 2);
     * }
     * 
     * // Validar el valor:
     * await expect(slider).toHaveValue('150');
     */
  });
});
