/**
 * Created by raghavan on 7/6/17.
 * @description: webpack.config.js - Configuration file for webpack
 */
const config = require('./config');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
    filename: path.join('css/style.css'),
    disable: process.env.NODE_ENV === "development"
});

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
            }, {
                test: /\.less$/,
                include: config.directories.application,
                use: extractLess.extract({
                    use: ["css-loader", "less-loader"],
                    fallback: "style-loader"
                })
            }, {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                include: config.directories.application,
                loader: "url-loader?limit=1000000"
            }
        ]
    },
    plugins: [
        extractLess
    ]
};