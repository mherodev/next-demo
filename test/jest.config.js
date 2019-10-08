const path = require('path');

module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!lib/**/lib/**',
    '!src/*.js',
    '!src/**/Styled.js',
    '!src/**/*.Styled.js',
    '!src/.next/**',
    '!src/components/Theme/**',
    '!src/pages/**',
    '!src/types/**',
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageReporters: ['html', 'text-summary'],
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: ['<rootDir>/test/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/build/'],
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.css$': '<rootDir>/test/fileMocks/css.js',
  },
};
