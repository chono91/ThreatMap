export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'app/search/search.html',
      controller: 'SearchController',
      controllerAs: 'search'
    });

  $urlRouterProvider.otherwise('/');
}
