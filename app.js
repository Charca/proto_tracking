var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000);

var trackingServer = require('./lib/tracking_server');
trackingServer.listen(server);
