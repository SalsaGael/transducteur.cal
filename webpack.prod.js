const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const precss = require('precss');
const fs = require('fs');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 9']
                }),
              ]
            }
          }
        ],
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 9']
                }),
              ]
            }
          },
          'sass-loader'
        ],
      })
    }]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('./style.css')
  ]
}