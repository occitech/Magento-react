var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: ['./frontend/index.js'],
        vendor: ['react']
    },
    output: {
        path: "./htdocs/js",
        library: 'FooApp',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: node_modules, loader: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: "./htdocs"
    }
};