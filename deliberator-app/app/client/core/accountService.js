/**
 * CandidateService Factory
 * @namespace Factories
 */
(function() {
    angular
        .module('app.core')
        .factory('AccountService', AccountService);

    /**
     * @namespace AccountService
     * @desc Grabs account information from database.
     * @memberOf Factories
     */
    function AccountService($http){
        var service = {
            getProfile: getProfile,
            updateProfile: updateProfile
        };
        return service;
        ///////////

        function getProfile(){
            return $http.get('/api/me');
        };

        function updateProfile(profileData) {
            return $http.put('/api/me', profileData);
        };
    }
})();