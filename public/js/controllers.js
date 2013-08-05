function MainController ($scope) {

}

function JobListingsController ($scope, $http) {

    $http.get('content/jobListings.json').success(function (data) {
        $scope.allJobs = data;
        $scope.groupingType = 'allJobs';
    });

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