const express = require('express');
const hbs = require('hbs');

// instantiate Express.js
const app = express();

// Set Handlebars as default templating engine
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
