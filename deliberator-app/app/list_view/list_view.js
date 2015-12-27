'use strict';

var list_view = angular.module('ListView', ['ngRoute', 'Deliberator']);

list_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list-view', {
    templateUrl: 'list_view/list_view.html',
    controller: 'ListCtrl'
  });
}])

list_view.controller('ListCtrl', ['$scope', 'delib_serv', function($scope, delib_serv) {
	delib_serv.async.then(function(data){
		$scope.candidates = data.candidates;
		$scope.undecided = data.undecided;
	});
}]);