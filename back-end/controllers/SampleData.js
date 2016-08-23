module.exports = {
    info: function () {
        return("Sample Data");
        },

    data: function (req) {
        var sampledata = ["192.168.0.1", "192.168.0.2", "192.168.0.3"];
        return sampledata;
        promise.resolve(sampledata);
        success(sampledata);
        console.log("Sapmledata retruned");
        return sampledata;
        return promise.promise;
    }
}
