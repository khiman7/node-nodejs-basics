import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const SRC = 'archive.gz';
const DEST = 'fileToCompress.txt';

export const decompress = async () => {
  await pipeline(createReadStream(SRC), createGunzip(), createWriteStream(DEST));
};

decompress();
