var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

var port = process.env.PORT || 3000;

console.log(`server running on port ${port} in ${process.env.NODE_ENV} mode`);

app.listen(port);
module.exports = app;
