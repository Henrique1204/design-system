import plugin from 'tailwindcss/plugin';

export const tailwindPlugin = () => {
  return plugin(
    function ({ config }) {
      return config();
    },
    {
      theme: {},
    }
  );
};
