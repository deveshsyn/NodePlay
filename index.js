var express = require('express');

var app = module.exports = express();

// Using ExpressJS, Simple String Response
require('./controller/simpleString')(app, express);

// Using ExpressJS, Dishing out Static content
require('./controller/staticContent')(app, express);

// Using ExpressJS, As Webservice (returning JSON)
require('./controller/simpleWebservice')(app, express);

// Using ExpressJS, with JADE + Static css
require('./controller/jadeExpress')(app, express);

app.listen(3000);

console.log('Express started on port 3000');
