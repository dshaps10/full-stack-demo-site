// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// local packages
let {mongoose} = require('./db/mongoose');
let {Product} = require('./models/products');

// instantiate Express.js
const app = express();

// Tell Handlebars where to look for partials
hbs.registerPartials(__dirname +  '../../views/partials');

// Set Handlebars as default templating engine
app.set('view engine', 'hbs');

// Point app towards stylesheets
app.use(express.static(__dirname + '/public'));

// Allows for JSON-formatted POST requests
app.use(bodyParser.json());

// root route
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page'
  });
});

// route for e-commerce site
app.get('/shop', (req, res) => {
  res.render('shop.hbs', {
    pageTitle: 'E-Commerce Shop'
  });
});

// API endpoint for seeding product data
app.post('/shop/products', (req, res) => {
  let product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  });

  product.save()
    .then((doc) => {
      res.send(doc);
    }, (e) => {
      res.send('Could not add product');
    });
})

app.get('/shop/products', (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    }, (e) => {
      rest.send('Could not retrieve products');
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
