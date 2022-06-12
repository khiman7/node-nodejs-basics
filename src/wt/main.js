import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const compute = (n) => {
  return new Promise((resolve, reject) => {
    const filepath = join(__dirname, 'worker.js');
    const worker = new Worker(filepath, { workerData: { n } });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};

const composeResults = (results) => {
  return results.map((result) => {
    const { status, value } = result;

    if (status === 'fulfilled') {
      return { status: 'resolved', data: value }
    } else if (status === 'rejected') {
      return { status: 'error', data: null };
    }
  });
}

export const performCalculations = async () => {
  const cores = cpus();
  const results = await Promise.allSettled(cores.map((_, index) => compute(10 + index)));

  return composeResults(results);
};

const results = await performCalculations();

console.log(results);
