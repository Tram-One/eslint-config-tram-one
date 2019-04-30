module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'arrow-parens': ['off'],
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
    'capitalized-comments': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    "eslint-comments/disable-enable-pair": ["error", {'allowWholeFile': true}],
    'import/newline-after-import': ['off'],
    'indent': ['error', 2],
    'max-params': ['off'],
    'max-statements-per-line': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['off'],
    'object-shorthand': ['error', 'consistent'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
    'unicorn/filename-case': ['off'],
    'unicorn/prefer-node-append': ['off']
  }
}
