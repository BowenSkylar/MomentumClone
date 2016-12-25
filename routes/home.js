const router = require('express').Router();
const { getBackground } = require('../services/background');
const { getCity } = require('../services/weather');
const { getQuote } = require('../services/quotes');
const getIcon = require('../weather-icons.js');

router.get('/', getBackground, getCity, getQuote, (req, res) =>{
    const icon = getIcon[res.weather.weather[0].main];
 res.render('index', {
      image: res.image,
      weather: res.weather,
      icon: icon,
      quote: res.quote

 });
});

module.exports = router;
