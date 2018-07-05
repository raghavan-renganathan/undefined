/**
 * Created by raghavan on 7/6/17.
 * @description: configuration file
 */
const path = require('path');
const packageJSON = require('./package.json');

const BUILD_DIR = path.join(__dirname, 'build');
const config = {
    name: packageJSON.name,
    version: packageJSON.version,
    directories: {
        build: BUILD_DIR,
        images: path.join(__dirname, 'src/assets/images')
    },
    database: {},
    logger: {
        levels: ['error', 'warn', 'info', 'verbose', 'html', 'silly'],
        dateFormat: 'isoDateTime'
    },
    ssl: {
        enabled: true,
        key: path.join(__dirname, 'server', 'ssl_key', 'key.pem'),
        cert: path.join(__dirname, 'server', 'ssl_key', 'cert.pem')
    },
    server: {
        port: 3000,
        contextPath: '/main',
        routes: {},
        paths: {
            images: '/images',
            app: '/'
        }
    },
    session: {
        name: 'undefined',
        secret: 'untold-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: '/'
        }
    },
    bodyParser: {
        json: {
            limit: '10mb'
        },
        text: {
            limit: '10mb'
        },
        urlencoded: {
            extended: true,
            limit: '10mb'
        }
    }
};

module.exports = config;