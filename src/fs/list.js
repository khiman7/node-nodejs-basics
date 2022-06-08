import { readdir } from 'fs/promises';
import { existsSync } from 'fs';

const DIRECTORY = './files';

export const list = async () => {
  if (!existsSync(DIRECTORY)) {
    throw new Error('FS operation failed');
  } else {
    const dirents = await readdir(DIRECTORY, { withFileTypes: true });
    const files = dirents.map((dirent) => dirent.name);

    console.log(files);
  }
};

list();
