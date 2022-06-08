import { cpus } from 'os';
import { Worker } from 'worker_threads';

const compute = (n) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: { n } });

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
    const { status } = result;

    if (status === 'fulfilled') {
      return { status: 'resolved', data: result.value }
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
