module.exports.searchToUpperCase = (string) => {
    return string.replace(/\w\S*/g, (txt) => {
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}