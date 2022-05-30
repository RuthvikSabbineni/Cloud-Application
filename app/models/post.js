const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const PostSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    content: {
        type: String,
        required: true
    },
    time: { 
        type: Date, 
        default: Date.now
    },
        comments: [{
        comment: String,
        username: String,
        time: {
            type: Date,
            default: Date.now
        }
    }]

}, {timeStamps: true});

PostSchema.plugin(uniqueValidator);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;