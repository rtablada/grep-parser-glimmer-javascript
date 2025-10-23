# ast-grep napi language for glimmer-javascript

## Installation

In a pnpm project, run:

```bash
pnpm install grep-parser-glimmer-javascript
pnpm install @ast-grep/napi
# install the tree-sitter-cli if no prebuild is available
pnpm install @tree-sitter/cli --save-dev
```

## Usage

```js
import glimmer-javascript from 'grep-parser-glimmer-javascript'
import { registerDynamicLanguage, parse } from '@ast-grep/napi'

registerDynamicLanguage({ glimmer-javascript })

const sg = parse('glimmer-javascript', `your code`)
sg.root().kind()
```
