module.exports = {
  setupFiles: ['<rootDir>/tests/setup-test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '~': '<rootDir>/src',
  },
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/tests/',
    '/scripts/',
    '/public/',
    '/coverage/',
    '/.storybook/',
    '/.styles/',
    '/styles/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
  ],
}
