# Playwright Practice Suite

Proyecto completo de práctica de automatización con Playwright, organizado modularmente por categorías de funcionalidad.

## Descripción

Suite de tests end-to-end que cubre desde localizadores básicos hasta conceptos avanzados del DOM. **53 tests** organizados en categorías:

### Tests Básicos (31 tests)

- **Locators** (7 tests): Estrategias de localización (getByRole, getByText, getByLabel, etc.)
- **Tables** (2 tests): Interacción con tablas estáticas y con paginación
- **Interactions** (8 tests): Alertas, mouse actions, drag & drop, sliders
- **Files** (4 tests): Upload y download de archivos
- **Navigation** (4 tests): Tabs, ventanas y contenido dinámico
- **Advanced DOM** (6 tests): iframes y Shadow DOM para entrevistas técnicas

### Features Avanzadas (22 tests)

- **API Tests** (5 tests): Validación de endpoints REST con `request` fixture
- **Visual Regression** (5 tests): Detección de cambios visuales con screenshots
- **Accessibility** (6 tests): Validación WCAG con `@axe-core/playwright`
- **Page Object Model** (6 tests): Patrón de diseño para mantenibilidad

## Prerrequisitos

- Node.js (versión LTS recomendada)
- npm

## Instalación

```bash
npm install
```

## Ejecutar tests

```bash
# Todos los tests (53 tests)
npx playwright test

# Tests básicos por categoría
npx playwright test locators
npx playwright test tables
npx playwright test interactions
npx playwright test files
npx playwright test navigation
npx playwright test advanced-dom

# Features avanzadas
npx playwright test tests/api/              # API tests (5)
npx playwright test tests/visual/           # Visual regression (5)
npx playwright test tests/accessibility/    # Accessibility (6)
npx playwright test tests/pom/              # Page Object Model (6)

# Tests específicos
npx playwright test frames              # Solo iframes
npx playwright test shadow-dom          # Solo Shadow DOM
npx playwright test getByRole           # Solo locators por role

# Con browser visible
npx playwright test --headed

# Modo debug
npx playwright test --debug

# Ver reporte HTML
npx playwright show-report
```

## Configuración

- **Base URL**: <https://testautomationpractice.blogspot.com>
- **Headless**: false (para práctica visual), true en CI
- **Workers**: 1
- **Timeout**: 30 segundos

## Características del código

Cada test incluye:

- **ID de caso de prueba** (TC-001, TC-002, etc.)
- **Documentación JSDoc detallada** con descripción, objetivo y conceptos clave
- **Comentarios inline** explicando cada paso
- **Ejemplos de uso** de las APIs de Playwright
- **Mejores prácticas** y alternativas de implementación
- **Conceptos clave** explicados en español

## Conceptos clave cubiertos

### Locators (getByRole, getByText, getByLabel, etc.)

Interacción con contenido dentro de iframes:

- `page.frameLocator()`: API moderna, devuelve un FrameLocator
- `locator.contentFrame()`: Obtiene el Frame desde un elemento iframe
- Los tests crean iframes dinámicamente con `srcdoc` para mayor control

**Ejemplo:**

```typescript
const frame = page.frameLocator('#my-iframe');
await frame.locator('input').fill('test');
```

Playwright ofrece múltiples estrategias de localización semánticas que priorizan accesibilidad:

- `getByRole()`: Localiza por rol ARIA (button, textbox, heading, etc.)
- `getByText()`: Busca por texto visible exacto o regex
- `getByLabel()`: Asocia con labels de formularios
- `getByPlaceholder()`: Usa el atributo placeholder
- `getByAltText()`: Para imágenes con texto alternativo
- `getByTitle()`: Elementos con atributo title
- `getByTestId()`: Atributo data-testid para testing

**Ejemplo:**

```typescript
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByLabel('Email').fill('test@test.com');
await page.getByPlaceholder('Search...').fill('Playwright');
```

### Tables

Navegación y extracción de datos desde tablas HTML con paginación.

**Ejemplo:**

```typescript
const table = page.locator('#productTable tbody tr');
const rows = await table.count();
for (let i = 0; i < rows; i++) {
  const name = await table.nth(i).locator('td').nth(1).textContent();
  console.log(name);
}
```

### Interactions

Simulación de acciones complejas:

- **Alerts**: `page.on('dialog')` para manejar alert, confirm, prompt
- **Hover**: `locator.hover()` para mostrar tooltips/menús
- **Double Click**: `locator.dblclick()`
- **Drag & Drop**: `locator.dragTo(target)`

**Ejemplo:**

```typescript
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});
await page.getByRole('button', { name: 'Alert' }).click();
```

### File Upload

Upload de archivos usando `setInputFiles()`:

**Ejemplo:**

```typescript
await page.locator('#fileInput').setInputFiles('path/to/file.pdf');
await page.locator('#multipleFiles').setInputFiles(['file1.jpg', 'file2.png']);
```

### Navigation

Manejo de múltiples tabs/ventanas y contenido dinámico:

**Ejemplo:**

```typescript
const [newPage] = await Promise.all([
### Shadow DOM

Acceso a elementos encapsulados en Shadow Root:

- Usar `evaluate()` o `evaluateHandle()` para acceder al shadowRoot
- Buscar elementos con `shadowRoot.querySelector()`
- La página de práctica tiene Shadow DOM real en `#shadow_host`

**Ejemplo:**
```typescript
const value = await page.evaluate(() => {)`
- El ID real en la página de práctica es `#shadow_host`

**Ejemplo:**

```typescript
const shadowContent = await page.evaluate(() => {
  const shadowHost = document.querySelector('#shadow_host');
  const shadowRoot = shadowHost.shadowRoot;
  const input = shadowRoot.querySelector('input[type="text"]');
  input.value = 'Test';
  return input.value;
});
```

## Tips para live coding

y mejores prácticas

### Para desarrollo y debugging

1. **`--headed`**: Ver el browser mientras corre el test
2. **`--debug`**: Pausar ejecución y explorar selectores en Playwright Inspector
3. **`--ui`**: Modo UI interactivo para ver resultados en tiempo real
4. **Locators semánticos**: Priorizar `getByRole()`, `getByLabel()`, `getByText()` por accesibilidad
5. **Esperas automáticas**: Playwright espera automáticamente, evitar `waitForTimeout()` salvo casos especiales

### Para entrevistas técnicas

1. **iframes**: Los tests crean iframes dinámicamente con `srcdoc` para demostrar control total
2. **Shadow DOM**: Usar `evaluate()` para acceder al shadowRoot y luego `querySelector()`
3. **Validaciones**: Siempre usar `expect()` después de interacciones
4. **Page Object Model**: Para proyectos reales, considera POM para mantenibilidad
5. **Selectores robustos**: Evitar selectores frágiles como IDs generados o XPaths complejos

## Features Avanzadas

### Tests de API

Suite de tests para validar endpoints REST usando el fixture `request` de Playwright (sin necesidad de browser):

**Ubicación**: `tests/api/api-tests.spec.ts`

**Tests incluidos** (5 casos):

- TC-024: GET request con validación de status y estructura
- TC-025: POST request creando recursos
- TC-026: Validación de arrays y data filtering
- TC-027: Headers personalizados y validaciones
- TC-028: Manejo de errores 404

**Ejemplo:**

```typescript
test('TC-024: GET request to retrieve a single user', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.ok()).toBeTruthy();
  const user = await response.json();
  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name');
});
```

**Ejecutar:**

```bash
npx playwright test tests/api/
```

### Visual Regression Testing

Tests para detectar cambios visuales inesperados usando `toHaveScreenshot()`:

**Ubicación**: `tests/visual/visual-regression.spec.ts`

**Tests incluidos** (5 casos):

- TC-029: Screenshot de página completa
- TC-030: Screenshot de elemento específico
- TC-031: Screenshot con elementos enmascarados
- TC-032: Threshold personalizado para tolerancia
- TC-033: Captura de modal en estado específico

**Primera ejecución** (crea screenshots base):

```bash
npx playwright test tests/visual/ --update-snapshots
```

**Validación posterior**:

```bash
npx playwright test tests/visual/
```

**Ejemplo:**

```typescript
await expect(page).toHaveScreenshot('homepage.png', {
  mask: [page.locator('.ad-banner')],
  maxDiffPixels: 100
});
```

### Tests de Accesibilidad

Validación de WCAG usando `@axe-core/playwright` para encontrar problemas de accesibilidad:

**Ubicación**: `tests/accessibility/accessibility.spec.ts`

**Tests incluidos** (6 casos):

- TC-034: Scan completo de página
- TC-035: Validación WCAG Level A
- TC-036: Validación de formularios accesibles
- TC-037: Exclusión de elementos third-party
- TC-038: Validación de contraste de colores
- TC-039: Reporte detallado con análisis completo

**Ejecutar:**

```bash
npx playwright test tests/accessibility/
```

**Ejemplo:**

```typescript
const accessibilityScanResults = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa'])
  .analyze();
expect(accessibilityScanResults.violations).toEqual([]);
```

**Niveles WCAG cubiertos**:

- **Level A**: Requisitos básicos de accesibilidad
- **Level AA**: Estándar recomendado (incluye contraste de colores)
- **Level AAA**: Máximo nivel de accesibilidad

### Page Object Model (POM)

Patrón de diseño que encapsula locators y lógica de interacción para mejor mantenibilidad:

**Estructura**:

- `pages/base.page.ts`: Clase base con funcionalidad común
- `pages/practice.page.ts`: Page object específico con 40+ locators y métodos
- `tests/pom/pom-examples.spec.ts`: 6 tests demostrativos

**Tests incluidos** (6 casos):

- TC-040: Interacción con botones usando POM
- TC-041: Llenar formulario completo
- TC-042: Selección de radio buttons
- TC-043: Manejo de alerts
- TC-044: Lectura de datos de tabla
- TC-045: Fluent API workflow

**Ejecutar:**

```bash
npx playwright test tests/pom/
```

**Beneficios del POM**:

- Centralización de locators (un solo lugar para actualizarlos)
- Código más legible y mantenible
- Reutilización de lógica común
- Tests más cortos y enfocados en el flujo de negocio
- Facilita refactorización

**Ejemplo de uso:**

```typescript
// Sin POM
await page.getByRole('textbox', { name: 'Name:' }).fill('John Doe');
await page.getByRole('textbox', { name: 'Email:' }).fill('john@example.com');

// Con POM
await practicePage.fillContactForm('John Doe', 'john@example.com', '555-1234');
```

### CI/CD con GitHub Actions

Pipeline automatizado que ejecuta tests en cada push/PR:

**Ubicación**: `.github/workflows/playwright.yml`

**Features implementadas**:

- **Matrix testing**: 3 OS (Ubuntu, Windows, macOS) × 3 browsers (Chromium, Firefox, WebKit) = 9 combinaciones
- **Jobs separados**: UI tests, API tests, accessibility tests, visual tests
- **Artifact uploads**: Reportes y screenshots por 30 días
- **Cache de browsers**: Reduce tiempo de instalación
- **Scheduled runs**: Tests diarios a las 2 AM UTC
- **Manual trigger**: Ejecutar workflow manualmente desde GitHub
- **Combined summary**: Reporte consolidado de todos los jobs

**Triggers configurados**:

- Push a `main` o branches `practice/**`
- Pull requests a `main`
- Cron diario
- Manual desde Actions tab

**Ver resultados en GitHub**:

1. Ve a la pestaña "Actions" en tu repositorio
2. Selecciona un workflow run
3. Descarga artifacts con reportes HTML y screenshots
