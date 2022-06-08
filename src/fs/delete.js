import { rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const FILENAME = 'fileToRemove.txt';

export const remove = async () => {
  const filepath = join('./files', FILENAME);
  
  if (!existsSync(filepath)) {
    throw new Error('FS operation failed');
  } else {
    await rm(filepath);
  }
};

remove();
