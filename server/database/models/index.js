/**
 * Created by raghavan on 16/6/17.
 * @description: index
 */
const dataProvider = require('../../database');
const users = require('./users')(dataProvider, dataProvider.__Sequelize);
const oauth_tokens = require()(dataProvider, dataProvider.__Sequelize);
const oauth_clients = require()(dataProvider, dataProvider.__Sequelize);

module.exports = {
    users,
    oauth_tokens,
    oauth_clients
};