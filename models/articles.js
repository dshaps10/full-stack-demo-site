// npm dependencies
const mongoose = require('mongoose');

let Article = mongoose.model('Article', {
    img: {
        type: String
    },
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = {
    Article
};
