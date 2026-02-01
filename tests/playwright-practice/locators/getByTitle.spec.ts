import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByTitle()
|--------------------------------------------------------------------------
| getByTitle() localiza elementos por su atributo title.
| 
| Ventajas:
| - El title se muestra como tooltip al hacer hover
| - Útil para elementos con información adicional
| - Común en iconos y botones
| 
| Casos de uso:
| - Botones con tooltips
| - Links con descripción adicional
| - Iconos que muestran información al hover
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-title
|--------------------------------------------------------------------------
*/

test.describe('getByTitle Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-009: Localizar elementos por title attribute
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo localizar elementos usando su atributo title
  | 
  | Precondiciones:
  |   - La página debe tener elementos con title="Home"
  |   - Debe existir un botón Save con title="Save your changes"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar elemento con title "Home"
  |   3. Verificar que el elemento es visible
  |   4. Localizar botón Save por su title
  |   5. Verificar que el botón es visible
  | 
  | Resultado esperado:
  |   - Ambos elementos se localizan correctamente
  |   - Los elementos son visibles en la página
  | 
  | Conceptos clave:
  |   - getByTitle('texto'): Busca por atributo title
  |   - El title es el texto que aparece en tooltip al hover
  |   - Útil cuando el elemento no tiene texto visible
  |--------------------------------------------------------------------------
  */
  test('locate elements by title attribute', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)
    
    
    
    // TODO: Paso 2 - Localizar elemento con title "Home"
    // Usa page.getByTitle('Home') para encontrar el elemento
    // getByTitle busca cualquier elemento con title="Home"
    // El title se muestra como tooltip al hacer hover
    // Guarda el locator en una variable llamada 'homeElement'
    // Sintaxis: const elemento = page.getByTitle('texto del title')
    
    
    
    // TODO: Paso 3 - Verificar que el elemento "Home" es visible
    // Usa expect().toBeVisible() para validar que el elemento se muestra
    // Sintaxis: await expect(locator).toBeVisible()
    
    
    
    // TODO: Paso 4 - Localizar el botón Save por su title
    // Usa page.getByTitle('Save your changes') para encontrar el botón
    // Útil cuando el botón tiene un icono pero su función se describe en el title
    // Guarda el locator en una variable llamada 'saveButton'
    // Sintaxis: const elemento = page.getByTitle('texto del title')
    
    
    
    // TODO: Paso 5 - Verificar que el botón Save es visible
    // Usa expect().toBeVisible() para validar que el botón se muestra
    // Sintaxis: await expect(locator).toBeVisible()
    
    
    
  });
});
