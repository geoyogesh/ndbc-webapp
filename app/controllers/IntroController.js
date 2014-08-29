(function () {
    var IntroController = function ($scope) {
        $scope.message = 'xxxxxxxxxxxxxx';

        $scope.showAlert = function (propName) {
            alert('this is simple messagebox');
        };
    };

    IntroController.$inject = ['$scope'];

    angular.module('ndbcApp')
        .controller('IntroController', IntroController);

}());
