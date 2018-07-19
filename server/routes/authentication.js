/**
 * This is a config file that provides all the routes for the endpoints
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */

const {
    AuthenticationHandler
} = require('../handlers');
const { METHODS } = require('../constants');

module.exports = [
    {
        url: '/api/login',
        method: METHODS.POST,
        handler: AuthenticationHandler.login
    }
];