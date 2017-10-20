module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    semi: [ 'error', 'never' ],
    indent: [ 'error', 2 ],
    'capitalized-comments': [ 'error', 'never' ],
    'arrow-parens': [ 'off' ],
    'object-shorthand': [ 'error', 'consistent' ],
    curly: [ 'error', 'multi-line' ]
  }
}
