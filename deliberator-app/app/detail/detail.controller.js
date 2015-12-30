/**
 * Detail View Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

    angular
        .module('app.detail', ['app.core', 'pdf'])
        .controller('DetailCtrl', DetailCtrl);

    /**
     * @namespace DetailCtrl
     * @desc Controller for Detail View
     * @memberOf Controllers
     */
    function DetailCtrl($routeParams, candidateService, pdfDelegate) {
        var vm = this;

        /* Bindable Members here */
        vm.candidates = [];
        vm.candidate = {};
        vm.reject = candidateService.reject;
        vm.accept = candidateService.accept;

        candidateService.getData(function(response){
            vm.candidates = response.data.candidates;
            vm.candidate = vm.candidates[$routeParams.candidate_id];
            pdfDelegate.$getByHandle('resume-container').load('data/resumes/'+vm.candidate.resume);
        });
    }
})();

