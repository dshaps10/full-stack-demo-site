// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../db/mongoose');
let {Destination} = require('./../models/destinations');
let {datafile} = require('./../optly_travel_datafile');
let {uuid} = require('./../helpers/uuid');
let {priceDiscount} = require('./../helpers/price_discount');

// Initialize the Optimizely client
let optimizelyClient = optimizely.createInstance({
	datafile: datafile
});

// instantiate Express.js
const travel = express();

// Tell Handlebars where to look for partials
hbs.registerPartials(__dirname +  './../views/partials');

// Set Handlebars as default templating engine
travel.set('view engine', 'hbs');

// points Express towars to views directory for easy rendering
travel.set('views', __dirname + './../views');

// Point travel towards stylesheets
travel.use(express.static(__dirname + './../public'));

// Allows for JSON-formatted POST requests
travel.use(bodyParser.json());

// Routes for travel site
travel.get('/travel', (req, res) => {
	Destination.find()
		.then((destinations) => {
			res.render('travel/home.hbs', {
				destinationArray: destinations.slice(0,3)
			});
		}, (e) => {
			res.send('Could not retrieve destinations');
		});
});

module.exports = {
	travel
}