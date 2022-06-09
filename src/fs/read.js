import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const filepath = join(__dirname, 'files', 'fileToRead.txt');

  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    const fileContent = await readFile(filepath, { encoding: 'utf8' });

    console.log(fileContent)
  }
};

read();
