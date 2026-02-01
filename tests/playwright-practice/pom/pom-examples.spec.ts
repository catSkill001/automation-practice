import { test, expect } from '@playwright/test';
import { PracticePage } from '../../../pages/practice.page';

/*
|--------------------------------------------------------------------------
| PAGE OBJECT MODEL (POM) - Ejemplos prácticos
|--------------------------------------------------------------------------
| El Page Object Model es un patrón de diseño que mejora la mantenibilidad
| de los tests al encapsular locators y lógica de interacción en clases.
| 
| Beneficios del POM:
| - Centralización: Un cambio en un locator se actualiza en un solo lugar
| - Reutilización: Los métodos del page object se usan en múltiples tests
| - Legibilidad: Los tests se enfocan en el "qué" no en el "cómo"
| - Mantenibilidad: Refactorización más fácil
| - Tipo seguro: TypeScript garantiza que uses los métodos correctamente
| 
| Estructura del proyecto:
| pages/
|   base.page.ts          - Funcionalidad común para todas las páginas
|   practice.page.ts      - Locators y métodos específicos de la página
| tests/
|   pom/
|     pom-examples.spec.ts - Tests usando los page objects (este archivo)
| 
| Documentación: https://playwright.dev/docs/pom
|--------------------------------------------------------------------------
*/

test.describe('Page Object Model Examples', () => {

  let practicePage: PracticePage;

  test.beforeEach(async ({ page }) => {
    // Inicializar el page object antes de cada test
    practicePage = new PracticePage(page);
    await practicePage.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await practicePage.waitForPageLoad();
  });

  /*
  |--------------------------------------------------------------------------
  | TC-040: Interacción básica con botones usando POM
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo usar el page object para interacciones simples
  | 
  | Comparación sin POM vs con POM:
  | 
  | Sin POM (directamente en el test):
  |   await page.locator('#alertBtn').click();
  | 
  | Con POM (usando el page object):
  |   await practicePage.clickAlertButton();
  | 
  | Ventaja: Si el ID cambia de #alertBtn a #alert-button,
  | solo actualizas practice.page.ts, no todos los tests
  | 
  | Pasos:
  |   1. Configurar handler para el alert
  |   2. Usar método clickAlertButton() del page object
  |   3. Validar que el alert se manejó correctamente
  | 
  | Resultado esperado:
  |   - Alert aparece y se acepta automáticamente
  |   - Test pasa sin interacción manual con locators
  | 
  | Conceptos clave:
  |   - Page object encapsula locators
  |   - Tests más limpios y legibles
  |--------------------------------------------------------------------------
  */
  test('TC-040: Interact with buttons using POM', async ({ page }) => {
    // TODO: Paso 1 - Configurar handler para alert
    // Usa page.on('dialog') para aceptar el alert automáticamente
    // Sintaxis:
    //   page.on('dialog', async dialog => {
    //     expect(dialog.message()).toBe('Alert triggered!');
    //     await dialog.accept();
    //   });
    
    
    // TODO: Paso 2 - Click en alert button usando POM
    // Usa practicePage.clickAlertButton()
    // Nota: No necesitas saber que el locator es #alertBtn
    // El page object encapsula esa información
    // Sintaxis: await practicePage.clickAlertButton();
    
    
    // TODO: BONUS - Compara con approach sin POM
    // Sin POM necesitarías:
    // await page.locator('#alertBtn').click();
    // 
    // Si el selector cambia a #alert-button:
    // - Sin POM: Actualizar en todos los tests que usan el botón
    // - Con POM: Actualizar solo en practice.page.ts
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-041: Llenar formulario usando método de alto nivel
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo métodos de alto nivel simplifican tests
  | 
  | Comparación sin POM vs con POM:
  | 
  | Sin POM:
  |   await page.locator('#name').fill('John Doe');
  |   await page.locator('#email').fill('john@example.com');
  |   await page.locator('#phone').fill('555-1234');
  | 
  | Con POM:
  |   await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234');
  | 
  | Ventaja: Una línea vs tres líneas, más legible y mantenible
  | 
  | Pasos:
  |   1. Usar fillContactForm() con datos de prueba
  |   2. Validar que los campos se llenaron correctamente
  | 
  | Resultado esperado:
  |   - Formulario llenado en una sola llamada
  |   - Valores correctos en cada campo
  | 
  | Conceptos clave:
  |   - Métodos de alto nivel encapsulan múltiples acciones
  |   - Tests más declarativos (qué hacer vs cómo hacerlo)
  |--------------------------------------------------------------------------
  */
  test('TC-041: Fill form using high-level method', async ({ page }) => {
    // TODO: Paso 1 - Llenar formulario usando POM
    // Usa practicePage.fillContactForm() con:
    // - name: 'John Doe'
    // - email: 'john@example.com'
    // - phone: '555-1234'
    // Sintaxis: await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234');
    
    
    // TODO: Paso 2 - Validar que los campos tienen los valores correctos
    // Aunque usamos el POM, aún podemos validar usando page
    // Usa page.locator('#name').inputValue() para obtener el valor
    // Sintaxis:
    //   const name = await page.locator('#name').inputValue();
    //   expect(name).toBe('John Doe');
    
    
    // TODO: Paso 3 - Validar email
    // const email = await page.locator('#email').inputValue();
    // expect(email).toBe('john@example.com');
    
    
    // TODO: Paso 4 - Validar phone
    // const phone = await page.locator('#phone').inputValue();
    // expect(phone).toBe('555-1234');
    
    
    // TODO: NOTA - POM para validaciones
    // Podrías agregar métodos getter en PracticePage:
    // async getNameValue(): Promise<string> {
    //   return await this.nameInput.inputValue();
    // }
    // 
    // Entonces validarías:
    // expect(await practicePage.getNameValue()).toBe('John Doe');
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-042: Seleccionar opciones usando POM
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar métodos para interactuar con radio buttons
  | 
  | Pasos:
  |   1. Usar selectGender() para seleccionar 'male'
  |   2. Validar que el radio button está checked
  |   3. Cambiar a 'female'
  |   4. Validar nuevo estado
  | 
  | Resultado esperado:
  |   - Radio buttons se seleccionan correctamente
  |   - Estado actualizado después de cada selección
  | 
  | Conceptos clave:
  |   - Métodos parametrizados en el page object
  |   - Validación de estado de elementos
  |--------------------------------------------------------------------------
  */
  test('TC-042: Select radio buttons using POM', async ({ page }) => {
    // TODO: Paso 1 - Seleccionar 'male' usando POM
    // Usa practicePage.selectGender('male')
    // Sintaxis: await practicePage.selectGender('male');
    
    
    // TODO: Paso 2 - Validar que male está checked
    // Usa page.locator('#male').isChecked()
    // Sintaxis:
    //   const isMaleChecked = await page.locator('#male').isChecked();
    //   expect(isMaleChecked).toBeTruthy();
    
    
    // TODO: Paso 3 - Cambiar a 'female'
    // await practicePage.selectGender('female');
    
    
    // TODO: Paso 4 - Validar nuevo estado
    // const isFemaleChecked = await page.locator('#female').isChecked();
    // expect(isFemaleChecked).toBeTruthy();
    // 
    // const isMaleStillChecked = await page.locator('#male').isChecked();
    // expect(isMaleStillChecked).toBeFalsy();
    
    
    // TODO: BONUS - Type safety
    // Nota que selectGender acepta solo 'male' | 'female'
    // Si intentas: practicePage.selectGender('other')
    // TypeScript mostrará error en tiempo de desarrollo
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-043: Manejar alerts con métodos del POM
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Combinar handlers de dialog con métodos del page object
  | 
  | Pasos:
  |   1. Configurar handler para diferentes tipos de dialogs
  |   2. Usar clickAlertButton() del POM
  |   3. Validar comportamiento correcto
  | 
  | Resultado esperado:
  |   - Alert manejado correctamente
  |   - Test pasa sin tocar locators directamente
  | 
  | Conceptos clave:
  |   - POM se combina con features de Playwright
  |   - Separación de concerns: handlers en test, locators en POM
  |--------------------------------------------------------------------------
  */
  test('TC-043: Handle alerts with POM methods', async ({ page }) => {
    let dialogMessage = '';
    
    // TODO: Paso 1 - Configurar handler para capturar mensaje
    // Usa page.on('dialog') para guardar el mensaje y aceptar
    // Sintaxis:
    //   page.on('dialog', async dialog => {
    //     dialogMessage = dialog.message();
    //     await dialog.accept();
    //   });
    
    
    // TODO: Paso 2 - Click en alert usando POM
    // await practicePage.clickAlertButton();
    
    
    // TODO: Paso 3 - Validar que se capturó el mensaje
    // expect(dialogMessage).toBeTruthy();
    // expect(dialogMessage.length).toBeGreaterThan(0);
    
    
    // TODO: BONUS - Múltiples tipos de dialogs
    // El page object podría tener:
    // - clickAlertButton()
    // - clickConfirmButton()
    // - clickPromptButton()
    // 
    // El handler en el test decide cómo manejar cada uno
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-044: Leer datos de tabla usando POM
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Usar métodos del POM para extraer datos de tablas
  | 
  | Pasos:
  |   1. Obtener primera fila de la tabla usando getBookTableRow()
  |   2. Validar estructura y contenido
  |   3. Obtener múltiples filas
  | 
  | Resultado esperado:
  |   - Datos extraídos correctamente
  |   - Array con valores de cada celda
  | 
  | Conceptos clave:
  |   - POM simplifica operaciones complejas de tabla
  |   - Retornar datos estructurados para validaciones
  |--------------------------------------------------------------------------
  */
  test('TC-044: Read table data using POM', async ({ page }) => {
    // TODO: Paso 1 - Obtener primera fila de la tabla
    // Usa practicePage.getBookTableRow(0)
    // Sintaxis: const firstRow = await practicePage.getBookTableRow(0);
    
    
    // TODO: Paso 2 - Validar que retorna un array
    // expect(Array.isArray(firstRow)).toBeTruthy();
    
    
    // TODO: Paso 3 - Validar que tiene el número correcto de columnas
    // La tabla de libros tiene 4 columnas
    // expect(firstRow.length).toBe(4);
    
    
    // TODO: Paso 4 - Imprimir los datos
    // console.log('First book row:', firstRow);
    
    
    // TODO: BONUS - Leer múltiples filas
    // Puedes obtener el count de filas desde el POM:
    // const rowCount = await practicePage.getProductTableRowCount();
    // 
    // Y leer todas las filas:
    // const allRows = [];
    // for (let i = 0; i < rowCount; i++) {
    //   const row = await practicePage.getBookTableRow(i);
    //   allRows.push(row);
    // }
    // console.log('All books:', allRows);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-045: Flujo completo usando POM (Fluent API)
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar un workflow completo encadenando métodos del POM
  | 
  | Pasos:
  |   1. Llenar formulario completo
  |   2. Seleccionar género
  |   3. Seleccionar días de la semana
  |   4. Leer datos de tabla
  |   5. Todo en un flujo limpio y legible
  | 
  | Resultado esperado:
  |   - Workflow completo ejecutado correctamente
  |   - Test legible, mantenible y reutilizable
  | 
  | Conceptos clave:
  |   - POM permite crear tests de alto nivel
  |   - Código declarativo vs imperativo
  |   - Fluent API (si implementas métodos que retornan this)
  |--------------------------------------------------------------------------
  */
  test('TC-045: Complete workflow using POM', async ({ page }) => {
    // TODO: Paso 1 - Llenar formulario de contacto
    // await practicePage.fillContactForm(
    //   'Jane Smith',
    //   'jane.smith@example.com',
    //   '555-9876'
    // );
    
    
    // TODO: Paso 2 - Seleccionar género
    // await practicePage.selectGender('female');
    
    
    // TODO: Paso 3 - Seleccionar días de la semana
    // await practicePage.selectDays(['monday', 'wednesday', 'friday']);
    
    
    // TODO: Paso 4 - Validar título de página
    // const title = await practicePage.getTitle();
    // expect(title).toContain('Automation');
    
    
    // TODO: Paso 5 - Obtener datos de tabla
    // const bookRow = await practicePage.getBookTableRow(0);
    // console.log('Book data:', bookRow);
    
    
    // TODO: Paso 6 - Validar que todo el workflow completó
    // expect(await page.locator('#name').inputValue()).toBe('Jane Smith');
    // expect(await page.locator('#female').isChecked()).toBeTruthy();
    // expect(await page.locator('#monday').isChecked()).toBeTruthy();
    
    
    // TODO: NOTA - Fluent API
    // Si implementas Fluent API en PracticePage, podrías encadenar:
    // 
    // await practicePage
    //   .fillContactForm('Jane Smith', 'jane@example.com', '555-9876')
    //   .selectGender('female')
    //   .selectDays(['monday', 'wednesday']);
    // 
    // Para implementar Fluent API:
    // 1. Cambia return type de Promise<void> a Promise<PracticePage>
    // 2. Retorna 'this' al final de cada método
    // 3. Permite encadenar llamadas
    
  });

  /*
  |--------------------------------------------------------------------------
  | BONUS: Comparación final - Con POM vs Sin POM
  |--------------------------------------------------------------------------
  | 
  | Test SIN POM (imperativo, acoplado a la implementación):
  | 
  | test('fill form without POM', async ({ page }) => {
  |   await page.goto('https://...');
  |   await page.waitForLoadState('networkidle');
  |   await page.locator('#name').fill('John Doe');
  |   await page.locator('#email').fill('john@example.com');
  |   await page.locator('#phone').fill('555-1234');
  |   await page.locator('#male').click();
  |   await page.locator('#monday').click();
  |   await page.locator('#wednesday').click();
  |   
  |   // Si #name cambia a #user-name:
  |   // Tienes que actualizar TODOS los tests que usan #name
  | });
  | 
  | Test CON POM (declarativo, desacoplado):
  | 
  | test('fill form with POM', async ({ page }) => {
  |   const practicePage = new PracticePage(page);
  |   await practicePage.goto('https://...');
  |   await practicePage.waitForPageLoad();
  |   await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234');
  |   await practicePage.selectGender('male');
  |   await practicePage.selectDays(['monday', 'wednesday']);
  |   
  |   // Si #name cambia a #user-name:
  |   // Solo actualizas practice.page.ts
  |   // Ningún test necesita cambios
  | });
  | 
  | Ventajas del POM:
  | - Tests más cortos y legibles
  | - Cambios centralizados
  | - Reutilización de código
  | - Type-safe con TypeScript
  | - Fácil de mantener y escalar
  |--------------------------------------------------------------------------
  */

});
