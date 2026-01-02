module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@exodus)/)'
  ]
};
