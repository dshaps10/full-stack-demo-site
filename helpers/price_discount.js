// priceDiscount function
// Discounts sale price by 15% is price is > $8,000
module.exports.priceDiscount = (price) => {
	if (price > 8000) {
		let discountedPrice = price / 1.15
		return Math.floor(discountedPrice);
	}
	return price;
};