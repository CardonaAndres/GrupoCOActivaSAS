import * as path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve : {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})

// Obligatorio instalar: npm install --save-dev @types/node