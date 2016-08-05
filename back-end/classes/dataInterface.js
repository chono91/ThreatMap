var deferred = require('deferred');

module.exports = {
    loader: function (i, req){

        var promise = deferred();
        console.log(threatFeeds[0],"THREATFEEDSIN DI")
        var threatFeed = require("." + threatFeeds[i].plugin); //get the require from the plugin field
        var info = threatFeed.data(req.body.md5);   //pass md5 to plug in
            info.then( (data) => { // wait for data to come in
                console.log(i);
                threatFeeds[i].setData(JSON.stringify(data)); // set the raw data field in the class to the reply
                console.log("data set");
                var response = {"Resource" : threatFeeds[i].name};
                //console.log({Resource: threatFeeds[i].source });
                //send the data, need to add graphing thing later
                console.log(threatFeeds[i].name + "HERE!!!!!!!!!!");
                promise.resolve(response);
            });
        return promise.promise;
        //return(info);
    }
}
