const db = require('./index.js');
const newHost = require('./host.js');
const faker = require('faker');

// function that generates data

const data = [];
for (var i = 1; i <= 100; i++) {
  var obj = {
    host: {
      ListingId: i,
      Name: faker.name.findName(),
      PhotoUrl: faker.image.avatar(),
      Location: faker.address.city() + ', ' + faker.address.country(),
      Joined: faker.lorem.sentences(),
      References: Math.ceil(faker.finance.amount()),
      Verified: faker.random.boolean(),
    },
    SuperHost: faker.random.boolean(),
    AboutMe: faker.lorem.sentences(),
    Languages: faker.lorem.sentences(),
    ResponseRate: faker.lorem.sentences(),
    ResponseTime: faker.lorem.sentences()
    }
   
    data.push(obj)
  
}
// adds data into db here.
const generateData = function() {
  // creates new data in database, then disconnects?
  newHost.create(data)
    .then(() => db.disconnect());
};

generateData();