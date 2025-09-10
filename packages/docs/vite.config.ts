import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@apis': path.resolve(__dirname, '_apis')
    }
  }
});
