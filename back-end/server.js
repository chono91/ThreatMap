var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//what to do when rcv post
app.post('/api/message', function(req,res){
    console.log(req.body);
    res.status(200);
})

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
})
