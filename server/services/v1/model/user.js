const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        default: null,
    },
    sex: {
        type: String,
        default: 0
    },
    age: {
        type: String,
        default: 0
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User 