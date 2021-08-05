var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var Volunteer = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,    
    },
    role: {
        type: String,
        default: 'Vol'
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
    emailAddress: {
        type: String,
        unique: true,
        required: true
    },
    skillSets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],

    causeAreas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cause' }]

}, {
    timestamps: true
});
Volunteer.plugin(passportLocalMongoose);
module.exports = mongoose.model('Volunteer', Volunteer);