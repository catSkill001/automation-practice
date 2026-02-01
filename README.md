# Playwright Practice Suite

Proyecto completo de práctica de automatización con Playwright, organizado modularmente por categorías de funcionalidad.

## Descripción

Suite de tests end-to-end que cubre desde localizadores básicos hasta conceptos avanzados del DOM. Incluye 31 tests organizados en 6 categorías:

- **Locators**: 7 estrategias diferentes de localización (getByRole, getByText, getByLabel, etc.)
- **Tables**: Interacción con tablas estáticas y con paginación
- **Interactions**: Alertas, mouse actions, drag & drop, sliders
- **Files**: Upload de archivos individuales y múltiples
- **Navigation**: Tabs, ventanas y contenido dinámico
- **Advanced DOM**: iframes y Shadow DOM para entrevistas técnicas

## Prerrequisitos

- Node.js (versión LTS recomendada)
- npm

## Instalación

```bash
npm install
```

## Ejecutar tests

```bash
# Todos los tests (31 tests)
npx playwright test

# Por categoría
npx playwright test locators
npx playwright test tables
npx playwright test interactions
npx playwright test files
npx playwright test navigation
npx playwright test advanced-dom

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

- ✅ **ID de caso de prueba** (TC-001, TC-002, etc.)
- ✅ **Documentación JSDoc detallada** con descripción, objetivo y conceptos clave
- ✅ **Comentarios inline** explicando cada paso
- ✅ **Ejemplos de uso** de las APIs de Playwright
- ✅ **Mejores prácticas** y alternativas de implementación
- ✅ **Conceptos clave** explicados en español

## Conceptos clave cubiertos

### 🎯 Locators (getByRole, getByText, getByLabel, etc.)

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

### 📊 Tables

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

### 🖱️ Interactions

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

### 📁 File Upload

Upload de archivos usando `setInputFiles()`:

**Ejemplo:**
```typescript
await page.locator('#fileInput').setInputFiles('path/to/file.pdf');
await page.locator('#multipleFiles').setInputFiles(['file1.jpg', 'file2.png']);
```

### 🔗 Navigation

Manejo de múltiples tabs/ventanas y contenido dinámico:

**Ejemplo:**
```typescript
const [newPage] = await Promise.all([
### 🎯 Shadow DOM

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

## Próximos pasos

- [ ] Agregar tests de API con `request` fixture
- [ ] Implementar Page Object Model
- [ ] Agregar tests de accesibilidad con `@axe-core/playwright`
- [ ] Tests de visual regression con `@playwright/test`
- [ ] Configurar CI/CD con GitHub Actions