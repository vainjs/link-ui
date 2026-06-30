import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@scope/link-ui': resolve(__dirname, '../packages/web/src/index.ts'),
      '@scope/link-ui/': `${resolve(__dirname, '../packages/web/src')}/`
    }
  },
  server: {
    port: 5173
  }
})
