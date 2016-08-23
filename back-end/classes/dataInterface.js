var deferred = require('deferred');

module.exports = {
    loader: function (i, req){

        var promise = deferred();
        var threatFeed = require("." + threatFeeds[i].plugin); //get the require from the plugin field
        console.log("HERE");
        var info = threatFeed.data(req.body.md5);   //pass md5 to plug in
            info.then( (data) => { // wait for data to come in
                threatFeeds[i].setData(JSON.stringify(data)); // set the raw data field in the class to the reply
                var response = {"Resource" : threatFeeds[i]};
                //console.log({Resource: threatFeeds[i].source });
                //send the data, need to add graphing thing later
                promise.resolve(response);
            });
        return promise.promise;
        //return(info);
    }
}
