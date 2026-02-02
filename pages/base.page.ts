import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Métodos comunes a TODAS las páginas - reutilizables en cualquier Page Object
  
  async goto(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `${name}.png` });
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}

// BasePage contiene métodos GENÉRICOS que todas las páginas pueden usar
// PracticePage (y otras) heredan estos métodos con "extends BasePage"
// Así evitamos duplicar código en cada Page Object
