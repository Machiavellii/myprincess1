const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* USER remodeled start */
    
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reg_date: {
        type: Date,
        default: Date.now
    },

    /* USER user remodeled end */

   
     /* removed for now :)
     
     in_agency: {
        type: Boolean,
        default: false,
    },
    parent_acc: {
        type: ObjectId,
        ref: 'userSchema'
    },
        adCount: {
        type: Number
    } */
});

module.exports = mongoose.model("User", userSchema);