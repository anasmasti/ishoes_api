const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema =  new Schema({
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});


const Season = mongoose.model('Season', SeasonSchema);
module.exports = Season
