var express = require('express');

var app = express();

//---- For serving Static Content
app.use(express.static(__dirname + '/public'));
app.use(app.router);
//---- END --- For serving Static Content

app.get('/', function(req, res){
  res.send('Hello World');
});

function User(name, email) {
  this.name = name;
  this.email = email;
}

// Dummy users
var users = [
  new User('tj', 'tj@vision-media.ca'),
  new User('ciaran', 'ciaranj@gmail.com'),
  new User('aaron', 'aaron.heckmann+github@gmail.com')
];

/**
 * Express.js as Webservice
 */
app.get('/webservice/:name', function(req, res, next) {
  var userName = req.params.name;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.name == userName) {
      return res.send(user.email);
    }
    return res.send('Name not found.');
  }
});

/**
 * Express.js with JADE
 */

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

app.set('view engine', 'jade');

app.get('/jade/users', function(req, res){
  res.render('users', { users: users });
});

app.listen(3000);

console.log('Express started on port 3000');
