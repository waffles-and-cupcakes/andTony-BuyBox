const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/host');

const db = mongoose.connection;

model.exports = db;