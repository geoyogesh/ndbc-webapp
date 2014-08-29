(function () {
    var app = angular.module('ndbcApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IntroController',
                templateUrl: '/app/views/intro.html'
            })
            .when('/latest/:stationId', {
                controller: 'LatestController',
                templateUrl: '/app/views/latest.html'
            })
            .when('/history/:stationId', {
                controller: 'HistoryController',
                templateUrl: '/app/views/history.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}());
