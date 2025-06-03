import { defineConfig } from 'vite'
import ds3 from '@consensys/ds3-config/vite';
import themeConfig from "./theme.config";

export default defineConfig({
  plugins: [
    ds3(themeConfig),
  ],
})
