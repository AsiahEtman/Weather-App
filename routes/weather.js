var express = require('express');
var router = express.Router();
var weather = require("../controllers/WeatherController.js");


router.get('/', function (req, res) {
  weather.list(req, res);
});

router.get('/logs', function (req, res) {
  weather.listlog(req, res);
});


router.post('/', function (req, res) {
  weather.save(req, res);
});

router.post('/delete', function (req, res, next) {
  weather.delete(req, res);
});

module.exports = router;
