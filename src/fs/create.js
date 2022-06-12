import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
  const filepath = join(__dirname, 'fresh.txt');
  
  if (existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else { 
    await appendFile(filepath, 'I am fresh and young');
  }
};

create();
