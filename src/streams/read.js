import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { join } from 'path';

const FILENAME = 'fileToRead.txt';

export const read = async () => {
  const filepath = join('./files', FILENAME);

  await pipeline(createReadStream(filepath), process.stdout);
};

read();
