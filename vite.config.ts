import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@public': '/public',
      '@constants': '/src/constants',
      '@pages': '/src/pages/index',
      '@utils': '/src/utils',
      '@clinic-ui': '/src/components/ClinicUI/index',
      '@components': '/src/components',
    },
  },
});
