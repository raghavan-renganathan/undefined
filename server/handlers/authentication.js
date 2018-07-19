/**
 * This file contains all the handlers required for authentication
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */

const { AuthenticationService } = require('../services');
const { MESSAGES, STATUS } = require('../constants');

module.exports = {
    /**
     * Logs in the user if the received credentials are correct
     *
     * @param req {object} The express request object
     * @param res {object} The express response object
     */
    login: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        AuthenticationService.authenticate(username, password)
            .then((err) => {
                if (err) {
                    res.status(STATUS.UNAUTHORIZED);
                    res.send({
                        message: err.message()
                    });
                }

                // Save the username in session
                req.session.username = username;
                req.session.save();

                // Then send the response
                res.status(STATUS.OK);
                res.send({
                    message: MESSAGES.SUCCESS
                });
            })
            .catch((err) => {
                res.status(STATUS.UNAUTHORIZED);
                res.send({
                    message: err.message()
                });
            });
    }
};