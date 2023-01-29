const prettierOptions = require('./.prettierrc')

const isProduction =
  process.env.NODE_ENV === 'production' || process.env.CI === 'true'

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
  ],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'static',
    'public',
    '.yarn',
    'coverage',
    '*.d.ts',
    'src/Constants/datoGraphQL.ts',
  ],
  plugins: [
    'prettier',
    'json',
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    camelcase: 0,
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': [2, prettierOptions],
    'no-console': isProduction ? 2 : 1,
    'no-debugger': isProduction ? 2 : 0,
    'import/prefer-default-export': 0,

    // TODO: to change later
    'import/no-cycle': [0, { ignoreExternal: true }],
    'import/named': 1,
    'no-unsafe-optional-chaining': 1,
    'no-promise-executor-return': 1,
    'no-constructor-return': 1,
    'prefer-regex-literals': 1,
    'default-param-last': 1,
    'react/no-unstable-nested-components': 1,
    'react/jsx-no-constructed-context-values': 1,
    'react/no-unused-class-component-methods': 1,
    'react/no-unused-prop-types': 1,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-no-bind': 1,
    // -- end todo

    'react/forbid-prop-types': 0,
    'react/sort-prop-types': [1, { callbacksLast: true }],
    'react/jsx-sort-props': [1, { callbacksLast: true }],
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/no-unused-state': isProduction ? 2 : 1,
    'react/state-in-constructor': 0,
    'react-hooks/exhaustive-deps': 1,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-redeclare': [2, { builtinGlobals: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_rev'] }],

    'no-use-before-define': 0, // resolving no-use-before-define errors from js files
    'react/sort-comp': 0, // resolving react/sort-comp errors from js files
    'react/jsx-curly-brace-presence': 0, // resolving 'Curly braces are unnecessary here' error from js files
    'arrow-body-style': 0, // resolving 'Unexpected block statement..' from js files
    //  resolving "missing file extension
    'react/no-this-in-sfc': 0,
    'react/function-component-definition': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        allow: [
          'print',
          'location',
          'event',
          'history',
          'find',
          'root',
          'name',
          'close',
          'Map',
          'Text',
          'Request',
          'Image',
          'fetch',
          'Element',
          'status',
          'stop',
          'Range',
          'top',
          'height',
          'parent',
        ],
      },
    ],
    'no-unused-vars': 1,
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
          ['^Assets(/.*|$)'],
          ['^Components(/.*|$)'],
          ['^Config(/.*|$)'],
          ['^Constants(/.*|$)'],
          ['^Graphql(/.*|$)'],
          ['^Hooks(/.*|$)'],
          ['^Interfaces(/.*|$)'],
          ['^Containers(/.*|$)'],
          ['^Router(/.*|$)'],
          ['^Policies(/.*|$)'],
          ['^Services(/.*|$)'],
          ['^Theme(/.*|$)'],
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
  overrides: [
    // only for typescript
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off', //  ( Typescript has its own checking )
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'no-shadow': 0, // gives error for every enum in ts files
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
