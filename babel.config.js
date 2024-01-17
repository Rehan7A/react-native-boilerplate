module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@context': './src/context',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@utils': './src/utils',
          '@components': './src/components',
          '@redux': './src/redux',
          '@svg': './src/assets/svg',
        },
      },
    ],
  ],
};
