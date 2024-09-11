const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = Schema({
    name:{
        type: String,
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    text: {
        type: String,
        required: [true, 'please share your experience']
    },
    tags: {
        type: Array
    },

}, {timestamps:true});

const commentsSchema = Schema({
    comments: {
        type: Object
    }
})

const Narration = mongoose.model("Narration",thoughtSchema);
const Comment = mongoose.model("Comment", commentsSchema)


module.exports = {Narration,Comment};