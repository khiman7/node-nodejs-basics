import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const spawnChildProcess = async (args) => {
  const filepath = join(__dirname, 'files', 'script.js');
  const child = fork(filepath, args);
};

spawnChildProcess(['test', 'argument', '123']);