const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    }

}, {timestamps:true});

const Narration = mongoose.model("Narration",thoughtSchema);

module.exports = Narration;