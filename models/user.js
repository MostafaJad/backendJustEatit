const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    postalCode: String,
    lastAccess: Date,
    phoneNumber: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        unique: true
    },
    password: {
        type: String,
        validate: [(password) => password && password.length >= 7, 'Password should be 8 characters']
    } 
}, {
        collection: 'users'
    })


userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });

module.exports = mongoose.model('User', userSchema);