module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '<rootDir>/jest.test-envs.js'],
    testRegex: '.spec.ts$',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.ts', '!**/dist/**/*'],
    moduleNameMapper: {
        '^~src/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['test'],
};
