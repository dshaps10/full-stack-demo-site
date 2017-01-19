// local packages
let {Destination} = require('../models/destinations');
let {mongoose} = require('../db/mongoose');

// collection of documents pertaining to Product models
let destinations = [
  {
    "img": "http://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/WaterPark_PalmBeach.jpg",
    "title": "Bahamas",
    "description": "A beautiful, beach front resort with an ocean view",
    "rate": "3000"
  }, {
    "img": "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ",
    "title": "San Francisco",
    "description": "Visit the wonderful, eclectic, city by the Bay",
    "rate": "2300"
  }, {
    "img": "https://cdn.getyourguide.com/niwziy2l9cvz/3Nl5nGC5fq2CQ0O42awIwq/0cff0ba6cc53c2e0f9c153e820fcc8d0/berlin-Brandenburg-Gate-1112x630.jpg",
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