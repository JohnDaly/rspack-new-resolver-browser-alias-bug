import { createConnection } from 'vscode-languageserver';

import('./render').then((exports) => {
  console.log(`Function from vscode-languageserver: ${createConnection}`);
  exports.render();
});
