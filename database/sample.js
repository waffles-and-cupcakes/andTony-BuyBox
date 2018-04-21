const db = require('./index.js');
const newHost = require('./host.js');
const faker = require('faker');

// function that generates data

const data = [];
for (var i = 1; i <= 100; i++) {
  var obj = {
    Host: {
      Id: i,
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
  for (var i = 0; i < data.length; i++) {
    const newerHost = new newHost(data[i])
    // var newerHost = new newHost(
    //   {
    //     SuperHost: data[i].SuperHost,
    //     AboutMe: data[i].AboutMe,
    //     Languages: data[i].Languages,
    //     ResponseRate: data[i].ResponseRate,
    //     ResponseTime: data[i].ResponseTime,
    //     Host: {
    //         Id: data[i].Host.Id,
    //         Name: data[i].Host.Name,
    //         PhotoUrl: data[i].Host.PhotoUrl,
    //         Location: data[i].Host.Location,
    //         Joined: data[i].Host.Joined,
    //         References: data[i].Host.References,
    //         Verified: data[i].Host.Verified
    //     }
      // });
    // console.log(data[i])
    // newerHost.markModified('Host')
    newerHost.save(function(err) {
      if (err) {
        console.log(err);
      }
    })
  }
//   newHost.create(data)
//     .then(() => db.disconnect());
};

generateData();