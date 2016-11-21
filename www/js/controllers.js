angular.module('mySmartHome.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {  //TODO... remove this default controller, replace with AppController below

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}) // END AppCtrl <-- TODO... remove this





.controller('AppController', ['$scope', '$ionicModal', '$window', '$interval', '$timeout', '$ionicLoading', 'ionicToast', 'ModalService', function($scope, $ionicModal, $timeout, $window, $interval, $timeout, $ionicLoading, ionicToast, ModalService) {

  var app = this;

  ////////////////////////////////////////
  // init
  ////////////////////////////////////////
  app.init = function() {
    console.log("app.init: set some default variables");
  };

  ////////////////////////////////////////
  // View.enter
  ////////////////////////////////////////
  $scope.$on('$ionicView.enter', function(e) {
    console.log("ionicView.enter: has just been called in the AppController!  TODO... Add spinner or css fade-in animation.");
  });

  ////////////////////////////////////////
  // Chart init
  ////////////////////////////////////////
$scope.options = {
  dimensions: {
    income: {
      axis: 'y',
      type: 'scatter'
    },
    sales: { // all visible dimensions have to be defined here
    },       // leave the object empty to add a line to the y-Axis
    day: {
      axis: 'x',
      displayFormat: '%Y-%m-%d %H:%M:%S'
    }
  }
};
    
    // optional (direct access to c3js API http://c3js.org/reference.html#api)
    $scope.instance = null;

  $scope.$on('angular-chart-rendered', function(event, options, instance) {
    console.log(options, instance);
  });


  ////////////////////////////////////////
  // Login
  ////////////////////////////////////////
  // Form data for the login modal
  $scope.loginData = {};

  $scope.closeLogin = function() {
    $scope.closeModal();
  };

  app.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $scope.username = loginData.username;
    $scope.password = loginData.password;

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  ////////////////////////////////////////
  // Date
  ////////////////////////////////////////

  $scope.message = {
     text: 'hello world!',
     time: new Date()
  };


  $scope.datepickerObject = {
    titleLabel: 'Title',  //Optional
    todayLabel: 'Today',  //Optional
    closeLabel: 'Close',  //Optional
    setLabel: 'Set',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    inputDate: new Date(),  //Optional
    mondayFirst: true,  //Optional
    disabledDates: disabledDates, //Optional
    weekDaysList: weekDaysList, //Optional
    monthList: monthList, //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'true', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    dateFormat: 'dd-MM-yyyy', //Optional
    from: new Date(2012, 8, 2), //Optional
    to: new Date(2018, 8, 25),  //Optional
    callback: function (val) {  //Mandatory
      datePickerCallback(val);
    }
    //    dateFormat: 'dd-MM-yyyy', //Optional
    //    closeOnSelect: false, //Optional
  };

  var disabledDates = [
    new Date(1437719836326),
    new Date(),
    new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
    new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
    new Date("08-14-2015"), //Short format
    new Date(1439676000000) //UNIX format
  ];
  var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];
  var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var datePickerCallback = function (val) {
    if (typeof(val) === 'undefined') {
      console.log('No date selected');
    } else {
        var dateVal = val;
        $scope.dateVal = dateVal;
      console.log('Selected date is : ', val);
    }
   };






  ////////////////////////////////////////
  // Toast
  ////////////////////////////////////////
  $scope.showToast = function(){
  // ionicToast.show(message, position, stick, time);
    ionicToast.show('This is a toast at the top.', 'top', false, 2500);
  };
  $scope.showToastBottom = function(){
  // ionicToast.show(message, position, stick, time);
    ionicToast.show('This is a toast at the bottom.', 'bottom', true, 2500);
  };
  $scope.hideToast = function(){
    ionicToast.hide();
  };

  ////////////////////////////////////////
  // ModalService
  ////////////////////////////////////////
  $scope.showLogin = function() {
    ModalService
      .init('templates/modals/login.html')
      .then(function(modal) {
          modal.show();
      });
  };
  
  app.init();
}])



.controller('HomeSensorsController', function($scope) {
  console.log('Index page for HomeSensorsController.');
  $scope.sensors = [
    { title: 'Motion', id: 1, iconName: 'walk', iconClass: 'ion-android-walk', note: 'Hello there' },   // (zone1(), zone2(), zone3()) 
    { title: 'Doors', id: 2, iconName: 'key', iconClass: 'ion-key' },  //// (zone1(), zone2(), zone3()) 
    { title: 'Date', id: 3 , iconName: 'calendar', iconClass: 'ion-ios-calendar-outline'},  // (zone1(), zone2(), zone3()) 
    { title: 'Windows', id: 4, iconName: 'windows', iconClass: 'ion-social-windows-outline'}, // (zone1(), zone2(), zone3()) 
    { title: 'Lights', id: 5, iconName: 'bulb', iconClass: 'ion-ios-lightbulb-outline' },  // (zone1(), zone2(), zone3()) 
    { title: 'Alarm', id: 6, iconName: 'alarm', iconClass: 'ion-ios-alarm-outline' }, //// (global(burgler, fire), zone1(), zone2(), zone3()) carbon-monoxide, fire, 
    { title: 'Audio', id: 7, iconName: 'mic', iconClass: 'ion-ios-mic-outline'},   // (global(), zone1(), zone2(), zone3()) 
    { title: 'Video', id: 8, iconName: 'film', iconClass: 'ion-ios-videocam-outline'},   // 
    { title: 'Photo', id: 9, iconName: 'camera', iconClass: 'iion-ios-camera-outline' },   // 
    { title: 'Battery', id: 10, iconName: 'battery-full', iconClass: 'ion-battery-full' }, // (incoming, current usage, battery bank remaining power, )
    { title: 'Power', id: 11, iconName: 'power', iconClass: 'ion-power'}, // input, output, current usage, logged archive
    { title: 'Appliances', id: 12, iconName: 'keypad', iconClass: 'ion-ios-keypad-outline'},  // refridgerator temp, freezer temp
    { title: 'HVAC', id: 13, iconName: 'thermometer', iconClass: 'ion-thermometer'}, // Indoor (air tempature, humidity), zone1(), zone2(), zone3()) 
    { title: 'Plumbing', id: 14, iconName: 'wrench', iconClass: 'ion-wrench'},  // water-heater tempature, (2) H20 resivoir %filled, well-pump functioning correctly
    { title: 'Security', id: 15, iconName: 'apps', iconClass: 'ion-ios-locked-outline'},  //
    { title: 'Settings', id: 16, iconName: 'settings', iconClass: 'ion-ios-cog-outline' },  //    
    { title: 'Archives', id: 17, iconName: 'archive', iconClass: 'ion-ios-box-outline'}  // (photos, videos, logs) list by dateTime, 
  ];
})
.controller('HomeSensorController', function($scope, $stateParams) {
  console.log('Details page for a HomeSensorController item.');
})


.controller('HomeControllersController', function($scope) {
  console.log('Index page for HomeControllersController');
  $scope.controllers = [
    { title: 'Motion', id: 1, iconName: 'walk', iconClass: 'ion-android-walk'},   // (zone1(), zone2(), zone3()) 
    { title: 'Doors', id: 2, iconName: 'key', iconClass: 'ion-key'},  //// (zone1(), zone2(), zone3()) 
    { title: 'Date', id: 3, iconName: 'calendar', iconClass: 'ion-ios-calendar-outline'},     // (zone1(), zone2(), zone3()) 
    { title: 'Windows', id: 4, iconName: 'windows', iconClass: 'ion-social-windows-outline'}, // (zone1(), zone2(), zone3()) 
    { title: 'Lights', id: 5, iconName: 'bulb', iconClass: 'ion-ios-lightbulb-outline'},   // (zone1(), zone2(), zone3()) 
    { title: 'Alarm', id: 6, iconName: 'alarm', iconClass: 'ion-ios-alarm-outline'},  //// (zone1(), zone2(), zone3() :: burgler(on/off), fire(on/off)), carbon-monoxide(on/off))  
    { title: 'Audio', id: 7, iconName: 'mic', iconClass: 'ion-ios-mic-outline'},     // (zone1(), zone2(), zone3()) 
    { title: 'Video', id: 8, iconName: 'film', iconClass: 'ion-ios-videocam-outline'},    //  (zone1(), zone2(), zone3() :: record live-feed 
    { title: 'Photo', id: 9, iconName: 'camera', iconClass: 'ion-ios-camera-outline'},   //  (zone1(), zone2(), zone3() :: record live-feed : take-picture, save-picture
    { title: 'Battery', id: 10, iconName: 'battery-full', iconClass: 'ion-battery-full'}, //   (incomingSolar(on/off), incomingWind(on/off), sign-wave-inverter (12vDC to 120vAC (550W max))
    { title: 'Power', id: 11, iconName: 'power', iconClass: 'ion-power'}, //  
    { title: 'Appliances', id: 12, iconName: 'keypad', iconClass: 'ion-ios-keypad-outline'},  // refridgerator(tempUp, tempDown), freezer(tempUp, tempDown)
    { title: 'HVAC', id: 13, iconName: 'thermometer', iconClass: 'ion-thermometer'},       //  zone1(), zone2(), zone3() :: (air tempature(airTempUp, airTempDown), humidityUp, humidityDown), ) 
    { title: 'Plumbing', id: 14, iconName: 'wrench', iconClass: 'ion-wrench'},  //   waterTanks(tank1(tempUp, tempDown), tank2(tempUp, tempDown), wellPump(on/off),)
    { title: 'Security', id: 15, iconName: 'locked', iconClass: 'ion-ios-locked-outline'},  //    alarmStatus(on/off)
    { title: 'Settings', id: 16, iconName: 'settings', iconClass: 'ion-ios-cog-outline'} , //     
    { title: 'Archives', id: 17, iconName: 'archive', iconClass: 'ion-ios-box-outline'}  // (photos, videos, logs) list by dateTime, 
  ];
})
.controller('HomeControllerController', function($scope, $stateParams) {
  console.log('Details page for a HomeControllerController item.');
})


//ion-ios-home-outline


// .controller('ItemsController', function($scope) {
//   console.log('Index page.');
//   $scope.items = [
//     { title: 'Motion', id: 1, iconName: 'ios-apps-outline' },   // (zone1(), zone2(), zone3()) 
//     { title: 'Doors', id: 2, iconName: 'key' },  //// (zone1(), zone2(), zone3()) 
//     { title: 'Date', id: 3 , iconName: 'apps'},  // (zone1(), zone2(), zone3()) 
//     { title: 'Windows', id: 4, iconName: 'apps' }, // (zone1(), zone2(), zone3()) 
//     { title: 'Lights', id: 5, iconName: 'bulb' },  // (zone1(), zone2(), zone3()) 
//     { title: 'Alarm', id: 6, iconName: 'apps' }, //// (global(burgler, fire), zone1(), zone2(), zone3()) carbon-monoxide, fire, 
//     { title: 'Audio', id: 7, iconName: 'apps' },   // (global(), zone1(), zone2(), zone3()) 
//     { title: 'Video', id: 8, iconName: 'film' },   // 
//     { title: 'Photo', id: 9, iconName: 'camera' },   // 
//     { title: 'Battery', id: 10, iconName: 'battery-full' }, // (incoming, current usage, battery bank remaining power, )
//     { title: 'Power', id: 11, iconName: 'power'}, // input, output, current usage, logged archive
//     { title: 'Appliances', id: 12, iconName: 'apps' },  // refridgerator temp, freezer temp
//     { title: 'HVAC', id: 13, iconName: 'apps' }, // Indoor (air tempature, humidity), zone1(), zone2(), zone3()) 
//     { title: 'Plumbing', id: 14, iconName: 'apps'},  // water-heater tempature, (2) H20 resivoir %filled, well-pump functioning correctly
//     { title: 'Security', id: 15, iconName: 'apps'},  //
//     { title: 'Settings', id: 16, iconName: 'settings' }  //    
//   ];
// })
// .controller('ItemController', function($scope, $stateParams) {
//   console.log('Details page.');
// })


.controller('MenuCtrl', function ($scope) {
      $scope.isCollapsed = true;
      $scope.charts = ['Line', 'Bar', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Base'];
    })

.controller('LineCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      $timeout(function () {
        $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.data = [
          [28, 48, 40, 19, 86, 27, 90],
          [65, 59, 80, 81, 56, 55, 40]
        ];
        $scope.series = ['Series C', 'Series D'];
      }, 3000);
    }])

.controller('BarCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.options = { scaleShowVerticalLines: false };
      $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      $timeout(function () {
        $scope.options = { scaleShowVerticalLines: true };
      }, 3000);
    }])

.controller('DoughnutCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
      $scope.data = [0, 0, 0];

      $timeout(function () {
        $scope.data = [350, 450, 100];
      }, 500);
    }])

.controller('PieCtrl', function ($scope) {
      $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
      $scope.data = [300, 500, 100];
    })

 .controller('PolarAreaCtrl', function ($scope) {
      $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
      $scope.data = [300, 500, 100, 40, 120];
    })

.controller('BaseCtrl', function ($scope) {
      $scope.labels = ['Download Sales', 'Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
      $scope.data = [300, 500, 100, 40, 120];
      $scope.type = 'PolarArea';

      $scope.toggle = function () {
        $scope.type = $scope.type === 'PolarArea' ?  'Pie' : 'PolarArea';
      };
    })

.controller('RadarCtrl', function ($scope) {
      $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

      $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
      ];

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })

.controller('DataTablesCtrl', function ($scope) {
      $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      $scope.colours = [
        { // grey
          fillColor: 'rgba(148,159,177,0.2)',
          strokeColor: 'rgba(148,159,177,1)',
          pointColor: 'rgba(148,159,177,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          fillColor: 'rgba(77,83,96,0.2)',
          strokeColor: 'rgba(77,83,96,1)',
          pointColor: 'rgba(77,83,96,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(77,83,96,1)'
        }
      ];
      $scope.randomize = function () {
        $scope.data = $scope.data.map(function (data) {
          return data.map(function (y) {
            y = y + Math.random() * 10 - 5;
            return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
          });
        });
      };
    })

.controller('TicksCtrl', ['$scope', '$interval', function ($scope, $interval) {
      var maximum = document.getElementById('container').clientWidth / 2 || 300;
      $scope.data = [[]];
      $scope.labels = [];
      $scope.options = {
        animation: false,
        showScale: false,
        showTooltips: false,
        pointDot: false,
        datasetStrokeWidth: 0.5
      };

      // Update the dataset at 25FPS for a smoothly-animating chart
      $interval(function () {
        getLiveChartData();
      }, 40);

      function getLiveChartData () {
        if ($scope.data[0].length) {
          $scope.labels = $scope.labels.slice(1);
          $scope.data[0] = $scope.data[0].slice(1);
        }

        while ($scope.data[0].length < maximum) {
          $scope.labels.push('');
          $scope.data[0].push(getRandomValue($scope.data[0]));
        }
      }
    }])

    function getRandomValue (data) {
      var l = data.length, previous = l ? data[l - 1] : 50;
      var y = previous + Math.random() * 10 - 5;
      return y < 0 ? 0 : y > 100 ? 100 : y;
    }
  
