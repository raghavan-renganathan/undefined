/**
 * This is the model schema of the users entity in the database
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/18/18
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
}, { collection: 'Users' });

module.exports = mongoose.model('Users', schema);
