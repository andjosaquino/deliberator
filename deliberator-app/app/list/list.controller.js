(function() {
    'use strict';

    angular
        .module('ListView', ['ngRoute', 'Deliberator'])
        .controller('ListCtrl', ListCtrl);

    function ListCtrl(delibService){
        var vm = this;
        
        delibService.getData(function(response){
            vm.candidates = response.data.candidates;
        });
    }
})();
