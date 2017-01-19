// local packages
let {Product} = require('../models/products');
let {mongoose} = require('../db/mongoose');

// collection of documents pertaining to Product models
let products = [
  {
    "img": "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Blue-Harley-Davidson-Motorcycle-Bike-Side-View-PNG-Image.png",
    "title": "1968 Harley Davidson",
    "description": "An oldie but a goodie!",
    "price": "10000"
  }, {
    "img": "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Triumph-Rocket-III-Motorcycle-Bike-PNG-Image.png",
    "title": "2006 Triumph",
    "description": "A new riff on a classic with some stylish looks",
    "price": "6000"
  }, {
    "img": "http://pngimg.com/upload/motorcycle_PNG3132.png",
    "title": "1998 Honda",
    "description": "A mean racing bike",
    "price": "4400"
  }, {
    "img": "https://content.kawasaki.com/Content/Uploads/Products/7279/Colors/3kbtyopr.m0o.png",
    "title": "1991 Kawasaki",
    "description": "Recently received an upgrade and is ready for a new, loving owner",
    "price": "6500"
  }, {
    "img": "http://www.motorcyclemag.com.ph/wp-content/uploads/2015/09/Honda-Supremo-Image-19885.png",
    "title": "1986 Honda",
    "description": "This one could use a little work, but is still a great bike",
    "price": "2000"
  }, {
    "img": "http://www.granstarcorp.com/dev/files/12062013401702820.png",
    "title": "2011 Vespa",
    "description": "An amazingly speedy scooter that's great for getting around the city",
    "price": "3000"
  }, {
    "img": "http://www.dusejamoto.com/wp-content/uploads/photo-gallery/Triumph/Triumph%20Scrambler/.original/MG6_MY15_Scrambler_PG_LHS.png",
    "title": "2002 Triumph",
    "description": "The ideal bike for someone learning to ride for the first time",
    "price": "8200"
  }, {
    "img": "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-BMW-R1200GS-Adventure-Motorcycle-Bike-Side-PNG-Image.png",
    "title": "2007 BMW",
    "description": "A classic European sport bike that really flies",
    "price": "14000"
  }, {
    "img": "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Yellow-Ducati-Scrambler-Motorcycle-Bike-PNG-Image.png",
    "title": "2016 Ducati",
    "description": "A beautiful scrambler that handles well both on and off-road",
    "price": "13300"
  }, {
    "img": "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-KTM-125-Duke-Sports-Motorcycle-Bike-PNG-Image.png",
    "title": "2014 KTM",
    "description": "A zippy little bike that's a ton of bang for your buck",
    "price": "6500"
  }, {
    "img": "http://www.appalachianharley-davidson.com/images/showroom/sportster.png?w=211",
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