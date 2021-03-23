module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 0,
    'no-console': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
  },
}
