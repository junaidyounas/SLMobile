module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          components: './app/components',
          _main: './app/components/_main',
          screens: './app/screens',
          config: './app/config',
          navigations: './app/navigation',
          utils: './app/utils',
          actions: './app/state/actions',
          constants: './app/state/constants',
          contexts: './app/state/contexts',
          reducers: './app/state/reducers',
          assets: './app/assets/',
          hooks: './app/hooks',
          data: './app/data',
        },
      },
    ],
  ],
};
