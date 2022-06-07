export const parseEnv = () => {
  const variables = {};

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith('RSS_')) {
      variables[key] = value;
    }
  }

  Object.entries(variables).forEach((entry, index, array) => {
    const [key, value] = entry;

    process.stdout.write(`${key}=${value}`);
    process.stdout.write(`${index === array.length - 1 ? '' : '; '}`);
  });
};

parseEnv();
