module.exports = dataPack;
function dataPack(source) {
  this.source = source;
  this.rawData = "";
}

dataPack.prototype.setData = function(Data) {
    console.log("setting the data");
    this.rawData = Data;
};

dataPack.prototype.getData = function() {
    console.log(this.rawData + "getting this data");
    return this.rawData;
}
