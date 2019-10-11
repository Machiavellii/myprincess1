const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    sexual_orientation: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    in_agency: {
        type: Boolean,
        default: false,
    },
    parent_acc: {
        type: ObjectId,
        ref: 'userSchema'
    },
    country: {
        type: String,
        required: true
    },
    canton: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    ZIP: {
        type: String,
        required: true
    },
    reg_date: {
        type: Date,
        default: Date.now
    },
    subscription_plan: {
        type: ObjectId,
        ref: 'Subscription'
    },
    start_of_subscription: {
        type: Date
    },
    end_of_subscription: {
        type: Date
    },
    favorites: {
        type: Array,
    },
    is_active: {
        type: Boolean,
        default: false
    },
    adCount: {
        type: Number
    },
    salt: String
});

module.exports = mongoose.model("User", userSchema);