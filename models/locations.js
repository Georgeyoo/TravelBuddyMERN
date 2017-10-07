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

model.exports = mongoose.model('Locations', schema);