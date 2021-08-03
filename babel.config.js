module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            '@design-system': './src/design-system',
            '@domain': './src/domain',
            '@shared': './src/shared',
          },
        },
      ],
    ],
  };
};
