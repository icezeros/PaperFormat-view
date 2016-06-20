var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/client.js'
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'babel'
            ]
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

    ]
};