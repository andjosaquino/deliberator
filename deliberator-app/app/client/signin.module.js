/**
 * List Module
 * @namespace Modules
 */
(function() {
    'use strict';

    angular
        .module('app.signin', ['app.core','satellizer'])
        .config(function($authProvider) {

        $authProvider.google({
          clientId: '1028607742514-1hehlp32hv4bhmu4hsvpaclvuucej1kv.apps.googleusercontent.com'
        });

        $authProvider.linkedin({
          clientId: 'LinkedIn Client ID'
        });

      });
})();
