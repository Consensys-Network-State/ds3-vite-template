# DS3 Vite Template Setup Guide

This document explains how this template was set up from scratch. This is for reference only - you don't need to follow these steps as the template comes pre-configured.

## Initial Setup

1. Create a new Vite project with version 5:
```bash
pnpm create vite@5
```

> **Important**: This template requires Vite version 5.x for NativeWind support. Vite 6 is not compatible due to changes in how it interprets Babel presets.

2. Install dependencies:
```bash
pnpm add react-native-web react-native-safe-area-context @consensys/ds3 @consensys/ds3-config
```

## Configuration Files

### 1. Theme Configuration (`theme.config.ts`)

```typescript
import { generateConfig } from '@consensys/ds3-theme';

export default generateConfig({
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

### 2. Vite Configuration (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import ds3 from '@consensys/ds3-config/vite';
import themeConfig from "./theme.config";

export default defineConfig({
  plugins: [
    ds3(themeConfig),
  ],
})
```

### 3. Tailwind Configuration

First, initialize Tailwind:
```bash
pnpm exec tailwindcss init -p
```

This will create both `tailwind.config.js` and `postcss.config.js`.

Then configure `tailwind.config.js`:
```javascript
import ds3 from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@consensys/ds3/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3(themeConfig)]
}
```

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. TypeScript Configuration

Add to `src/vite-env.d.ts`:
```typescript
/// <reference types="nativewind/types" />
```

### 5. Main Application Setup (`src/main.tsx`)

```tsx
import { ThemeProvider } from "@consensys/ds3";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// ...

return (
  <SafeAreaProvider>
    <ThemeProvider config={import.meta.env.DS3}>
      // Your app content
    </ThemeProvider>
  </SafeAreaProvider>
);
```

## Troubleshooting

If you encounter the error `Uncaught ReferenceError: exports is not defined`, add this to your `index.html`:

```html
<script>
  var exports = {};
</script>
```
