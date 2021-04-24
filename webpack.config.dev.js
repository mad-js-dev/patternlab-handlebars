// webpack.config.js
const RemovePlugin = require('remove-files-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const importGlob = require('import-glob');

// Hard code this to production but can be adapted to accept args to change env.
const mode = 'production';

module.exports = {
  mode,
  entry: {
    "css/style": path.resolve(__dirname, 'source/css/style.scss'),
    "js/main": path.resolve(__dirname, 'source/_patterns/main.js'),
  },
  output: {
    filename: ({ chunk: { name } }) => {
      return '[name].js';
    },
    path: path.resolve(__dirname, 'source'),
  },
  resolve: {
    extensions: ['.css', '.scss'],
    alias: {
      // Provides ability to include node_modules with ~
      '~': path.resolve(process.cwd(), 'source/css/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'import-glob',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          { loader: 'resolve-url-loader',
            options: {
              debug: true,
              root: ''
            }
          },
          { loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
                sourceMap: true,
                sourceMapContents: false
              }
            }
          },
        ],
      },
    ],
  },

  plugins: [
    // Define the filename pattern for CSS.
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: 'css/[id].css',
    }),
    new RemovePlugin({
      after: {
        // parameters for "after normal and watch compilation" stage.
        include: [
          './source/css/style.js'
        ]
      }
    }),
    new ExtraWatchWebpackPlugin({
      dirs: [  path.resolve(__dirname, 'source', 'patterns', '**', '*') ],
    }),
  ]
}