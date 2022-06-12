import { readdir } from 'node:fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
  const dir = join(__dirname, 'files');
  
  if (!existsSync(dir)) {
    throw new Error('FS operation failed');
  } else {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = dirents.map(dirent => dirent.name);
    
    console.log(files);
  }
};

list();
