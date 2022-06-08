import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { join } from 'path';

const SRC_FILE = 'fileToRead.txt';
const DEST_FILE = 'fileToWrite.txt';

export const write = async () => {
  const src = join('./files', SRC_FILE);
  const dest = join('./files', DEST_FILE);

  await pipeline(createReadStream(src), createWriteStream(dest));
};

write();
