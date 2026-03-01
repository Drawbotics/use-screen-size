const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jest = require('eslint-plugin-jest');
const babelParser = require('@babel/eslint-parser');

module.exports = [
  js.configs.recommended,
  react.configs.flat.recommended,
  jest.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'writable',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // General
      'array-callback-return': ['warn'],
      'eqeqeq': ['warn', 'always', { null: 'ignore' }],
      'new-parens': ['warn'],
      'no-array-constructor': ['warn'],
      'no-caller': ['warn'],
      'no-cond-assign': ['warn', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error', 'reportException'] }],
      'no-eval': ['warn'],
      'no-extend-native': ['warn'],
      'no-extra-bind': ['warn'],
      'no-implied-eval': ['warn'],
      'no-iterator': ['warn'],
      'no-lone-blocks': ['warn'],
      'no-loop-func': ['warn'],
      'no-multi-str': ['warn'],
      'no-global-assign': ['warn'],
      'no-new-wrappers': ['warn'],
      'no-script-url': ['warn'],
      'no-self-compare': ['warn'],
      'no-shadow-restricted-names': ['warn'],
      'no-template-curly-in-string': ['warn'],
      'no-throw-literal': ['warn'],
      'no-unused-vars': ['warn', { 'args': 'none', ignoreRestSiblings: true }],
      'no-use-before-define': ['warn'],
      'no-useless-computed-key': ['warn'],
      'no-useless-concat': ['warn'],
      'no-useless-constructor': ['warn'],
      'no-useless-rename': ['warn'],
      'no-whitespace-before-property': ['warn'],
      'no-unreachable': ['warn'],
      'no-constant-condition': ['warn'],

      // React
      'react/prop-types': ['off'],
      'react/no-unescaped-entities': ['off'],
      'react/jsx-key': ['off'],
      'react/style-prop-object': ['warn'],

      // React Hooks
      'react-hooks/rules-of-hooks': ['error'],
    },
  },
];
