/// <reference types="vitest" />

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from '@vitejs/plugin-vue'

export default defineConfig(() => ({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
}))
