module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/src/actions/*.js',
    '<rootDir>/src/component/**/*.js',
    '<rootDir>/src/containers/**/*.js',
    '<rootDir>/src/reducers/*.js',
    '<rootDir>/src/utils/*.js'
  ]
};
