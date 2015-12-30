(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
            
            /* Shared modules */
            'app.core',
            'myApp.version',

            /* Feature Areas */
            'app.list',
            'app.detail',

            'ngRoute'
    ])
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