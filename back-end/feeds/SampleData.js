module.exports = {
    info: function () {
        return("Sample Data");
        },

    data: function (req) {

        function performRequest(){
            var sampledata = ["192.168.0.1", "192.168.0.2", "192.168.0.3"];
            return sampledata;
            promise.resolve(sampledata);
            success(sampledata);
            console.log("Sapmledata retruned");
            return sampledata;
        }

    performRequest();

    return promise.promise;


    }
}
