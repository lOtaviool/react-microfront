import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'header',

      filename: 'remoteEntry.js',

      exposes: {
        './Header': './src/components/Header.tsx',
      },

      shared: [
        'react',
        'react-dom',
        'styled-components',
      ]
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 3001,
  },

  server: {
    port: 3001,
    cors: true,
  },
})