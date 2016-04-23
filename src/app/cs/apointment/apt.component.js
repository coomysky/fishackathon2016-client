(function() {
  'use strict';

  angular
    .module('app.cs')
    .component('csApt', {
      templateUrl: 'app/cs/view/apt.html',
      controller:csAptController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    csAptController.$inject = ['$scope','ngDialog'];
    function csAptController($scope, ngDialog){
      var vm = this;
      vm.clickApt = clickApt;
      vm.aptHoverIn = aptHoverIn;
      vm.aptHoverOut = aptHoverOut;
      vm.aptHovered = false;
      console.log(vm.data);

      function clickApt(apt) {
        ngDialog.open({
             template: 'app/cs/view/makeApt.html',
             showClose: false,
             controller: ['$scope', function($scope) {
              $scope.apt = apt;

              //Customize ngDialogClose button
              $scope.ngDialogClose = function() {
                ngDialog.closeAll();
              };

              //Customize createApt button
              $scope.createApt = function() {
                console.log('createApt clicked');
                //Do stuff here like ajax when succeed close dialog
                $scope.ngDialogClose();
              };
             }]
         });
      }

      function aptHoverIn() {
        vm.aptHovered = true;
      }

      function aptHoverOut() {
        vm.aptHovered = false;
      }
    }

})();
