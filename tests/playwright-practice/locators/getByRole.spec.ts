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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el botón "Primary Action" usando su rol ARIA
    // Playwright busca elements con role="button" y nombre "Primary Action"
    const primaryButton = page.getByRole('button', { name: 'Primary Action' });
    
    // Hacer click en el botón
    await primaryButton.click();
    
    // Verificar que el botón "Toggle Button" es visible después de la interacción
    // toBeVisible() valida que el elemento está en el DOM y es visible al usuario
    await expect(page.getByRole('button', { name: 'Toggle Button' })).toBeVisible();
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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el campo de username usando rol 'textbox'
    // La regex /username/i hace que la búsqueda sea case-insensitive
    const usernameInput = page.getByRole('textbox', { name: /username/i });
    
    // Llenar el campo con el valor 'TestUser'
    // fill() primero limpia el campo y luego escribe el nuevo valor
    await usernameInput.fill('TestUser');
    
    // Validar que el valor se ingresó correctamente
    // toHaveValue() verifica el atributo 'value' del input
    await expect(usernameInput).toHaveValue('TestUser');
  });
});
