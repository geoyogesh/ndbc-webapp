(function () {
    var app = angular.module('ndbcApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IntroController',
                templateUrl: 'app/views/intro.html'
            })
            .when('/latest', {
                controller: 'LatestController',
                templateUrl: 'app/views/latest.html'
            })
            .when('/latest/:stationId', {
                controller: 'LatestController',
                templateUrl: 'app/views/details.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}());
