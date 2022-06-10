import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const calculateHash = async () => {
  const filename = 'fileToCalculateHashFor.txt';
  const filepath = join(__dirname, 'files', filename);
  const buffer = await readFile(filepath);
  const hash = createHash('sha256');

  hash.update(buffer);

  return hash.digest('hex');
};

const hash = await calculateHash();

console.log(hash);
