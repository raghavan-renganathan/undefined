/**
 * The index file for all the routes
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */
const AuthenticationRoute = require('./authentication');

module.exports = {
    routes: [...AuthenticationRoute]
};
