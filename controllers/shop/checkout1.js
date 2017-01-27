// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../../db/mongoose');
let {Product} = require('./../../models/products');
let {datafile} = require('./../../optly_shop_datafile');
let {uuid} = require('./../../helpers/uuid');
let {priceDiscount} = require('./../../helpers/price_discount');

// Global variable where userID for Optly experiments will be stored
let userID;

// instantiate Express.js
const checkout1 = express();

checkout1.get('/', (req, res) => {
    res.send('This is checkout version 1');
});