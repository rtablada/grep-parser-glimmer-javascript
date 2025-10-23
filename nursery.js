const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

setup({
  dirname: __dirname,
  name: 'glimmer-javascript',
  treeSitterPackage: 'tree-sitter-glimmer-javascript',
  languageRegistration,
  testRunner: (parse) => {
    // add test here
  }
})
