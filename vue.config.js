const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '',
      },
      scss: {
        data: `@import '@/styles/variables/_global.scss';`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'styles': path.resolve(__dirname, './src/styles/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            { resourceQuery: /^\?vue/, use: ['pug-plain-loader'] },
            { use: ['raw-loader', 'pug-plain-loader'] },
          ],
        },
      ],
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/evraz-invest-prod/'
    : '/',
};
