/**
 * Created by raghavan on 7/6/17.
 * @description: webpack.config.js - Configuration file for webpack
 */
const config = require('./config');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const extractLESS = new ExtractTextPlugin({
    filename: path.join('css/userStyleSheet.css'),
    disable: process.env.NODE_ENV === "development"
});
const extractCSS = new ExtractTextPlugin({
    filename: path.join('css/style.css'),
    disable: process.env.NODE_ENV === "development"
});
const createHTML = new HTMLWebpackPlugin({
    title: config.name,
    template: path.join(config.directories.template, config.files.template)
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
                use: extractCSS.extract({
                    use: ["css-loader?sourceMap&modules&localIdentName=[local]"],
                    fallback: "style-loader"
                })
            }, {
                test: /\.less$/,
                include: config.directories.application,
                use: extractLESS.extract({
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
        extractCSS,
        extractLESS,
        createHTML
    ]
};