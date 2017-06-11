const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Setting the root directory as the root contet
  context: __dirname,
  // The front door into our project. Needs to be an array when using HMR so it knows how
  // to do the HMR. The order of the entries is critical.
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx'
  ],
  // Inline all source maps into dev bundled code
  devtool: 'cheap-eval-source-map',
  // Place where the bundled file will land
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    // Making the output aware of where its going to be served from in our server (this is for HMR)
    // and has to be the same as what's in the devServer
    publicPath: '/public/'
  },
  // Adding a dev server to serve our static resources
  devServer: {
    // Sets the dev-server to be hot
    hot: true,
    // The path we anticipate our bundled being served from in our server
    publicPath: '/public',
    // Tells the webapack dev server that if it doesn't recognize something to just forward it along to the client so it can handle it.
    // In other words, the client will worry about it, I will not. This is what allows 'BrowserRouter' to work since the dev
    // server will just reply with index.html and our client will take over from there, definetely not what you will do in prod
    historyApiFallback: true
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
  // Plugins augment the abilities of webpack
  plugins: [
    // Adds ability to insert the hot modules
    new webpack.HotModuleReplacementPlugin(),
    // Sends down the names of whatever modules are being replaced for debugging purposes
    new webpack.NamedModulesPlugin()
  ],
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
