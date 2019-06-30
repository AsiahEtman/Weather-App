const mongoose = require("mongoose");
const Weather = require("../models/Weather");
const Logs = require("../models/Logs");
const getWeather = require('../modules/getweather');
const weatherController = {};

weatherController.list = function (req, res) {
  Weather.find({}, function (err, locations) {
    if (err) {
      console.log("Error:", err);

    }
    else {
      getWeather.getWeather(locations).then(function (results) {

        weatherController.savelog(results);
        const dateandtime = new Date().toString();
        res.render("../views/index", { weather_data: results, dateandtime: dateandtime });

      });

    }
  });
};

weatherController.listlog = function (req, res) {
  Logs.find({}, function (err, locations) {
    if (err) {
      console.log("Error:", err);
    }
    else {

      res.render("../views/logs", { weather_data: locations });

    }
  });
};

weatherController.savelog = (data) => {
  Logs.insertMany(data);
};



weatherController.save = function (req, res) {

  getWeather.cheaklocation(req.body.location, function (resulte) {

    if (resulte == 'true') {
      var weather = new Weather(req.body);
      weather.save(function (err) {
        if (err) {
          console.log(err);
          res.render("../views/index");
        } else {

          res.redirect("/");
        }
      });
    }
    else {
      console.log('location not found');
      res.redirect("/");

    }

  });

};


weatherController.delete = function (req, res) {
  Weather.deleteOne({ location: req.body.location }, function (err) {
    if (err) {
      console.log(err);
    }
    else {

      res.redirect("/");
    }
  });
};

module.exports =
  weatherController;

