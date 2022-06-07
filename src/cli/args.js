export const parseArgs = () => {
  const [executor, file, ...rest] = process.argv;
  const args = {};

  rest.forEach((arg, index, array) => {
    if (arg.startsWith('--')) {
      args[arg.slice(2)] = array[index + 1];
    }
  });

  Object.entries(args).forEach((entry, index, array) => {
    const [key, value] = entry;

    process.stdout.write(`${key} is ${value}`);
    process.stdout.write(`${index === array.length - 1 ? '' : ', '}`);
  });
};

parseArgs();
