module.exports = function(parentApp, express){

  var app = express();

  app.get('/', function(req, res){
    res.send('Hello World');
  });

  parentApp.use(app);

};
