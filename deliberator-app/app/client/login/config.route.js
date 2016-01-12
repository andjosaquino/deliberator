/**
 * Config
 * @namespace Configs
 */
(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /**
     * @namespace config
     * @desc Route config
     * @memberOf Configs
     */
    function config($stateProvider, $urlRouterProvider, $authProvider){
      $urlRouterProvider.otherwise("/login");
      $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: "login/login.html",
          resolve: {
            skipIfAuthenticated: _skipIfAuthenticated
          }
        })
    }

    function _skipIfAuthenticated($q, $state, $auth, toaster) {
        var defer = $q.defer();
        if($auth.isAuthenticated()) {
          defer.reject(); /* (1) */
        } else {
          defer.resolve(); /* (2) */
        }
        return defer.promise;
    }
})();