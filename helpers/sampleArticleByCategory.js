// local packages
let {mongoose} = require('./../db/mongoose');
let {Article} = require('./../models/articles');

module.exports.sampleArticleByCategory = (collection, category) => {
	collection.filter((article) => {
		return article.category === category
	})	
};