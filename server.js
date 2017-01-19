// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./db/mongoose');
let {Product} = require('./models/products');
let {datafile} = require('./optly_datafile');
let {uuid} = require('./helpers/uuid');
let {priceDiscount} = require('./helpers/price_discount');

// import controllers
let {shop} = require('./controllers/shop');

// Initialize the Optimizely client
let optimizelyClient = optimizely.createInstance({
  datafile: datafile
});

// instantiate Express.js
const app = express();

// Tell Handlebars where to look for partials
hbs.registerPartials(__dirname +  '/views/partials');

// Set Handlebars as default templating engine
app.set('view engine', 'hbs');

// points Express towars to views directory for easy rendering
app.set('views', __dirname + '/views');

// Point app towards stylesheets
app.use(express.static(__dirname + '/public'));

// Allows for JSON-formatted POST requests
app.use(bodyParser.json());

app.use('/', shop);

// root route
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page'
  });
});

// Specify port and run local server
let port = 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

module.exports = {
  app
}
