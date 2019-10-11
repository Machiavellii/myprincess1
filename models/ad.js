const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const adSchema = new mongoose.Schema({
    user_id: {
        type: objectId,
        ref: "userSchema"
    },
    ad_is_active: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        required: true
    },
    languages: {
        type: Array,
        required: true
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
    slogan: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    silhoutte: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    cover_photo: {
        type: Buffer,
        contentType: String
    },
    photos: {
        type: ObjectId,
        ref: "Photos" //**************************** */
    },
    hours: {
        type: String,
    },
    rate: {
        type: String
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    rating: {
        type: Array
    },
    votes: {type: Array,

        review: {
            type: String
        },
        title: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        opinions: {
            type: Array
        }}
    
        
    }

    
    
})

module.exports = mongoose.model("Ad", adSchema);