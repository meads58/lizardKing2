var express = require('express')
var app = express()

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
 res.render('index');
})

var server = app.listen(3000, function () {

 var host = server.address().address
 var port = server.address().port

 console.log('Example app listening at http://%s:%s', host, port)

})