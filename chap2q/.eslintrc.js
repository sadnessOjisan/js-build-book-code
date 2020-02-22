module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
