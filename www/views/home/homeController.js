angular.module('starter.controllers')
  .controller('HomeCtrl', function($scope) {

    $scope.$on("$ionicView.beforeEnter", function() {
      console.log("----->beforeEnter");
    });
    $scope.$on("$ionicView.enter", function() {
      console.log("----->enter");
    });
    $scope.$on("$ionicView.afterEnter", function() {
      console.log("----->afterEnter");
    });
    $scope.$on('$ionicView.beforeLeave', function() {
      console.log("----->beforeLeave");
    });

  });