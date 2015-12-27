var deliberator = angular.module('Deliberator', ['ngRoute']);

deliberator.service('delib_serv', ['$http', function($http){
	this.async = $http.get('data/candidates.json').then(function(response){
		return { candidates: response.data.candidates, undecided: response.data.candidates };
	});
}]);