// priceDiscount function
// Discounts sale price by 15% is price is > $8,000
module.exports.priceDiscount = (price) => {
	if (price > 8000) {
		return price * .15
	}
	return price;
};