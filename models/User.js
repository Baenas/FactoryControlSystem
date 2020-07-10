const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    pin: Number,
    lastLogin: String,
    type: String,

})

const User = mongoose.model('users', userSchema);

module.exports = User;