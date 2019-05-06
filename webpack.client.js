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
  ],
};

module.exports = merge(baseConfig, config);