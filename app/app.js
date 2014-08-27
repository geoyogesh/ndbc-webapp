var app = angular.module('app', ['controller']);

angular.module('controller', []).controller('MainController', function($scope) {
    $scope.val = 'test123';
    $scope.func = function() {
        return "abc" + "def";
    };
});
