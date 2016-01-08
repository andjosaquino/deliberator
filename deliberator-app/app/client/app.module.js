/**
 * Main app
 */
(function() {
    'use strict';

    angular.module('app', [
            
            /* Shared modules */
            'app.core',
            'app.header',
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

        $authProvider.facebook({
          clientId: 'Facebook App ID'
        });

        $authProvider.google({
           clientId: '1028607742514-1hehlp32hv4bhmu4hsvpaclvuucej1kv.apps.googleusercontent.com'
        });// Google

        $authProvider.github({
          clientId: 'GitHub Client ID'
        });

        $authProvider.linkedin({
          clientId: 'LinkedIn Client ID'
        });

        $authProvider.instagram({
          clientId: 'Instagram Client ID'
        });

        $authProvider.yahoo({
          clientId: 'Yahoo Client ID / Consumer Key'
        });

        $authProvider.live({
          clientId: 'Microsoft Client ID'
        });

        $authProvider.twitch({
          clientId: 'Twitch Client ID'
        });

        $authProvider.bitbucket({
          clientId: 'Bitbucket Client ID'
        });

        // No additional setup required for Twitter

        $authProvider.oauth2({
          name: 'foursquare',
          url: '/auth/foursquare',
          clientId: 'Foursquare Client ID',
          redirectUri: window.location.origin,
          authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        });

      });
})();