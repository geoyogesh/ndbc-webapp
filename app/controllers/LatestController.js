(function () {
    var LatestController = function ($scope, $routeParams) {
        $scope.stationId = $routeParams.stationId;
        $scope.message = "Not Init";

        function init() {
            //Get the bouy data
            $scope.message = "Init";
        }
        init();

        $scope.showAlert = function (propName) {
            alert('this is simple messagebox');
        };

        $scope.bouyData = [];
    };

    LatestController.$inject = [$scope, $routeParams];

    angular.module('ndbcApp')
        .controller('LatestController', LatestController);

}());
