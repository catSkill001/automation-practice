# 🚀 Guía de Instalación Rápida

## ⚡ Instalación Automática (Recomendado)

### Windows (PowerShell)

```powershell
# 1. Clonar el repositorio
git clone https://github.com/catSkill001/automation-practice.git
cd automation-practice

# 2. Cambiar a rama template
git checkout template

# 3. Instalación automática completa (con dependencias del sistema)
npm run setup

# O instalación rápida (solo browsers, sin system dependencies)
npm run setup:fast
```

### macOS / Linux

```bash
# 1. Clonar el repositorio
git clone https://github.com/catSkill001/automation-practice.git
cd automation-practice

# 2. Cambiar a rama template
git checkout template

# 3. Instalación automática completa
npm run setup

# O instalación rápida
npm run setup:fast
```

---

## 📦 ¿Qué instala `npm run setup`?

1. **Dependencias de npm** (`npm install`)
   - @playwright/test
   - @axe-core/playwright (accessibility)
   - dotenv, cross-env
   - TypeScript types

2. **Browsers de Playwright** (`npx playwright install --with-deps`)
   - Chromium
   - Firefox
   - WebKit (Safari)
   - Dependencias del sistema necesarias

---

## 🔌 Extensiones de VS Code

Cuando abras el proyecto en VS Code, verás una notificación para instalar las extensiones recomendadas:

**Extensiones incluidas:**

- ✅ **Playwright Test for VSCode** - Ejecutar y debug tests desde VS Code
- ✅ **ESLint** - Linting de código TypeScript
- ✅ **Prettier** - Formateo automático
- ✅ **GitLens** - Git supercharged

**Para instalarlas manualmente:**

1. Presiona `Ctrl+Shift+X` (o `Cmd+Shift+X` en Mac)
2. Busca cada extensión por el ID:
   - `ms-playwright.playwright`
   - `dbaeumer.vscode-eslint`
   - `esbenp.prettier-vscode`
   - `eamodio.gitlens`

---

## ✅ Verificar Instalación

### 1. Verificar Node.js y npm

```bash
node --version    # Debe ser v18+ o v20+
npm --version     # Debe ser v9+ o v10+
```

### 2. Verificar Playwright

```bash
npx playwright --version
```

### 3. Ejecutar test de prueba

```bash
# Test simple en modo headed (ver el browser)
npx playwright test locators/getByRole.spec.ts --headed
```

Si ves el browser abrirse, ¡todo está funcionando! 🎉

---

## 🛠️ Comandos Disponibles

### Setup

```bash
npm run setup          # Instalación completa (con system deps)
npm run setup:fast     # Instalación rápida (solo browsers)
```

### Testing

```bash
npm test                     # Ejecutar todos los tests
npm run test:headed          # Ver el browser mientras corren
npm run test:ui              # Modo UI interactivo
npm run test:debug           # Modo debug paso a paso
npm run test:report          # Ver reporte HTML
```

### Tests por Categoría

```bash
npm run test:locators        # Locators (10 tests)
npm run test:tables          # Tables (2 tests)
npm run test:interactions    # Interactions (5 tests)
npm run test:files           # File uploads (2 tests)
npm run test:api             # API tests (5 tests)
npm run test:visual          # Visual regression (5 tests)
npm run test:accessibility   # Accessibility (6 tests)
npm run test:pom             # Page Object Model (6 tests)
```

---

## 🆘 Solución de Problemas

### ❌ "npm: command not found"

**Causa:** Node.js no está instalado  
**Solución:** Instala Node.js LTS desde [nodejs.org](https://nodejs.org/)

### ❌ "browserType.launch: Executable doesn't exist"

**Causa:** Browsers de Playwright no están instalados  
**Solución:**

```bash
npx playwright install --with-deps
```

### ❌ "Cannot find module '@playwright/test'"

**Causa:** Dependencias no instaladas  
**Solución:**

```bash
npm install
```

### ❌ Versión de Node.js muy antigua

**Causa:** Node < v18  
**Solución:** Actualiza a Node.js v20 LTS desde [nodejs.org](https://nodejs.org/)

### ❌ Permisos en macOS/Linux

**Solución:**

```bash
sudo npx playwright install --with-deps
```

---

## 🎯 Próximos Pasos

1. ✅ Instalación completada
2. 📖 Lee el [README.md](README.md) principal
3. 🎓 Empieza con `tests/playwright-practice/locators/getByRole.spec.ts`
4. 💡 Usa `--headed` para ver qué pasa en el browser
5. 🐛 Usa `--debug` si te atoras
6. 📝 Compara con rama `main` si necesitas ayuda

---

## 📚 Recursos

- [Documentación Playwright](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Discord Community](https://discord.gg/playwright)

---

**¿Todo funcionando?** ¡Excelente! Ahora ve al [README.md](README.md) para empezar a practicar 🚀
