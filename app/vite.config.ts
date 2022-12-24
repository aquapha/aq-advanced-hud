import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  base: './',
  resolve: {
    alias: {
      '@/organisms': path.resolve(__dirname, 'src/app/components/organisms'),
      '@/molecules': path.resolve(__dirname, 'src/app/components/molecules'),
      '@/layouts': path.resolve(__dirname, 'src/app/components/layouts'),
      '@/atoms': path.resolve(__dirname, 'src/app/components/atoms'),
      '@/contexts': path.resolve(__dirname, 'src/app/contexts'),
      '@/routing': path.resolve(__dirname, 'src/app/routes'),
      '@/hooks': path.resolve(__dirname, 'src/app/hooks'),
      '@/pages': path.resolve(__dirname, 'src/app/pages'),
      '@/config': path.resolve(__dirname, 'src/config'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  build: {
    assetsDir: 'static',
    manifest: false,
    outDir: 'build',
  },
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm': 'silent',
    },
  },
});
