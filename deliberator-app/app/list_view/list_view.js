'use strict';

var list_view = angular.module('ListView', ['ngRoute', 'Deliberator']);

list_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list-view', {
    templateUrl: 'list_view/list_view.html',
    controller: 'ListCtrl'
  });
}])

list_view.controller('ListCtrl', ['$scope', 'delibService', function($scope, delibService) {
	delibService.getData(function(response){
		$scope.candidates = response.data.candidates;
	});

	$scope.finishRound = delibService.finishRound;
}]);