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
        default: ''
    },
    emailAddress: {
        type: String,
        default: ''
    },
    username: {
        type: String,
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

});

User.plugin(passportLocalMongoose);
module.exports = mongoose.Model('User', User);