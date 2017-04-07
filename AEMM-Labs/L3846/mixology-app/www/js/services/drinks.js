angular.module('mixology.services.drinks', ['mixology.services.config'])

// Drinks service
.factory('Drinks', ['$http', '$q', 'config', function($http, $q, config) {

    var getAllDrinks = function() {
        return $q(function(resolve, reject) {
            $http
                .get(config.apiURL + config.drinkRecipesJSON)
                .then(function success(response) {
                    resolve(response.data);
                }, function error(response) {
                    reject("Error: " + JSON.stringify(response));
                });
        });
    };

    var getDrinkByName = function(name) {
        return $q(function(resolve, reject) {
            $http
                .get(config.apiURL + config.singleDrinkRecipePrefix + name + config.caasExtension)
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

    return {
        getAllDrinks: getAllDrinks,
        getDrinkByName: getDrinkByName
    };
}]);