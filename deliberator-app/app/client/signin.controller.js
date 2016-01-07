(function() {
    'use strict';

    angular
        .module('app.signin')
        .controller('SignInController', SignInController);

    function SignInController($auth,AccountService) {
        // This flag we use to show or hide the button in our HTML.
        var vm = this;
        
        vm.user = {};
        vm.getProfile = function(){};
        vm.authenticate = function(provider) {
        $auth.authenticate(provider)
            .then(function(response) {
                vm.getProfile();
                console.log("SUCCESS");
            })
            .catch(function(response) {
                // Something went wrong.
            });
        };

        vm.isAuthenticated = function(){
            return $auth.isAuthenticated();
        };

        vm.signout = function(){
            $auth.logout();
        };

        vm.getProfile = function(){
            AccountService.getProfile()
                .then(function(response){
                    vm.user = response.data;
                })
                .catch(function(response){
                    console.log("bye");
                });
        };
    }
})();