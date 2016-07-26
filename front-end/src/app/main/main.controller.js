export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;

  }
    //what to do with body
    postMessage() {
        this.$http.post('http://localhost:5000/api/message',{msg: this.message});
    }
}
