import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const decompress = async () => {
  const source = join(__dirname, 'archive.gz');
  const destination = join(__dirname, 'fileToCompress.txt');
  
  await pipeline(createReadStream(source), createGunzip(), createWriteStream(destination));
};

decompress();
