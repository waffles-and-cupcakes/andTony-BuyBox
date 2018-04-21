const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/host';

const db = mongoose.connect(mongoUri, function(err) {
  if (err) {
    console.log("error connecting to mongo");
  } else {
    console.log('connected to mongo');
  }
});

module.exports = db;