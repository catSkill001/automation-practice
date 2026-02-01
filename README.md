# Playwright Live Coding Setup

Proyecto configurado con Playwright listo para live coding.

## Instalación

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
tests/
  example.spec.ts          # Template básico para empezar
pages/
  base.page.ts            # Page Object base (opcional)
  practice.page.ts        # Page Object para página de práctica (opcional)
playwright.config.ts      # Configuración de Playwright
```

## URL de Práctica

https://testautomationpractice.blogspot.com/p/playwrightpractice.html

## Documentación

- [Playwright Docs](https://playwright.dev/docs/intro)
- [Locators](https://playwright.dev/docs/locators)
- [Assertions](https://playwright.dev/docs/test-assertions)
- [API Testing](https://playwright.dev/docs/api-testing)

## Tips Rápidos

### Locators Recomendados (prioridad)
1. `page.getByRole('button', { name: 'Submit' })`
2. `page.getByLabel('Email')`
3. `page.getByPlaceholder('Search')`
4. `page.getByText('Welcome')`
5. `page.getByTestId('submit-btn')`

### Interacciones Comunes
```typescript
await page.goto('url');
await locator.click();
await locator.fill('text');
await locator.check();
await locator.selectOption('value');
await expect(locator).toBeVisible();
await expect(locator).toHaveText('text');
```

### Debugging
```typescript
await page.pause();              // Pausar ejecución
await page.screenshot({ path: 'screenshot.png' });
npx playwright test --debug      // Modo debug
```
