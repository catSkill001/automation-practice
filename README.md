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

**Total: 15 archivos de test con cobertura completa de la página**

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
