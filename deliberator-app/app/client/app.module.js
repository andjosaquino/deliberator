/**
 * Main app
 */
(function() {
    'use strict';

    angular.module('app', [
            
            /* Shared modules */
            'app.core',
            'app.header',
            'app.login',
            'myApp.version',

            /* Feature Areas */
            'app.list',
            'app.detail',
            'app.gallery',

            'ngRoute',
            'ui.router',
            'satellizer'
    ])
    .config(function($authProvider) {

        $authProvider.google({
           clientId: '1028607742514-1hehlp32hv4bhmu4hsvpaclvuucej1kv.apps.googleusercontent.com'
        });// Google

        $authProvider.linkedin({
          clientId: 'LinkedIn Client ID'
        });
      })
})();