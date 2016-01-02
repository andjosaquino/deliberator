/**
 * List View Controller
 * @namespace Controller
 */
(function() {
    'use strict';

    angular
        .module('app.list')
        .controller('ListCtrl', ListCtrl);

    /**
     * @namespace ListCtrl
     * @desc Controller for List View
     * @memberOf Controllers
     */
    function ListCtrl($state,$stateParams,candidateService){
        var vm = this;
        
        vm.candidates = [];
        vm.$stateParams = $stateParams;

        getData();

        function getData() {
            return candidateService.getData().then(function(data) {
                vm.candidates = data.candidates;
                return vm.candidates;
            });
        }
    }
})();
