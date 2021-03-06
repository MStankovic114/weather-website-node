//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=24cde5c867aeee3cdf123b76777dab25&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees and it feels like " +
          body.current.feelslike +
          " degrees out." +
          " Humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
