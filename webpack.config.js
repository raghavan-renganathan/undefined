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
    filename: path.join('css', 'userStyleSheet.css'),
    disable: process.env.NODE_ENV === "development"
});
const extractCSS = new ExtractTextPlugin({
    filename: path.join('css', 'style.css'),
    disable: process.env.NODE_ENV === "development"
});
const createHTML = [];
Object.keys(config.chunks).forEach((chunk) => {
    createHTML.push(new HTMLWebpackPlugin({
        title: chunk === 'login' ? `Login to ${config.name}` : config.name,
        template: path.join(config.directories.template, config.files[`${chunk}Template`]),
        filename: chunk === 'main' ? 'index.html' : `${chunk}.html`,
        chunks: [chunk]
    }));
});

module.exports = {
    entry: config.chunks,
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
                    use: ["css-loader?sourceMap&components&localIdentName=[local]"],
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
        ...createHTML
    ]
};