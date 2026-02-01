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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // === Campo de Email ===
    // Localizar el input asociado al label "Email Address"
    const emailInput = page.getByLabel('Email Address');
    
    // Llenar con un email de prueba
    await emailInput.fill('test@example.com');
    
    // Validar que el email se guardó correctamente
    await expect(emailInput).toHaveValue('test@example.com');
    
    // === Campo de Password ===
    // Localizar el input asociado al label "Password"
    const passwordInput = page.getByLabel('Password');
    
    // Llenar con un password de prueba
    // Nota: Playwright NO oculta visualmente el texto en logs
    await passwordInput.fill('SecurePass123');
    
    // Validar que el password se guardó (el valor está en el DOM)
    await expect(passwordInput).toHaveValue('SecurePass123');
    
    // === Campo de Age ===
    // Localizar el input asociado al label "Your Age"
    const ageInput = page.getByLabel('Your Age');
    
    // Llenar con un número (fill acepta strings)
    await ageInput.fill('25');
    
    // Validar que la edad se guardó correctamente
    await expect(ageInput).toHaveValue('25');
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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el radio button asociado al label "Standard"
    // getByLabel busca el input conectado al label que contiene "Standard"
    const standardRadio = page.getByLabel('Standard');
    
    // Seleccionar el radio button
    // check() es preferible a click() para elementos checkables
    // porque comunica claramente la intención
    await standardRadio.check();
    
    // Validar que el radio button quedó seleccionado
    // toBeChecked() verifica el estado 'checked' del input
    await expect(standardRadio).toBeChecked();
  });
});
