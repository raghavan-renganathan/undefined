/**
 * This exports all the modules present in the constant package
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */

const MESSAGES = require('./messages');
const METHODS = require('./methods');
const STATUS = require('./status-codes');

module.exports = {
    MESSAGES,
    METHODS,
    STATUS
};
