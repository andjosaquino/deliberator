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
    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'detail/detail.html',
                controller: 'DetailCtrl'
            })
            .when("/details/:candidate_id", {
                templateUrl: 'detail/detail.html',
                controller: 'DetailCtrl',
                controllerAs: 'detail'
            })
            .otherwise({redirectTo: '/'});
    }
})();