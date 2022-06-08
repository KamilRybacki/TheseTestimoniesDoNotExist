import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';

import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@style': path.resolve(__dirname, './src/style'),
      '@media': path.resolve(__dirname, './assets/media'),
      '@components': path.resolve(__dirname, './src/components'),
      '@functions': path.resolve(__dirname, './src/functions'),
      '@types': path.resolve(__dirname, './src/types'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
