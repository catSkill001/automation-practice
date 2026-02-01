# Practices - Playwright Testing

Proyecto de práctica para automatización de pruebas web usando Playwright.

## Estructura de Ramas

Este repositorio tiene dos ramas con propósitos específicos:

- **`main`** (actual): Implementación completa con todos los tests resueltos. Úsala como referencia para ver las soluciones.
- **`template`**: Tests con estructura vacía y comentarios ToDo's. Úsala como base para practicar.

### Flujo de Trabajo para Practicar

1. Crear rama desde `template`:

   ```bash
   git checkout template
   git checkout -b practice/nombre-ejercicio
   ```

2. Completar los tests siguiendo los TODOs

3. Push de tu rama:

   ```bash
   git add .
   git commit -m "Complete ejercicio"
   git push origin practice/nombre-ejercicio
   ```

4. El CI corre automáticamente y te da feedback en la pestaña **Actions** de GitHub

5. Si necesitas ver la solución, consulta la rama `main`

## Descripción

Colección de tests automatizados para practicar diferentes funcionalidades de Playwright, enfocados en interacciones comunes de páginas web.

## Prerrequisitos

- Node.js (versión LTS recomendada)
- npm

## Instalación

```bash
npm install
```

## Ejecutar tests

```bash
# Todos los tests
npx playwright test

# Test específico
npx playwright test tests/nombre.spec.ts

# Con browser visible
npx playwright test --headed

# Generar reporte
npx playwright show-report
```

## Estructura del proyecto

### Tests organizados por funcionalidad

- `tests/`: Suite completa de pruebas automatizadas
  - **Básicos:**
    - `smoke.spec.ts`: Test básico de carga de página
  - **Diálogos del navegador:**
    - `alerts.spec.ts`: Manejo de alerts, confirms y prompts (4 tests)
  - **Formularios:**
    - `forms.spec.ts`: Inputs, textarea, checkboxes, radio buttons (4 tests)
    - `dropdowns.spec.ts`: Selects y dropdowns (3 tests)
    - `datepicker.spec.ts`: Date picker y selección de fechas (3 tests)
  - **Interacciones:**
    - `doubleclick.spec.ts`: Interacciones de doble click
    - `dragdrop.spec.ts`: Drag and drop
    - `hover.spec.ts`: Efectos hover y tooltips (3 tests)
  - **Componentes UI:**
    - `table.spec.ts`: Validación de tablas web
    - `accordion.spec.ts`: Accordion expand/collapse (3 tests)
    - `tabs.spec.ts`: Navegación entre tabs (2 tests)
    - `sliders.spec.ts`: Sliders y controles deslizantes (3 tests)
    - `resizable.spec.ts`: Elementos redimensionables (2 tests)
  - **Avanzados:**
    - `frames.spec.ts`: Trabajo con iframes (3 tests)
    - `windows.spec.ts`: Múltiples ventanas y tabs (3 tests)
    - `shadow-dom.spec.ts`: Trabajo con Shadow DOM (5 tests)
  - **Archivos:**
    - `file-upload.spec.ts`: Subida de archivos (3 tests)
    - `file-download.spec.ts`: Descarga de archivos (2 tests)
  - **Navegación y teclado:**
    - `scroll.spec.ts`: Acciones de scroll (4 tests)
    - `keyboard.spec.ts`: Atajos de teclado (4 tests)
  - **Interacciones avanzadas:**
    - `context-menu.spec.ts`: Menú contextual (2 tests)
    - `modal.spec.ts`: Modales HTML (3 tests)

**Total: 22 archivos de test con cobertura completa de la página**

## Lista completa de casos de prueba

### 📋 Básicos (1 test)
- `smoke.spec.ts`
  - • smoke - page loads

### 🔔 Diálogos del navegador (4 tests)
- `alerts.spec.ts`
  - • simple alert - accept
  - • confirmation alert - accept
  - • confirmation alert - dismiss
  - • prompt alert - input text and accept

### 📝 Formularios (10 tests)
- `forms.spec.ts`
  - • fill input fields
  - • fill textarea field
  - • select checkboxes
  - • select radio buttons

- `dropdowns.spec.ts`
  - • select from dropdown
  - • select from dropdown by label
  - • select multiple options from dropdown

- `datepicker.spec.ts`
  - • select date from datepicker
  - • navigate months in datepicker
  - • type date directly in datepicker

### 🖱️ Interacciones (5 tests)
- `doubleclick.spec.ts`
  - • double click copies text from Field1 to Field2

- `dragdrop.spec.ts`
  - • drag element to target

- `hover.spec.ts`
  - • hover over element to show tooltip
  - • hover to reveal dropdown menu
  - • hover and click revealed element

### 🎨 Componentes UI (11 tests)
- `table.spec.ts`
  - • validate data in static web table

- `accordion.spec.ts`
  - • expand and collapse accordion section
  - • navigate multiple accordion sections
  - • verify accordion section content

- `tabs.spec.ts`
  - • switch between tabs
  - • verify tab content

- `sliders.spec.ts`
  - • drag slider to specific value
  - • set slider to min and max values
  - • drag slider with mouse

- `resizable.spec.ts`
  - • resize element by dragging
  - • resize element with constraints

### 🚀 Avanzados (11 tests)
- `frames.spec.ts`
  - • interact with iframe content
  - • work with multiple iframes
  - • switch frame context

- `windows.spec.ts`
  - • open and switch to new window
  - • handle multiple windows
  - • close opened window

- `shadow-dom.spec.ts`
  - • access element inside shadow dom
  - • click button inside shadow dom
  - • access nested shadow dom
  - • query multiple elements in shadow dom
  - • work with shadow dom slots

### 📁 Archivos (5 tests)
- `file-upload.spec.ts`
  - • upload single file
  - • upload multiple files
  - • remove uploaded file

- `file-download.spec.ts`
  - • download file
  - • download and verify file content

### ⌨️ Navegación y teclado (8 tests)
- `scroll.spec.ts`
  - • scroll to element
  - • scroll to specific position
  - • infinite scroll load more content
  - • scroll to top

- `keyboard.spec.ts`
  - • use keyboard shortcuts
  - • navigate with tab key
  - • submit form with enter key
  - • close modal with escape key

### 🖱️ Interacciones avanzadas (5 tests)
- `context-menu.spec.ts`
  - • right click to show context menu
  - • select item from context menu

- `modal.spec.ts`
  - • open and close modal
  - • interact with modal content
  - • close modal with backdrop

**Total: 60 casos de prueba organizados en 22 archivos**

### Archivos de configuración

- `playwright.config.ts`: Configuración de Playwright con soporte para entornos
- `.env.example`: Plantilla para variables de entorno
- `.github/workflows/`: CI/CD con GitHub Actions

## Configuración

- **Base URL**: <https://testautomationpractice.blogspot.com>
- **Headless**: false (para práctica visual), true en CI
- **Workers**: 1 (para estabilidad en práctica)
- **Entornos**: Soporte para dev, qa, stage, prod (configurable en `.env`)
- **Timeout**: 30 segundos por defecto

## CI/CD

Incluye workflow de GitHub Actions que ejecuta tests automáticamente en push/PR.
Los tests corren headless en CI para compatibilidad con Ubuntu.
