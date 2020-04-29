//This file defines the database schemea
const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//this maps the schemaname to the collection in mlab
module.exports = mongoose.model('Posts', postSchema);