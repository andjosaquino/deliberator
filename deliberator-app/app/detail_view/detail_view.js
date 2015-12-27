'use strict';

//Returns a random value between 0 and n-1 inclusive
var random_num = function(n){
	return Math.floor(Math.random() * n);
}

var detail_view = angular.module('DetailView', ['ngRoute', 'Deliberator']);

detail_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:candidate_id', {
    templateUrl: 'detail_view/detail_view.html',
    controller: 'DetailCtrl'
  });
}])

detail_view.controller('DetailCtrl', ['$scope', '$routeParams', 'delib_serv', function($scope, $routeParams, delib_serv) {
	delib_serv.async.then(function(data){
		$scope.candidate = data.candidates[$routeParams.candidate_id];
		var left = data.undecided.length;
		var next_id = random_num(left);
		while(next_id == $routeParams.candidate_id){
			next_id = random_num(left);
		}
		$scope.next = next_id;
	});
	
}]);