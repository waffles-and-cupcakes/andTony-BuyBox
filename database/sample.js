const db = require('./index.js');
const newHost = require('./host.js');
const faker = require('faker');

// function that generates data


// adds data into db here.
const generateData = function() {
  // creates new data in database, then disconnects?
  newHost.create()
    .then(() => db.disconnect());
};

generateData();