angular
   .module('mySmartHome.config', [
        'ionic.service.core',
        'ngCordova',
        'ngTouch',
        'ngAnimate',
        'ionic-toast',
        'angularChart',
         
        'angularMoment',
        'ionic-datepicker',
        'jett.ionic.filter.bar'
    ])

    .constant('version', '1.0.0')
    .constant('$ionicLoadingConfig', {
      template: '<ion-spinner class="spinner" icon="ios"></ion-spinner>'
    });
