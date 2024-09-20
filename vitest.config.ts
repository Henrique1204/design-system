import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/tests/setupTests.ts'],
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
      },
    },
  })
);
