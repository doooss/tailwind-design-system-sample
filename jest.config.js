/* eslint-disable @typescript-eslint/no-var-requires */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@Types/(.*)$': '<rootDir>/src/types/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@store/(.*)$': '<rootDir>/src/store/$1',
      '^@consts/(.*)$': '<rootDir>/src/consts/$1',
    }
};

module.exports = createJestConfig(customJestConfig);
