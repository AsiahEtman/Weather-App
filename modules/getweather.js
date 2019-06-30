var request = require('request-promise');
var request1 = require('request');

async function getWeather(locations) {
  var weather_data = [];

  for (var city_obj of locations) {
    var city = city_obj.location;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

    var response_body = await request.get({ url, time: true });

    var weather_json = JSON.parse(response_body);

    var weather = {
      city: city,
      temperature: Math.round(weather_json.main.temp),
      time: new Date().toString(),
      icon: weather_json.weather[0].icon,
      humidity: weather_json.main.humidity,
      speed: weather_json.wind.speed,
      visibility: weather_json.visibility,
      country: weather_json.sys.country,
      description: weather_json.weather[0].description
    };

    weather_data.push(weather);
  }

  return weather_data;
}

function cheaklocation(location, callback) {

  request1({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`,
    json: true
  }, (error, response, body) => {
    if (error || body.cod == '404') {

      callback('false');

    }
    else {
      callback('true');
    }
  });

}

module.exports = { getWeather, cheaklocation };