(function() {
  'use strict';

  angular
    .module('app.cs')
    .component('csHeader', {
      templateUrl: 'app/cs/view/header.html',
      controller:csHeaderController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    csHeaderController.$inject = ['$scope'];
    function csHeaderController(){
      var vm = this;

    }

})();
