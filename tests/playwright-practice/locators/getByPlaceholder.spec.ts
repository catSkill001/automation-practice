import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByPlaceholder()
|--------------------------------------------------------------------------
| getByPlaceholder() localiza inputs por su atributo placeholder.
| 
| Ventajas:
| - Útil cuando no hay label asociado
| - El placeholder es texto visible que guía al usuario
| - Común en search boxes y campos simples
| 
| Casos de uso:
| - Search inputs
| - Campos sin label explícito
| - Quick filters
| 
| Limitaciones:
| - No es tan accesible como getByLabel()
| - El placeholder desaparece al escribir
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-placeholder
|--------------------------------------------------------------------------
*/

test.describe('getByPlaceholder Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-007: Llenar input usando placeholder
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo localizar y llenar un input por su placeholder
  | 
  | Precondiciones:
  |   - La página debe tener un input con placeholder="Search"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el input por su placeholder "Search"
  |   3. Llenar el campo con texto de búsqueda
  |   4. Validar que el texto se ingresó correctamente
  | 
  | Resultado esperado:
  |   - El input se localiza correctamente
  |   - El texto "Playwright Testing" se guarda en el campo
  |   - La validación pasa
  | 
  | Conceptos clave:
  |   - getByPlaceholder('texto'): Busca por atributo placeholder
  |   - Útil para search boxes que no tienen label
  |   - El placeholder es case-sensitive
  |--------------------------------------------------------------------------
  */
  test('fill input using placeholder', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el input de búsqueda por su placeholder
    // getByPlaceholder busca elementos con placeholder="Search"
    const searchInput = page.getByPlaceholder('Search');
    
    // Llenar el campo de búsqueda con un término
    // fill() limpia el contenido anterior automáticamente
    await searchInput.fill('Playwright Testing');
    
    // Validar que el valor se ingresó correctamente
    // toHaveValue verifica el atributo 'value' del input
    await expect(searchInput).toHaveValue('Playwright Testing');
  });
});
