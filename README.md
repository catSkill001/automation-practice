# Playwright Practice Suite - Template Branch

## RAMA TEMPLATE - Para Práctica

Esta es la **rama template** del proyecto. Los tests están en formato TODO para que practiques escribiendo el código desde cero.

**¿Buscas las respuestas?** → Revisa la rama `main`

## Descripción

Suite de tests end-to-end con **53 casos de prueba** organizados en 10 categorías. Cada test incluye:

- Documentación JSDoc completa con objetivo y conceptos clave
- TODOs numerados paso a paso (Paso 1, Paso 2, etc.)
- Instrucciones claras de qué hacer en cada paso
- Ejemplos de sintaxis y hints de APIs de Playwright
- Espacios para escribir tu código

### Tests Básicos (31 ejercicios - TC-001 a TC-023)

- **Locators** (7 tests): 7 estrategias de localización (getByRole, getByText, getByLabel, getByPlaceholder, getByAltText, getByTitle, getByTestId)
- **Tables** (2 tests): Interacción con tablas estáticas y con paginación
- **Interactions** (8 tests): Alertas, mouse actions, drag & drop, sliders
- **Files** (4 tests): Upload de archivos individuales y múltiples
- **Navigation** (4 tests): Tabs, ventanas y contenido dinámico
- **Advanced DOM** (6 tests): iframes y Shadow DOM para entrevistas técnicas

### Features Avanzadas (22 ejercicios - TC-024 a TC-045)

- **API Tests** (5 tests - TC-024 a TC-028): Testing de APIs REST sin browser
- **Visual Regression** (5 tests - TC-029 a TC-033): Detección de cambios visuales con screenshots
- **Accessibility** (6 tests - TC-034 a TC-039): Validación WCAG con axe-core
- **Page Object Model** (6 tests - TC-040 a TC-045): Patrón de diseño para mantenibilidad

## Prerrequisitos

### Software necesario

- **Node.js** - Versión LTS (Long Term Support) más reciente
  - Verifica tu versión: `node --version`
  - Descarga desde: [nodejs.org](https://nodejs.org/)
  - Se recomienda usar la versión LTS activa

- **npm** - Incluido con Node.js
  - Verifica tu versión: `npm --version`

- **Git** - Para clonar el repositorio
  - Verifica: `git --version`

### Extensiones recomendadas para VS Code

El proyecto incluye un archivo `.vscode/extensions.json` que recomienda automáticamente:

- **Playwright Test for VSCode** (`ms-playwright.playwright`) - Ejecutar y debug tests
- **ESLint** (`dbaeumer.vscode-eslint`) - Linting de código
- **Prettier** (`esbenp.prettier-vscode`) - Formateo de código
- **GitLens** (`eamodio.gitlens`) - Git supercharged

VS Code te sugerirá instalarlas al abrir el proyecto.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/catSkill001/automation-practice.git
cd automation-practice
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar browsers de Playwright

```bash
npx playwright install
```

Esto descarga Chromium, Firefox y WebKit.

### 4. Verificar instalación

```bash
npx playwright test --version
```

## Cómo usar esta rama

### 1. Instalación

```bash
npm install
npx playwright install
```

### 2. Empezar a practicar

Abre cualquier archivo `.spec.ts` en la carpeta `tests/playwright-practice/` y sigue los TODOs:

```typescript
test('example test', async ({ page }) => {
  // TODO: Paso 1 - Navegar a la página
  // Usa page.goto() con la ruta '/p/playwrightpractice.html'
  
  // Escribe tu código aquí
  
  // TODO: Paso 2 - Localizar el elemento
  // Usa page.getByRole() apropiado
  
  // Escribe tu código aquí
});
```

### 3. Ejecutar tus tests

```bash
# Un archivo específico
npx playwright test locators/getByRole.spec.ts

# Con browser visible (recomendado para práctica)
npx playwright test locators/getByRole.spec.ts --headed

# Modo debug para explorar
npx playwright test locators/getByRole.spec.ts --debug
```

### 4. Validar tus respuestas

Compara tu código con la rama `main`:

```bash
# Ver las diferencias
git diff main tests/playwright-practice/locators/getByRole.spec.ts

# O cambia a main para ver la solución
git checkout main
```

## Comandos útiles para practicar

```bash
# Ejecutar por categoría
npx playwright test locators --headed
npx playwright test tables --headed
npx playwright test interactions --headed
npx playwright test files --headed
npx playwright test navigation
npx playwright test advanced-dom

# Features avanzadas
npx playwright test api                 # API tests (5)
npx playwright test visual              # Visual regression (5)
npx playwright test accessibility       # Accessibility (6)
npx playwright test pom                 # Page Object Model (6)

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

## Recomendaciones para practicar

### Orden sugerido (de fácil a difícil)

#### Nivel 1: Fundamentos (Tests básicos)

1. **Locators** (7 tests) - Empieza aquí
   - getByRole → getByText → getByLabel → getByPlaceholder
   - getByAltText → getByTitle → getByTestId

2. **Interactions** (8 tests) - Acciones básicas
   - alerts → mouse-actions → drag-drop → slider

3. **Tables** (2 tests) - Datos tabulares
   - Tabla estática → Tabla con paginación

4. **Files** (4 tests) - Upload de archivos
   - Single file → Multiple files

5. **Navigation** (4 tests) - Navegación avanzada
   - windows-tabs → dynamic-content

6. **Advanced DOM** (6 tests) - Conceptos para entrevistas
   - frames → shadow-dom

#### Nivel 2: Features Avanzadas

7. **API Tests** (5 tests - TC-024 a TC-028)
   - GET requests básicos
   - POST requests con data
   - Validación de arrays
   - Headers personalizados
   - Manejo de errores 404

8. **Visual Regression** (5 tests - TC-029 a TC-033)
   - Screenshots de página completa
   - Screenshots de elementos específicos
   - Máscaras para contenido dinámico
   - Thresholds personalizados
   - Estados específicos de UI

9. **Accessibility** (6 tests - TC-034 a TC-039)
   - Scan completo con axe-core
   - Validación WCAG Level A/AA
   - Accesibilidad de formularios
   - Exclusión de elementos third-party
   - Validación de contraste de colores
   - Reportes detallados

10. **Page Object Model** (6 tests - TC-040 a TC-045)
    - Implementar base.page.ts
    - Implementar practice.page.ts con locators
    - Tests usando POM
    - Comparación con/sin POM
    - Fluent API patterns

### Tips para aprender

- **Usa `--headed`**: Ver el browser te ayuda a entender qué está pasando
- **Usa `--debug`**: El Playwright Inspector te permite explorar selectores
- **Lee la documentación JSDoc**: Cada test explica los conceptos clave
- **Compara con main**: Si te atoras, revisa la solución en la rama main
- **Practica sin copiar**: Intenta escribir el código de memoria primero
- **Features avanzadas**: Requieren instalación de dependencias adicionales (ver secciones específicas)

## Configuración

- **Base URL**: <https://testautomationpractice.blogspot.com>
- **Headless**: false (para práctica visual), true en CI
- **Workers**: 1
- **Timeout**: 30 segundos

## Formato de los tests

Cada test en esta rama template sigue este formato:

```typescript
/*
|--------------------------------------------------------------------------
| TC-XXX: Título del test
|--------------------------------------------------------------------------
| Objetivo:
|   Descripción clara de qué aprenderás
| 
| Precondiciones:
|   Qué debe existir en la página
| 
| Pasos:
|   1. Paso a paso detallado
|   2. Qué hacer en cada momento
| 
| Resultado esperado:
|   Qué debe pasar al final
| 
| Conceptos clave:
|   APIs y conceptos importantes explicados
|--------------------------------------------------------------------------
*/
test('nombre del test', async ({ page }) => {
  // TODO: Paso 1 - Descripción clara
  // Instrucciones de qué API usar
  // Ejemplo de sintaxis
  
  // Escribe tu código aquí
  
  // TODO: Paso 2 - Siguiente acción
  // ...
});
```

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
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Open New Tab' }).click()
]);
await newPage.waitForLoadState();
```

### Shadow DOM

Acceso a elementos encapsulados en Shadow Root:

- Usar `evaluate()` o `evaluateHandle()` para acceder al shadowRoot
- Buscar elementos con `shadowRoot.querySelector()`
- La página de práctica tiene Shadow DOM real en `#shadow_host`

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

## Troubleshooting

### Problemas comunes

#### Error: "browserType.launch: Executable doesn't exist"

```bash
# Solución: Instalar browsers de Playwright
npx playwright install
```

#### Error: "Cannot find module '@playwright/test'"

```bash
# Solución: Instalar dependencias
npm install
```

#### Tests muy lentos

```bash
# Solución: Ejecutar solo el test que necesitas
npx playwright test nombre-del-test.spec.ts
```

#### Puerto ya en uso

```bash
# Si la página de práctica no carga, verifica que no haya conflictos de puerto
# Playwright usa la baseURL configurada en playwright.config.ts
```

#### Versión de Node.js incompatible

```bash
# Verifica que estés usando una versión LTS de Node.js
node --version

# Si no, actualiza a la versión LTS desde nodejs.org
```

### Obtener ayuda

- **Documentación oficial**: [playwright.dev/docs](https://playwright.dev/docs)
- **GitHub Issues**: [github.com/microsoft/playwright/issues](https://github.com/microsoft/playwright/issues)
- **Discord**: [discord.gg/playwright](https://discord.gg/playwright)

## Próximos pasos

Una vez que completes los tests básicos (TC-001 a TC-023), puedes continuar con features avanzadas:

### API Testing (TC-024 a TC-028)

**Qué aprenderás:**
- Testing de APIs REST sin abrir browser
- Validación de responses JSON
- Manejo de headers personalizados
- Status codes y error handling

**Instalación:**
No requiere instalación adicional, usa el fixture `request` incluido en Playwright.

**Ubicación:** `tests/playwright-practice/api/api-tests.spec.ts`

**Ejercicios:**
- TC-024: GET request básico con validación
- TC-025: POST request creando recursos
- TC-026: Validar y filtrar arrays
- TC-027: Enviar headers personalizados
- TC-028: Manejar errores 404

### Visual Regression Testing (TC-029 a TC-033)

**Qué aprenderás:**
- Capturar y comparar screenshots
- Detectar cambios visuales inesperados
- Usar máscaras para contenido dinámico
- Configurar thresholds de tolerancia

**Primera ejecución:**
```bash
npx playwright test visual --update-snapshots
```

**Validación posterior:**
```bash
npx playwright test visual
```

**Ubicación:** `tests/playwright-practice/visual/visual-regression.spec.ts`

**Ejercicios:**
- TC-029: Screenshot de página completa
- TC-030: Screenshot de elemento específico
- TC-031: Máscaras para elementos dinámicos
- TC-032: Threshold personalizado
- TC-033: Capturar estados específicos (modals, dropdowns)

### Accessibility Testing (TC-034 a TC-039)

**Qué aprenderás:**
- Validar cumplimiento WCAG
- Detectar problemas de accesibilidad
- Validar contraste de colores
- Generar reportes detallados

**Instalación:**
```bash
npm install --save-dev @axe-core/playwright
```

**Ubicación:** `tests/playwright-practice/accessibility/accessibility.spec.ts`

**Ejercicios:**
- TC-034: Scan completo de página
- TC-035: Validación WCAG Level A/AA
- TC-036: Accesibilidad de formularios
- TC-037: Excluir elementos third-party
- TC-038: Validación de contraste de colores
- TC-039: Reporte detallado con todos los datos

**Niveles WCAG:**
- Level A: Requisitos básicos mínimos
- Level AA: Estándar recomendado (incluye contraste 4.5:1)
- Level AAA: Nivel más alto (contraste 7:1)

### Page Object Model (TC-040 a TC-045)

**Qué aprenderás:**
- Implementar el patrón POM
- Centralizar locators en clases
- Crear métodos reutilizables
- Mejorar mantenibilidad de tests

**Archivos a implementar:**
1. `pages/base.page.ts` - Clase base con funcionalidad común
2. `pages/practice.page.ts` - Page object con locators de la página
3. `tests/playwright-practice/pom/pom-examples.spec.ts` - Tests usando POM

**Ejercicios:**
- TC-040: Interacción básica con botones
- TC-041: Llenar formulario con método de alto nivel
- TC-042: Seleccionar opciones (radio/checkboxes)
- TC-043: Manejar alerts con POM
- TC-044: Leer datos de tabla
- TC-045: Workflow completo usando POM

**Ventajas del POM:**
- Centralización: Locators en un solo lugar
- Reutilización: Métodos compartidos entre tests
- Mantenibilidad: Cambios en UI solo actualizan el page object
- Legibilidad: Tests enfocados en el negocio, no en la implementación
- Type-safe: TypeScript valida uso correcto
