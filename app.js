const express = require('express');
const hbs = require('hbs');

// instantiate Express.js
const app = express();

// Tell Handlebars where to look for partials
hbs.registerPartials(__dirname +  '/views/partials');

// Set Handlebars as default templating engine
app.set('view engine', 'hbs');

// app.use(express.static(__dirname + '/public'));

// root route
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page'
  });
});

// route for e-commerce site
app.get('/', (req, res) => {
  res.render('shop.hbs', {
    pageTitle: 'E-Commerce Shop'
  });
});

// Specify port and run local server
let port = 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
