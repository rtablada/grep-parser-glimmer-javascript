const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')

const exampleGJS = `import Foo from './components/foo.gjs';
import Component from '@glimmer/component';

export const localValue = <template><Foo /></template>;

export class MyComponent extends Component {
  <template>
    <localValue />
    <Foo @bar={{@ahoy}} />
  </template>
}
`;

setup({
  dirname: __dirname,
  name: 'glimmer-javascript',
  treeSitterPackage: 'tree-sitter-glimmer-javascript',
  languageRegistration,
  testRunner: (parse) => {
    const ast = parse(exampleGJS);
    const root = ast.root();
    const templates = root.findAll({
      rule: {
        kind: 'glimmer_template',
      }
    });

    // We should not find raw text inside of glimmer_template elements... But... We do... (for now?)
    const templateContent = root.findAll({
      rule: {
        kind: 'raw_text'
      }
    });

    console.assert(templates.length === 2, 'Should find 2 glimmer_template elements');
  }
})
