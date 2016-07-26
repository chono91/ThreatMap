var querystring = require('querystring');
var https = require("https");
var fs = require("fs");
var host = "127.0.0.1";
var endpoint = "";
//var host = "en.wikipedia.org"
//var endpoint = "/wiki/George_Washington"
var port = 3000
var query =  "99017f6eebbac24f351415dd410d522d";
var methon = "POST";

function performRequest(endpoint, method, data, success) {
	var dataString = JSON.stringify(data);
	var headers = {};
	
	if (method == 'GET') {
		endpoint += '?' + querystring.stringify(data);
	}
	else {
		headers = {
			'Content-Type': 'text/plain',
			'Content-Length': dataString.length
		};
	}
	var options = {
		host: host,
		port: port,
		path: endpoint,
		method: method,
		method: method,
		headers: headers
	};
	
	var req = https.request(options, function(res) {
		res.setEncoding('UTF-8');
		var responseString = '';
		console.log("Repsonse from server started");
		console.log(`Server status: ${res.statusCode} `);
		console.log("Response Headesrs: %j", res.headers);
		
		//res.once("data", function(data) {
		//	console.log(data);
		//});
		
		res.on('data', function(data) {
			console.log(`--chunk-- ${data.length}`);
			responseString += data;
		});
		
		res.on('end', function() {
			//console.log(responseString);
			var responseObject = JSON.parse(responseString);
			//if (err) {
				//throw err;
			//}
			console.log(JSON.stringify(responseString));
			success(responseObject);
			console.log("DONE");
		});
	});
	
	req.on("error", function(err){
		console.log(`problem with request: ${err.message}`);
	});
	//req.write(dataString);
	req.end();
}

performRequest(endpoint,'GET', {
	query: query}
	, function(data) {
		console.log('Fetched');
	});