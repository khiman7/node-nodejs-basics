export const parseEnv = () => {
  const variables = {};

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith('RSS_')) {
      variables[key] = value;
    }
  }

  const output = Object.entries(variables).reduce((acc, [key, value]) => {
    acc.push(`${key}=${value}`);
    
    return acc;
  }, []).join('; ');

  console.log(output);
};

parseEnv();
