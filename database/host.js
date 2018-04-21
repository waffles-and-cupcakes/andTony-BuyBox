const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let host = mongoose.Schema({
  Host: {
    Id: Number,
    Name: String,
    PhotoUrl: String,
    Location: String,
    Joined: String,
    References: Number,
    Verified: Boolean,
  },
  SuperHost: Boolean,
  AboutMe: String,
  Languages: String,
  ResponseRate: String,
  ResponseTime: String
});


const NewHost = mongoose.model('Host', host);

// let queryDb = function(cb) {
//   console.log('asd')
//   newHost.find({}, function(err, docs) {
//     if (err) {
//       console.log(err);
//     } else {
//       cb(docs);
//     }
//   })
// }

let test = function(id, cb) {
  // console.log('we did it')
  NewHost.find({'Host.Id': id}, function(err, docs) {
    console.log('purp')
    if (err) {
      console.log('err');
    } else {
      console.log('cool')
      cb(docs);
    }
  })
}


// module.exports.queryDb = queryDb;
module.exports = NewHost;

module.exports.test = test;