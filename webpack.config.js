const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
    externals: {
      lodash: {
        root: '_',
        amd: 'lodash',
        commonjs: 'lodash',
        commonjs2: 'lodash',
      },
    },
  },
};
