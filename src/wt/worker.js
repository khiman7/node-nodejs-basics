import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const { n } = workerData;
  const result = nthFibonacci(n);

  if (n == 15) {
    throw new Error('Test');
  } 
  
  parentPort.postMessage(result);
};

sendResult();
