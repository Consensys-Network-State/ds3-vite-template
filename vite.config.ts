import { defineConfig } from 'vite'
import cui from '@consensys/ui-config/vite';
import themeConfig from "./theme.config";

export default defineConfig({
  resolve: {
    alias: {
      // Polyfill Buffer
      buffer: 'buffer/',
    },
  },
  plugins: [
    cui(themeConfig),
  ],
})
