var express = require('express')
var app = express()
 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', function(req, res) {
  res.sendfile('data.json');
});
 
app.listen(3000)