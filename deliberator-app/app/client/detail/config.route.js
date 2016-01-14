/**
 * Config
 * @namespace Configs
 */
(function() {
    'use strict';

    angular
        .module('app.detail')
        .config(config);

    /**
     * @namespace config
     * @desc Route config
     * @memberOf Configs
     */
    function config($stateProvider, $urlRouterProvider, $authProvider){
      $stateProvider
        .state('deliberation.detail', {
          url: "/detail/:candidate_id",
          templateUrl:'detail/detail.html',
          controller: 'DetailCtrl',
          controllerAs: 'detail',
          resolve: {redirectIfNotAuthenticated: _redirectIfNotAuthenticated}
        })
    }

    function _redirectIfNotAuthenticated($q, $state, $auth, $timeout) {
      var defer = $q.defer();
      if($auth.isAuthenticated()) {
        defer.resolve();
      } else {
        $timeout(function(){
          //toaster.error('Sorry you need to login first');
          $state.go('login');
        });
        defer.reject();
      }
      return defer.promise;
    }
})();