(function () {
    var LatestController = function ($scope, $routeParams, $interval, latestobsFactory) {
        $scope.stationId = $routeParams.stationId;
        console.log($scope.stationId);
        $scope.message = "Not Init";

        $scope.bouyData = [];
        $scope.selectedBouyData = undefined;
        $scope.updatedOn = '';

        function Station(x) {
            "use strict";

            var y = x.split(' '),
                inputarray = [];
            y.forEach(function (entry) {
                if (entry) {
                    inputarray.push(entry);
                }
            });

            this.stationId = inputarray[0];
            this.lat = inputarray[1];
            this.lon = inputarray[2];
            this.yyyy = inputarray[3];
            this.mm = inputarray[4];
            this.dd = inputarray[5];
            this.hh = inputarray[6];
            this.min = inputarray[7];
            this.WDIR = inputarray[8];
            this.WSPD = inputarray[9];
            this.GST = inputarray[10];
            this.WVHT = inputarray[11];
            this.DPD = inputarray[12];
            this.APD = inputarray[13];
            this.MWD = inputarray[14];
            this.PRES = inputarray[15];
            this.PTDY = inputarray[16];
            this.ATMP = inputarray[17];
            this.WTMP = inputarray[18];
            this.DEWP = inputarray[19];
            this.VIS = inputarray[20];
            this.TIDE = inputarray[21];

        }

        function init() {
            latestobsFactory.getLatestObs()
                .success(function (obs) {
                    $scope.bouyData = [];
                    x = obs.split('\n');
                    for (i = 2; i < x.length; i = i + 1) {
                        $scope.bouyData.push(new Station(x[i]));
                    }
                    $scope.updatedOn = new Date();

                    if (typeof $routeParams.stationId !== "undefined") {
                        for (i = 0; i < $scope.bouyData.length; i = i + 1) {
                            if ($scope.bouyData[i].stationId == $routeParams.stationId) {
                                $scope.selectedBouyData = $scope.bouyData[i];
                                break;
                            }
                        }
                    }
                })
                .error(function (data, status, headers, config) {
                    //TODO handle error
                });

        }
        init();

        stop = $interval(function () {
            init();
        }, 10000);

        $scope.stopReferesh = function () {
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        };
        /*
        $scope.$on('$destroy', function () {
            // Make sure that the interval is destroyed too
            $scope.stopReferesh();
        });
        */
        $scope.showAlert = function (propName) {
            alert('this is simple messagebox');
        };
    };

    LatestController.$inject = ['$scope', '$routeParams', '$interval', 'latestobsFactory'];

    angular.module('ndbcApp')
        .controller('LatestController', LatestController);

}());
