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
    function config($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('deliberation', {
          url: "/deliberation",
          templateUrl: "list/list.html",
          controller: 'ListCtrl'
        })
    }
})();