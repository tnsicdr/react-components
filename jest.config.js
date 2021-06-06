const path = require('path');

module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
        '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    },
    testMatch: [
        path.join(__dirname, 'src/**/*.test.[tj]s?(x)')
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ]
};