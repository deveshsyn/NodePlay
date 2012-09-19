var users = require('./../model/db.js');

module.exports = function(parentApp, express){

  var app = express();

  app.get('/webservice/:name', function(req, res, next) {
    var userName = req.params.name;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];

      if (user.name == userName) {
        return res.send(user);
      }
      return res.send('Name not found.');
    }
  });

  parentApp.use(app);

};
