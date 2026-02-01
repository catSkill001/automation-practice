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
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)
    
    
    
    // TODO: Paso 2 - Localizar el input por su placeholder
    // Usa page.getByPlaceholder('Search') para encontrar el input de búsqueda
    // getByPlaceholder busca elementos con placeholder="Search"
    // Guarda el locator en una variable llamada 'searchInput'
    // Sintaxis: const elemento = page.getByPlaceholder('texto del placeholder')
    
    
    
    // TODO: Paso 3 - Llenar el campo de búsqueda
    // Usa el método .fill() del locator para ingresar el texto 'Playwright Testing'
    // fill() limpia el contenido anterior automáticamente
    // Sintaxis: await locator.fill('texto a ingresar')
    
    
    
    // TODO: Paso 4 - Validar que el texto se ingresó correctamente
    // Usa expect().toHaveValue() para verificar el valor del input
    // toHaveValue verifica el atributo 'value' del elemento
    // Sintaxis: await expect(locator).toHaveValue('valor esperado')
    
    
    
  });
});
