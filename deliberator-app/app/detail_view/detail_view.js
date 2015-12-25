'use strict';

var detail_view = angular.module('DetailView', ['ngRoute']);

detail_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:candidate_id', {
    templateUrl: 'detail_view/detail_view.html',
    controller: 'DetailCtrl'
  });
}])

detail_view.controller('DetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('candidates.json').success(function(data){
		$scope.candidate = data.candidates[$routeParams.candidate_id];
	});
}]);