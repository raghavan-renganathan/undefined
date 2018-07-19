/**
 * Initializes the mongoose package and connects it to the mongoDB server
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */

const mongoose = require('mongoose');
const { database } = require('../../config');

module.exports = {
    initialize: function() {
        const url = `${database.dialect}://${database.url}/${database.db}`;

        mongoose.Promise = global.Promise;
        mongoose.connect(url, database.parameters);
    }
};
