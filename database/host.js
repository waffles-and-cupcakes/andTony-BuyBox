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
  Languages: Array,
  ResponseRate: Number,
  ResponseTime: String
});

const newHost = mongoose.model('user', host);

module.exports = newHost;