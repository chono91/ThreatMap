module.exports = {
    info: function () {
        return ("Sample Data");
    },

    data: function (req) {
        var deferred = require("deferred");
        var promise = deferred();
        var sampledata = ['192.168.0.1', '192.168.0.2', '192.168.0.3'];
        promise.resolve(sampledata);
        console.log("Sapmledata retruned");
        return promise.promise;
    }
}
