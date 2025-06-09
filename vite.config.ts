import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});