import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/back-end';

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json');
  },
});

void OpenAPI.generateFiles({
  // input files
  input: ['./api.json'],
  output: out,
  groupBy: 'tag',
});
