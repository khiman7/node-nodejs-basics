import { cp } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const copy = async () => {
  const source = join(__dirname, 'files');
  const destination = join(__dirname, 'files_copy');
  
  if (!existsSync(source) || existsSync(destination)) {
    throw new Error('FS operation failed');
  } else {
    await cp(source, destination, { recursive: true });
  }
};

copy();
