(function() {
    'use strict';

    angular
        .module('app.list', ['app.core'])
        .controller('ListCtrl', ListCtrl);

    function ListCtrl(candidateService){
        var vm = this;
        
        candidateService.getData(function(response){
            vm.candidates = response.data.candidates;
        });
    }
})();
