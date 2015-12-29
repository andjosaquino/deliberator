'use strict';

//Returns a random value between 0 and n-1 inclusive
var random_num = function(n){
	return Math.floor(Math.random() * n);
}

var detail_view = angular.module('DetailView', ['ngRoute', 'Deliberator', 'pdf']);

detail_view.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:candidate_id', {
    templateUrl: 'detail_view/detail_view.html',
    controller: 'DetailCtrl'
  });
}]);


detail_view.controller('DetailCtrl', ['$scope', '$routeParams', 'delibService', 'pdfDelegate', '$log',
  function($scope, $routeParams, delibService, pdfDelegate, $log) {
    delibService.getData(function(response){
    	$scope.candidates = response.data.candidates;
    	$scope.candidate = response.data.candidates[$routeParams.candidate_id];
    	var left = $scope.candidates.length;
		var next_id = random_num(left);
		while(next_id == $routeParams.candidate_id){
			next_id = random_num(left);
		}
		$scope.next = next_id;

		pdfDelegate.$getByHandle('resume-container').load('data/resumes/'+$scope.candidate.resume);
    });
}]);
