import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }
});
