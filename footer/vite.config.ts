import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'footer',
      filename: 'remoteEntry.js',

      exposes: {
        './Footer': './src/components/Footer.tsx',
      },

      shared: [
        'react',
        'react-dom',
        'styled-components',
      ],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 3002,
  },

  server: {
    port: 3002,
    cors: true,
  },
})