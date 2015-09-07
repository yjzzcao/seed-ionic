angular.module('starter.route', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });

  $urlRouterProvider.otherwise('/home');

});
