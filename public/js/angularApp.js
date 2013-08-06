/*
* Angular app file
* Author: Chase Hartzoge
*/

var aijobs = angular.module('aijobs', []);

// routes for each page
aijobs.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/partials/jobListings',
            controller: JobListingsController
        })
        .when('/jobAdmin', {
            templateUrl: '/partials/jobAdmin',
            controller: JobAdminController
        })
        .otherwise({ redirectTo: '/' });
}]);