module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    // allow single line blocks
    // e.g. if (props.error) { showErrorModal() }
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],

    // capitalized comments can muck up comments referencing variables
    // e.g. // ColorHeader should be disabled when in error
    'capitalized-comments': ['off'],

    // allow for single line guard clauses
    // e.g. if (props.error) return ErrorComponent()
    'curly': ['error', 'multi-line'],

    // required for scss imports
    // e.g. import './ColorHeader.scss'
    'import/no-unassigned-import': ['off'],

    // no arbitrary counts / limits
    'max-params': ['off'],

    // allow curried function calls in a single line
    // e.g. popWorkingKeyBranch(globalSpace, workingKeyName)()
    'max-statements-per-line': ['off'],
  
    // Add spaces inside curly braces
    // e.g. { 'foo' } instead of {'foo'}
    'object-curly-spacing': ['error', 'always'],
    
    // allow building capitalized components in tests by calling them as functions
    // e.g. const wrapper = ColorHeader(props)
    'new-cap': ['off'],

    // force consistent quote props, only allow when needed
    'quote-props': ['error', 'consistent-as-needed'],

    // force no semicolons
    'semi': ['error', 'never'],

    // do not force a style for component names
    // e.g. ColorHeader.js or color-header.js
    'unicorn/filename-case': ['off'],

    // append and appendChild have different support and functionality
    'unicorn/prefer-node-append': ['off'],
  }
}
