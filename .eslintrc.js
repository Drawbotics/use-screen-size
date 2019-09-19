module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [ 'react', 'react-hooks', 'jest' ],
  rules: {
    // General
    'array-callback-return': [ 'warn' ],
    'eqeqeq': [ 'warn', 'always', { null: 'ignore' } ],
    'new-parens': [ 'warn' ],
    'no-array-constructor': [ 'warn' ],
    'no-caller': [ 'warn' ],
    'no-cond-assign': [ 'warn', 'always' ],
    'no-console': [ 'warn', { allow: [ 'warn', 'error', 'reportException' ] } ],
    'no-eval': [ 'warn' ],
    'no-extend-native': [ 'warn' ],
    'no-extra-bind': [ 'warn' ],
    'no-implied-eval': [ 'warn' ],
    'no-iterator': [ 'warn' ],
    'no-lone-blocks': [ 'warn' ],
    'no-loop-func': [ 'warn' ],
    'no-multi-str': [ 'warn' ],
    'no-native-reassign': [ 'warn' ],
    'no-new-wrappers': [ 'warn' ],
    'no-script-url': [ 'warn' ],
    'no-self-compare': [ 'warn' ],
    'no-shadow-restricted-names': [ 'warn' ],
    'no-template-curly-in-string': [ 'warn' ],
    'no-throw-literal': [ 'warn' ],
    'no-unused-vars': [ 'warn', { 'args': 'none', ignoreRestSiblings: true } ],
    'no-use-before-define': [ 'warn' ],
    'no-useless-computed-key': [ 'warn' ],
    'no-useless-concat': [ 'warn' ],
    'no-useless-constructor': [ 'warn' ],
    'no-useless-rename': [ 'warn' ],
    'no-whitespace-before-property': [ 'warn' ],
    'no-unreachable': [ 'warn' ],
    'no-constant-condition': [ 'warn' ],

    // React
    'react/prop-types': [ 'off' ],
    'react/no-unescaped-entities': [ 'off' ],
    'react/jsx-key': [ 'off' ],
    'react/style-prop-object': [ 'warn' ],

    // React Hooks
    'react-hooks/rules-of-hooks': [ 'error' ],
  },
};
