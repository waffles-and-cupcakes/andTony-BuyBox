const bodyParser = require('body-parser');
const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});