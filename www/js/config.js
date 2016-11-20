angular
   .module('mySmartHome.config', [
       // 'ionic.service.core',
        'ngCordova',
        'ngTouch',
        'ngAnimate',
        'ngSanitize',
        'ionic-toast',
        'angularChart',
        'angularMoment',
        'ionic-datepicker',
        'ionic-timepicker'
    ])

    .constant('version', '1.0.0')
    // .constant('moment', require('moment-timezone'))
    .constant('$ionicLoadingConfig', {
      template: '<ion-spinner class="spinner" icon="ios"></ion-spinner>'
    });
