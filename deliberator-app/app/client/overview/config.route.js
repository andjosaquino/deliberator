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
    function config($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/overview");
      $stateProvider
        .state('overview', {
          url: "/overview",
          templateUrl: "overview/overview.html"
        })
    }
})();