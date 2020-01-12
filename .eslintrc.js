module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-blocks": "off",
    quotes: "off",
    "comma-dangle": "off",
    "no-extra-semi": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
