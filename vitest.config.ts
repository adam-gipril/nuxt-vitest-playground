import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    clearMocks: true,
    globalSetup: ['.test/global-setup.ts'],
    setupFiles: ['.test/setup-file.ts'],
  },
})
