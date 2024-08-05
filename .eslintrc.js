module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 1,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-statements': ['error', 10],
    'no-unused-vars': 'error',
    camelcase: 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'max-statements': 'off',
      },
    },
  ],
};
