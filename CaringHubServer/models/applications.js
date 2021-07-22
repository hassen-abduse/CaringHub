const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    accepted: {
        type: Boolean,
        default: false
    },
    applicationDate: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

var Applications = mongoose.model('Application', applicationSchema);
module.exports = Applications;
