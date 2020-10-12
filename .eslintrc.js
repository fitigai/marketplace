module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 0,
    semi: ['error', 'always'],
  },
}
