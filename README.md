# Practices - Playwright Testing

Proyecto de práctica para automatización de pruebas web usando Playwright.

## 🎯 Estás en la rama de práctica

Esta es la rama **`template`** con tests incompletos. Sigue estos pasos:

### 📋 Instrucciones

1. **Crea tu rama de práctica:**

   ```bash
   git checkout -b practice/tu-nombre
   ```

2. **Completa los tests** en la carpeta `tests/`. Busca los comentarios `TODO` que te guiarán.

3. **Valida localmente:**

   ```bash
   npx playwright test
   ```

4. **Push para obtener feedback del CI:**

   ```bash
   git add .
   git commit -m "Complete ejercicio X"
   git push origin practice/tu-nombre
   ```

5. **Revisa los resultados** en la pestaña **Actions** de GitHub. El CI ejecutará automáticamente tus tests.

6. **¿Necesitas ayuda?** Consulta la rama `main` para ver las soluciones completas.

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

- Base URL: <https://testautomationpractice.blogspot.com>
- Headless: false (para práctica visual)
- Workers: 1 (para estabilidad en práctica)

## CI/CD

Incluye workflow de GitHub Actions que ejecuta tests automáticamente en push/PR.
Los tests corren headless en CI para compatibilidad con Ubuntu.
