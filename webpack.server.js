const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');
const SVR_DIR = path.join(__dirname, '/server/index.js');

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
        use: ['null-loader', 'null-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'null-loader',
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
            loader: 'null-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    mainFields: ['main']
  },
};

module.exports = merge(baseConfig, config);