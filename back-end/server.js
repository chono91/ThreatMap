var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var virusTotal = require('./controllers/vt');

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


//what to reply when rcv post
app.post('/api/search', function(req,res){
        var info = virusTotal.hashQuery();
        info.then( (data) => {
            res.send(data);
        });

})

app.get('/api/search', virusTotal.data)


var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
})
