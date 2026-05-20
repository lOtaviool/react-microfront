import type { Config } from 'jest';

const config: Config = {
  rootDir: '../', 
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};

export default config;