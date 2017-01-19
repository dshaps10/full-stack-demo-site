// local packages
let {Destination} = require('../models/destinations');
let {mongoose} = require('../db/mongoose');

// collection of documents pertaining to Product models
let destinations = [
  {
    "title": "Bahamas",
    "description": "A beautiful, beach front resort with an ocean view",
    "rate": "3000"
  }, {
    "title": "San Francisco",
    "description": "Visit the wonderful, eclectic, city by the Bay",
    "rate": "2300"
  }, {
    "title": "Berlin",
    "description": "An historic city with a lot of modern charm",
    "rate": "5400"
  }
];

// Clears out the existing database, then re-seeds with above collection
Destination.insertMany(destinations)
  .then((docs) => {
    return console.log(docs);
  }, (e) => {
    return console.log('Unable to seed data', e);
  });