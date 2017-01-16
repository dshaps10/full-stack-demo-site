// local packages
let {Product} = require('../server/models/products');
let {mongoose} = require('../server/db/mongoose');

let products = [
  {
    "title": "1968 Harley",
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
  }
];

Product.remove({})
  .then(() => {
    return Product.insertMany(products);
  })
  .then(() => done());
