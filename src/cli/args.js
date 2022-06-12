export const parseArgs = () => {
  const [executor, file, ...rest] = process.argv;
  const args = {};

  rest.forEach((arg, index, array) => {
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = array[index + 1];
      
      args[key] = value;
    }
  });

  const output = Object.entries(args).reduce((acc, [key, value]) => {
    acc.push(`${key} is ${value}`);
    
    return acc;
  }, []).join(', ');

  console.log(output);
};

parseArgs();
