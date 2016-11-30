angular.module('mySmartHome.services', [])




// .factory('HomeControllers', ['$resource',
//   function($resource){
//     return $resource('api/home_controllers.json/', {}, {
//       query: {method:'GET', params:{controllerId:'home_controllers'}, isArray:true},
//       // findRange:{method: 'GET', params:{cardXLevel:'@xLevel'/'@xLevelMax'}, isArray:true}
//   });
// }])


.factory('SensorService',
  function() {
  // Might use a resource here that returns a JSON array
  var sensors = [
    { title: 'Motion', id: 1, iconName: 'walk', iconClass: 'ion-android-walk', note: 'Hello there', 
    loggedImages: [
      'http://placehold.it/250x250',
      'http://placehold.it/250x250',
      'http://placehold.it/250x250'
    ]},   // (zone1(), zone2(), zone3()) 
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
  return {
    all: function() {
      return sensors;
    },
    remove: function(sensor) {
      sensors.splice(sensors.indexOf(sensor), 1);
    },
    get: function(sensorId) {
      for (var i = 0; i < sensors.length; i++) {
        if (sensors[i].id === parseInt(sensorId)) {
          return sensors[i];
        }
      }
      return null;
    }
  };
})




.factory('ControllerService',
  function() {
  // Might use a resource here that returns a JSON array

  var controllers = [
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
  return {
    all: function() {
      return controllers;
    },
    remove: function(controller) {
      controllers.splice(controllers.indexOf(controller), 1);
    },
    get: function(controllerId) {
      for (var i = 0; i < controllers.length; i++) {
        if (controllers[i].id === parseInt(controllerId)) {
          return controllers[i];
        }
      }
      return null;
    }
  };
})





.service('ModalService', ModalService);

  function ModalService($ionicModal, $rootScope) {
    var init = function(tpl, $scope) {
      var promise;
      $scope = $scope || $rootScope.$new();
      promise = $ionicModal.fromTemplateUrl(tpl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        return modal;
      });
      $scope.openModal = function() {
         $scope.modal.show();
       };
       $scope.closeModal = function() {
         $scope.modal.hide();
       };
       $scope.$on('$destroy', function() {
         $scope.modal.remove();
       });
      return promise;
    }
    return {
      init: init
    }
}


