/**
 * This contains services related to authentication
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/18/18
 */

const { UsersDao } = require('../dao');
const { MESSAGES } = require('../constants')
const _ = require('underscore');

module.exports = {

    /**
     * This service authenticates the given username and password if it matches the one in the DB
     *
     * @param username {string} The username that has to be authenticated
     * @param password {string} The password for this user
     * @returns {Promise<any>} The promise object that resolves when the operation is complete
     */
    authenticate: (username, password) => {
        return new Promise((resolve, reject) => {
            UsersDao.find({ username }, (err, result) => {
                if (err) {
                    reject(err);
                }

                if (_.isEmpty(result) || result === null) {
                    resolve(new Error(MESSAGES.INVALID_CREDENTIALS));
                } else {
                    if (_.isEqual(password, _.first(result)['password'])) {
                        resolve();
                    } else {
                        resolve(new Error(MESSAGES.INVALID_CREDENTIALS));
                    }
                }
            });
        });
    }
};