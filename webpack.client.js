const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public');
const SVR_DIR = path.join(__dirname, '/server/index.js');
const Dotenv = require('dotenv-webpack');

const config = {
  context: __dirname,
  entry: ['./client/src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
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
  resolve: {extensions: ['.js', '.jsx']},
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  }
};

module.exports = merge(baseConfig, config);