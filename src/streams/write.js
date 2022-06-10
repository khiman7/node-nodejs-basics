import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
  const source = join(__dirname, 'files', 'fileToRead.txt');
  const destination = join(__dirname, 'files', 'fileToWrite.txt');

  await pipeline(createReadStream(source), createWriteStream(destination));
};

write();
