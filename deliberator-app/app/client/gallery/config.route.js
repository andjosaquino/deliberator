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
    function config($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('gallery', {
          url: "/gallery",
          templateUrl:'gallery/gallery.html',
          controller: 'GalleryCtrl'
        })
    }
})();