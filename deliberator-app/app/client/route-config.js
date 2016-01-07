// /**
//  * Config
//  * @namespace Configs
//  */
// (function() {
//     'use strict';

//     angular
//         .module('app')
//         .config(config);

<<<<<<< HEAD
    /**
     * @namespace config
     * @desc Route config
     * @memberOf Configs
     */
    function config($stateProvider, $urlRouterProvider){
<<<<<<< HEAD
      //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/selection");
      //
      // Now set up the states
=======
      $urlRouterProvider.otherwise("/overview");
>>>>>>> 17745f3... awidjaojd
      $stateProvider
        .state('deliberation', {
          url: "/deliberation",
          templateUrl: "list/list.html",
          controller: 'ListCtrl',
          controllerAs: 'list'
        })
        .state('deliberation.detail', {
          url: "/detail/:candidate_id",
          templateUrl:'detail/detail.html',
          controller: 'DetailCtrl',
          controllerAs: 'detail'
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
=======
//     /**
//      * @namespace config
//      * @desc Route config
//      * @memberOf Configs
//      */
//     function config($stateProvider, $urlRouterProvider){
//       $urlRouterProvider.otherwise("/overview");
//       $stateProvider
//         .state('deliberation', {
//           url: "/deliberation",
//           templateUrl: "list/list.html",
//           controller: 'ListCtrl'
//         })
//         .state('deliberation.detail', {
//           url: "/detail/:candidate_id",
//           templateUrl:'detail/detail.html',
//           controller: 'DetailCtrl'
//         })
//         .state('gallery', {
//           url: "/gallery",
//           templateUrl:'gallery/gallery.html',
//           controller: 'GalleryCtrl'
//         })
//         .state('overview', {
//           url: "/overview",
//           templateUrl: "overview/overview.html"
//         })
//     }
// })();
>>>>>>> 78b61f5... refactored routes into specific modules
