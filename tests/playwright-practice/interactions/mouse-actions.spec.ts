import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| MOUSE ACTIONS - Interacciones avanzadas del mouse
|--------------------------------------------------------------------------
| Playwright soporta todas las acciones del mouse que un usuario puede hacer:
| - hover(): Pasar el mouse sobre un elemento
| - click(): Click simple
| - dblclick(): Doble click
| - rightclick(): Click derecho (context menu)
| - dragTo(): Arrastrar y soltar
| 
| Casos de uso:
| - Menús dropdown que aparecen al hover
| - Selección de texto con doble click
| - Context menus
| - Tooltips
| 
| Documentación: https://playwright.dev/docs/input
|--------------------------------------------------------------------------
*/

test.describe('Mouse Actions', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-016: Manejar mouse hover
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo hacer hover sobre un elemento para mostrar contenido
  | 
  | Precondiciones:
  |   - La página debe tener un botón "Point Me"
  |   - Al hacer hover, debe mostrar un dropdown menu
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el botón "Point Me"
  |   3. Hacer hover sobre el botón
  |   4. Esperar a que la animación complete (500ms)
  | 
  | Resultado esperado:
  |   - El hover se ejecuta correctamente
  |   - El dropdown menu se muestra
  |   - No hay errores durante la interacción
  | 
  | Conceptos clave:
  |   - hover(): Simula mover el mouse sobre el elemento
  |   - Útil para menús dropdown, tooltips, y efectos hover
  |   - waitForTimeout(): Espera tiempo fijo para animaciones
  |   - En producción, mejor usar waitForSelector() para el dropdown
  |--------------------------------------------------------------------------
  */
  test('handle mouse hover', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el botón sobre el cual haremos hover
    const pointMeButton = page.getByText('Point Me');
    
    // Hacer hover sobre el botón
    // Esto simula mover el mouse sobre el elemento
    // Dispara eventos: mouseenter, mouseover, mousemove
    await pointMeButton.hover();
    
    // Esperar 500ms para que la animación del dropdown complete
    // En un test de producción, es mejor esperar por el dropdown:
    // await expect(page.locator('.dropdown-menu')).toBeVisible();
    await page.waitForTimeout(500);
    
    /*
     * Otras acciones útiles después del hover:
     * 
     * // Hacer click en un item del dropdown:
     * await page.locator('.dropdown-item').click();
     * 
     * // Verificar que el tooltip apareció:
     * await expect(page.locator('[role="tooltip"]')).toBeVisible();
     * 
     * // Mover el mouse fuera para ocultar:
     * await page.mouse.move(0, 0);
     */
  });

  /*
  |--------------------------------------------------------------------------
  | TC-017: Manejar doble click
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo hacer doble click para copiar texto entre campos
  | 
  | Precondiciones:
  |   - La página debe tener Field1 con valor "Hello World!"
  |   - Debe haber un botón "Copy Text"
  |   - Al hacer doble click, debe copiar texto a Field2
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Verificar valor inicial de Field1
  |   3. Localizar el botón "Copy Text"
  |   4. Hacer doble click en el botón
  |   5. Verificar que el texto se copió a Field2
  | 
  | Resultado esperado:
  |   - Field1 contiene "Hello World!"
  |   - El doble click se ejecuta correctamente
  |   - Field2 recibe el mismo valor que Field1
  | 
  | Conceptos clave:
  |   - dblclick(): Simula dos clicks rápidos
  |   - Dispara eventos: mousedown, mouseup, click, click
  |   - Útil para seleccionar texto, editar in-place, etc.
  |   - Más confiable que hacer click() dos veces
  |--------------------------------------------------------------------------
  */
  test('handle double click', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar Field1 y verificar su valor inicial
    const field1 = page.locator('#field1');
    
    // Validar que Field1 tiene el valor esperado
    // Esto es importante para confirmar el estado inicial
    await expect(field1).toHaveValue('Hello World!');
    
    // Localizar el botón "Copy Text"
    // Usamos :has-text() para buscar botones que contengan ese texto
    const copyButton = page.locator('button:has-text("Copy Text")');
    
    // Hacer doble click en el botón
    // Esto ejecuta la lógica de copiar texto del Field1 al Field2
    await copyButton.dblclick();
    
    // Localizar Field2 y verificar que recibió el texto copiado
    const field2 = page.locator('#field2');
    
    // Validar que Field2 ahora tiene el mismo valor que Field1
    // Esto confirma que el doble click funcionó correctamente
    await expect(field2).toHaveValue('Hello World!');
    
    /*
     * Nota sobre doble click:
     * 
     * dblclick() es mejor que:
     * await element.click({ clickCount: 2 });
     * 
     * Porque dblclick() simula más precisamente el comportamiento del usuario
     * y maneja correctamente los delays entre clicks.
     */
  });
});
