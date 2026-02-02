import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class PracticePage extends BasePage {

  // Add your locators here - Locator es una referencia a un elemento de la página web:
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  
  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#email');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  // Add your methods here - Los métodos son acciones que el usuario puede hacer en esa página:
    async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }
  
  async clickSubmit() {
    await this.submitButton.click();
  }
  
  async submitForm(email: string) {
    await this.fillEmail(email);
    await this.clickSubmit();
  }
}

// sin POM
// await page.locator('#email').fill('test@example.com');
//await page.getByRole('button', { name: 'Submit' }).click();

// with POM
// await practicePage.submitForm('test@example.com');