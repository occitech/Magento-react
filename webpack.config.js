var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: ['./frontend/index.js']
    },
    output: {
        path: "./htdocs/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: "./htdocs"
    }
};