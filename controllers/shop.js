// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../db/mongoose');
let {Product} = require('./../models/products');
let {datafile} = require('./../optly_datafile');
let {uuid} = require('./../helpers/uuid');
let {priceDiscount} = require('./../helpers/price_discount');

// Initialize the Optimizely client
let optimizelyClient = optimizely.createInstance({
  datafile: datafile
});

// instantiate Express.js
const shop = express();

// Tell Handlebars where to look for partials
hbs.registerPartials(__dirname +  './../views/partials');

// Set Handlebars as default templating engine
shop.set('view engine', 'hbs');

// points Express towars to views directory for easy rendering
shop.set('views', __dirname + './../views');

// Point shop towards stylesheets
shop.use(express.static(__dirname + './../public'));

// Allows for JSON-formatted POST requests
shop.use(bodyParser.json());

// route for e-commerce site
shop.get('/shop', (req, res) => {
  // generate random userID
  let userID = uuid();

  // activate the Optimizely experiment
  let variation = optimizelyClient.activate("LANDING_PAGE_UI", userID);

  // decide which version of the UI to show based on the bucketed variation
  if (variation === 'variation_a') {
    res.render('shop/home.hbs', {
      pageTitle: 'E-Commerce Shop'
    });
  } else if (variation === 'variation_b') {
    res.render('shop/home2.hbs', {
      pageTitle: 'E-Commerce Shop'
    });
  } else {
    res.render('shop/home.hbs', {
      pageTitle: 'E-Commerce Shop'
    });
  }
  // res.render('shop/home.hbs', {
  //   pageTitle: 'E-Commerce Shop'
  // });

  optimizelyClient.track('sample_conversion', userID)

});

// API endpoint for seeding product data
shop.post('/shop/products', (req, res) => {
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

// route for retrieving product results
shop.get('/shop/products', (req, res) => {
  // generate random userID
  let userID = uuid();

  // Activate Optimizely experiment
  let variation = optimizelyClient.activate("SEARCH_RESULT_SORTING_EXPERIMENT", userID);

  // determine how results should be displayed based on user variation
  if (variation === 'results_a') {
    Product.find()
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else if (variation === 'results_b') {
    Product.find().sort({"price":-1})
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else {
    Product.find()
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  }

  // Product.find()
  //   .then((products) => {
  //     res.render('shop/products.hbs', {
  //       productArray: products
  //     });
  //   }, (e) => {
  //     res.send('Could not retrieve products');
  //   });
});

shop.get('/shop/products/:id', (req, res) => {
  let id = req.params.id;

  // generate random userID
  let userID = uuid();

  // Activate Optimizely experiment
  let variation = optimizelyClient.activate("PRICE_TEST", userID);
  console.log(variation);

  // determine how results should be displayed based on user variation
  if (variation === 'original_price') {
    Product.find({_id: ObjectID(id)})
      .then((product) => {
        res.render('shop/product_details.hbs', {
          img: product[0].img,
          title: product[0].title,
          description: product[0].description,
          price: product[0].price
        });
      }, (e) => {
        res.send('Could not retrieve product ', e);
      });
  } else if (variation === 'discounted_price') {
    Product.find({_id: ObjectID(id)})
      .then((product) => {
        res.render('shop/product_details.hbs', {
          img: product[0].img,
          title: product[0].title,
          description: product[0].description,
          price: priceDiscount(product[0].price) // Run price through the priceDiscount function
        });
      }, (e) => {
        res.send('Could not retrieve product ', e);
      });
  } else {
    Product.find({_id: ObjectID(id)})
      .then((product) => {
        res.render('shop/product_details.hbs', {
          img: product[0].img,
          title: product[0].title,
          description: product[0].description,
          price: product[0].price
        });
      }, (e) => {
        res.send('Could not retrieve product ', e);
      });
  }
});

module.exports = {
  shop
}