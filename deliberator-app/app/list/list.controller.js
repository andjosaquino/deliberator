/**
 * List View Controller
 * @namespace Controller
 */
(function() {
    'use strict';

    angular
        .module('app.list', ['app.core'])
        .controller('ListCtrl', ListCtrl);

    /**
     * @namespace ListCtrl
     * @desc Controller for List View
     * @memberOf Controllers
     */
    function ListCtrl(candidateService){
        var vm = this;
        
        candidateService.getData(function(response){
            vm.candidates = response.data.candidates;
        });
    }
})();
