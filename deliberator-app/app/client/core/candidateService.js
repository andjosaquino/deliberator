/**
 * CandidateService Factory
 * @namespace Factories
 */
(function() {
    angular
        .module('app.core',[])
        .factory('candidateService', candidateService);

    /**
     * @namespace CandidateService
     * @desc Grabs candidate information from database.
     * @memberOf Factories
     */
    function candidateService($http){
        var service = {
            getData: getData,
            reject: reject,
            accept: accept
        };
        return service;

        ///////////

        var UNDECIDED = -1;
        var REJECTED  = 0;
        var ACCEPTED  = 1;

        /**
         * @name getData
         * @desc Gets data from candidate.json
         * @memberOf Factories.CandidateService
         */
        function getData(){
            return $http.get('data/candidates.json')
                .then(getCandidatesComplete)
                .catch(getCandidatesFailed);

            function getCandidatesComplete(response) {
                return response.data;
            }

            function getCandidatesFailed(error) {
                console.log("Failed: getCandidates");
            }
        };

        /**
         * @name reject
         * @desc removes candidate from further rounds.
         * @param {Object} candidate
         * @memberOf Factories.CandidateService
         */
        function reject(candidate){
            candidate.roundStatus = REJECTED;
            //return $http.put('data/candidates.json', {"candidates": [candidate]});
        };

        /**
         * @name accept
         * @desc moves candidate to the next round.
         * @param {Object} candidate
         * @memberOf Factories.CandidateService
         */
        function accept(candidate){
            console.log("Accepted Candidate");
        };
    }
})();