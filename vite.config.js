import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/jsm_movie_app/',
  plugins: [react(), tailwindcss()],
  builds: {
    sourcemap: false
  }
})
