/**
 * Gallery View Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

    angular
        .module('app.gallery')
        .controller('GalleryCtrl', GalleryCtrl);

    /**
     * @namespace GalleryCtrl
     * @desc Controller for Detail View
     * @memberOf Controllers
     */
    function GalleryCtrl($state,$stateParams,candidateService) {
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

