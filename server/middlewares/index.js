/**
 * This exports all the middleware modules present in this package
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/21/18
 */

const AuthenticationMiddleware = require('./authentication');

module.exports = {
    AuthenticationMiddleware
};