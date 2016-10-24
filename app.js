require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path =  require('path');


const homeRoute = require('./routes/home') //.js is implied

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use('/', homeRoute);
app.listen(port, () => console.log('Server is listening on port ', 3000));



