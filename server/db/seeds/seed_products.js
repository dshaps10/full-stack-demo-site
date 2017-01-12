// local packages
const {app} = require('../../server');
const {Product} = require('../../models/products');

let products = [];

for (let i = 1; i < 31; i++) {
  products.push({
    title: 'Some title',
    description: 'A very descriptive description',
    price: 100
  });
}

Product.insertMany(products)
  .then((docs) => {
    console.log(JSON.stringify(docs));
  }, (e) => {
    console.log('Unable to insert Products');
  })
