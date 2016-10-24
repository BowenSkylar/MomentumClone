
const fetch = require('node-fetch');
const API_URL = "https://api.unsplash.com/photos/random?client_id=";
const API_KEY = process.env.BACKGROUND_KEY;
//request response next
function getBackground(req,res,next){
  fetch(`${API_URL}${API_KEY}`)
    .then(r => r.json())
    .then ((result) =>{
      res.image = result;
      next();
    })
    .catch((err)=>{
      res.err = err;
      next(); //keep going if error on API call
    });
}

module.exports = {getBackground};
