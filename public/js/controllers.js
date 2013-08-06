// Controller.js

// main controller 
function MainController($scope) {

}

// job Listings controller
function JobListingsController ($scope, $http) {

    function init() {
        $scope.groupingType = 'allJobs';

        callWebMethod('getAllJobs', {}, function (data) {

            $scope.allJobs = data;
        });
    }

    init();

    function callWebMethod(webMethod, requestParameters, callback) {

        $http({
            url: '/' + webMethod,
            method: 'POST',
            data: requestParameters
        }).success(function (returnMessage, status, headers, config) {

            callback(returnMessage.data);

        }).error(function (error, status, headers, config) {
            console.log(error);
        });
    }


    $scope.filterBySpecificJob = function (filter) {
        $scope.filter = filter;
    }

    $scope.resetFilter = function () {
        $scope.filter = '';
        $scope.currentProperty = '';
        $scope.groupingType = 'allJobs';
    }

    $scope.groupJobs = function () {
        $scope.groupingType = 'categories';
        var property = $scope.currentProperty;

        $scope.categorizedJobs = _.groupBy($scope.allJobs, property);
        $scope.propertyList = _.keys($scope.categorizedJobs);
    }

    $scope.setPropertyTitle = function (category) {
        return _.uniq(_.pluck(category, $scope.currentProperty))[0];
    }

    $scope.setRowClass = function ($index, category) {
        return 'category' + $index;
    }
    
    $scope.displayDetailedJob = function (job) {
        $scope.showDetailedContainer = true;
        $scope.detailedJob = job;
    }

    /* temp stored data */
    $scope.jobCategories = [
        "Developer",
        "Manager",
        "Aerospace"
    ];

    $scope.jobExperiences = [
        "Junior",
        "Mid",
        "Senior"
    ];
}

// job admin controller
function JobAdminController($scope, $http) {
    $scope.creationStep = 'addNew';

    $scope.jobToAdd = {
        jobTitle: '',
        location: '',
        ExperienceLevel: '',
        Category: ''
    }

    $scope.createNewJob = function () {
        var requestParameters = { newJob: $scope.jobToAdd };

        callWebMethod('addNewJob', requestParameters, function () {
            $scope.creationStep = 'success';
        });
    }

    /* temp stored data */
    $scope.jobCategories = [
        "Developer",
        "Manager",
        "Aerospace"
    ];

    $scope.jobExperiences = [
        "Junior",
        "Mid",
        "Senior"
    ];

    $scope.jobLocations = [
       "Lanham",
       "Florida",
       "Huntsville",
       "Colorado",
       "Other"
    ];


    function callWebMethod(webMethod, requestParameters, callback) {

        $http({
            url: '/' + webMethod,
            method: 'POST',
            data: requestParameters
        }).success(function (returnMessage, status, headers, config) {

            callback(returnMessage.data);

        }).error(function (error, status, headers, config) {
            console.log(error);
        });
    }
}