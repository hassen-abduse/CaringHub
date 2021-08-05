var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var Organization = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: Map,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        default: 'Org'
    },
    emailAddress: {
        type: String,
        unique: true,
        required: true
    },
    adminName: {
        type: String,
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    adminPosition: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
Organization.plugin(passportLocalMongoose);
module.exports = mongoose.model('Organization', Organization);