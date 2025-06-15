# DS3 Vite Template

A pre-configured Vite template with DS3 (Design System 3) already set up and ready to use.

## Features

- 🎨 Pre-configured DS3 design system
- ⚡️ Built with Vite for fast development
- 🎯 TypeScript support
- 🎭 Theme customization support
- 📱 React Native Web integration
- 🎯 Tailwind CSS with NativeWind preset
- 🔒 Safe Area Context support

## Documentation

For comprehensive documentation about DS3, including UI components, theming, and configuration, visit the [DS3 Monorepo](https://github.com/Consensys-Network-State/ds3).

## Quick Start

### Option 1: Using degit

```bash
pnpm dlx degit Consensys-Network-State/ds3-vite-template ui
cd ui
pnpm install
pnpm dev
```

### Option 2: Using GitHub Template

1. Click "Use this template" on the GitHub repository
2. Clone your new repository
3. Install dependencies:
```bash
pnpm install
```
4. Start the development server:
```bash
pnpm dev
```

## Customization

The template comes with a default theme configuration in `theme.config.js`. You can customize the theme by modifying this file:

```js
const { generateConfig } = require('@consensys/ds3-theme');

module.exports = generateConfig({
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
      },
    },
  },
});
```

For detailed theme customization options and documentation, refer to the [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme).

## Troubleshooting

If you encounter the error `Uncaught ReferenceError: exports is not defined`, add this to your `index.html`:

```html
<script>
  var exports = {};
</script>
```