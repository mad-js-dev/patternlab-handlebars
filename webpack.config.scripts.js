// webpack.config.js
const RemovePlugin = require('remove-files-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const importGlob = require('import-glob');

// Hard code this to production but can be adapted to accept args to change env.
/*
const mode = 'production';
module.exports = {
  mode,
  output: {
    // Webpack will create js files even though they are not used
    filename: 'main.bundle.js',
    chunkFilename: 'style.[chunkhash].chunk.js',
    // Where the CSS is saved to
    path: path.resolve(__dirname, 'source', 'css'),
    //publicPath: path.resolve(__dirname, 'css'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './src/scripts/utils/preact-compat'),
      'react-dom': path.resolve(
        __dirname,
        './src/scripts/utils/preact-compat'
      ),
    },
  },

  entry:  path.resolve(__dirname, 'source/js/main.js'),
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
}*/

module.exports = {
  entry: path.resolve(__dirname, 'source/_patterns/main.js'),
  mode: 'development',
  output: {
    path: `${__dirname}/source/js`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'import-glob',
      }
    ]
  }
};