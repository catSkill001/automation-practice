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
    // Navegar a la página de práctica de Playwright
    await page.goto('/p/playwrightpractice.html');
    
    // Buscar un párrafo que contiene texto específico
    // getByText() busca elementos cuyo texto visible coincida
    const paragraph = page.getByText('This paragraph contains some important text');
    
    // Verificar que el párrafo está visible en la página
    // Esto valida que el contenido se renderizó correctamente
    await expect(paragraph).toBeVisible();
    
    // Buscar y hacer click en el botón "Submit Form" por su texto
    // getByText() es útil cuando no hay un role o test-id disponible
    await page.getByText('Submit Form').click();
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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Verificar que el primer item de la lista es visible
    // getByText busca el texto exacto en cualquier elemento
    await expect(page.getByText('List item 1')).toBeVisible();
    
    // Verificar el segundo item que contiene un link
    await expect(page.getByText('List item 2 with link')).toBeVisible();
    
    // Verificar el tercer item con texto único/especial
    // Útil para demostrar que podemos buscar texto con caracteres especiales
    await expect(page.getByText('Special: Unique text identifier')).toBeVisible();
  });
});
