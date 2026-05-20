import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cards',
      filename: 'remoteEntry.js',

      exposes: {
        './Cards': './src/components/Cards.tsx',
      },

      shared: [
        'react',
        'react-dom',
        'styled-components',
        '@tanstack/react-query',
      ],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 3003,
  },

  server: {
    port: 3003,
    cors: true,
  },
})