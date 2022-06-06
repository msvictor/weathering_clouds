module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathPrefix: '#common',
              rootPathSuffix: 'src/common',
            },
            {
              rootPathPrefix: '#core',
              rootPathSuffix: 'src/core',
            },
            {
              rootPathPrefix: '#modules',
              rootPathSuffix: 'src/modules',
            },
          ],
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
