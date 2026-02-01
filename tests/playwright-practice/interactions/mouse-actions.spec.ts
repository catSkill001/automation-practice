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
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Localizar el botón sobre el cual haremos hover
    // TODO: Crea una constante 'pointMeButton' usando page.getByText('Point Me')
    // Sintaxis: const pointMeButton = page.getByText(texto)



    // Paso 3: Hacer hover sobre el botón
    // TODO: Usa pointMeButton.hover() para simular mover el mouse sobre el elemento
    // Sintaxis: await elemento.hover()
    // Hint: Esto dispara eventos mouseenter, mouseover, mousemove



    // Paso 4: Esperar a que la animación del dropdown complete
    // TODO: Usa page.waitForTimeout(500) para esperar 500ms
    // Sintaxis: await page.waitForTimeout(milisegundos)
    // Hint: En producción es mejor usar await expect(page.locator('.dropdown-menu')).toBeVisible()



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
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Localizar Field1 y verificar su valor inicial
    // TODO: Crea una constante 'field1' usando page.locator('#field1')
    // Sintaxis: const field1 = page.locator(selector)



    // Paso 3: Validar que Field1 tiene el valor "Hello World!"
    // TODO: Usa expect(field1).toHaveValue('Hello World!')
    // Sintaxis: await expect(elemento).toHaveValue(valorEsperado)
    // Hint: Esto confirma el estado inicial antes del doble click



    // Paso 4: Localizar el botón "Copy Text"
    // TODO: Crea una constante 'copyButton' con page.locator('button:has-text("Copy Text")')
    // Sintaxis: const copyButton = page.locator(selector)
    // Hint: :has-text() busca botones que contengan ese texto



    // Paso 5: Hacer doble click en el botón
    // TODO: Usa copyButton.dblclick() para ejecutar la lógica de copiar
    // Sintaxis: await elemento.dblclick()
    // Hint: Esto copia el texto del Field1 al Field2



    // Paso 6: Localizar Field2
    // TODO: Crea una constante 'field2' usando page.locator('#field2')
    // Sintaxis: const field2 = page.locator(selector)



    // Paso 7: Validar que Field2 tiene el valor copiado
    // TODO: Usa expect(field2).toHaveValue('Hello World!')
    // Sintaxis: await expect(elemento).toHaveValue(valorEsperado)
    // Hint: Esto confirma que el doble click funcionó correctamente



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
