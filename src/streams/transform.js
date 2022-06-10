import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

export const transform = async () => {
  const transform = new Transform({
    transform(chunk, _, callback) {
      const transformedChunk = chunk.toString().split('').reverse().join('');

      this.push(transformedChunk)
      callback();
    },
  });

  await pipeline(process.stdin, transform, process.stdout);
};

transform();
