//This file is to make a list of datapacks that represent each datafeed being sourced from, returns to the server.js
var dataPack = require('../classes/dataPack.js');
var fs = require('fs');
var q = require("deferred");
var promise = q();
module.exports = {
        searchers: function () {
            var plugins = [];
            var pluginFiles = fs.readdirSync('./feeds/');
            for (var i = 0; i<pluginFiles.length; i++){
                var file = './feeds/' +pluginFiles[i];
                console.log('.'+file);
                var plugin = require('.'+file); //gets the plug in function
                var pluginPack = new dataPack(plugin.info());//sets up a new datapack for virus total with source name
                pluginPack.setPlugin(file);
                plugins.push(pluginPack);
            }
            return(plugins);
    }
}
