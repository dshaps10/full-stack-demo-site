// npm dependencies
const mongoose = require('mongoose');

// defines Product model
// contains 3 fields (title, description, and price)
let Product = mongoose.model('Product', {
  title: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    trim: true
  },
  price: {
    type: Number,
    default: null
  }
});

module.exports = {
  Product
}
