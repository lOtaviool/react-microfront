import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',

  testEnvironment: 'jsdom',

  extensionsToTreatAsEsm: [
    '.ts',
    '.tsx',
  ],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './tsconfig.json',
      },
    ],
  },

  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],

  testMatch: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
  ],
}

export default config