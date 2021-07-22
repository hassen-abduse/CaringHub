var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String,
        unique: true,
        default: ''
    },
    emailAddress: {
        type: String,
        unique: true,
        default: ''
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: Map,
        required: true
    }

}, {
    timestamps: true
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.Model('User', User);