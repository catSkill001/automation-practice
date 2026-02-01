import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByRole()
|--------------------------------------------------------------------------
| getByRole() es uno de los locators más recomendados en Playwright porque:
| - Se basa en roles ARIA (accesibilidad)
| - Es más resistente a cambios en la UI
| - Garantiza que tu aplicación sea accesible
| 
| Casos de uso comunes:
| - Buscar botones: getByRole('button')
| - Buscar inputs: getByRole('textbox')
| - Buscar checkboxes: getByRole('checkbox')
| - Buscar links: getByRole('link')
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-role
|--------------------------------------------------------------------------
*/

test.describe('getByRole Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-001: Interactuar con botones usando getByRole
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo localizar y hacer click en botones usando su rol ARIA
  | 
  | Precondiciones:
  |   - La página debe tener botones con nombres accesibles
  | 
  | Pasos:
  |   1. Navegar a la página de práctica de Playwright
  |   2. Localizar el botón "Primary Action" por su rol
  |   3. Hacer click en el botón
  |   4. Verificar que otro botón "Toggle Button" es visible
  | 
  | Resultado esperado:
  |   - El click se ejecuta correctamente
  |   - El botón Toggle Button se muestra en pantalla
  | 
  | Conceptos clave:
  |   - getByRole('button', { name: 'texto' }): Busca botón por nombre accesible
  |   - El nombre puede ser el texto del botón o su atributo aria-label
  |   - Este approach garantiza accesibilidad
  |--------------------------------------------------------------------------
  */
  test('interact with buttons using getByRole', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Ejemplo: await page.goto('ruta-aqui');
    
    
    // TODO: Paso 2 - Localizar el botón "Primary Action"
    // Usa page.getByRole() con el rol 'button' y el nombre 'Primary Action'
    // Guarda la referencia en una variable llamada primaryButton
    // Sintaxis: page.getByRole('rol', { name: 'nombre-del-elemento' })
    
    
    // TODO: Paso 3 - Hacer click en el botón
    // Usa el método .click() en la variable primaryButton
    // Ejemplo: await variable.click();
    
    
    // TODO: Paso 4 - Verificar que el botón "Toggle Button" es visible
    // Usa expect() con toBeVisible()
    // Localiza el botón usando getByRole('button', { name: 'Toggle Button' })
    // Sintaxis: await expect(locator).toBeVisible();
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-002: Llenar campos de formulario usando getByRole
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo llenar inputs de texto usando el rol 'textbox'
  | 
  | Precondiciones:
  |   - La página debe tener un input con label "Username"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el input por rol 'textbox' y nombre que contenga "username"
  |   3. Llenar el campo con el valor "TestUser"
  |   4. Validar que el valor se ingresó correctamente
  | 
  | Resultado esperado:
  |   - El campo acepta el texto
  |   - El valor "TestUser" persiste en el input
  | 
  | Conceptos clave:
  |   - getByRole('textbox'): Busca inputs de tipo texto
  |   - name: /username/i: Usa regex case-insensitive para flexibilidad
  |   - fill(): Borra el contenido anterior y escribe el nuevo texto
  |   - toHaveValue(): Valida el valor actual del input
  |--------------------------------------------------------------------------
  */
  test('fill form elements using getByRole', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    
    
    // TODO: Paso 2 - Localizar el campo de username
    // Usa page.getByRole() con rol 'textbox' y name usando regex: /username/i
    // Guarda el locator en una variable llamada usernameInput
    // Nota: La regex /username/i es case-insensitive (ignora mayúsculas/minúsculas)
    // Sintaxis: page.getByRole('textbox', { name: /patron/i })
    
    
    // TODO: Paso 3 - Llenar el campo con el valor 'TestUser'
    // Usa el método .fill() en la variable usernameInput
    // El método fill() limpia el campo primero y luego escribe el nuevo valor
    // Ejemplo: await variable.fill('texto-aqui');
    
    
    // TODO: Paso 4 - Validar que el valor se ingresó correctamente
    // Usa expect() con toHaveValue() para verificar el valor del input
    // Sintaxis: await expect(variable).toHaveValue('valor-esperado');
    
  });
});
