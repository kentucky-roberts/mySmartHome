/* app.js */
angular
  .module('mySmartHome', [
    'ionic',
    'mySmartHome.config',
    'mySmartHome.directives',
    'mySmartHome.animations',
    'mySmartHome.controllers',
    'mySmartHome.filters',
    'mySmartHome.services'
  ])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($cordovaInAppBrowserProvider) {
  var defaultOptions = {
    location: 'no',
    clearcache: 'no',
    toolbar: 'no'
  };
  // document.addEventListener(function () {
  //   $cordovaInAppBrowserProvider.setDefaultOptions(options);
  // }, false);
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          // controller: 'AppCtrl'
          controller: 'AppController'
          //controller: 'DashboardController'
        }
      }
    })
    
    .state('app.home-sensors', {
      url: '/home-sensors',
      views: {
        'menuContent': {
          templateUrl: 'templates/home-sensors.html',
          controller: 'HomeSensorsController'
        }
      }
    })
    .state('app.home-sensor', {
      url: '/home-sensors/:sensorId',
      views: {
        'menuContent': {
          templateUrl: 'templates/home-sensor.html',
          controller: 'HomeSensorController'
        }
      }
    })

    .state('app.home-controllers', {
      url: '/home-controllers',
      views: {
        'menuContent': {
          templateUrl: 'templates/home-controllers.html',
          controller: 'HomeControllersController'
        }
      }
    })
    .state('app.home-controller', {
      url: '/home-controllers/:controllerId',
      views: {
        'menuContent': {
          templateUrl: 'templates/home-controller.html',
          controller: 'HomeControllerController'
        }
      }
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});
