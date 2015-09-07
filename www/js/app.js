// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'templates',
  'starter.route', 'starter.config', 'starter.filter',
  'starter.services', 'starter.directives', 'starter.controllers'
])

.run(function($ionicPlatform, $rootScope) {
  /**
   * Android device use the immersive mode
   * this function is used <body> ng-class in index.html
   * if return true, can add .has-translucent-status-bar in the <body> class
   * ps. I want to directly use the expression in the <body> ng-class,
   *     but the '>' is treated as the <body>'s tag end.
   *     please give me a good idea.
   */
  $rootScope._isTranslucent = function() {
    return ionic.Platform.isAndroid() && ionic.Platform.version() >= 4.4;
  };

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      // Supported Platforms iOS
      StatusBar.styleLightContent();
    }

    // IF work on Android, ELSE IF is only iOS
    if (window.StatusBar && window.statusbarTransparent) {
      statusbarTransparent.enable();
      StatusBar.show();
    } else if (window.StatusBar) {
      StatusBar.show();
    }

  });
});