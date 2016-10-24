const router = require('express').Router();
const {getBackground} = require('../services/background');
const {city} = require('../services/weather');

router.get('/', getBackground, city, (req, res) =>{
 res.render('index', {
      image: res.image,
      weather: res.weather

 });
});

module.exports = router;
