// npm dependencies
const mongoose = require('mongoose');

// Allow for promises in Mongoose
mongoose.Promise = global.Promise;

// connect to local database
mongoose.connect('mongodb://localhost:27017/FS_Demo_App');

module.exports = {
  mongoose
}
