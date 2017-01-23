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
let {searchToUpperCase} = require('./../helpers/searchToUpperCase');

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
	// Generate random userID
	let userID = uuid();

	// Activate Optimizely experiment
	let variation = optimizelyClient.activate('TOP_DESTINATIONS_EXPERIMENT', userID)

	//  Determine how Top Destinatinos should be displayed based on user variation
	if (variation === 'results_a') {
		Destination.find()
			.then((destinations) => {
				res.render('travel/home.hbs', {
					destinationArray: destinations.slice(0,3)
				});
			}, (e) => {
				res.send('Could not retrieve destinations');
			});
	} else if (variation === 'results_b') {
		Destination.find().sort({"price": -1})
			.then((destinations) => {
				res.render('travel/home.hbs', {
					destinationArray: destinations.slice(0,3)
				});
			}, (e) => {
				res.send('Could not retrieve destinations');
			});
	} else {
		Destination.find()
			.then((destinations) => {
				res.render('travel/home.hbs', {
					destinationArray: destinations.slice(0,3)
				});
			}, (e) => {
				res.send('Could not retrieve destinations');
			});
	}
});

travel.get('/travel/destinations', (req, res) => {
	// Generate random userID
	let userID = uuid();

	// Activate Optimizely Experiment
	let variation = optimizelyClient.activate('DESTINATION_SEARCH_ALGORITHM', userID);
	console.log(variation);

	// Determine how search results should be displayed
	if (variation === 'value_shoppers') {
		let search = searchToUpperCase(req.query.search);
		Destination.find({'country': search}).sort({'price': 1})
			.then((destinations) => {
				res.render('travel/destination_listing', {
					destinationArray: destinations,
					query: search
				})
			}, (e) => {
				res.send('Could not find matching destinations');
			});
	} else if (variation === 'quality_shoppers') {
		let search = searchToUpperCase(req.query.search);
		Destination.find({'country': search}).sort({'rating': -1})
			.then((destinations) => {
				res.render('travel/destination_listing', {
					destinationArray: destinations,
					query: search
				})
			}, (e) => {
				res.send('Could not find matching destinations');
			});
	} else {
		let search = searchToUpperCase(req.query.search);
		Destination.find({'country': search}).sort({'price': 1})
			.then((destinations) => {
				res.render('travel/destination_listing', {
					destinationArray: destinations,
					query: search
				})
			}, (e) => {
				res.send('Could not find matching destinations');
			});
	}

});

module.exports = {
	travel
};






