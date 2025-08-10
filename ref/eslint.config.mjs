import babelParser from '@babel/eslint-parser';
import babelPresetReact from '@babel/preset-react';
import reactPlugin from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [babelPresetReact],
        },
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {},
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
