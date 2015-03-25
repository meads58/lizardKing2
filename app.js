var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/js',  express.static(__dirname + '/js'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
 res.render('index');
});

app.listen(port, function () {

 console.log('App hopefully running at http://%s:%s', port);

})