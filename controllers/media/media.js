// npm dependencies
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const optimizely = require('optimizely-server-sdk');
const ObjectID = require('mongodb').ObjectID;

// local packages
let {mongoose} = require('./../../db/mongoose');
let {Article} = require('./../../models/articles');
let {datafile} = require('./../../optly_media_datafile');
let {sampleArticleByCategory} = require('./../../helpers/sampleArticleByCategory');
let {uuid} = require('./../../helpers/uuid');

// Initialize the Optimizely client
let optimizelyClient = optimizely.createInstance({
    datafile: datafile
});

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
    let id = req.params.id;

    // generate random userID
    userID = uuid();

    // Activate Optimizely experiment
    let variation = optimizelyClient.activate("SAMPLE_ARTICLE_EXPERIMENT", userID);

    console.log(variation);

    if (variation === 'original') {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                    mainArticle: articles[0],
                    topStories: articles.slice(1, 7),
                    samples: articles.slice(8, 11)
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });
    } else if (variation === 'politics') {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                	mainArticle: articles[0],
                	topStories: articles.slice(1, 7),
                    samples: articles.filter((article) => { return article.category === 'Politics' })
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });
    } else if (variation === 'life') {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                    mainArticle: articles[0],
                    topStories: articles.slice(1, 7),
                    samples: articles.filter((article) => { return article.category === 'Life' })
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });

    } else if (variation === 'news') {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                    mainArticle: articles[0],
                    topStories: articles.slice(1, 7),
                    samples: articles.filter((article) => { return article.category === 'News' })
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });

    } else if (variation === 'sports') {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                    mainArticle: articles[0],
                    topStories: articles.slice(1, 7),
                    samples: articles.filter((article) => { return article.category === 'Sports' })
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });
        
    } else {
        Article.find().sort({"category": -1})
            .then((articles) => {
                res.render('media/home.hbs', {
                    mainArticle: articles[0],
                    topStories: articles.slice(1, 7),
                    samples: articles.slice(8, 11)
                    // samples: sampleArticleByCategory(article, 'Politics')
                });
            }, (e) => {
                res.send('Could not retrieve articles');
            });
    }

});

module.exports = {
    media
}
