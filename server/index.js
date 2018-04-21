const bodyParser = require('body-parser');
const express = require('express');
const host = require('../database/host.js');
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/host';

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

const db = mongoose.connect(mongoUri, function(err) {
  if (err) {
    console.log("error connecting to mongo");
  } else {
    console.log('connected to mongo');
  }
});
// this is where you define where your URL
// colon means can change
// colon makes variable with whatever is after it
  // req.params.id
app.get('/rooms/:id/host', function(req, res) {
  console.log(req.params);


  host.test(req.params.id, function(data) {
    // console.log('perfect')
    res.send(data);
    
  });
  // request to db
  // db.queryDb(function(data) {
  //   res.send(data);
  // }) 
});

// app.get('/', function (req, res) {
//   res.sendfile('public/index.html');
// });


const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});