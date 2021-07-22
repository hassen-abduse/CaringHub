const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Skills = mongoose.model('Skill', skillSchema);
module.exports = Skills;
