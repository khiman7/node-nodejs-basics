import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const FILENAME = 'fileToRead.txt';

export const read = async () => {
  const filepath = join('./files', FILENAME);

  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    const fileContent = await readFile(filepath, { encoding: 'utf8' });

    console.log(fileContent)
  }
};

read();
