import { test, expect } from '@playwright/test';
import { PracticePage } from '../../pages/practice.page';

/*
|--------------------------------------------------------------------------
| PAGE OBJECT MODEL - Tests Example
|--------------------------------------------------------------------------
| Estos tests demuestran cómo usar el Page Object Model para hacer
| tests más mantenibles y legibles.
| 
| Ventajas visibles:
| - Los tests son más cortos y expresivos
| - No hay locators duplicados
| - Cambios en UI solo afectan el page object
| - Lógica de interacción encapsulada
| 
| Comparación:
| 
| Sin POM:
|   await page.goto('/');
|   await page.locator('#name').fill('John Doe');
|   await page.locator('#email').fill('john@example.com');
| 
| Con POM:
|   await practicePage.navigate();
|   await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234', '123 Main St');
|--------------------------------------------------------------------------
*/

test.describe('Page Object Model Examples', () => {
  let practicePage: PracticePage;

  test.beforeEach(async ({ page }) => {
    // Inicializar page object
    practicePage = new PracticePage(page);
    
    // Navegar a la página
    await practicePage.navigate();
  });

  /*
  |--------------------------------------------------------------------------
  | TC-040: Form filling con POM
  |--------------------------------------------------------------------------
  | Llenar formulario completo usando un solo método del page object
  |--------------------------------------------------------------------------
  */
  test('TC-040: fill contact form using POM', async () => {
    // Llenar todo el formulario con un método
    await practicePage.fillContactForm(
      'John Doe',
      'john@example.com',
      '555-1234',
      '123 Main Street'
    );
    
    // Validar que los valores se guardaron
    expect(await practicePage.getInputValue(practicePage.nameInput)).toBe('John Doe');
    expect(await practicePage.getInputValue(practicePage.emailInput)).toBe('john@example.com');
    expect(await practicePage.getInputValue(practicePage.phoneInput)).toBe('555-1234');
  });

  /*
  |--------------------------------------------------------------------------
  | TC-041: Radio selection con POM
  |--------------------------------------------------------------------------
  | Seleccionar radio buttons usando método del page object
  |--------------------------------------------------------------------------
  */
  test('TC-041: select gender using POM', async () => {
    // Seleccionar género masculino
    await practicePage.selectGender('male');
    
    // Validar selección
    expect(await practicePage.isGenderSelected('male')).toBeTruthy();
    
    // Cambiar a femenino
    await practicePage.selectGender('female');
    
    // Validar que ahora femenino está seleccionado
    expect(await practicePage.isGenderSelected('female')).toBeTruthy();
  });

  /*
  |--------------------------------------------------------------------------
  | TC-042: Checkbox selection con POM
  |--------------------------------------------------------------------------
  | Seleccionar múltiples checkboxes usando método del page object
  |--------------------------------------------------------------------------
  */
  test('TC-042: select days using POM', async () => {
    // Seleccionar varios días
    await practicePage.selectDays(['sunday', 'monday']);
    
    // Validar que están seleccionados
    expect(await practicePage.isDaySelected('sunday')).toBeTruthy();
    expect(await practicePage.isDaySelected('monday')).toBeTruthy();
  });

  /*
  |--------------------------------------------------------------------------
  | TC-043: Alert handling con POM
  |--------------------------------------------------------------------------
  | Manejar alerts usando métodos del page object
  |--------------------------------------------------------------------------
  */
  test('TC-043: handle alert using POM', async ({ page }) => {
    // Registrar handler ANTES de hacer click
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBeTruthy();
      await dialog.accept();
    });
    
    // Click en alert button
    await practicePage.clickAlertButton();
  });

  /*
  |--------------------------------------------------------------------------
  | TC-044: Table interaction con POM
  |--------------------------------------------------------------------------
  | Interactuar con tablas usando métodos del page object
  |--------------------------------------------------------------------------
  */
  test('TC-044: read table data using POM', async () => {
    // Obtener número de filas de la tabla de productos (tiene paginación)
    const rowCount = await practicePage.getProductTableRowCount();
    
    // Validar que la tabla tiene filas
    expect(rowCount).toBeGreaterThan(0);
    
    // La tabla de productos es dinámica y siempre tiene datos
  });

  /*
  |--------------------------------------------------------------------------
  | TC-045: Fluent API con POM
  |--------------------------------------------------------------------------
  | Demostrar cómo encadenar acciones para crear un flujo completo
  |--------------------------------------------------------------------------
  */
  test('TC-045: fluent workflow using POM', async () => {
    // Flujo completo: llenar formulario + seleccionar género + días
    await practicePage.fillContactForm(
      'Jane Smith',
      'jane@example.com',
      '555-5678',
      '456 Oak Avenue'
    );
    
    await practicePage.selectGender('female');
    await practicePage.selectDays(['sunday']);
    
    // Validar estado final
    expect(await practicePage.getInputValue(practicePage.nameInput)).toBe('Jane Smith');
    expect(await practicePage.isGenderSelected('female')).toBeTruthy();
    expect(await practicePage.isDaySelected('sunday')).toBeTruthy();
  });
});

/*
|--------------------------------------------------------------------------
| Beneficios del POM visibles en estos tests
|--------------------------------------------------------------------------
| 
| 1. Legibilidad:
|    - practicePage.navigate() vs page.goto('/p/playwrightpractice.html')
|    - practicePage.selectPlan('standard') vs page.getByLabel('Standard').check()
| 
| 2. Mantenibilidad:
|    - Si cambia el locator de usernameInput, solo actualizamos practice.page.ts
|    - Todos los tests que usan ese locator se actualizan automáticamente
| 
| 3. Reutilización:
|    - fillRegistrationForm() se puede usar en múltiples tests
|    - No duplicamos lógica de interacción
| 
| 4. Testing:
|    - Más fácil de testear flujos complejos
|    - Métodos del POM se pueden unit testear por separado
| 
| 5. Documentación:
|    - El POM documenta qué acciones son posibles en la página
|    - Los nombres de métodos son autodocumentados
|--------------------------------------------------------------------------
*/
