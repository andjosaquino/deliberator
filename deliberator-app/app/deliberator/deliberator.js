var deliberator = angular.module('Deliberator', ['ngRoute']);

deliberator.service('delib_serv', ['$http', function($http){
	this.num = 3;
	this.async = function(){
		return $http.get('data/candidates.json');
	};
	//this.undecided = this.candidates;
}]);