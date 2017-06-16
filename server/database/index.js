/**
 * Created by raghavan on 16/6/17.
 * @description: Initializing the data models
 */
const Sequelize = require('sequelize');
const log = require('../utils/logger');
const {
    database,
    username,
    password,
    host,
    port,
    dialect,
    pool,
    logLevel
} = require('../../config')['database'];

const dataProvider = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
    logging: log[logLevel],
    pool
});

dataProvider.__Sequelize = Sequelize;

// Testing connection
dataProvider.authenticate()
.then(() => {
    log.info('Connected to database');
})
.catch((error) => {
    log.error('Unable to connect to database:', error.message);
    process.exit(1);
});

module.exports = dataProvider;