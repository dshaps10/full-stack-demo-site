// guid function allows for the creation of UUID-like number
// to be used as userID when activating Optimizely Full Stack experiment
module.exports.uuid = () => {
  var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
};
