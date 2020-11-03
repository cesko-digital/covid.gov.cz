const config = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.(tsx?|jsx?)$': '<rootDir>/jest-preprocess.ts',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.ts`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.ts`, `<rootDir>/setupTests.ts`],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.ts'],
};
export default config;
