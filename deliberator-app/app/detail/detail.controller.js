/**
 * Detail View Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

    angular
        .module('app.detail')
        .controller('DetailCtrl', DetailCtrl);

    /**
     * @namespace DetailCtrl
     * @desc Controller for Detail View
     * @memberOf Controllers
     */
    function DetailCtrl($stateParams, candidateService, pdfDelegate) {
        var vm = this;

        /* Bindable Members here */
        vm.candidate = {};
        vm.reject = candidateService.reject;
        vm.accept = candidateService.accept;

        console.log($stateParams.candidate_id);
        getCandidate();

        function getCandidate() {
            return candidateService.getData().then(function(data) {
                vm.candidate = data.candidates[$stateParams.candidate_id-1];;
                pdfDelegate.$getByHandle('resume-container').load('data/resumes/'+vm.candidate.resume);
                return vm.candidate;
            });
        }
    }
})();

