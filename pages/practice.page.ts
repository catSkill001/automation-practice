import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/*
|--------------------------------------------------------------------------
| PRACTICE PAGE OBJECT
|--------------------------------------------------------------------------
| Page Object específico para https://testautomationpractice.blogspot.com
| 
| Este page object contiene:
| - Todos los locators de elementos de la página
| - Métodos de interacción específicos de esta página
| - Lógica de negocio encapsulada
| 
| Ventajas:
| - Si cambia un selector, solo actualizas aquí (no en 20 tests)
| - Tests más legibles: fillContactForm() vs múltiples fills
| - Reutilización de lógica común
| - Tipo seguro con TypeScript
| 
| Patrón recomendado:
| 1. Definir locators como propiedades readonly
| 2. Crear métodos de alto nivel para flujos comunes
| 3. Mantener métodos enfocados en una sola responsabilidad
|--------------------------------------------------------------------------
*/

export class PracticePage extends BasePage {
  
  /*
  |--------------------------------------------------------------------------
  | LOCATORS - Form Elements
  |--------------------------------------------------------------------------
  | TODO: Implementar locators de formulario
  | 
  | Define los locators como propiedades readonly. Esto garantiza que
  | siempre usas la misma referencia y es type-safe.
  | 
  | Sintaxis:
  |   readonly nombreLocator: Locator = this.page.locator('selector');
  | 
  | Estrategia de selectores:
  | - Prioriza IDs si están disponibles: #name
  | - Usa getByRole() para accesibilidad
  | - Evita XPath complejo o selectores frágiles
  |--------------------------------------------------------------------------
  */
  
  // Form Inputs
  // TODO: Define locator para input de nombre
  // En la página real es: <input id="name" placeholder="Name">
  // Sintaxis: readonly nameInput: Locator = this.page.locator('#name');
  
  
  // TODO: Define locator para input de email
  // En la página real es: <input id="email" placeholder="Email">
  
  
  // TODO: Define locator para input de teléfono
  // En la página real es: <input id="phone" placeholder="Phone">
  
  
  /*
  |--------------------------------------------------------------------------
  | LOCATORS - Radio Buttons (Gender)
  |--------------------------------------------------------------------------
  | TODO: Implementar locators de radio buttons
  | 
  | En la página hay radio buttons para seleccionar género:
  | - <input id="male" type="radio" name="gender">
  | - <input id="female" type="radio" name="gender">
  |--------------------------------------------------------------------------
  */
  
  // TODO: Define locator para radio button Male
  // Sintaxis: readonly maleRadio: Locator = this.page.locator('#male');
  
  
  // TODO: Define locator para radio button Female
  
  
  /*
  |--------------------------------------------------------------------------
  | LOCATORS - Checkboxes (Days of Week)
  |--------------------------------------------------------------------------
  | TODO: Implementar locators de checkboxes
  | 
  | La página tiene checkboxes para días de la semana:
  | - <input id="sunday" type="checkbox">
  | - <input id="monday" type="checkbox">
  | - ... resto de días
  |--------------------------------------------------------------------------
  */
  
  // TODO: Define locators para checkboxes de días
  // Puedes hacer uno por día o un método que reciba el día como parámetro
  // Ejemplo: readonly sundayCheckbox: Locator = this.page.locator('#sunday');
  
  
  /*
  |--------------------------------------------------------------------------
  | LOCATORS - Buttons
  |--------------------------------------------------------------------------
  | TODO: Implementar locators de botones
  | 
  | Botones principales en la página:
  | - Alert button (id="alertBtn")
  | - Confirm button (id="confirmBtn")
  | - Prompt button (id="promptBtn")
  |--------------------------------------------------------------------------
  */
  
  // TODO: Define locator para botón de Alert
  // Sintaxis: readonly alertButton: Locator = this.page.locator('#alertBtn');
  
  
  // TODO: Define locator para botón de Confirm
  
  
  // TODO: Define locator para botón de Prompt
  
  
  /*
  |--------------------------------------------------------------------------
  | LOCATORS - Tables
  |--------------------------------------------------------------------------
  | TODO: Implementar locators de tablas
  | 
  | La página tiene dos tablas principales:
  | - Book table (#bookTable)
  | - Product table (#productTable)
  |--------------------------------------------------------------------------
  */
  
  // TODO: Define locator para la tabla de libros
  // Sintaxis: readonly bookTable: Locator = this.page.locator('#bookTable');
  
  
  // TODO: Define locator para la tabla de productos
  // Sintaxis: readonly productTable: Locator = this.page.locator('#productTable');
  
  
  /*
  |--------------------------------------------------------------------------
  | CONSTRUCTOR
  |--------------------------------------------------------------------------
  | Constructor que recibe Page y lo pasa a la clase base
  |--------------------------------------------------------------------------
  */
  constructor(page: Page) {
    super(page);
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: fillContactForm()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para llenar formulario de contacto
  | 
  | Este método encapsula la lógica de llenar los 3 campos principales:
  | nombre, email y teléfono.
  | 
  | Parámetros:
  |   - name: string
  |   - email: string
  |   - phone: string
  | 
  | Pasos:
  |   1. Fill nameInput con name
  |   2. Fill emailInput con email
  |   3. Fill phoneInput con phone
  | 
  | Retorna: Promise<void>
  | 
  | Ejemplo de uso:
  |   await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234');
  |--------------------------------------------------------------------------
  */
  async fillContactForm(name: string, email: string, phone: string): Promise<void> {
    // TODO: Implementar llenado de formulario
    // Usa this.nameInput.fill(), this.emailInput.fill(), this.phoneInput.fill()
    // Sintaxis:
    //   await this.nameInput.fill(name);
    //   await this.emailInput.fill(email);
    //   await this.phoneInput.fill(phone);
    
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: selectGender()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para seleccionar género
  | 
  | Método para hacer click en el radio button correspondiente
  | 
  | Parámetros:
  |   - gender: 'male' | 'female'
  | 
  | Pasos:
  |   1. Validar que gender es 'male' o 'female'
  |   2. Click en el radio button correspondiente
  | 
  | Retorna: Promise<void>
  | 
  | Ejemplo de uso:
  |   await practicePage.selectGender('male');
  |--------------------------------------------------------------------------
  */
  async selectGender(gender: 'male' | 'female'): Promise<void> {
    // TODO: Implementar selección de género
    // Usa condicional if/else o switch para elegir el radio correcto
    // Sintaxis:
    //   if (gender === 'male') {
    //     await this.maleRadio.click();
    //   } else {
    //     await this.femaleRadio.click();
    //   }
    
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: selectDays()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para seleccionar días de la semana
  | 
  | Método para marcar múltiples checkboxes de días
  | 
  | Parámetros:
  |   - days: string[] - Array con nombres de días en minúsculas
  |     Ejemplo: ['monday', 'wednesday', 'friday']
  | 
  | Pasos:
  |   1. Iterar sobre el array de días
  |   2. Para cada día, hacer click en el checkbox correspondiente
  | 
  | Retorna: Promise<void>
  | 
  | Ejemplo de uso:
  |   await practicePage.selectDays(['monday', 'friday']);
  |--------------------------------------------------------------------------
  */
  async selectDays(days: string[]): Promise<void> {
    // TODO: Implementar selección de días
    // Usa un loop for...of para iterar sobre days
    // Para cada día, localiza el checkbox usando page.locator(`#${day}`)
    // y haz click
    // Sintaxis:
    //   for (const day of days) {
    //     await this.page.locator(`#${day}`).click();
    //   }
    
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: clickAlertButton()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para hacer click en botón de Alert
  | 
  | Método simple que hace click en el botón que dispara un alert
  | 
  | Retorna: Promise<void>
  | 
  | Nota: Recuerda que para manejar el alert, necesitas usar page.on('dialog')
  | en el test antes de llamar este método
  | 
  | Ejemplo de uso:
  |   page.on('dialog', dialog => dialog.accept());
  |   await practicePage.clickAlertButton();
  |--------------------------------------------------------------------------
  */
  async clickAlertButton(): Promise<void> {
    // TODO: Implementar click en alert button
    // Usa this.alertButton.click()
    // Sintaxis: await this.alertButton.click();
    
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: getBookTableRow()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para leer fila de tabla de libros
  | 
  | Método para obtener los datos de una fila específica de la tabla de libros
  | 
  | Parámetros:
  |   - rowIndex: number - Índice de la fila (0-based)
  | 
  | Pasos:
  |   1. Localizar todas las celdas de la fila específica
  |   2. Obtener el textContent de cada celda
  |   3. Retornar array con los textos
  | 
  | Retorna: Promise<string[]>
  | 
  | Ejemplo de uso:
  |   const row = await practicePage.getBookTableRow(0);
  |   expect(row[1]).toBe('Selenium'); // Columna de Book Name
  |--------------------------------------------------------------------------
  */
  async getBookTableRow(rowIndex: number): Promise<string[]> {
    // TODO: Implementar lectura de fila de tabla
    // 1. Localiza la fila: this.bookTable.locator('tbody tr').nth(rowIndex)
    // 2. Obtén todas las celdas: .locator('td')
    // 3. Extrae textContent de cada celda usando all()
    // Sintaxis:
    //   const row = this.bookTable.locator('tbody tr').nth(rowIndex);
    //   const cells = await row.locator('td').all();
    //   const texts = await Promise.all(cells.map(cell => cell.textContent()));
    //   return texts.map(text => text || '');
    
    
    
    
    // Placeholder para que compile
    return [];
  }

  /*
  |--------------------------------------------------------------------------
  | MÉTODO: getProductTableRowCount()
  |--------------------------------------------------------------------------
  | TODO: Implementar método para contar filas de tabla de productos
  | 
  | Método para obtener el número total de filas en la tabla de productos
  | 
  | Retorna: Promise<number>
  | 
  | Ejemplo de uso:
  |   const count = await practicePage.getProductTableRowCount();
  |   expect(count).toBeGreaterThan(0);
  |--------------------------------------------------------------------------
  */
  async getProductTableRowCount(): Promise<number> {
    // TODO: Implementar conteo de filas
    // Usa this.productTable.locator('tbody tr').count()
    // Sintaxis: return await this.productTable.locator('tbody tr').count();
    
    
    // Placeholder para que compile
    return 0;
  }

  /*
  |--------------------------------------------------------------------------
  | BONUS: Fluent API Pattern
  |--------------------------------------------------------------------------
  | TODO: Considera implementar fluent API para encadenar métodos
  | 
  | El patrón Fluent API permite encadenar llamadas haciendo que los métodos
  | retornen 'this' en lugar de void.
  | 
  | Ejemplo:
  | 
  | async fillName(name: string): Promise<PracticePage> {
  |   await this.nameInput.fill(name);
  |   return this;
  | }
  | 
  | async fillEmail(email: string): Promise<PracticePage> {
  |   await this.emailInput.fill(email);
  |   return this;
  | }
  | 
  | Uso encadenado:
  | await practicePage
  |   .fillName('John')
  |   .fillEmail('john@example.com')
  |   .selectGender('male')
  |   .clickAlertButton();
  |--------------------------------------------------------------------------
  */
}
