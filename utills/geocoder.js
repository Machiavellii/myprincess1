const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "K47YANIC6nFwvD8Gq0gyHhvWdeLRLNSB",
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
