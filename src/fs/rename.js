import { rename as rnm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const OLD_FILENAME = 'wrongFilename.txt';
const NEW_FILENAME = 'properFilename.md';

export const rename = async () => {
  const filepath = join('./files', OLD_FILENAME);

  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    await rnm(filepath, join('./files', NEW_FILENAME));
  }
};

rename();
