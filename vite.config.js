import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/boda-diego-y-yarixa/' : '/',
  plugins: [react()],
}));
