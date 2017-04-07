angular.module('mixology.services.collections', ['mixology.services.config'])

// Collections service
.factory('Collections', ['$http', '$q', 'config', function($http, $q, config) {
    var getAllCollections = function() {
        return $q(function(resolve, reject) {
            $http.get(config.apiURL + config.collectionsJSON)
                .then(function success(response) {
                    if (typeof response.data !== "object") {
                        reject("Error: no data. " + JSON.stringify(response));
                    }
                    else {
                        resolve(response.data);
                    }
                }, function error(response) {
                    reject("Error: " + JSON.stringify(response));
                });
        });
    };

    var getCollectionByName = function(name) {
        return $q(function(resolve, reject) {
            $http.get(config.apiURL + config.singleCollectionPrefix + name + config.caasExtension)
                .then(function success(response) {
                    resolve(response.data);
                }, function error(response) {
                    reject("Error: " + JSON.stringify(response));
                });
        });
    };

    return {
        getAllCollections: getAllCollections,
        getCollectionByName: getCollectionByName
    };
}]);