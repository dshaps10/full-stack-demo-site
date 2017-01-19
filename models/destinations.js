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
		minlength: 5,
		trim: true
	},
	description: {
		type: String,
		minlength: 10,
		trim: true
	},
	rate: {
		type: Number,
		default: null
	}
});

module.exports = {
	Destination
};