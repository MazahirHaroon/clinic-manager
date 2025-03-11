import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
