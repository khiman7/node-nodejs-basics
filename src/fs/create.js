import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';

const FILENAME = 'fresh.txt';

export const create = async () => {
  if (existsSync(FILENAME)) {
    throw new Error('FS operation failed');
  } else {
    await appendFile(FILENAME, 'I am fresh and young');
  }
};

create();
