// local packages
let {mongoose} = require('./../db/mongoose');
let {Article} = require('./../models/articles');

module.exports.sampleArticleByCategory = (category) => {
	console.log('STARTING TO RUN BITCHES');
	var sampleArticles;
	Article.find({'category': category})
		.then((articles) => {
			sampleArticles = articles;
			console.log('Sample articles helper running');
			console.log(articles.slice(0, 3));
			return sampleArticles;
		}, (e) => {
			console.log('could not retrieve articles', e);
		});
	console.log('HIII IM DONE RUNNING!');
};