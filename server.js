var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('./database/pricesDB');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/price', function(req, res) {
    db.getPriceFromDB(null, function(result) {
        console.log('this is the result from the server', result);
        res.json(result);
    });
});

app.get('/price/:priceId', function(req, res) {
    db.byIdgetPriceFromDB(null, req.params.priceId, function(result){ 
        console.log('this is the result from the server', result);
        res.json(result);
    });
});



app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening');
});
