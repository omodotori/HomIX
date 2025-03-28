import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HomIX/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  serve: {
    port: 3000,
  },
})
