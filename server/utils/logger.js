/**
 * The logger object that can be used to log details
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since Thu Jul 5 2018
 */
const logger = require('npmlog');
const dateFormat = require('dateformat');
const config = require('../../config')['logger'];

const log = {};

const timeStamp = function () {
    return dateFormat(new Date(), config.dateFormat);
};

config.levels.forEach((level) => {
    log[level] = function (...args) {
        let prefix = timeStamp();
        if (typeof args[0] === 'object') {
            let tags = Object.keys(args[0]);
            tags.forEach((tag) => {
                prefix += ` | ${tag}: ${args[0][tag]}`;
            });
            args.splice(0,1);
        }
        prefix += ' |';
        logger[level](prefix, ...args);
    }
});

module.exports = log;