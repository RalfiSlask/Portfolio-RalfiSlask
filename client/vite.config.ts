import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
