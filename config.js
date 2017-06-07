/**
 * Created by raghavan on 7/6/17.
 * @description: configuration file
 */
const path = require('path');

let APP_DIR = path.resolve(__dirname, 'src/client/app'),
    BUILD_DIR = path.resolve(__dirname, 'src/client/public');
let config = {
    directories: {
        application: APP_DIR,
        build: BUILD_DIR
    },
    files: {
        entryFile: 'index.jsx',
        buildFile: 'bundle.js'
    }
};

module.exports = config;