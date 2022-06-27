module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          components: './app/components',
          screens: './app/screens',
          navigations: './app/navigations',
          constants: './app/constants',
          utils: './app/utils',
          theme: './app/theme',
          assets: './app/assets',
          services: './app/services',
          store: './app/store',
          enum: './app/enum'
        },
      },
    ],
  ],
};
