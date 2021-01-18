const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    short_title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    new: {
        type: Boolean,
        default: true,
        required: true
    },
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
        required: true
    },

}, {
    timestamps: true
});


const Post = mongoose.model('Post', PostSchema);
module.exports = Post
