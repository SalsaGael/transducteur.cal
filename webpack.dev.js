const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const precss = require("precss");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.join(__dirname, "transducteur.cal/dist"),
    publicPath: "dist/",
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: (loader) => [require("autoprefixer")],
              },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: (loader) => [require("autoprefixer")],
              },
            },
            "sass-loader",
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin("style.css")],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};
