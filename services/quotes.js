const fetch = require('node-fetch');
const API_URL = "http://api.openweathermap.org/data/2.5/weather?"
const API_KEY = process.env.OPENWEATHER_KEY;
//request response next
function city(req,res,next){
  fetch(`${API_URL}q=nyc&units=imperial&APPID=${API_KEY}`)
.then(r => r.json())
.then ((result) =>{
  res.weather = result;
  next();
})
.catch((err)=>{
  res.err = err;
  next(); //keep going if error on API call
});
}

module.exports = {city};
