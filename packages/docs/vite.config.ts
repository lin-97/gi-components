import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@gi-components/el': resolve(__dirname, '../../apps/el')
    }
  }
});
