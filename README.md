# Automation Practice

Proyecto de automatización con Playwright.

## Setup

```bash
npm install
npx playwright install
```

## Ejecutar tests

```bash
# Modo headed (ver browser)
npx playwright test --headed

# Modo debug
npx playwright test --debug

# Test específico
npx playwright test example.spec.ts

# Con UI
npx playwright test --ui
```

## Estructura

```
tests/           # Test files
pages/           # Page Objects
playwright.config.ts
```

## Recursos

- [Playwright Docs](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
