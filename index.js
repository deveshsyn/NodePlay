var express = require('express');

var app = express();

//---- For serving Static Content
app.use(express.static(__dirname + '/public'));
app.use(app.router);
//---- END --- For serving Static Content

app.get('/', function(req, res){
  res.send('Hello World');
});

var users = [
  { name: 'tobi', age: '10' },
  { name: 'loki', age: '20' },
  { name: 'jane', age: '30' }
];

/**
 * Express.js as Webservice
 */
app.get('/api/users/:name', function(req, res, next) {
  var userName = req.params.name;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.name == userName) {
      return res.send(user);
    }
    return res.send('Name not found.');
  }
});

app.listen(3000);

console.log('Express started on port 3000');
