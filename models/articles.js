// npm dependencies
const mongoose = require('mongoose');

let Article = mongoose.model('Article', {
    img: {
        type: String
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    author: {
        type: String
    },
    category: {
        type: String,
    }
});

module.exports = {
    Article
};
