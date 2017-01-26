// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../db/mongoose');
let {Product} = require('./../models/products');
let {datafile} = require('./../optly_shop_datafile');
let {uuid} = require('./../helpers/uuid');
let {priceDiscount} = require('./../helpers/price_discount');

// Initialize the Optimizely client
let optimizelyClient = optimizely.createInstance({
  datafile: datafile
});

// Global variable where userID for Optly experiments will be stored
let userID;

// instantiate Express.js
const shop = express();

// route for e-commerce site
shop.get('/shop', (req, res) => {
  // generate random userID
  userID = uuid();


  // activate the Optimizely experiment
  let variation = optimizelyClient.activate("LANDING_PAGE_UI", userID);
  console.log(variation);

  // this object contains information about the experiment (To be displayed in client-side modal)
  let experimentInfo = {
    name: 'LANDING_PAGE_UI',
    hypothesis: 'Swapping out the banner image and the main call to action will increase conversions',
    explanation: 'Based on which variation a user has been bucketed into, Optimizely is directing the site to serve up a different version of the homepage complete with a different banner image and call to action',
    variation
  }

  // decide which version of the UI to show based on the bucketed variation
  if (variation === 'variation_a') {
    Product.find()
      .then((products) => {
        res.render('shop/home.hbs', {
          productArray: products.slice(0,3),
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else if (variation === 'variation_b') {
    Product.find()
      .then((products) => {
        res.render('shop/home2.hbs', {
          productArray: products.slice(0,3),
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else {
    Product.find()
      .then((products) => {
        res.render('shop/home.hbs', {
          productArray: products.slice(0,3),
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  }
});

// route for retrieving product results
shop.get('/shop/products', (req, res) => {
  // generate random userID
  userID = uuid();

  // Activate Optimizely experiment
  let variation = optimizelyClient.activate("SEARCH_RESULT_SORTING_EXPERIMENT", userID);

  // this object contains information about the experiment (To be displayed in client-side modal)
  let experimentInfo = {
    name: 'SEARCH_RESULT_SORTING_EXPERIMENT',
    hypothesis: 'Listing items in order of decreasing price will drive more customers to purchase expensive motorcycles and increased revenue per sale',
    explanation: "If a user is in 'results_a' then they are seeing the default product listing which is in order of date added; if a user is bucketed into 'results_b' Optimizely will point the search function towards a different sorting mechanism, which lists products in order of decreasing price",
    variation
  }

  // determine how results should be displayed based on user variation
  if (variation === 'results_a') {
    Product.find()
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products,
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else if (variation === 'results_b') {
    Product.find().sort({"price":-1})
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products,
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  } else {
    Product.find()
      .then((products) => {
        res.render('shop/products.hbs', {
          productArray: products,
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve products');
      });
  }
});

shop.get('/shop/products/:id', (req, res) => {
  let id = req.params.id;

  // generate random userID
  userID = uuid();

  // Activate Optimizely experiment
  let variation = optimizelyClient.activate("PRICE_TEST", userID);

  // this object contains information about the experiment (To be displayed in client-side modal)
  let experimentInfo = {
    name: 'PRICE_TEST',
    hypothesis: 'Adding a 15% discount to motorcycles over $8,000 will incite price sensitive buyers to purchase more expensive motorcycles.',
    explanation: "If a user is in 'original_price' then they are seeing the motorcycle with its original price; if a user is bucketed into 'discounted_price', Optimizely will direct the site to use its discounting function and the user will see the price reduced by 15%",
    variation
  }

  // determine how results should be displayed based on user variation
  if (variation === 'original_price') {
    Product.find({_id: ObjectID(id)})
      .then((product) => {
        res.render('shop/product_details.hbs', {
          img: product[0].img,
          title: product[0].title,
          description: product[0].description,
          price: product[0].price,
          experimentInfo
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
          price: priceDiscount(product[0].price), // Run price through the priceDiscount function
          experimentInfo
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
          price: product[0].price,
          experimentInfo
        });
      }, (e) => {
        res.send('Could not retrieve product ', e);
      });
  }
});

// Dispatches conversion event back to Optimizely
shop.post('/shop/products', (req, res) => {
  optimizelyClient.track('add_to_cart', userID)
})

module.exports = {
  shop
}