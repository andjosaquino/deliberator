(function() {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController);

    function HeaderController($auth,$state,$rootScope,AccountService,toaster) {
        var vm = this;

        vm.user = {};
        vm.getProfile = getProfile;
        vm.authenticate = authenticate;
        vm.logout = logout;
        vm.isAuthenticated = isAuthenticated;

        vm.getProfile();

        function authenticate(provider) {
            $auth.authenticate(provider)
                .then(function(response) {
                    $state.go('overview');
                    // toaster.success('You have successfully signed in with ' + provider + '!');
                })
                .catch(function(response) {
                    console.log("User has not been authenticated. Something went wrong.");
                });
        };

        function isAuthenticated(){
            return $auth.isAuthenticated();
        };

        function logout(){
            $auth.logout();
            $state.go('login');
        };

        function getProfile(){
            AccountService.getProfile()
                .success(function(data){
                    vm.user = data;
                    $rootScope.user = data;
                    console.log($rootScope.user);
                })
        };
    }
})();