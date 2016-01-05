/**
 * Config
 * @namespace Configs
 */
(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    // /**
    //  * @namespace config
    //  * @desc Route config
    //  * @memberOf Configs
    //  */
    // function config($routeProvider) {
    //     $routeProvider
    //         .when("/", {
    //             templateUrl: 'detail/detail.html',
    //             controller: 'DetailCtrl'
    //         })
    //         .when("/details/:candidate_id", {
    //             templateUrl: 'detail/detail.html',
    //             controller: 'DetailCtrl',
    //             controllerAs: 'detail'
    //         })
    //         .otherwise({redirectTo: '/'});
    // }

    function config($stateProvider, $urlRouterProvider){
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/selection");
      //
      // Now set up the states
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