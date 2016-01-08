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
        .state('deliberation', {
          url: "/deliberation",
          templateUrl: "list/list.html",
          controller: 'ListCtrl'
        })
        .state('deliberation.detail', {
          url: "/detail/:candidate_id",
          templateUrl:'detail/detail.html',
          controller: 'DetailCtrl'
        })
        .state('gallery', {
          url: "/gallery",
          templateUrl:'gallery/gallery.html',
          controller: 'GalleryCtrl'
        })
        .state('overview', {
          url: "/overview",
          templateUrl: "overview/overview.html"
        })
    }
})();