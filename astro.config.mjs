import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  server: {
    port: 7171
  },
  build: {
    format: 'directory'
  }
})