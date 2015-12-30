(function() {
    angular
        .module('app.core',[])
        .factory('candidateService', candidateService);

    function candidateService($http){
        var service = {
            getData: getData,
            reject: reject,
            accept: accept
        };
        return service;

        ///////////

        function getData(callback){
            $http.get('data/candidates.json').then(callback);
        };

        this.roundStatus = { UNDECIDED: -1, REJECT: 0, ACCEPT: 1 };

        function reject(candidate){
            console.log("set candidate to a no");
        };

        function accept(candidate){
            console.log("set candidate to a yes");
        };

    }
})();