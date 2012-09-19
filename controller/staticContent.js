module.exports = function(parentApp, express) {

  var app = express();

  app.use(express.static('./public'));
  app.use(app.router);

  parentApp.use(app);

};
