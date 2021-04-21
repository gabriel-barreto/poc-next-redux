module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
      node: { extensions: ['.js', '.ts', '.tsx'] },
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'react', '@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.spec.ts',
          '**/*.stories.ts',
          '**/*.stories.mdx',
        ],
      },
    ],
  },
};
