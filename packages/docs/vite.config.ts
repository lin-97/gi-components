import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@gi-components/ele': resolve(__dirname, '../../apps/ele')
    }
  }
});
