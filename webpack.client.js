const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const Dotenv = require('dotenv-webpack');

const config = {
  context: __dirname,
  entry: ['./client/src/index.jsx'],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'spriseBundle.js',
    publicPath: '/',
    pathinfo: false,
  },
  resolve: {
    extensions: ['.js', '.json', '.scss']
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new Dotenv()
  ],
};

module.exports = merge(baseConfig, config);