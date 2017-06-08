const path = require('path');

module.exports = {
  // Setting the root directory as the root contet
  context: __dirname,
  // The front door into our project
  entry: './js/ClientApp.jsx',
  // Inline all source maps into dev bundled code
  devtool: 'cheap-eval-source-map',
  // Place where the bundled file will land
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Extensions order which will be used to resolve require/imports
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // Stats you will get back when building
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  // Modules that webpack will use
  module: {
    // Rules that webpack will use to apply loaders
    rules: [
      // eslint rule needs to be before the babel-loader
      {
        // 'pre' ensures that our eslint-loader runs before babel-loader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // If the test passes then the loader(s) will be used against the file
        test: /\.jsx?$/,
        // Loader is a tool that webpack will use on the code. At the moment only 'babel-loader'
        // will be ran against our code
        loader: 'babel-loader'
      }
    ]
  }
};
