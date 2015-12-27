'use strict';

var detail_view = angular.module('DetailView', ['ngRoute', 'Deliberator']);

detail_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:candidate_id', {
    templateUrl: 'detail_view/detail_view.html',
    controller: 'DetailCtrl'
  });
}])

detail_view.controller('DetailCtrl', ['$scope', '$routeParams', 'delib_serv', function($scope, $routeParams, delib_serv) {
	delib_serv.async().success(function(data){
		$scope.candidate = data.candidates[$routeParams.candidate_id];
	});
	console.log($scope.candidate);
	// var next_id = Math.floor(Math.random()*delib_serv.undecided.length);
	// while(next_id === candidate_id){
	// 	next_id = Math.floor(Math.random()*delib_serv.undecided.length);
	// }
	// $scope.next = delib_serv.candidates[next_id]
}]);