import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const compress = async () => {
  const source = join(__dirname, 'files', 'fileToCompress.txt');
  const destination = join(__dirname, 'archive.gz');

  await pipeline(createReadStream(source), createGzip(), createWriteStream(destination));
};

compress();
