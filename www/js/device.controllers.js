angular.module('mySmartHome.controllers', [])

.controller('BadgeController', function($cordovaBadge) {
    $cordovaBadge.hasPermission().then(function(yes) {
        // You have permission
    }, function(no) {
        // You do not have permission
    });

    $cordovaBadge.set(3).then(function() {
        // You have permission, badge set.
    }, function(err) {
        // You do not have permission.
    });

    $cordovaBadge.get().then(function(badge) {
        // You have permission, badge returned.
    }, function(err) {
        // You do not have permission.
    });

    $cordovaBadge.clear().then(function() {
        // You have permission, badge cleared.
    }, function(err) {
        // You do not have permission.
    });

    $cordovaBadge.increase(count).then(function() {
        // You have permission, badge increased.
    }, function(err) {
        // You do not have permission.
    });

    $cordovaBadge.decrease(count).then(function() {
        // You have permission, badge decreased.
    }, function(err) {
        // You do not have permission.
    });


})


.controller('StatusbarController', function($cordovaStatusbar) {
  $cordovaStatusbar.overlaysWebView(true);

  // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
  $cordovaStatusbar.style(1);

  // supported names: black, darkGray, lightGray, white, gray, red, green,
  // blue, cyan, yellow, magenta, orange, purple, brown
  $cordovaStatusbar.styleColor('black');

  $cordovaStatusbar.styleHex('#000');

  $cordovaStatusbar.hide();

  $cordovaStatusbar.show();

  var isVisible = $cordovaStatusbar.isVisible();

})



.controller('FileOpener2Controller', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.open(
    '/sdcard/Download/gmail.apk',
    'application/vnd.android.package-archive'
  ).then(function() {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });

})


.controller('PDFFileOpener2Controller', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.open(
    '/sdcard/Download/starwars.pdf',
    'application/pdf'
  ).then(function() {
      // file opened successfully
  }, function(err) {
      // An error occurred. Show a message to the user
  });

})



.controller('FileTransferController', function($scope, $timeout, $cordovaFileTransfer) {

  document.addEventListener('deviceready', function () {

    var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
    var targetPath = cordova.file.documentsDirectory + "testImage.png";
    var trustHosts = true;
    var options = {};

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        // Success!
      }, function(err) {
        // Error
      }, function (progress) {
        $timeout(function () {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        });
      });

   }, false);


  document.addEventListener('deviceready', function () {

    $cordovaFileTransfer.upload(server, filePath, options)
      .then(function(result) {
        // Success!
      }, function(err) {
        // Error
      }, function (progress) {
        // constant progress updates
      });

  }, false);

})



.controller('SplashscreenController', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
})

.controller('OauthController', function($scope, $cordovaOauth) {
    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    }

    // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
    // $cordovaOauth.meetup(string consumerKey);
    // $cordovaOauth.foursquare(string clientId);
    // $cordovaOauth.salesforce(string loginUrl, string clientId);
    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);
})





.controller('GeolocationController', function($cordovaGeolocation) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });


  var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });


  watch.clearWatch();
  // OR
  $cordovaGeolocation.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });
})




.controller('LocalNotificationController',
  ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification',
   function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {

  $ionicPlatform.ready(function () {

    // ========== Scheduling

    $scope.scheduleSingleNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        data: {
          customProperty: 'custom value'
        }
      }).then(function (result) {
        // ...
      });
    };

    $scope.scheduleMultipleNotifications = function () {
      $cordovaLocalNotification.schedule([
        {
          id: 1,
          title: 'Title 1 here',
          text: 'Text 1 here',
          data: {
            customProperty: 'custom 1 value'
          }
        },
        {
          id: 2,
          title: 'Title 2 here',
          text: 'Text 2 here',
          data: {
            customProperty: 'custom 2 value'
          }
        },
        {
          id: 3,
          title: 'Title 3 here',
          text: 'Text 3 here',
          data: {
            customProperty: 'custom 3 value'
          }
        }
      ]).then(function (result) {
        // ...
      });
    };

    $scope.scheduleDelayedNotification = function () {
      var now = new Date().getTime();
      var _10SecondsFromNow = new Date(now + 10 * 1000);

      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        at: _10SecondsFromNow
      }).then(function (result) {
        // ...
      });
    };

    $scope.scheduleEveryMinuteNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        every: 'minute'
      }).then(function (result) {
        // ...
      });
    };

    // =========/ Scheduling

    // ========== Update

    $scope.updateSingleNotification = function () {
      $cordovaLocalNotification.update({
        id: 1,
        title: 'Title - UPDATED',
        text: 'Text - UPDATED'
      }).then(function (result) {
        // ...
      });
    };

    $scope.updateMultipleNotifications = function () {
      $cordovaLocalNotification.update([
        {
          id: 1,
          title: 'Title 1 - UPDATED',
          text: 'Text 1 - UPDATED'
        },
        {
          id: 2,
          title: 'Title 2 - UPDATED',
          text: 'Text 2 - UPDATED'
        },
        {
          id: 3,
          title: 'Title 3 - UPDATED',
          text: 'Text 3 - UPDATED'
        }
      ]).then(function (result) {
        // ...
      });
    };

    // =========/ Update

    // ========== Cancelation

    $scope.cancelSingleNotification = function () {
      $cordovaLocalNotification.cancel(1).then(function (result) {
        // ...
      });
    };

    $scope.cancelMultipleNotifications = function () {
      $cordovaLocalNotification.cancel([1, 2]).then(function (result) {
        // ...
      });
    };

    $scope.cancelAllNotifications = function () {
      $cordovaLocalNotification.cancelAll().then(function (result) {
        // ...
      });
    };

    // =========/ Cancelation

    // ========== Events

    $rootScope.$on('$cordovaLocalNotification:schedule',
    function (event, notification, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:trigger',
    function (event, notification, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:update',
    function (event, notification, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:clear',
    function (event, notification, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:clearall',
    function (event, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:cancel',
    function (event, notification, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:cancelall',
    function (event, state) {
      // ...
    });

    $rootScope.$on('$cordovaLocalNotification:click',
    function (event, notification, state) {
      // ...
    });

    // =========/ Events

  });

}])

.controller('SmsController', function($cordovaSms) {

 document.addEventListener("deviceready", function () {

    $cordovaSms
      .send('phonenumber', 'SMS content', options)
      .then(function() {
        // Success! SMS was sent
      }, function(error) {
        // An error occurred
      });

  });

})



.controller('PreferencesController', function($scope, $cordovaPreferences) {
  //Examples without dictionaries
  $scope.store = function() {
    $cordovaPreferences.store('key', 'myMagicValue')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.fetch = function() {
    $cordovaPreferences.fetch('key')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.remove = function() {
    $cordovaPreferences.remove('key')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.show = function() {
    $cordovaPreferences.show()
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };


  //Examples with dictionaries
  $scope.storeInDict = function() {
    $cordovaPreferences.store('key', 'myDictMagicValue', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.fetchFromDict = function() {
    $cordovaPreferences.fetch('key', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.removeFromDict = function() {
    $cordovaPreferences.remove('key', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };
})




.controller('BeaconController',
  ['$scope', '$rootScope', '$ionicPlatform', '$cordovaBeacon',
   function($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {

  var brIdentifier = 'estimote';
  var brUuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
  var brMajor = null;
  var brMinor = null;
  var brNotifyEntryStateOnDisplay = true;

  $ionicPlatform.ready(function () {

    $scope.didStartMonitoringForRegionLog = '';
    $scope.didDetermineStateForRegionLog = '';
    $scope.didRangeBeaconsInRegionLog = '';

    $scope.requestAlwaysAuthorization = function() {
      $cordovaBeacon.requestAlwaysAuthorization();
    };

    $scope.startMonitoringForRegion = function() {
      $cordovaBeacon.startMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.startRangingBeaconsInRegion = function() {
      $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.stopMonitoringForRegion = function() {
      $cordovaBeacon.stopMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.stopRangingBeaconsInRegion = function() {
      $cordovaBeacon.stopRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.clearLogs = function() {
      $scope.didStartMonitoringForRegionLog = '';
      $scope.didDetermineStateForRegionLog = '';
      $scope.didRangeBeaconsInRegionLog = '';
    };

    // ========== Events

    $rootScope.$on("$cordovaBeacon:didStartMonitoringForRegion", function (event, pluginResult) {
      $scope.didStartMonitoringForRegionLog += '-----' + '\n';
      $scope.didStartMonitoringForRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    $rootScope.$on("$cordovaBeacon:didDetermineStateForRegion", function (event, pluginResult) {
      $scope.didDetermineStateForRegionLog += '-----' + '\n';
      $scope.didDetermineStateForRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
      $scope.didRangeBeaconsInRegionLog += '-----' + '\n';
      $scope.didRangeBeaconsInRegionLog += JSON.stringify(pluginResult) + '\n';
    });

    // =========/ Events

  });

}])



.controller('InAppBrowserController', function($cordovaInAppBrowser) {

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  document.addEventListener(function () {
    $cordovaInAppBrowser.open('http://acbj.com', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();

  }, false);

  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });

})


.controller('TouchIDController', function($cordovaTouchID) {

  $cordovaTouchID.checkSupport().then(function() {
    // success, TouchID supported
  }, function (error) {
    alert(error); // TouchID not supported
  });

  $cordovaTouchID.authenticate("text").then(function() {
    // success
  }, function () {
    // error
  });

})


.controller('GoogleAnalyticsController', function($scope, $cordovaGoogleAnalytics) {

  // turn on debug mode
  // https://github.com/danwilson/google-analytics-plugin#javascript-usage
  $cordovaGoogleAnalytics.debugMode();

  // start tracker
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  $cordovaGoogleAnalytics.startTrackerWithId('UA-000000-01');

  // set user id
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id

  $cordovaGoogleAnalytics.setUserId('USER_ID');

  // track a view
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
  // Hint: Currently no support for appName, appId, appVersion, appInstallerId
  //       If you need support for it, please create an issue on github:
  //       https://github.com/driftyco/ng-cordova/issues

  $cordovaGoogleAnalytics.trackView('Home Screen');

  // set custom dimensions
  // https://developers.google.com/analytics/devguides/platform/customdimsmets

  $cordovaGoogleAnalytics.addCustomDimension('dimension1', 'Level 1');

  // track event
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events

  $cordovaGoogleAnalytics.trackEvent('Videos', 'Video Load Time', 'Gone With the Wind', 100);

  // add transaction
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans

  $cordovaGoogleAnalytics.addTransaction('1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR');

  // add transaction item
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem

  $cordovaGoogleAnalytics.addTransactionItem(
    '1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP'
  );
})


.controller('EmailComposerController', function($cordovaEmailComposer) {

 $cordovaEmailComposer.isAvailable().then(function() {
   // is available
 }, function () {
   // not available
 });

  var email = {
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  };

 $cordovaEmailComposer.open(email).then(null, function () {
   // user cancelled email
 });
})

.controller('DatePickerController', function($scope, $cordovaDatePicker) {

  var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
  };

  document.addEventListener("deviceready", function () {

    $cordovaDatePicker.show(options).then(function(date){
        alert(date);
    });

  }, false);
})

.controller('BarcodeController', function($scope, $cordovaBarcodeScanner) {

  document.addEventListener("deviceready", function () {

    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

  }, false);
})



.controller('AdMobController', function($scope, $cordovaAdMob) {
    // AdMob implementation here
    // coming soon...
})


// .controller('ContactsController', function($scope, $cordovaContacts, $ionicPlatform) {
//   $scope.addContact = function() {
//     $cordovaContacts.save($scope.contactForm).then(function(result) {
//       // Contact saved
//     }, function(err) {
//       // Contact error
//     });
//   };

//   $scope.getAllContacts = function() {
//     $cordovaContacts.find().then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
//       $scope.contacts = allContacts;
//     })
//   };

//  //    $scope.findContactsBySearchTerm = function() {
//  // // $scope.findContactsBySearchTerm = function(searchTerm) {
//  //    var opts = {                                           //search options
//  //      filter : searchTerm,                                 // 'Bob'
//  //      multiple: true,                                      // Yes, return any contact that matches criteria
//  //      fields:  [ 'displayName', 'name' ]                   // These are the fields to search for 'bob'.
//  //      desiredFields: [id];    //return fields.
//  //    };

//  //    if ($ionicPlatform.isAndroid()) {
//  //      opts.hasPhoneNumber = true;         //hasPhoneNumber only works for android.
//  //    };

//  //    $cordovaContacts.find(opts).then(function (contactsFound) {
//  //      $scope.contacts = contactsFound;
//  //    };
//  // }

//   $scope.pickContactUsingNativeUI = function () {
//     $cordovaContacts.pickContact().then(function (contactPicked) {
//       $scope.contact = contactPicked;
//     })
//   }

// })


.controller('CameraController', function($ionicPlatform, $rootScope, $scope, $cordovaCamera) {
    $ionicPlatform.ready(function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $scope.takePicture = function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.imgSrc = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                console.log(err);
            });
        }

    });
})

.controller('NotificationsController', function($ionicPlatform, $scope, $cordovaLocalNotification) {
    $ionicPlatform.ready(function() {

        $scope.notify = function() {
            $cordovaLocalNotification.add({
                id: 'welcome_notif',
                title: "This is a local notification",
                text: 'Notification text'
            }).then(function() {
                console.log('notification fired');
            });
        };


    });
})

.controller('NetworkController', function($ionicPlatform, $rootScope, $scope, $cordovaNetwork) {
    $ionicPlatform.ready(function() {

        $scope.type = $cordovaNetwork.getNetwork()
        $scope.isOnline = $cordovaNetwork.isOnline()
        $scope.isOffline = $cordovaNetwork.isOffline()

        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
            console.log('The device has come online!', networkState);
            // Sync local data to your server here
        });

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
            console.log('The device has gone offline!', networkState);
            // the device is offline, we need to store the data locally
        });

    });
})

.controller('PinController', function($ionicPlatform, $scope, $cordovaPinDialog, $ionicLoading) {
    $ionicPlatform.ready(function() {
        var txt;
        $cordovaPinDialog.prompt('Enter your PIN').then(
            function(result) {
                // result
                if (result.buttonIndex === 1) {
                    // clicked OK
                    txt = 'You have entered ' + result.input1;
                    showDialog(txt);
                    $scope.pin = txt;

                } else {
                    // clicked Cancel
                    txt = 'You cancelled the Pin Dialog :/'
                    showDialog(txt);
                    $scope.pin = txt;
                }
            },
            function(error) {
                // error
                console.log(error);
            });

        function showDialog(text) {
            $ionicLoading.show({
                template: text
            });

            setTimeout(function() {
                $ionicLoading.hide();
            }, 2000);
        }

    });
})



.controller('ShareController', function($ionicPlatform, $scope, $cordovaSocialSharing) {
    $ionicPlatform.ready(function() {

        var message = 'This is a demo message';
        var subject = 'This is a demo message';
        var link = 'http://somerandom.link/image.png'; // fake image

        $scope.nativeShare = function() {
            $cordovaSocialSharing
                .share(message, subject, link); // Share via native share sheet
        };

        //checkout http://ngcordova.com/docs/plugins/socialSharing/
        // for other sharing options
    });
})

.controller('SqliteController', function($ionicPlatform, $scope, $cordovaSQLite, $sce) {
    $ionicPlatform.ready(function() {
        $scope.messages = '';

        var db = $cordovaSQLite.openDB({
            name: "demo.db"
        });

        $scope.messages = '';
        $scope.showMessage = function(msg) {
            $scope.messages += $sce.trustAsHtml('> '+msg);
        }

        $scope.showMessage('<b>Opened new DB</b><br/>');

        db.transaction(function(tx) {

            // Drop demo_table if it exists
            tx.executeSql('DROP TABLE IF EXISTS demo_table');
            $scope.showMessage('<b>Dropped exsiting demo_table</b><br/>');

            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS demo_table (id integer primary key, data text, data_num integer)');
            $scope.showMessage('<b>Created demo_table</b><br/>');

            $scope.showMessage('<b>Inserting Sample Data</b><br/>');
            // insert sample data
            tx.executeSql("INSERT INTO demo_table (data, data_num) VALUES (?,?)", ["demo", 100], function(tx, res) {

                $scope.showMessage('&nbsp;&nbsp;&nbsp;insertId: ' + res.insertId + '<br/>');
                $scope.showMessage('&nbsp;&nbsp;&nbsp;rowsAffected: ' + res.rowsAffected + '<br/>');

            });
        });

    });
})

.controller('ToastController', function($ionicPlatform, $scope, $cordovaToast) {
    $ionicPlatform.ready(function() {
        $cordovaToast.showShortTop('Hello World!!');

        $scope.showToast = function() {
            $cordovaToast
                .show('You clicked a button!!', 'long', 'center');
        }
    });
})


.controller('VibrateController', function($ionicPlatform, $scope, $cordovaVibration, $timeout) {
    $ionicPlatform.ready(function() {

        $scope.vibrateDevice = function() {
            // A vibration pattern
            $cordovaVibration.vibrate(100);

            $timeout(function() {

                $cordovaVibration.vibrate(100);

                $timeout(function() {
                    $cordovaVibration.vibrate(100);
                }, 300);

            }, 300);
        }

    });
})

.controller('CalendarController', function ($scope, $cordovaCalendar) {

  $cordovaCalendar.createCalendar({
    calendarName: 'Cordova Calendar',
    calendarColor: '#FF0000'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventWithOptions({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInteractively({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInNamedCalendar({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
    calendarName: 'Cordova Calendar'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listEventsInRange(
    new Date(2015, 0, 6, 0, 0, 0, 0, 0),
    new Date(2015, 1, 6, 0, 0, 0, 0, 0)
  ).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listCalendars().then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findAllEventsInNamedCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.modifyEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
    newTitle: 'Ostrich Race',
    newLocation: 'Africa',
    newNotes: 'Bring a saddle',
    newStartDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    newEndDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0),
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteEvent({
    newTitle: 'Ostrich Race',
    location: 'Africa',
    notes: 'Bring a saddle',
    startDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    endDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0),
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

})
