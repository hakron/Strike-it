const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

if (process.env.NODE_ENV != 'production') {
  app.use(require('./build'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log("Hi there",port);
});
