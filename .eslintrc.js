module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      'plugin:vue/essential'
      // '@vue/standard'
  ],
  parserOptions: {
      parser: 'babel-eslint'
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'space-before-function-paren': 0,
      'eqeqeq': 2,
      'vue/valid-template-root': 2,
      'spaced-comment': 2,
      'quotes': 0,
      'eol-last': 0,
      'key-spacing': 0,
      'vue/valid-v-for':1,
      'vue/no-unused-vars':1,
      'vue/no-parsing-error':2
  }
}
