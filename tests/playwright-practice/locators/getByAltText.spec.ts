import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByAltText()
|--------------------------------------------------------------------------
| getByAltText() localiza elementos (principalmente imágenes) por su atributo alt.
| 
| Ventajas:
| - Específico para contenido visual
| - Garantiza accesibilidad (alt text para screen readers)
| - Útil para validar que las imágenes tienen descripción
| 
| Casos de uso:
| - Verificar imágenes en la página
| - Hacer click en imágenes clickeables
| - Validar iconos con alt text
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-alt-text
|--------------------------------------------------------------------------
*/

test.describe('getByAltText Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-008: Localizar imagen por alt text
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Verificar que una imagen se puede localizar por su atributo alt
  | 
  | Precondiciones:
  |   - La página debe tener una imagen con alt="logo image"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar la imagen por su alt text "logo image"
  |   3. Verificar que la imagen es visible
  | 
  | Resultado esperado:
  |   - La imagen se encuentra en el DOM
  |   - La imagen está visible al usuario
  | 
  | Conceptos clave:
  |   - getByAltText('texto'): Busca por atributo alt
  |   - Principalmente usado con imágenes <img>
  |   - Valida accesibilidad (imágenes deben tener alt text)
  |--------------------------------------------------------------------------
  */
  test('locate image by alt text', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)
    
    
    
    // TODO: Paso 2 - Localizar la imagen por su atributo alt
    // Usa page.getByAltText('logo image') para encontrar la imagen
    // getByAltText busca elementos con el atributo alt="logo image"
    // Guarda el locator en una variable llamada 'logoImage'
    // Sintaxis: const elemento = page.getByAltText('texto del alt')
    
    
    
    // TODO: Paso 3 - Verificar que la imagen es visible
    // Usa expect().toBeVisible() para validar que la imagen se muestra
    // Esto valida que:
    //   1. La imagen existe en el DOM
    //   2. La imagen está renderizada y visible
    //   3. El alt text está correctamente configurado
    // Sintaxis: await expect(locator).toBeVisible()
    
    
    
  });
});
