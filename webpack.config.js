// Only running from node so we are going to write the config file without using 'import'
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './js//ClientApp.js',
    devtool: 'eval',
    // Location of our bundle file
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    // Progression extension webpack will follow when doing "import" 
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}