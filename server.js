// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// import controllers
let {shop} = require('./controllers/shop/shop');
let {travel} = require('./controllers/travel');
let {media} = require('./controllers/media/media');

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

// Express middleware enabling separate controllers
app.use('/', shop);
app.use('/', travel);
app.use('/', media);

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
