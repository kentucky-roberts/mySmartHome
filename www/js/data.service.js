angular
    .module('mySmartHome')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http', '$q'];

function dataservice($http, $q) {
    return {
        getControllers: getControllers
    };

    function getControllers() {
        return $http.get('/www/api/home_controllers.json')
            .then(getControllersComplete)
            .catch(getControllersFailed);

        function getControllersComplete(response) {
             //console.log(response.data);
            return response.data;
        }

        function getControllersFailed(error) {
            console.log('XHR Failed for getControllers.' + error.data);
        }
    }
}