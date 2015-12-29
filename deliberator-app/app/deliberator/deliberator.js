
var decision = {}

var deliberator = angular.module('Deliberator', ['ngRoute', 'pdf']);

deliberator.service('delibService', ['$http', 'pdfDelegate', '$log', function($http, pdfDelegate, $log){
	this.getData = function(callback){
		$http.get('data/candidates.json').then(callback);
	};

	this.roundStatus = { UNDECIDED: -1, REJECT: 0, ACCEPT: 1 };

	this.reject = function(candidate){ console.log("set candidate to a no"); };

	this.accept = function(candidate){ console.log("set candidate to a yes"); };

	this.finishRound = function(candidates){ console.log("Round has finished"); };

}]);