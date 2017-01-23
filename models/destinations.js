// npm dependencies
const mongoose = require('mongoose');

// Defines Destination model
let Destination = mongoose.model('Destination', {
	img: {
		type: String
	},
	title: {
		type: String,
		required: true,
		minlength: 5
	},
	state: {
		type: String,
	},
	country: {
		type: String,
		required: true
	},
	continent: {
		type: String,
		required: true
	},
	description: {
		type: String,
		minlength: 10
	},
	price: {
		type: Number,
		default: null
	},
	rating: {
		type: Number,
		default: null
	}
});

module.exports = {
	Destination
};