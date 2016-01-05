/**
 * Main app
 */
(function() {
    'use strict';

    angular.module('app', [
            
            /* Shared modules */
            'app.core',
            'myApp.version',

            /* Feature Areas */
            'app.list',
            'app.detail',
            'app.gallery',

            'ngRoute',
            'ui.router'
    ])
})();