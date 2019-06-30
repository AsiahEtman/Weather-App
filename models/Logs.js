var mongoose = require('mongoose');

var LogSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  time: String,
  icon: String,
  humidity: Number,
  speed: Number,
  visibility: Number,
  country: String,
  description: String

});

module.exports = mongoose.model('Logs', LogSchema, 'logs');
