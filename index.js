var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(app.router);

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);

console.log('Express started on port 3000');
