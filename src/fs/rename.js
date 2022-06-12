import { rename as rnm } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const rename = async () => {
  const filepath = join(__dirname, 'files', 'wrongFilename.txt');
  
  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    await rnm(filepath, join(__dirname, 'files', 'properFilename.md'));
  }
};

rename();
