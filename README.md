# Playwright Practice Suite - Template Branch

## 🎯 ¿Qué es esto?

Este proyecto es una **suite de práctica de Playwright** con **53 ejercicios** organizados en formato TODO para que aprendas escribiendo código desde cero.

### 🔄 Dos Ramas, Dos Propósitos

- **📝 Rama `template`** (estás aquí) → Para practicar
  - Todos los tests tienen TODOs con instrucciones paso a paso
  - Escribes el código tú mismo siguiendo las guías
  - Ideal para aprender haciendo

- **✅ Rama `main`** → Soluciones completas
  - Todos los tests implementados y funcionando
  - Úsala para comparar tus respuestas
  - Referencia cuando te atores

### ⚡ Instalación en 1 Comando

```bash
git clone https://github.com/catSkill001/automation-practice.git
cd automation-practice
git checkout template
npm run setup  # ¡Instala TODO automáticamente!
```

Esto instala:

- ✅ Dependencias de npm
- ✅ Browsers de Playwright (Chromium, Firefox, WebKit)
- ✅ Dependencias del sistema
- ✅ Todo listo para practicar

**Cuando abras el proyecto en VS Code**, verás una notificación para instalar las extensiones recomendadas (Playwright, ESLint, Prettier, GitLens). ¡Acéptalas!

---

## 📚 Descripción del Contenido

Suite de tests end-to-end con **53 casos de prueba** organizados en 10 categorías. Cada test incluye:

- Documentación JSDoc completa con objetivo y conceptos clave
- TODOs numerados paso a paso (Paso 1, Paso 2, etc.)
- Instrucciones claras de qué hacer en cada paso
- Ejemplos de sintaxis y hints de APIs de Playwright
- Espacios para escribir tu código

### Tests Básicos (22 ejercicios - TC-001 a TC-023)

- **Locators** (10 tests - TC-001 a TC-010): 7 estrategias de localización (getByRole, getByText, getByLabel, getByPlaceholder, getByAltText, getByTitle, getByTestId)
- **Tables** (2 tests - TC-011 a TC-012): Interacción con tablas estáticas y con paginación
- **Interactions** (5 tests - TC-013 a TC-019): Alertas, mouse actions, drag & drop, sliders
- **Files** (2 tests - TC-020 a TC-021): Upload de archivos individuales y múltiples
- **Navigation** (2 tests - TC-022 a TC-023): Tabs, ventanas y contenido dinámico
- **Advanced DOM** (8 tests - TC-024 a TC-031): iframes (3 tests - TC-024 a TC-026) y Shadow DOM (5 tests - TC-027 a TC-031) para entrevistas técnicas

### Features Avanzadas (31 ejercicios - TC-032 a TC-053)

- **API Tests** (5 tests - TC-032 a TC-036): Testing de APIs REST sin browser
- **Visual Regression** (5 tests - TC-037 a TC-041): Detección de cambios visuales con screenshots
- **Accessibility** (6 tests - TC-042 a TC-047): Validación WCAG con axe-core
- **Page Object Model** (6 tests - TC-048 a TC-053): Patrón de diseño para mantenibilidad + implementar page objects

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

## 🚀 Instalación Rápida

### Opción 1: Instalación Automática (Recomendado)

```bash
# 1. Clonar y cambiar a rama template
git clone https://github.com/catSkill001/automation-practice.git
cd automation-practice
git checkout template

# 2. Instalación automática (todo en un comando)
npm run setup
```

Esto instala:

- ✅ Todas las dependencias de npm
- ✅ Browsers de Playwright (Chromium, Firefox, WebKit)
- ✅ Dependencias del sistema

### Opción 2: Instalación Manual

```bash
# Paso 1: Instalar dependencias
npm install

# Paso 2: Instalar browsers
npx playwright install --with-deps

# Paso 3: Verificar instalación
npx playwright --version
```

### 📋 Instalación Rápida (sin system dependencies)

Si prefieres instalar solo los browsers sin dependencias del sistema:

```bash
npm run setup:fast
```

### 🔌 Extensiones de VS Code

Al abrir el proyecto en VS Code, verás una notificación para instalar extensiones recomendadas. ¡Acéptalas!

**Extensiones incluidas:**

- Playwright Test for VSCode
- ESLint
- Prettier
- GitLens

---

**📖 Para instrucciones detalladas de instalación y troubleshooting, ve a [SETUP.md](SETUP.md)**

---

## Cómo usar esta rama

### 1. Instalación

```bash
npm install
npx playwright install
```

### 2. Empezar a practicar

Abre cualquier archivo `.spec.ts` en la carpeta `tests/playwright-practice/` y sigue los TODOs:

```typescript
test("example test", async ({ page }) => {
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

#### Nivel 1: Fundamentos (22 tests básicos - TC-001 a TC-023)

1. **Locators** (10 tests - TC-001 a TC-010) - Empieza aquí
   - getByRole (2 tests) → getByText (2 tests) → getByLabel (2 tests)
   - getByPlaceholder → getByAltText → getByTitle → getByTestId

2. **Tables** (2 tests - TC-011 a TC-012) - Datos tabulares
   - Tabla estática → Tabla con paginación

3. **Interactions** (5 tests - TC-013 a TC-019) - Acciones básicas
   - alerts (3 tests) → mouse-actions (2 tests) → drag-drop → slider

4. **Files** (2 tests - TC-020 a TC-021) - Upload de archivos
   - Single file → Multiple files

5. **Navigation** (2 tests - TC-022 a TC-023) - Navegación avanzada
   - windows-tabs → contenido dinámico

6. **Advanced DOM** (8 tests - TC-024 a TC-031) - Conceptos para entrevistas
   - frames (3 tests: TC-024 a TC-026) → shadow-dom (5 tests: TC-027 a TC-031)

#### Nivel 2: Features Avanzadas

1. **API Tests** (5 tests - TC-032 a TC-036)

- GET requests básicos
- POST requests con data
- Validación de arrays
- Headers personalizados
- Manejo de errores 404

1. **Visual Regression** (5 tests - TC-037 a TC-041)

- Screenshots de página completa
- Screenshots de elementos específicos
- Máscaras para contenido dinámico
- Thresholds personalizados
- Estados específicos de UI

1. **Accessibility** (6 tests - TC-042 a TC-047)

- Scan completo con axe-core
- Validación WCAG Level A/AA
- Accesibilidad de formularios
- Exclusión de elementos third-party
- Validación de contraste de colores
- Reportes detallados

1. **Page Object Model** (6 tests - TC-048 a TC-053)

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
test("nombre del test", async ({ page }) => {
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
const frame = page.frameLocator("#my-iframe");
await frame.locator("input").fill("test");
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
await page.getByRole("button", { name: "Submit" }).click();
await page.getByLabel("Email").fill("test@test.com");
await page.getByPlaceholder("Search...").fill("Playwright");
```

### Tables

Navegación y extracción de datos desde tablas HTML con paginación.

**Ejemplo:**

```typescript
const table = page.locator("#productTable tbody tr");
const rows = await table.count();
for (let i = 0; i < rows; i++) {
  const name = await table.nth(i).locator("td").nth(1).textContent();
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
page.on("dialog", async (dialog) => {
  console.log(dialog.message());
  await dialog.accept();
});
await page.getByRole("button", { name: "Alert" }).click();
```

### File Upload

Upload de archivos usando `setInputFiles()`:

**Ejemplo:**

```typescript
await page.locator("#fileInput").setInputFiles("path/to/file.pdf");
await page.locator("#multipleFiles").setInputFiles(["file1.jpg", "file2.png"]);
```

### Navigation

Manejo de múltiples tabs/ventanas y contenido dinámico:

**Ejemplo:**

```typescript
const [newPage] = await Promise.all([
  context.waitForEvent("page"),
  page.getByRole("link", { name: "Open New Tab" }).click(),
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
  const shadowHost = document.querySelector("#shadow_host");
  const shadowRoot = shadowHost.shadowRoot;
  const input = shadowRoot.querySelector('input[type="text"]');
  input.value = "Test";
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

Una vez que completes los tests básicos (TC-001 a TC-031), puedes continuar con features avanzadas:

### API Testing (TC-032 a TC-036)

**Qué aprenderás:**

- Testing de APIs REST sin abrir browser
- Validación de responses JSON
- Manejo de headers personalizados
- Status codes y error handling

**Instalación:**
No requiere instalación adicional, usa el fixture `request` incluido en Playwright.

**Ubicación:** `tests/playwright-practice/api/api-tests.spec.ts`

**Ejercicios:**

- TC-032: GET request básico con validación
- TC-033: POST request creando recursos
- TC-034: Validar y filtrar arrays
- TC-035: Enviar headers personalizados
- TC-036: Manejar errores 404

### Visual Regression Testing (TC-037 a TC-041)

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

- TC-037: Screenshot de página completa
- TC-038: Screenshot de elemento específico
- TC-039: Máscaras para elementos dinámicos
- TC-040: Threshold personalizado
- TC-041: Capturar estados específicos (modals, dropdowns)

### Accessibility Testing (TC-042 a TC-047)

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

- TC-042: Scan completo de página
- TC-043: Validación WCAG Level A/AA
- TC-044: Accesibilidad de formularios
- TC-045: Excluir elementos third-party
- TC-046: Validación de contraste de colores
- TC-047: Reporte detallado con todos los datos

**Niveles WCAG:**

- Level A: Requisitos básicos mínimos
- Level AA: Estándar recomendado (incluye contraste 4.5:1)
- Level AAA: Nivel más alto (contraste 7:1)

### Page Object Model (TC-048 a TC-053)

**Qué aprenderás:**

- Implementar el patrón POM
- Centralizar locators en clases
- Crear métodos reutilizables
- Mejorar mantenibilidad de tests

**Archivos a implementar:**

1. `pages/base.page.ts` - ✅ Ya implementado (clase base con funcionalidad común)
2. `pages/practice.page.ts` - 🔨 TODO: Implementar locators y métodos (instrucciones incluidas)
3. `tests/playwright-practice/pom/pom-examples.spec.ts` - 🔨 TODO: Completar 6 tests usando POM

**Ejercicios:**

- TC-048: Interacción básica con botones
- TC-049: Llenar formulario con método de alto nivel
- TC-050: Seleccionar opciones (radio/checkboxes)
- TC-051: Manejar alerts con POM
- TC-052: Leer datos de tabla
- TC-053: Workflow completo usando POM

**Ventajas del POM:**

- Centralización: Locators en un solo lugar
- Reutilización: Métodos compartidos entre tests
- Mantenibilidad: Cambios en UI solo actualizan el page object
- Legibilidad: Tests enfocados en el negocio, no en la implementación
- Type-safe: TypeScript valida uso correcto
