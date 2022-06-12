import { rm } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
  const filepath = join(__dirname, 'files', 'fileToRemove.txt');
  
  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    await rm(filepath);
  }
};

remove();
