var deliberator = angular.module('Deliberator', ['ngRoute', 'pdf']);

deliberator.service('delibService', ['$http', 'pdfDelegate', '$log', function($http, pdfDelegate, $log){
	this.getData = function(callback){
		$http.get('data/candidates.json').then(callback);
	};
}]);