/**
 * Config
 * @namespace Configs
 */
(function() {
    'use strict';

    angular
        .module('app.gallery')
        .config(config);

    /**
     * @namespace config
     * @desc Route config
     * @memberOf Configs
     */
    function config($stateProvider, $urlRouterProvider, $authProvider){
      $stateProvider
        .state('gallery', {
          url: "/gallery",
          templateUrl:'gallery/gallery.html',
          controller: 'GalleryCtrl',
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