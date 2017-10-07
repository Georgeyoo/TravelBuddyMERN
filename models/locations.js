var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
  	type: Number,
  },
  Lat: {
  	type: Number,
  },
  Long: {
  	type: Number,
  },
  address: {
  	type: String,
  }

});
var Locations = mongoose.model('Locations', schema);

module.exports = Locations;