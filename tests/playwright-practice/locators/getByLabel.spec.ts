import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByLabel()
|--------------------------------------------------------------------------
| getByLabel() localiza form controls por el texto de su label asociado.
| 
| Ventajas:
| - Refleja cómo los usuarios encuentran campos (leyendo labels)
| - Garantiza accesibilidad (labels conectados con inputs)
| - Más resistente que usar IDs o names
| 
| Casos de uso:
| - Llenar formularios
| - Seleccionar checkboxes/radios
| - Interactuar con cualquier campo con <label>
| 
| Requisitos:
| - El input debe tener un <label> asociado vía 'for' attribute
| - O estar dentro del <label> (implicit association)
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-label
|--------------------------------------------------------------------------
*/

test.describe('getByLabel Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-005: Llenar formulario completo usando getByLabel
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo llenar múltiples campos de un formulario usando labels
  | 
  | Precondiciones:
  |   - La página debe tener inputs con labels asociados
  |   - Los labels deben tener texto: "Email Address", "Password", "Your Age"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar y llenar el campo "Email Address"
  |   3. Validar que el email se guardó correctamente
  |   4. Localizar y llenar el campo "Password"
  |   5. Validar que el password se guardó
  |   6. Localizar y llenar el campo "Your Age"
  |   7. Validar que la edad se guardó
  | 
  | Resultado esperado:
  |   - Todos los campos aceptan los valores
  |   - Los valores persisten en los inputs
  |   - No hay errores de localización
  | 
  | Conceptos clave:
  |   - getByLabel('texto del label'): Busca por el label asociado
  |   - fill(): Método para escribir en inputs
  |   - toHaveValue(): Assertion para validar el valor actual
  |   - Este approach es ideal para formularios complejos
  |--------------------------------------------------------------------------
  */
  test('fill form using getByLabel', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    
    
    // === Campo de Email ===
    // TODO: Paso 2 - Localizar el campo "Email Address"
    // Usa page.getByLabel() con el texto 'Email Address'
    // Guarda el locator en emailInput
    
    
    // TODO: Paso 3 - Llenar el campo con 'test@example.com'
    // Usa el método .fill()
    
    
    // TODO: Paso 4 - Validar que el email se guardó correctamente
    // Usa expect() con toHaveValue('test@example.com')
    
    
    // === Campo de Password ===
    // TODO: Paso 5 - Localizar el campo "Password"
    // Usa page.getByLabel('Password') y guárdalo en passwordInput
    
    
    // TODO: Paso 6 - Llenar con 'SecurePass123'
    
    
    // TODO: Paso 7 - Validar que el password se guardó
    
    
    // === Campo de Age ===
    // TODO: Paso 8 - Localizar el campo "Your Age"
    // Guárdalo en ageInput
    
    
    // TODO: Paso 9 - Llenar con '25'
    // Nota: fill() acepta strings, no es necesario convertir a número
    
    
    // TODO: Paso 10 - Validar que la edad se guardó
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-006: Seleccionar radio button usando getByLabel
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo seleccionar radio buttons por su label
  | 
  | Precondiciones:
  |   - La página debe tener radio buttons con labels
  |   - Debe existir un radio button con label "Standard"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el radio button "Standard" por su label
  |   3. Seleccionar el radio button usando check()
  |   4. Validar que el radio button quedó seleccionado
  | 
  | Resultado esperado:
  |   - El radio button se selecciona correctamente
  |   - La validación toBeChecked() pasa
  | 
  | Conceptos clave:
  |   - getByLabel() funciona con checkboxes y radio buttons
  |   - check(): Método específico para seleccionar (más semántico que click)
  |   - toBeChecked(): Valida que el elemento tiene atributo 'checked'
  |   - check() es idempotente (si ya está checked, no hace nada)
  |--------------------------------------------------------------------------
  */
  test('select radio button using getByLabel', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    
    
    // TODO: Paso 2 - Localizar el radio button "Standard"
    // Usa page.getByLabel() con el texto 'Standard'
    // Guarda el locator en standardRadio
    // Sintaxis: page.getByLabel('texto-del-label')
    
    
    // TODO: Paso 3 - Seleccionar el radio button
    // Usa el método .check() (NO uses click())
    // check() es más semántico para elementos checkables
    // Ejemplo: await variable.check();
    
    
    // TODO: Paso 4 - Validar que el radio button está seleccionado
    // Usa expect() con toBeChecked()
    // Sintaxis: await expect(variable).toBeChecked();
    
  });
});
