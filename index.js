var express = require('express');

var app = module.exports = express();

require('./controller/simpleString')(app, express);

require('./controller/staticContent')(app, express);

require('./controller/simpleWebservice')(app, express);

require('./controller/jadeExpress')(app, express);

app.listen(3000);

console.log('Express started on port 3000');
