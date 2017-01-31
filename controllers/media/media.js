// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../../db/mongoose');
let {Article} = require('./../../models/articles');
let {datafile} = require('./../../optly_shop_datafile');
let {uuid} = require('./../../helpers/uuid');

// Grabs substring of headline article
hbs.registerHelper('trimString', (passedString) => {
    let theString = passedString.substring(0,150);
    return new hbs.SafeString(theString)
});

const media = express();

// media.get('/media', (req, res) => {
//     res.render('media/home.hbs', {
//         pageTitle: 'Home'
//     });
// });

media.get('/media', (req, res) => {
    Article.find().sort({"category": -1})
        .then((articles) => {
            res.render('media/home.hbs', {
            	mainArticle: articles[0],
            	topStories: articles.slice(1, 7),
                samples: articles.slice(8, 11)
            });
        }, (e) => {
            res.send('Could not retrieve articles');
        });
});

module.exports = {
    media
}
