// eslint-disable-next-line import/extensions
const prettierOptions = require('./.prettierrc.js')

const isProduction = false

module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:@next/next/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'json', 'simple-import-sort'],
  rules: {
    camelcase: 0,
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': ['error', prettierOptions],
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'react/forbid-prop-types': 0,
    'react/sort-prop-types': [1, { callbacksLast: true }],
    'react/jsx-sort-props': [1, { callbacksLast: true }],
    'react/jsx-no-bind': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/no-danger': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-console': isProduction ? 2 : 0,
    'no-debugger': isProduction ? 2 : 0,
    'no-redeclare': [2, { builtinGlobals: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_rev'] }],
    'no-shadow': 'off',
    'sort-imports': 0,
    'import/order': 0,
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // `react` related packages come first.
          ['^react', 'prop-types'],
          ['^react-icons'],
          // `styled-components` related packages.
          ['^styled', '^@styled'],
          // Other packages.
          ['^@?[a-zA-Z0-9]'],
          // `lodash` related packages.
          ['^lodash'],
          // Internal packages.
          ['^assets(/.*|$)'],
          ['^components(/.*|$)'],
          ['^constants(/.*|$)'],
          ['^hooks(/.*|$)'],
          ['^pages(/.*|$)'],
          ['^services(/.*|$)'],
          ['^shared(/.*|$)'],
          ['^theme(/.*|$)'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
