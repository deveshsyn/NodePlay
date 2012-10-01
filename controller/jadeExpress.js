var users = require('./../model/db.js');

module.exports = function(parentApp, express) {

  var app = express();

  app.set('views', './views');

  app.set('view engine', 'jade');

  app.get('/jade/users', function(req, res) {
    res.render('users', { users: users });
  });

  parentApp.use(app);
};
