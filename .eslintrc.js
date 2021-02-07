module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 0,
    'no-console': 0,
    quotes: [
      'error',
      'single'
    ]
  }
}
