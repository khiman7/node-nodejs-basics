import { createHash } from 'crypto';
import { readFileSync } from 'fs';

export const calculateHash = async () => {
    const buffer = await readFileSync('./files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');

    hash.update(buffer);

    return hash.digest('hex');
};

(async function () {
  const hex = await calculateHash();

  console.log(hex);
})();
