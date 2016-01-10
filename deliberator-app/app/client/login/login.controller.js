(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    function LoginController($auth,AccountService,$state) {
        var vm = this;

        vm.user = {};
        vm.authenticate = authenticate;
        vm.getProfile = getProfile;
        vm.isAuthenticated = isAuthenticated;

        function authenticate(provider) {
        $auth.authenticate(provider)
            .then(function(response) {
                vm.getProfile();
                console.log("User has been authenticated");
            })
            .catch(function(response) {
                console.log("User has not been authenticated. Something went wrong.");
            });
        };

        function isAuthenticated(){
            return $auth.isAuthenticated();
        };

        function getProfile(){
            AccountService.getProfile()
                .then(function(response){
                    console.log("response:");
                    console.log(response);
                    vm.user = response.data;
                })
                .catch(function(response){
                });
        };
    }
})();