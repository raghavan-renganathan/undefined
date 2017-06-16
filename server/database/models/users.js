/**
 * Created by raghavan on 16/6/17.
 * @description: users
 */
module.exports = function (Database, DataTypes) {
    return Database.define('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        }
    });
};