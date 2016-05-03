const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

const port = process.env.PORT || 3000;

console.log(`server running on port ${port} in ${process.env.NODE_ENV} mode`);

app.listen(port);
module.exports = app;
