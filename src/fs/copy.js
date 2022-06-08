import { cp } from 'fs/promises';
import { existsSync } from 'fs';

const SRC_DIR = './files';
const DEST_DIR = './files_copy';

export const copy = async () => {
  if (!existsSync('./files') || existsSync('./files_copy')) {
    throw new Error('FS operation failed');
  } else {
    await cp(SRC_DIR, DEST_DIR, { recursive: true });
  }
};

copy();
