/**
 * Created by raghavan on 16/6/17.
 * @description: oauth_tokens
 */
module.exports = function (Sequelize, DataTypes) {
    return Sequelize.define('oauth_tokens', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        access_token: {
            type: DataTypes.STRING
        },
        access_token_expires_on: {
            type: DataTypes.TIMESTAMP
        },
        client_id: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.STRING
        },
        refresh_token_expires_on: {
            type: DataTypes.TIMESTAMP
        },
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        }
    });
}