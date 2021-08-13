const axios = require("axios");
const Forecast = require("../Moduls/moduls.js");
require("dotenv").config();
const Cache = require("../helpers/ForeCastCache.helper");
const foreCastCaching = new Cache([]);
let allName;

let weatherController = function (req, res) {
  if (foreCastCaching.forcecastData.length && allName === req.query.city) {
    res.json({ message: "from cache", data: foreCastCaching.forcecastData });
  } else {
    let name = req.query.city;
    foreCastCaching.forcecastData = [];
    allName = name;
    const urlWeather = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.WEATHER_API_KEY}`;
    axios.get(urlWeather).then((item) => {
      let weatherArr = item.data.data;
      let arr = [];
      weatherArr.map((item) => {
        arr.push(new Forecast(item));
      });
      foreCastCaching.forcecastData = arr;
      res.json({ message: "from api", data: arr });
    });
  }
};

module.exports = weatherController;
