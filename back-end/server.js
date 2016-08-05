//This is the main server file that handles communication with the client
//loo up modules
//look up closure
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dataInterface = require('./classes/dataInterface');
var deferred = require('deferred'); //has something to do with promieses, not sure
var searchHandler = require('./controllers/searchHandler');

var promise = deferred();//again not sure but promises..

app.use(bodyParser.urlencoded());//get post from url

app.use(function(req,res,next){ //has something to do with allowing certain posts
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


//what to reply when rcv post
app.post('/api/search', function(req,res){
    var response;
    threatFeeds = searchHandler.searchers(); //get list of threatfeeds


    //promises
    var plist = []; //initialize a list of promises (one for each theat feed)

    for (var i = 0; i<threatFeeds.length; i++){
        plist.push(dataInterface.loader(i, req)); //Call the loader function
        }


    deferred.map(plist)((response) => { //once all promises are fulfilled
        console.log(response+"Final sending");
        res.send(response); //send the response
    });
})

//app.get('/api/search', searchHandler.search())




var server = app.listen(5000, function(){ //set up listener
    console.log('listening on port ', server.address().port); //log that it statrted listening
})
