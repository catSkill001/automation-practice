import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/*
|--------------------------------------------------------------------------
| PAGE OBJECT MODEL - Practice Page
|--------------------------------------------------------------------------
| Page Object para la página principal de práctica de Playwright.
| 
| Contiene:
| - Locators de todos los elementos de la página
| - Métodos para acciones comunes
| - Encapsula la complejidad de interacción con la UI
|--------------------------------------------------------------------------
*/

export class PracticePage extends BasePage {
  // === LOCATORS ===
  
  // Form fields (elementos reales de la página)
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly textareaInput: Locator;
  
  // Radio buttons (género)
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;
  
  // Checkboxes (días)
  readonly sundayCheckbox: Locator;
  readonly mondayCheckbox: Locator;
  
  // Dropdowns
  readonly countryDropdown: Locator;
  
  // Alerts
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  
  // Tables
  readonly bookTable: Locator;
  readonly productTable: Locator;
  
  constructor(page: Page) {
    super(page);
    
    // Initialize locators con elementos reales
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.textareaInput = page.locator('#textarea');
    
    this.maleRadio = page.locator('#male');
    this.femaleRadio = page.locator('#female');
    
    this.sundayCheckbox = page.locator('#sunday');
    this.mondayCheckbox = page.locator('#monday');
    
    this.countryDropdown = page.locator('#country');
    
    this.alertButton = page.locator('#alertBtn');
    this.confirmButton = page.locator('#confirmBtn');
    this.promptButton = page.locator('#promptBtn');
    
    this.bookTable = page.locator('table[name="BookTable"]');
    this.productTable = page.locator('#productTable');
  }

  // === ACTIONS ===

  /**
   * Navegar a la página de práctica
   */
  async navigate() {
    await this.goto('/');
    await this.waitForPageLoad();
  }

  /**
   * Llenar formulario de contacto completo
   */
  async fillContactForm(name: string, email: string, phone: string, address: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.textareaInput.fill(address);
  }

  /**
   * Seleccionar género
   */
  async selectGender(gender: 'male' | 'female') {
    if (gender === 'male') {
      await this.maleRadio.check();
    } else {
      await this.femaleRadio.check();
    }
  }

  /**
   * Seleccionar días de la semana
   */
  async selectDays(days: string[]) {
    for (const day of days) {
      const checkbox = this.page.locator(`#${day.toLowerCase()}`);
      await checkbox.check();
    }
  }

  /**
   * Click en alert button (el handler debe registrarse antes en el test)
   */
  async clickAlertButton() {
    await this.alertButton.click();
  }

  /**
   * Click en confirm button (el handler debe registrarse antes en el test)
   */
  async clickConfirmButton() {
    await this.confirmButton.click();
  }

  /**
   * Click en prompt button (el handler debe registrarse antes en el test)
   */
  async clickPromptButton() {
    await this.promptButton.click();
  }

  /**
   * Obtener datos de una fila de la tabla de libros
   */
  async getBookTableRow(rowIndex: number): Promise<string[]> {
    const row = this.bookTable.locator('tbody tr').nth(rowIndex);
    const cells = await row.locator('td').all();
    const texts = await Promise.all(cells.map(cell => cell.textContent()));
    return texts.map(text => text?.trim() || '');
  }

  /**
   * Buscar en tabla de productos por texto
   */
  async searchInProductTable(searchText: string): Promise<boolean> {
    const rows = await this.productTable.locator('tbody tr').all();
    
    for (const row of rows) {
      const text = await row.textContent();
      if (text?.includes(searchText)) {
        return true;
      }
    }
    
    return false;
  }

  /**
   * Contar filas en tabla de productos
   */
  async getProductTableRowCount(): Promise<number> {
    return await this.productTable.locator('tbody tr').count();
  }

  // === ASSERTIONS (helper methods) ===

  /**
   * Validar valor de input
   */
  async getInputValue(input: Locator): Promise<string> {
    return await input.inputValue();
  }

  /**
   * Validar que radio está seleccionado
   */
  async isGenderSelected(gender: 'male' | 'female'): Promise<boolean> {
    const radio = gender === 'male' ? this.maleRadio : this.femaleRadio;
    return await radio.isChecked();
  }

  /**
   * Validar que checkbox está marcado
   */
  async isDaySelected(day: string): Promise<boolean> {
    const checkbox = this.page.locator(`#${day.toLowerCase()}`);
    return await checkbox.isChecked();
  }
}
