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
                include: path.resolve(__dirname, 'js'),
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // Injects styles into your bundle
                    'style-loader',
                    { // We are passing an object for 'css-loader' since we are doing some config                      
                        loader: 'css-loader',
                        options: {
                            // tells webpack to not inline images
                            url: false
                        }
                    }
                ]
            }
        ]
    }
}