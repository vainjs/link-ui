import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['packages/web/src/**/__tests__/**/*.test.ts'],
    passWithNoTests: true
  }
})
