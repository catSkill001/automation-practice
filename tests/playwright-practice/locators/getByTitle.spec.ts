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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar elemento con title "Home"
    // getByTitle busca cualquier elemento con title="Home"
    const homeElement = page.getByTitle('Home');
    
    // Verificar que el elemento con title "Home" es visible
    // El title se muestra como tooltip al hacer hover
    await expect(homeElement).toBeVisible();
    
    // Localizar el botón Save por su title attribute
    // Útil cuando el botón tiene un icono pero su función se describe en el title
    const saveButton = page.getByTitle('Save your changes');
    
    // Verificar que el botón Save es visible
    await expect(saveButton).toBeVisible();
  });
});
