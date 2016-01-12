/**
 * Config
 * @namespace Configs
 */
(function() {
    'use strict';

    angular
        .module('app.list')
        .config(config);

    /**
     * @namespace config
     * @desc Route config
     * @memberOf Configs
     */
    function config($stateProvider, $urlRouterProvider, $authProvider){
      $stateProvider
        .state('deliberation', {
          url: "/deliberation",
          templateUrl: "list/list.html",
          controller: 'ListCtrl',
          resolve: {redirectIfNotAuthenticated: _redirectIfNotAuthenticated}
        })
    }

    function _redirectIfNotAuthenticated($q, $state, $auth, $timeout,toaster) {
      var defer = $q.defer();
      if($auth.isAuthenticated()) {
        defer.resolve();
      } else {
        $timeout(function(){
          toaster.error('Sorry you need to login first');
          $state.go('login');
        });
        defer.reject();
      }
      return defer.promise;
    }
})();