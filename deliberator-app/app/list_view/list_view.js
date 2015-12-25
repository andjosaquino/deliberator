'use strict';

var list_view = angular.module('ListView', ['ngRoute']);

list_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list_view', {
    templateUrl: 'list_view/list_view.html',
    controller: 'ListCtrl'
  });
}])

list_view.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('candidates.json').success(function(data){
		$scope.candidates = data.candidates;
	});
}]);