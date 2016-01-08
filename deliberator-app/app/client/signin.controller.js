(function() {
    'use strict';

    angular
        .module('app.signin')
        .controller('SignInController', SignInController);

    function SignInController($auth,AccountService) {
        var vm = this;

        vm.user = {};
        vm.getProfile = getProfile;
        vm.authenticate = authenticate;
        vm.logout = logout;
        vm.isAuthenticated = isAuthenticated;

        function authenticate(provider) {
        $auth.authenticate(provider)
            .then(function(response) {
                vm.getProfile();
                console.log("SUCCESS");
            })
            .catch(function(response) {
                // Something went wrong.
            });
        };

        function isAuthenticated(){
            return $auth.isAuthenticated();
        };

        function logout(){
            $auth.logout();
        };

        function getProfile(){
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