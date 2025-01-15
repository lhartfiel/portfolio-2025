import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
})
