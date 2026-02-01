import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByText()
|--------------------------------------------------------------------------
| getByText() localiza elementos por su contenido de texto visible.
| 
| Ventajas:
| - Intuitivo y fácil de usar
| - Busca por texto que el usuario realmente ve
| - Útil para validar contenido dinámico
| 
| Casos de uso:
| - Verificar mensajes de error o éxito
| - Localizar botones sin role definido
| - Buscar párrafos o textos específicos
| 
| Consideraciones:
| - Puede ser sensible a cambios de texto (traducciones, copys)
| - Útil combinar con .first() o .nth() si hay duplicados
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-text
|--------------------------------------------------------------------------
*/

test.describe('getByText Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-003: Localizar elementos por contenido de texto
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo buscar elementos usando su texto visible
  | 
  | Precondiciones:
  |   - La página debe tener párrafos con texto específico
  |   - Debe existir un botón con texto "Submit Form"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Buscar un párrafo por su texto completo
  |   3. Verificar que el párrafo es visible
  |   4. Buscar y hacer click en el botón "Submit Form" por texto
  | 
  | Resultado esperado:
  |   - El párrafo se encuentra y es visible
  |   - El botón se localiza correctamente por su texto
  |   - El click en el botón se ejecuta sin errores
  | 
  | Conceptos clave:
  |   - getByText('texto exacto'): Búsqueda por texto completo
  |   - getByText() también busca en elementos hijos
  |   - Es case-sensitive por defecto
  |--------------------------------------------------------------------------
  */
  test('locate elements by text content', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    
    
    // TODO: Paso 2 - Buscar un párrafo por su texto
    // Usa page.getByText() con el texto exacto: 'This paragraph contains some important text'
    // Guarda el locator en una variable llamada paragraph
    // Sintaxis: page.getByText('texto-exacto-aqui')
    
    
    // TODO: Paso 3 - Verificar que el párrafo es visible
    // Usa expect() con toBeVisible() para validar que el párrafo se renderizó
    // Sintaxis: await expect(variable).toBeVisible();
    
    
    // TODO: Paso 4 - Hacer click en el botón "Submit Form"
    // Usa page.getByText() para localizar el botón por su texto
    // Encadena el método .click() directamente
    // Ejemplo: await page.getByText('texto-boton').click();
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-004: Interactuar con items de lista por texto
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que múltiples elementos de lista son visibles usando texto
  | 
  | Precondiciones:
  |   - La página debe contener una lista con 3 items específicos
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Verificar que "List item 1" es visible
  |   3. Verificar que "List item 2 with link" es visible
  |   4. Verificar que "Special: Unique text identifier" es visible
  | 
  | Resultado esperado:
  |   - Los 3 items de lista se encuentran en el DOM
  |   - Todos los items son visibles al usuario
  | 
  | Conceptos clave:
  |   - getByText() puede localizar múltiples elementos
  |   - Cada verificación es independiente
  |   - Útil para validar listas dinámicas
  |--------------------------------------------------------------------------
  */
  test('interact with list items by text', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    
    
    // TODO: Paso 2 - Verificar que "List item 1" es visible
    // Usa expect() con page.getByText() y toBeVisible()
    // Sintaxis: await expect(page.getByText('texto')).toBeVisible();
    
    
    // TODO: Paso 3 - Verificar que "List item 2 with link" es visible
    // Usa la misma estructura que el paso anterior
    
    
    // TODO: Paso 4 - Verificar que "Special: Unique text identifier" es visible
    // Nota: getByText() puede buscar texto con caracteres especiales como ':'
    
  });
});
