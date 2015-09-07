angular.module('starter.config', [])

.constant("ENV", {
  // 正式环境
  '_URL_SERVER': 'http://ggservice.go-goal.cn/',
  'APP_KEY': 'GnbhWYzxfcbrMOd',
  'APP_SECRET': 'I7WFKwulOrcYPHu8ZeQcMFEsiwQ45ruS',
  // 沙盒环境
  '_URL_SERVER': 'http://ggservice.sandbox.gofund.cn/',
  'APP_KEY': 'wxeAauUegQYPsOm',
  'APP_SECRET': 'QQU7zlyFvDiHzNg7cp8dfz8aRCpg2sqw',

  'TIMEOUT': 86400000,
  'VERSION': '0.0.1'
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  
  // $ionicConfigProvider.views.transition('ios');
  // $ionicConfigProvider.views.maxCache(3);
  // $ionicConfigProvider.views.forwardCache(false);
  // $ionicConfigProvider.scrolling.jsScrolling(false);

  // $ionicConfigProvider.backButton.icon();
  // $ionicConfigProvider.backButton.text();
  // $ionicConfigProvider.backButton.previousTitleText(false);

  // $ionicConfigProvider.form.checkbox();
  // $ionicConfigProvider.form.toggle();

  // $ionicConfigProvider.spinner.icon();

  // $ionicConfigProvider.tabs.style();
  // $ionicConfigProvider.tabs.position('bottom');

  // $ionicConfigProvider.templates.maxPrefetch(0);

  // $ionicConfigProvider.navBar.alignTitle("left");
  // $ionicConfigProvider.navBar.positionPrimaryButtons("left");
  // $ionicConfigProvider.navBar.positionSecondaryButtons("right");
  
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();

  if (isAndroid) {
    // 切换动画如果用Android会导致title位置不对的bug
    $ionicConfigProvider.views.transition('none');
    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.views.forwardCache(false);
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $ionicConfigProvider.tabs.position('bottom');
  };

  if (isIOS) {
    $ionicConfigProvider.views.transition('ios');
    $ionicConfigProvider.views.maxCache(3);
    $ionicConfigProvider.views.forwardCache(false);
    $ionicConfigProvider.scrolling.jsScrolling(true);
    $ionicConfigProvider.backButton.text("返回");
    $ionicConfigProvider.backButton.previousTitleText(false);
  };
  
}]);