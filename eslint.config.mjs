import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';

export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: {
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      // other parser options...
    },
  },
  // ignores: ['node_modules/', 'dist/'],
  rules: {
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    // 'semi': ['error', 'never'], // Apply the semi rule
    ...pluginJs.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
  },
  plugins: {
    react: pluginReact,
    '@typescript-eslint': tseslint,
    prettier: pluginPrettier,
    // other plugins...
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
