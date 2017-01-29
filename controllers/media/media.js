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

const media = express();

// media.get('/media', (req, res) => {
//     res.render('media/home.hbs', {
//         pageTitle: 'Home'
//     });
// });

media.get('/media', (req, res) => {
    Article.find()
        .then((articles) => {
            res.render('media/home.hbs', {
                articleArray: articles
            });
        }, (e) => {
            res.send('Could not retrieve articles');
        });
});

module.exports = {
    media
}
