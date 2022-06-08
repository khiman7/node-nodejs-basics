import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { join } from 'path';

const SRC = 'fileToCompress.txt';
const DEST = 'archive.gz';

export const compress = async () => {
  const filepath = join('./files', SRC);

  await pipeline(createReadStream(filepath), createGzip(), createWriteStream(DEST));
};

compress();
