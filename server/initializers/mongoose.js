/**
 * Initializes the mongoose package and connects it to the mongoDB server
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/19/18
 */

const mongoose = require('mongoose');
const { database } = require('../../config');
const log = require('../../custom_scripts/utils/logger');

module.exports = {
    initialize: async () => {
        const url = `${database.dialect}://${database.url}:${database.port}/${database.db}`;

        mongoose.Promise = global.Promise;
        log.info('Connecting to MongoDB with following configuration:');
        log.info({url});
        mongoose.connection.once('open', () => {
            log.info(`Connected to ${database.db} successfully.`);
        });
        await mongoose
            .connect(url, database.parameters)
            .catch((err) => {
                log.error('Failed to connect to MongoDB: ', err.message);
                process.exit(1);
            });
    }
};
