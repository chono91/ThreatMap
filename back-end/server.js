var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var searchHandler = require('./controllers/searchHandler');
var virusTotal = require('./controllers/vt');

app.use(bodyParser.urlencoded());//get post from url

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


//what to reply when rcv post
app.post('/api/search', function(req,res){
        threatFeeds = searchHandler.searchers(); //get list of threatfeeds
        console.log(threatFeeds);
        var info = virusTotal.data(req.body.md5);
        info.then( (data) => {
            threatFeeds.setData(data);
            res.send("Resource: " + threatFeeds.source + " Data: " + JSON.stringify(threatFeeds.rawData));

        });

})

//app.get('/api/search', searchHandler.search())


var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
})
