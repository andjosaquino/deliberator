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
      $stateProvider
        .state('overview', {
          url: "/overview",
          templateUrl: "overview/overview.html",
          resolve: {redirectIfNotAuthenticated: _redirectIfNotAuthenticated}
        })
    }

    function _redirectIfNotAuthenticated($q, $state, $auth, $timeout, toaster) {
      var defer = $q.defer();
      if($auth.isAuthenticated()) {
        defer.resolve();
      } else {
        $timeout(function(){
          $state.go('login');
        });
        defer.reject();
      }
      return defer.promise;
    }
})();