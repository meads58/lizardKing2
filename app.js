var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
 res.render('index');
});

app.listen(port, function () {

 // var host = server.address().address
 // var port = server.address().port

 console.log('App hopefully running at http://%s:%s', host, port);

})