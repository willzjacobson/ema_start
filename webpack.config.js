const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = env => {
  // These config options are used whether this is a development or production build
  const baseConfig = {
    entry: './app/renderers/dom.js',
    output: {
      // Absolute directory path where bundled content is placed
      path: path.join(__dirname, outputDirectory),
      // filename of JS bundle
      filename: '[name].[chunkhash].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // These options apply only for the bundle for browsers, not for the node build.
            // This is because browsers generally require more intensive transpilation from Node,
            // And there's no need to perform those heavy transformations with Node
            options: {
              presets: [
                '@babel/preset-react', // necessary transpilation react & JSX
                [
                  '@babel/preset-env',
                  {
                    debug: false, // limit console output
                    // Only perform necessary transpilation for browsers that have >5% market share,
                    // intentionally leaving out Internet Explorer 11 (which requires everything)
                    targets: {
                      browsers: ['> 5%', 'not ie 11'],
                    },
                    // Only apply the babel plugins needed to tanspile JS features that are used in the code
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.ejs$/,
          use: 'raw-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        template: './app/views/index.ejs',
        filename: 'index.ejs',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
        },
      }),
    ],
    // OPTIMIZATION: We are splitting the code into 2 bundles
    // 1) a 'main' bundle consisting of our source code
    // 2) a 'vendor' bundle consisting of our dependencies
    // This makes use of client-side caching:
    // If we push an update to our source code changes but dependencies do not change,
    // only the 'main' (smaller) bundle must be re-fetched by the browser
    optimization: {
      // Tells webpack to extract a 'vendor' bundle of dependencies
      splitChunks: {
        chunks: 'initial',
      },
      // Creates a 'manifest' file to keep track of which bundle should be updated
      runtimeChunk: {
        name: 'manifest',
      },
    },
  };

  // If this is a development build, include plugins useful for debugging
  // (these use resources and increase the bundle size)
  if (env.development) {
    const devConfig = {
      plugins: [
        // When webpack has trouble buidling a module into the bundle,
        // Show the readable filename of the module in the logs
        new webpack.NamedModulesPlugin(),
      ],
    };

    // Webpack Merge is a simple module to make building the config object easier
    return merge(baseConfig, devConfig);
  } else {
    // Production build; just use the baseConfig
    return baseConfig;
  }
};
