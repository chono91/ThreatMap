//This file is to make a list of datapacks that represent each datafeed being sourced from


var dataPack = require('../classes/dataPack.js');
var q = require("deferred");
var promise = q();


//Virus total plugin
module.exports = {
    searchers: function(){
        var VTData = [new dataPack("Virus Total")]; //sets up a new datapack for virus total with source name
        VTData[0].setPlugin("./feeds/vt.js");

        VTData.push(new dataPack("Virus Total")); //sets up a new datapack for virus total with source name
        VTData[1].setPlugin("./feeds/vt.js");
        return VTData;
    }
}

//"virus Total"
//module.exports = {
//    search: function(req) { //search function specific to VT for now..
//        var data = virusTotal.data(req);
//        data.then( (data2)=> {
//            VTData.setData(data2); // fill the raw data field in from the data fucntion
//            promise.resolve(VTData.getData());
//            return VTData.getData(); //returns the vt data pack to server.js
//            //return promise.promise; //does the promise thing
//        });
//        }
//    }




//this needs to retun the following class
//source
//raw data
//

//q.all([loadSomething(), loadAnotherThing()])
//    .spread(function(something, another) {
//        DoSomethingOnThem(something, another);
//});
