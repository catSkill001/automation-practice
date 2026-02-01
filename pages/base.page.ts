import { Page } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| BASE PAGE CLASS - Funcionalidad común para todos los Page Objects
|--------------------------------------------------------------------------
| El patrón Page Object Model (POM) organiza el código de tests en clases
| que representan páginas o componentes. BasePage contiene funcionalidad
| compartida que todas las páginas necesitan.
| 
| Ventajas del POM:
| - Centralización: Locators en un solo lugar, fácil de actualizar
| - Reutilización: Métodos comunes compartidos entre tests
| - Mantenibilidad: Cambios en la UI solo requieren actualizar el page object
| - Legibilidad: Tests más limpios, enfocados en el flujo de negocio
| - Escalabilidad: Fácil agregar nuevas páginas y componentes
| 
| Estructura recomendada:
| pages/
|   base.page.ts          (esta clase - funcionalidad común)
|   practice.page.ts      (página específica con locators)
|   components/
|     header.component.ts (componentes reutilizables)
|     modal.component.ts
| tests/
|   pom/
|     pom-examples.spec.ts (tests usando los page objects)
| 
| Documentación: https://playwright.dev/docs/pom
|--------------------------------------------------------------------------
*/

export class BasePage {
  readonly page: Page;

  /*
  |--------------------------------------------------------------------------
  | Constructor
  |--------------------------------------------------------------------------
  | TODO: Entender el constructor
  | 
  | El constructor recibe la instancia de Page de Playwright y la guarda
  | como propiedad readonly (solo lectura). Esto permite que todos los
  | métodos de la clase accedan a page.
  | 
  | Uso:
  |   const basePage = new BasePage(page);
  |--------------------------------------------------------------------------
  */
  constructor(page: Page) {
    // TODO: Asignar page a this.page
    // Esto hace que page esté disponible en todos los métodos
    // Sintaxis: this.page = page;
    this.page = page;
  }

  /*
  |--------------------------------------------------------------------------
  | goto() - Navegar a una URL
  |--------------------------------------------------------------------------
  | TODO: Implementar método de navegación
  | 
  | Este método permite navegar a cualquier URL. Es útil tenerlo en la
  | clase base porque todas las páginas necesitan navegación.
  | 
  | Pasos:
  |   1. Usar this.page.goto() con la URL recibida
  |   2. El método debe ser async
  |   3. Retorna Promise<void>
  | 
  | Ejemplo de uso:
  |   await basePage.goto('https://example.com');
  |--------------------------------------------------------------------------
  */
  async goto(url: string): Promise<void> {
    // TODO: Implementar navegación
    // Usa this.page.goto() con el parámetro url
    // Sintaxis: await this.page.goto(url);
    await this.page.goto(url);
  }

  /*
  |--------------------------------------------------------------------------
  | waitForPageLoad() - Esperar carga completa de la página
  |--------------------------------------------------------------------------
  | TODO: Implementar método de espera
  | 
  | Espera a que la página termine de cargar completamente. Útil después
  | de navegaciones o acciones que cargan contenido dinámico.
  | 
  | Estados de carga disponibles:
  |   - 'load': Evento load disparado (HTML parseado)
  |   - 'domcontentloaded': DOM construido
  |   - 'networkidle': No hay requests de red por 500ms
  | 
  | Pasos:
  |   1. Usar this.page.waitForLoadState()
  |   2. Por defecto usa 'networkidle' para mayor estabilidad
  |   3. Retorna Promise<void>
  | 
  | Ejemplo de uso:
  |   await basePage.waitForPageLoad();
  |--------------------------------------------------------------------------
  */
  async waitForPageLoad(): Promise<void> {
    // TODO: Implementar espera de carga
    // Usa this.page.waitForLoadState('networkidle')
    // networkidle garantiza que no hay requests pendientes
    // Sintaxis: await this.page.waitForLoadState('networkidle');
    
  }

  /*
  |--------------------------------------------------------------------------
  | getTitle() - Obtener título de la página
  |--------------------------------------------------------------------------
  | TODO: Implementar método para obtener título
  | 
  | Retorna el título de la página actual (contenido del tag <title>).
  | Útil para validaciones básicas de navegación.
  | 
  | Pasos:
  |   1. Usar this.page.title()
  |   2. Retorna Promise<string>
  | 
  | Ejemplo de uso:
  |   const title = await basePage.getTitle();
  |   expect(title).toContain('Practice');
  |--------------------------------------------------------------------------
  */
  async getTitle(): Promise<string> {
    // TODO: Implementar obtener título
    // Usa this.page.title() que retorna el título de la página
    // Sintaxis: return await this.page.title();
    return await this.page.title();
  }

  /*
  |--------------------------------------------------------------------------
  | takeScreenshot() - Capturar screenshot de la página
  |--------------------------------------------------------------------------
  | TODO: Implementar método de screenshot
  | 
  | Captura un screenshot de la página actual. Útil para debugging,
  | reportes visuales, o evidencia de tests.
  | 
  | Pasos:
  |   1. Usar this.page.screenshot()
  |   2. Recibe objeto con opciones: path, fullPage
  |   3. Retorna Promise<Buffer>
  | 
  | Options disponibles:
  |   - path: Ruta donde guardar el screenshot
  |   - fullPage: true captura toda la página con scroll
  |   - type: 'png' | 'jpeg'
  |   - quality: 0-100 (solo para jpeg)
  | 
  | Ejemplo de uso:
  |   await basePage.takeScreenshot('screenshots/homepage.png', true);
  |--------------------------------------------------------------------------
  */
  async takeScreenshot(path: string, fullPage: boolean = false): Promise<Buffer> {
    // TODO: Implementar captura de screenshot
    // Usa this.page.screenshot() con options:
    // - path: ruta donde guardar
    // - fullPage: si capturar toda la página
    // Sintaxis: return await this.page.screenshot({ path, fullPage });
    return await this.page.screenshot({ path, fullPage });
  }

  /*
  |--------------------------------------------------------------------------
  | BONUS: Métodos adicionales útiles
  |--------------------------------------------------------------------------
  | TODO: Considera agregar estos métodos según necesidades del proyecto
  | 
  | async getURL(): Promise<string> {
  |   return this.page.url();
  | }
  | 
  | async reload(): Promise<void> {
  |   await this.page.reload();
  | }
  | 
  | async goBack(): Promise<void> {
  |   await this.page.goBack();
  | }
  | 
  | async goForward(): Promise<void> {
  |   await this.page.goForward();
  | }
  | 
  | async waitForSelector(selector: string, options?: { timeout?: number }): Promise<void> {
  |   await this.page.waitForSelector(selector, options);
  | }
  | 
  | async isVisible(selector: string): Promise<boolean> {
  |   return await this.page.locator(selector).isVisible();
  | }
  |--------------------------------------------------------------------------
  */
}
