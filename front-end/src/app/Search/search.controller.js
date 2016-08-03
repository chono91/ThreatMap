var mustache = require('mustache');
export class SearchController {
    constructor($http) {
            'ngInject';
            this.$http = $http;
            //this.postMessage();
        }
        //what to do with body
        //getMessages() {
        //    var vm = this;
        //    this.$http.get('http://localhost:5000/api/search').then(function(result){
        //        vm.messages=result.result;
        //        console.log(result.data.md5);
        //})
        //}
    postMessage() {
        var template = document.getElementById('template').innerHTML;
        this.$http.post('http://localhost:5000/api/search', {
            md5: this.message
        }).then(function (result) {
            mustache.parse(template);
            var rendered = mustache.render(template, {
                messages: JSON.stringify(result.data)
            });
            console.log(rendered);
            console.log(template);
            document.getElementById('target').innerHTML = rendered;
            console.log("HERE");
            console.log(result);
        });
    }
};
