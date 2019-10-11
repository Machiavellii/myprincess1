const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
    position: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Photos", photosSchema);