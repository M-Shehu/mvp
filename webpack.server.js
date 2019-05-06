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
        test: /firebase/,
        use: ['null-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    mainFields: ['main']
  },
};

module.exports = merge(baseConfig, config);