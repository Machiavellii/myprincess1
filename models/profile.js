const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const geocoder = require("../utills/geocoder");

const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
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
    required: true
  },
  type: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String,
    countryCode: String,
    country: String,
    city: String,
    streetName: String,
    streetNumber: String,
    zipcode: String,
    neighbourhood: String
  },
  subscription_plan: {
    type: String
  },
  start_of_subscription: {
    type: Date
  },
  end_of_subscription: {
    type: Date
  },
  favorites: {
    type: [String]
  },
  is_active: {
    type: Boolean,
    default: false
  },
  languages: {
    type: [String],
    required: true
  },
  slogan: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  silhouette: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  cover_photo: {
    type: String
  },
  photos: {
    type: Array
  },
  hours: {
    type: String
  },
  rate: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  opinions: [
    {
      review: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

// Geocode & create location
ProfileSchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);

  // console.log(loc);

  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    city: loc[0].city,
    zipcode: loc[0].zipcode,
    neighbourhood: loc[0].neighbourhood,
    country: loc[0].country,
    streetName: loc[0].streetName,
    streetNumber: loc[0].streetNumber,
    countryCode: loc[0].countryCode
  };

  // Do not save address
  // this.address = undefined;
  // next();
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
