module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    'arrow-parens': [ 'off' ],
    'capitalized-comments': [ 'error', 'never' ],
    curly: [ 'error', 'multi-line' ],
    'import/newline-after-import': [ 'off' ],
    indent: [ 'error', 2 ],
    'object-shorthand': [ 'error', 'consistent' ],
    semi: [ 'error', 'never' ],
    'unicorn/filename-case': [ 'off' ]
  }
}
