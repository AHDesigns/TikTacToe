var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// this is needed to ensure all the require call stays the same after transpile
var nodeModules = fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .reduce(function (acc, cur) {
        acc[cur] = 'commonjs ' + cur;
        return acc;
    }, {});

module.exports = {
    entry: './src/server/server.js',
    target: 'node',
    node: {
        // without this webpack inject __dirname as '/'
        __dirname: false,
        __filename: false
    },
    output: {
        path: path.join(__dirname, 'build_server'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(__tests__|node_modules)/
            },
        ]
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|scss)$/),
        new webpack.DefinePlugin({
            'process.env.WEBPACK_SERVER_BUILD': true,
            'process.env.NODE_ENV': '"production"'
        })
    ]
};
