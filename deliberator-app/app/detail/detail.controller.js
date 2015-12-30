(function() {
  'use strict';

    angular
        .module('DetailView', ['ngRoute', 'Deliberator', 'pdf'])
        .controller('DetailCtrl', DetailCtrl);

    function DetailCtrl($routeParams, delibService, pdfDelegate) {
        var vm = this;

        /* Bindable Members here */
        vm.candidates = [];
        vm.candidate = {};
        vm.reject = delibService.reject;
        vm.accept = delibService.accept;

        delibService.getData(function(response){
            vm.candidates = response.data.candidates;
            vm.candidate = vm.candidates[$routeParams.candidate_id];
            pdfDelegate.$getByHandle('resume-container').load('data/resumes/'+vm.candidate.resume);
        });
    }
})();

