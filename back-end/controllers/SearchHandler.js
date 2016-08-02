var virusTotal = require('./vt');
var q = require("deferred");
var promise = q();

module.exports = {
    search: function(req) {
        var info = virusTotal.data(req);
        return(info);
        return promise.promise;
        }
    }
