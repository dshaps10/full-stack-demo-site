// local packages
let {Product} = require('../models/products');
let {mongoose} = require('../db/mongoose');

// collection of documents pertaining to Product models
let products = [
  {
    "img": "http://www.motorcycle-usa.com/wp-content/uploads/2016/09/H-D-FatBoyLo-2016.jpg?378220",
    "title": "1968 Harley Davidson",
    "description": "An oldie but a goodie!",
    "price": "10000"
  }, {
    "img": "http://www.totalmotorcycle.com/motorcycles/2012models/2012-Triumph-Thruxton6.jpg",
    "title": "2006 Triumph",
    "description": "A new riff on a classic with some stylish looks",
    "price": "6000"
  }, {
    "img": "http://www.motorcycle-usa.com/wp-content/uploads/2015/10/2016_Honda_VFR1200X.jpg?378220",
    "title": "1998 Honda",
    "description": "A mean racing bike",
    "price": "4400"
  }, {
    "img": "https://content.kawasaki.com/Content/Uploads/Products/7279/Colors/3kbtyopr.m0o.png",
    "title": "1991 Kawasaki",
    "description": "Recently received an upgrade and is ready for a new, loving owner",
    "price": "6500"
  }, {
    "img": "http://www.totalmotorcycle.com/photos/2011models/2011-Honda-ShadowRS-VT750RSa.jpg",
    "title": "1986 Honda",
    "description": "This one could use a little work, but is still a great bike",
    "price": "2000"
  }, {
    "img": "http://images.motorcycle-usa.com/PhotoGallerys/15-Moto-Guzzi_eldorado.jpg",
    "title": "2011 Moto Guzzi",
    "description": "This bike was ridden very lightly and is ready to be taken out on the road again",
    "price": "12000"
  }, {
    "img": "http://www.motorcyclistonline.com/sites/motorcyclistonline.com/files/styles/large_1x_/public/images/2016/01/triumph-bonneville-08.jpg?itok=FyVoYRm4",
    "title": "2002 Triumph",
    "description": "The ideal bike for someone learning to ride for the first time",
    "price": "8200"
  }, {
    "img": "https://s-media-cache-ak0.pinimg.com/originals/26/8a/36/268a36474c8543c7da55ff91bd943052.jpg",
    "title": "2007 BMW",
    "description": "A classic European sport bike that really flies",
    "price": "14000"
  }, {
    "img": "http://www.motorcycle-usa.com/wp-content/uploads/2016/11/Duc-959-Panigale-2016.jpg",
    "title": "2016 Ducatti",
    "description": "A beautiful scrambler that handles well both on and offroad",
    "price": "13300"
  }, {
    "img": "http://www.motorcycle-usa.com/wp-content/uploads/2015/12/2016_KTM450SX-F_FactoryEdition-02.jpg?378220",
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
  })
  .end();
