/**
 * Created by raghavan on 7/6/17.
 * @description: webpack.config.js - Configuration file for webpack
 */
const config = require('./config');
let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: path.join(config.directories.application, config.files.entryFile),
    output: {
        path: config.directories.build,
        filename: config.files.buildFile
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: config.directories.application,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                include: config.directories.application,
                loader: "style-loader!css-loader?sourceMap&modules&localIdentName=[local]"
            }
        ]
    }
};