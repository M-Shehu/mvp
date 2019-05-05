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
  resolve: {
    extensions: ['.mjs', '.js', '.json']
  },
};

module.exports = merge(baseConfig, config);