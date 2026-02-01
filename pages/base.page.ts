import { Page, Locator } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| PAGE OBJECT MODEL - Base Page
|--------------------------------------------------------------------------
| Clase base que contiene funcionalidad común a todas las páginas.
| 
| Ventajas del POM:
| - Código más mantenible y reutilizable
| - Separación de concerns (tests vs locators)
| - Cambios en UI solo requieren actualizar el page object
| - Tests más legibles y expresivos
| 
| Estructura:
| - Locators: Propiedades con los elementos de la página
| - Actions: Métodos que representan acciones del usuario
| - Assertions: Métodos de validación (opcional)
|--------------------------------------------------------------------------
*/

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navegar a una ruta relativa
   */
  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  /**
   * Esperar que la página cargue
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Obtener el título de la página
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Tomar screenshot
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}
