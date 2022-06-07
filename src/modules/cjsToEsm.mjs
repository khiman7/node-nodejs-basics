import path from 'path';
import url from 'url';
import { release, version } from 'os';
import { createServer } from 'http';

import './files/c.js';

const random = Math.random();

let unknownObject;

(async function () {
  if (random > 0.5) {
    unknownObject = await import('./files/a.json', {
      assert: {
        type: 'json',
      },
    });
  } else {
    unknownObject = await import('./files/b.json', {
      assert: {
        type: 'json',
      },
    });
  }
})();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${url.fileURLToPath(import.meta.url)}`);
console.log(
  `Path to current directory is ${url.fileURLToPath(
    new URL('.', import.meta.url)
  )}`
);

const createMyServer = createServer((_, res) => {
  res.end('Request accepted');
});

export default {
  unknownObject,
  createMyServer,
};
