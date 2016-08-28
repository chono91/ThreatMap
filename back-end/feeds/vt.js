module.exports = {
    info: function () {
        return ("Virus Total");
    },

    data: function (req) {
        var querystring = require('querystring');
        var https = require("https");
        var fs = require("fs");
        var q = require("deferred");
        var host = "www.virustotal.com";
        var apiUrl = "/vtapi/v2/file/report";
        var port = 443;
        var resource = req;
        var apikey = "065d00685e274ea2261493fb28afb039adacb5211a54fea8098d09d726b8a4a3";
        var method = "GET";
        var promise = q();
        var data = {
            resource: resource
            , apikey: apikey
        };
        var dataString = JSON.stringify(data);
        var headers = {};


        if (method == 'GET') {
            apiUrl += '?' + querystring.stringify(data);
        }
        else {
            headers = {
                'Content-Type': 'application/json'
                , 'Content-Length': dataString.length
            };
        }
        var options = {
            host: host
            , port: port
            , path: apiUrl
            , method: method
            , headers: headers
        };

        var request = https.request(options, function (res2) {
            res2.setEncoding('UTF-8');
            var responseString = '';
            res2.on('data', function (data) { //while content == data, add to response string
                //console.log(`--chunk-- ${data}`);
                responseString += data; //add to response string
            });

            res2.on('end', function () { //when response == rnd
                console.log("GOT VT DATA");
                var responseObject = JSON.parse(responseString); //convert to string from json
                promise.resolve(responseObject);//add promise resolve thing?
                //success(responseObject);
                return responseObject;//return data with promise into variable request
            });;
        });

        request.on("error", function (err) { //if request == 'error'
            console.log('problem with request: ${err.message}');
        });

        request.end();

        return promise.promise; //I think this returns the promise with the request attached
    }
}
