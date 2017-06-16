/**
 * Created by raghavan on 16/6/17.
 * @description: oauth_clients
 */
module.exports = function (Sequelize, DataTypes) {
    return Sequelize.define('oauth_clients', {
        client_id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        client_secret: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        redirect_uri: {
            type: DataTypes.STRING
        }
    });
};