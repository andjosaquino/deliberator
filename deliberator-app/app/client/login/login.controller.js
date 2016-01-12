(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    function LoginController($auth,AccountService,$state) {
        var vm = this;

        vm.user = {};
        vm.authenticate = authenticate;
        vm.isAuthenticated = isAuthenticated;

        function authenticate(provider) {
            $auth.authenticate(provider)
                .then(function(response){
                    checkPermission(response);
                })
                .catch(function(response){
                    catchErrorWithAuth(response);
                });

            //////

            function checkPermission(response){
                AccountService.getProfile()
                    .then(function(response){
                        vm.user = response.data;
                        if(isPermittedByTeam(vm.user.email)){
                            $state.go("overview");
                        }
                        else{
                            logout();
                        }
                    })
                    .catch(function(response){
                        console.log("Could not retreive profile data..");
                    });
            }

            function catchErrorWithAuth(response){
                console.log("User has not been authenticated. Something went wrong.");
            }
        };

        function isAuthenticated(){
            return $auth.isAuthenticated();
        };

        function isPermittedByTeam(email){
            var validEmails = ["tjs323@cornell.edu","aja255@cornell.edu"];
            var email = vm.user.email;
            return isAuthenticated() && validEmails.indexOf(email) > -1;
        };

        function logout(){
            $auth.logout();
            $state.go('login');
        };
    }
})();