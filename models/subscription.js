const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    ads: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Subscription", subscriptionSchema);