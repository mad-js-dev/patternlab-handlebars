// webpack.config.js
const RemovePlugin = require('remove-files-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Hard code this to production but can be adapted to accept args to change env.
const mode = 'production';

module.exports = {
  mode,
  output: {
    // Webpack will create js files even though they are not used
    filename: 'style.bundle.js',
    chunkFilename: 'style.[chunkhash].chunk.js',
    // Where the CSS is saved to
    path: path.resolve(__dirname, 'source', 'css'),
    //publicPath: path.resolve(__dirname, 'css'),
  },
  resolve: {
    extensions: ['.css', '.scss'],
    alias: {
      // Provides ability to include node_modules with ~
      '~': path.resolve(process.cwd(), 'source/css/'),
    },
  },

  entry:  path.resolve(__dirname, 'source/css/style.scss'),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Extract and save the final CSS.
          MiniCssExtractPlugin.loader,
          // Load the CSS, set url = false to prevent following urls to fonts and images.
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          // Add browser prefixes and minify CSS.
          //{ loader: 'postcss-loader', options: { plugins: [autoprefixer(), cssnano()] }},
          // Load the SCSS/SASS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter()
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
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
    new RemovePlugin({
      after: {
        // parameters for "after normal and watch compilation" stage.
        include: [
          './source/css/style.bundle.js'
        ]
      }
    }),
    new ExtraWatchWebpackPlugin({
      dirs: [  path.resolve(__dirname, 'source', 'patterns', '**', '*') ],
    }),
  ]
}