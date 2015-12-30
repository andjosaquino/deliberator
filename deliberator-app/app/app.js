(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('myApp', ['ngRoute','myApp.version','ListView','DetailView'])
        .config(['$routeProvider', function($routeProvider) {
          $routeProvider
            .when("/", {
              templateUrl: 'detail/detail.html',
              controller: 'DetailCtrl'
            }).
            when("/details/:candidate_id", {
              templateUrl: 'detail/detail.html',
              controller: 'DetailCtrl'
            })
        }]);
})();