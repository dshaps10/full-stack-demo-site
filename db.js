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

// Define flight schema for travel demo site
let flightsSchema = mongoose.Schema({
  airline: String,
  origin: String,
  dest: String,
  departureTime: Date,
  arrivalTime: Date
});
