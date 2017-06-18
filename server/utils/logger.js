/**
 * Created by raghavan on 16/6/17.
 * @description: logger
 */
const logger = require('npmlog');
const dateFormat = require('dateformat');
const config = require('../../config')['logger'];

const log = {};

const timeStamp = function () {
    return dateFormat(new Date(), config.dateFormat);
};

config.levels.forEach((level) => {
    log[level] = function (...arguments) {
        let prefix = timeStamp();
        if (typeof arguments[0] === 'object') {
            let tags = Object.keys(arguments[0]);
            tags.forEach((tag, index) => {
                prefix += ` | ${tag}: ${arguments[0][tag]}`;
            });
            arguments.splice(0,1);
        }
        prefix += ' |';
        logger[level](prefix, ...arguments);
    }
});

module.exports = log;