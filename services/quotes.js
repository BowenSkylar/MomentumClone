
const fetch = require('node-fetch');
const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en';

function getQuote(req, res, next) {
  fetch(`${API_URL}`)
  .then(r => r.json())
  .then((result) => {
    res.quote = result;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}
module.exports = { getQuote };
