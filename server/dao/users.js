/**
 * The DAO for the Users entity
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/18/18
 */

const { UserModel } = require('../models');
const log = require('../../custom_scripts/utils/logger');

module.exports = {

    /**
     * Runs a query in the users collection with the params passed
     *
     * @param query {object} The query object that is used to search the collection
     * @param callback {function} The callback that has to be called with the results or error
     */
    find: (query, callback) => {
        UserModel.find(query, (err, result) => {
            if (err) {
                log.error(`Error when finding the user:: ${err.message()}`);
            }

            callback(err, result);
        });
    },

    /**
     * This function fetches all the available users in the collection
     *
     * @param callback {function} The callback function which will be called with the
     *                            result or the error if encountered
     */
    getAll: (callback) => {
        UserModel.find({}, (err, result) => {
            if (err) {
                log.error(`Error when fetching all the users: ${err.message()}`);
            }

            callback(err, result);
        });
    },

    /**
     * This function inserts the given object to the model
     *
     * @param user {object} The user object that has to be inserted into the model
     * @param callback {function} The callback function that has to be called one the record is inserted
     */
    insert: (user, callback) => {
        UserModel.create(user, (err, result) => {
            if (err) {
                log.error(`Error when inserting the record: ${err.message()}`);
            }

            callback(err, result);
        });
    }
};