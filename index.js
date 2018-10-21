module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    'arrow-parens': [ 'off' ],
    'capitalized-comments': [ 'error', 'never' ],
    'curly': [ 'error', 'multi-line' ],
    'import/newline-after-import': [ 'off' ],
    'indent': [ 'error', 2 ],
    'max-params': ['off'],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'object-shorthand': [ 'error', 'consistent' ],
    'semi': [ 'error', 'never' ],
    'unicorn/filename-case': [ 'off' ]
  }
}
