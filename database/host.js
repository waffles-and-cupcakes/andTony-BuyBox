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
    Verified: Boolean
  },
  SuperHost: Boolean,
  AboutMe: String,
  Languages: String,
  ResponseRate: String,
  ResponseTime: String
});

const newHost = mongoose.model('Host', host);

module.exports = newHost;