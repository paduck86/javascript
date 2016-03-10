var http= require('http');
var path = require('path');
var express = require('express');
var router = express.Router();
var app = express();

app.set('port',3010);
//app.set('views', path.join(__dirname, 'src'));
app.use(express.static(__dirname + '/src'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

/* GET home page. */
app.use('/', function(req, res, next) {
  res.render('index');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port' + app.get('port'));
});