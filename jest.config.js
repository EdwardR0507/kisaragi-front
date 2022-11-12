const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@/views/(.*)$': '<rootDir>/src/views/$1',
  },
  coveragePathIgnorePatterns: [
    // Ignore Next.js specific files
    '/node_modules/',
    '/.next/',
    '/out/',
    '/coverage/',
    '/jest.config.js',
    '/jest.setup.js',
    '/next.config.js',
    '/src/pages/_document.tsx',
    '/src/pages/_app.tsx',
    '/src/services/auth/',
    '/src/views/auth/validators/',
  ],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
