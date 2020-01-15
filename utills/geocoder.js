// const NodeGeocoder = require("node-geocoder");
const NodeGeocoder = require("mapbox-geocoding");

// const options = {
//   provider: "mapquest",
//   httpAdapter: "https",
//   apiKey: "K47YANIC6nFwvD8Gq0gyHhvWdeLRLNSB",
//   formatter: null
// };

// const geocoder = NodeGeocoder(options);

NodeGeocoder.setAccessToken(
  "pk.eyJ1Ijoic2VydmFsbGwiLCJhIjoiY2pndjRqejV2MWV1azMzcnRvYWVjazBrNCJ9.4FgwICwFPNnW58okWFoBww"
);

// module.exports = geocoder;
module.exports = NodeGeocoder;
