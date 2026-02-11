import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Lista-de-tarefas-com-react-/', // <-- IMPORTANTE
  plugins: [react()],
})

