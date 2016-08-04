//This is the main server file that handles communication with the client

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var loader = require('./classes/dataInterface');
var q = require('deferred');
var searchHandler = require('./controllers/searchHandler');

var promise = q();

app.use(bodyParser.urlencoded());//get post from url

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


//what to reply when rcv post
app.post('/api/search', function(req,res){
    var response = [{"test": "TEST"}];
    threatFeeds = searchHandler.searchers(); //get list of threatfeeds
    console.log(threatFeeds);   //list these threat feeds
    //function bullshit(i){
    //    var threatFeed = require(threatFeeds[i].plugin); //get the require from the plugin field
    //    var info = threatFeed.data(req.body.md5);   //pass md5 to plug in
    //        info.then( (data) => { // wait for data to come in
    //            console.log(i);
    //            threatFeeds[i].setData(JSON.stringify(data)); // set the raw data field in the class to the reply
    //            console.log("data set");
    //            source = {"Resource" : threatFeeds[i].source};
    //            //console.log({Resource: threatFeeds[i].source });
    //            response.push(source);//send the data, need to add graphing thing later
    //            console.log("HERE!!!!!!!!!!");
    //        });
    //    return(info);


    //promises
    var plist = [];

    for (var i = 0; i<threatFeeds.length; i++){
        plist.push(loader.loader(i, req));
        }

    console.log(plist);
    Promise.all(plist).then((response) => {
        console.log(response);
        res.send(response);
    });
    console.log(response);
})

//app.get('/api/search', searchHandler.search())




var server = app.listen(5000, function(){ //set up listener
    console.log('listening on port ', server.address().port); //log that it statrted listening
})
