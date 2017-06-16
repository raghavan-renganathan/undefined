/**
 * Created by raghavan on 16/6/17.
 * @description: data-connector
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
const connection = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
    logging: log[logLevel],
    pool
});