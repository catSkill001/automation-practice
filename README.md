# Playwright Automation

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

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

## Structure

```
tests/
pages/
playwright.config.ts
```

## Resources

- [Playwright Docs](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
