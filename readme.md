# Momentum Clone mini-project

![Momentum App](./momentum.png)

## Introduction
Today we will be creating SPA (Single Page Application) clones of the [Momentum Dashboard Application](https://momentumdash.com/).

### Setup
To get started on this project you may fork and clone this repository. You have been given the overall file structure necessary for the application along with a few other goodies:
  - A `package.json` with all of the necessary dependencies
  - A partially laid out `index.ejs`
  - A `public` directory containing a `css` directory with a `normalize.css` and an empty `main.css`. There is also a `js` directory with a `moment.js` and a mostly empty `script.js`
  - `weather-icons.js` for use as extra flair for the weather display

### Application Specification
Your app must do the following:
- You will only need a single route `'/'` (SPA)
- Your page **must** display: The current Time, The current weather, a ramdomized background, and an inspirational quote
- You will have 3 services models using Server Side API requests - specifically `background`, `quotes`, `weather`
  * `background` - you will leverage the [Unsplash API](https://unsplash.com/developers) for random background images every time you load your application. You will have to sign up for the API and recieve a key
  * `weather` - Use [Openweathermap API](https://openweathermap.org/api) for current local weather information
  * `quotes` - Use `http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en` to get a random quote. This API _maaayy_ deny us for too many requests coming from a single IP (it's a free service - deal with it), so come up with a backup plan in the event of such a case (**HINT**: maybe have a few static quotes in your service model that will be used in the event of a failed API request)
- In your `public/js/script.js`, you will use [Moment.js](http://momentjs.com/) to obtain the current time
