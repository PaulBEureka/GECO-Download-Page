import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/GECO-Download-Page/', // Use your actual repository name here
  plugins: [react(), tailwindcss()],
})
