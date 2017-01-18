// local packages
let {Product} = require('../server/models/products');
let {mongoose} = require('../server/db/mongoose');

// collection of documents pertaining to Product models
let products = [
  {
    "title": "1968 Harley Davidson",
    "description": "An oldie but a goodie!",
    "price": "10000"
  }, {
    "title": "2006 Triumph",
    "description": "A new riff on a classic with some stylish looks",
    "price": "6000"
  }, {
    "title": "1998 Honda",
    "description": "A mean racing bike",
    "price": "4400"
  }, {
    "title": "1991 Kawasaki",
    "description": "Recently received an upgrade and is ready for a new, loving owner",
    "price": "6500"
  }, {
    "title": "1986 Honda",
    "description": "This one could use a little work, but is still a great bike",
    "price": "2000"
  }, {
    "title": "2011 Moto Guzzi",
    "description": "This bike was ridden very lightly and is ready to be taken out on the road again",
    "price": "12000"
  }, {
    "title": "2002 Triumph",
    "description": "The ideal bike for someone learning to ride for the first time",
    "price": "8200"
  }, {
    "title": "2007 BMW",
    "description": "A classic European sport bike that really flies",
    "price": "14000"
  }, {
    "title": "2016 Ducatti",
    "description": "A beautiful scrambler that handles well both on and offroad",
    "price": "13300"
  }, {
    "title": "2014 KTM",
    "description": "A zippy little bike that's a ton of bang for your buck",
    "price": "6500"
  }, {
    "title": "2012 Harley Davidson",
    "description": "A huge bike with a ton of power; experts only!",
    "price": "12000"
  }
];

// Clears out the existing database, then re-seeds with above collection
Product.insertMany(products)
  .then((docs) => {
    console.log(docs);
  }, (e) => {
    console.log('Unable to seed data', e);
  });
