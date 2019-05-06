const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',
  entry: ['./server/index.js'],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'server/build'),
  },
  module: {
    rules: [
      {
        test: /npm\.js$/,
        loader: 'string-replace-loader',
        include: path.resolve('node_modules/firebase/dist'),
        options: {
          search: 'require(\'firebase/app\');',
          replace: 'require(\'firebase/app\').default;',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    mainFields: ['main']
  },
};

module.exports = merge(baseConfig, config);