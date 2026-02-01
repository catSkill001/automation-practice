# Practices - Playwright Testing

Proyecto de práctica para automatización de pruebas web usando Playwright.

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
- `tests/`: Archivos de pruebas
  - `smoke.spec.ts`: Test básico de carga de página
  - `alerts.spec.ts`: Manejo de alerts, confirms y prompts
  - `doubleclick.spec.ts` y `doubleclick-copy.spec.ts`: Interacciones de doble click
  - `dragdrop.spec.ts`: Drag and drop
  - `table.spec.ts`: Validación de tablas web
- `playwright.config.ts`: Configuración de Playwright
- `.github/workflows/`: CI/CD con GitHub Actions

## Configuración
- Base URL: https://testautomationpractice.blogspot.com
- Headless: false (para práctica visual)
- Workers: 1 (para estabilidad en práctica)

## CI/CD
Incluye workflow de GitHub Actions que ejecuta tests automáticamente en push/PR.