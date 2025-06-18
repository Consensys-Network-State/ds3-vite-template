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

For details on how this template was set up from scratch, see [SETUP.md](./SETUP.md).

## Quick Start

### Option 1: Using degit

```bash
pnpm dlx degit Consensys-Network-State/ds3-vite-template ui
```

### Option 2: Using GitHub Template

1. Click "Use this template" on the GitHub repository
2. Clone your new repository

## Usage

Install dependencies:
```bash
pnpm install
```

Start the development server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm preview
```

## Customization

The template comes with a default theme configuration in `theme.config.ts`. You can customize the theme by modifying this file:

```js
import type { UserConfig } from '@consensys/ds3-theme'

export default {
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
        info: 'blue',
      },
    },
  }
} satisfies UserConfig; 
```

For detailed theme customization options and documentation, refer to the [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme).

## Troubleshooting

If you encounter the error `Uncaught ReferenceError: exports is not defined`, add this to your `index.html`:

```html
<script>
  var exports = {};
</script>
```