import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

const { compilerOptions } = require('./tsconfig.paths.json');

const config: Config.InitialOptions = {
  bail: 1,
  verbose: true,
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'ts-jest',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  setupFiles: ['dotenv/config'],
};
export default config;
