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

const media = express();

media.get('/media', (req, res) => {
    res.render('media/home.hbs');
});

module.exports = {
    media
}
