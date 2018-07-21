/**
 * This is a middleware that implements functionality required for authentication
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/21/18
 */
const { STATUS, MESSAGES } = require('../constants');

module.exports = {

    /**
     * This checks if the user is authenticated and then proceeds with the request.
     * If not authenticated send 401 - Unauthorized Response
     *
     * @param req {object} Express request object
     * @param res {object} Express response object
     * @param next {function} The function that invokes the handler for this request
     */
    isAuthenticated: (req, res, next) => {
        if (typeof req.session.username !== 'undefined') {
            next();
        }

        res.status(STATUS.UNAUTHORIZED);
        res.send({
            error: MESSAGES.UNAUTHORIZED
        });
    }
};