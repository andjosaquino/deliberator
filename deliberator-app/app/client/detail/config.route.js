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
    function config($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('deliberation.detail', {
          url: "/detail/:candidate_id",
          templateUrl:'detail/detail.html',
          controller: 'DetailCtrl'
        })
    }
})();