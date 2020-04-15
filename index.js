var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
})

app.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
})
var http=require('http').createServer(app)

var Socket=require('./server/socket/index')
var io=new Socket(http)
io.con()
