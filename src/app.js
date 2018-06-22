import angular from 'angular';

angular.module('fridgeAPI', [])
  .controller('MainCtrl', function($scope){
    $scope.test = 'fridge';
  });
