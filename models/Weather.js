var mongoose = require('mongoose');

var WeatherSchema = new mongoose.Schema({
  location: String,

});

module.exports = mongoose.model('locations', WeatherSchema);
