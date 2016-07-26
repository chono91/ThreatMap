export class SearchController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getMessages();

  }
    //what to do with body
    getMessages() {
        var vm = this;
        this.$http.get('http://localhost:5000/api/search').then(function(result){
            vm.messages=result.result;
            console.log(result.data.md5);
    });
    }

    postMessage() {
        this.$http.post('http://localhost:5000/api/search',{this.message});
    }
}
