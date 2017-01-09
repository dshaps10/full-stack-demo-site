const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

// Define product schema for e-commerce demo site
let productsSchema = mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number
});
