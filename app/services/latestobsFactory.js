(function(){
   var latestobsFactory = function($http){
       var obs=[];

       var factory  = {};
       factory.getLatestObs = function()
       {
         return $http.get('data/latest_obs.txt');
       };

       return factory;
   };

    latestobsFactory.$inject = ['$http'];

    angular.module('ndbcApp').factory('latestobsFactory',latestobsFactory);
}());
