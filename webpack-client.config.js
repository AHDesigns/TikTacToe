const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require("webpack");

//  Set up the loaders needed for compiling Sass
const sassLoaders = ['css-loader', 'postcss-loader', 'sass-loader'];

const config = {
    //  Define where the clientside js has it's entry
    entry: {
        app: ['./src/client/app']
    },
    //  Define where all js should be compiled to
    output: {
        path: './build',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                //  Compiles all ES6 to ES5
                test: /\.js$/,
                exclude: /(__tests__|node_modules)/,
                loader: 'babel-loader',
            }, {
                //  All scss files are extracted and put through the loaders from above
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
            }
        ]
    },
    //  Defines that sass should be minified and include node_modules in imports
    sassLoader: {
        outputStyle: 'compressed',
        includePaths: ['node_modules']
    },
    //  Defines where extracted text should be put, in this case a css file
    plugins: [new ExtractTextPlugin('css/bundle.css')],
    //  adds etra css rules for browsers eg -webkit -moz etz
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
    //  resolves where the server can find files
    resolve: {
        extensions: [
            '', '.js', '.scss'
        ],
        root: [path.join(__dirname, './src')]
    },
    devServer: { inline: true }
};

config.plugins.push(new webpack.optimize.DedupePlugin());

// Uglify and optimize for production
config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          comments: false,          // output comments?
          compress: {
              warnings: false,      // warn about potentially dangerous optimizations/code
              screw_ie8: true,      // If you don't need IE8 support
          }
      })
);

module.exports = config;
