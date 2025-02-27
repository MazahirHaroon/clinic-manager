import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@public/*': './public/*',
      '@constants/*': './src/constants/*',
      '@clinic-ui/index': '/src/components/clinic-ui',
      '@components/index': '/src/components',
      '@components/*': '/src/components/*',
    },
  },
});
