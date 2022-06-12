import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const filepath = join(__dirname, 'files', 'fileToRead.txt');

  await pipeline(
    createReadStream(filepath),
    process.stdout,
  );
};

read();
